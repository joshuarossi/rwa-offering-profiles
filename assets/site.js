/* Shared behaviour for offering profiles. Reads window.PROFILE (set per token). */
(function(){
  const P = window.PROFILE || {};
  const $ = (s,el=document)=>el.querySelector(s);
  const $$ = (s,el=document)=>Array.from(el.querySelectorAll(s));
  const fmt = (n,d=2)=>n.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});

  /* seeded PRNG so every visitor sees the same chart */
  function rng(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296}}

  /* ---------- price chart ---------- */
  function buildSeries(cfg){
    const r=rng(cfg.seed||7), n=cfg.points||365;
    const out=[]; let v=cfg.start;
    const t0=Date.now()-n*86400000;
    for(let i=0;i<n;i++){
      const drift=(cfg.end-cfg.start)/n;
      v += drift + (r()-0.5)*cfg.vol*cfg.start + Math.sin(i/23)*cfg.vol*cfg.start*0.15;
      if(v<cfg.start*0.5) v=cfg.start*0.5;
      out.push({t:t0+i*86400000,v});
    }
    out[out.length-1].v=cfg.end;
    return out;
  }
  function drawChart(canvas,series,color){
    const dpr=window.devicePixelRatio||1;
    const W=canvas.clientWidth, H=canvas.clientHeight||260;
    canvas.width=W*dpr; canvas.height=H*dpr;
    const c=canvas.getContext('2d'); c.scale(dpr,dpr);
    c.clearRect(0,0,W,H);
    const pad={l:56,r:16,t:16,b:28};
    const xs=series.map(p=>p.t), ys=series.map(p=>p.v);
    const minY=Math.min(...ys)*0.995, maxY=Math.max(...ys)*1.005;
    const x=i=>pad.l+(i/(series.length-1))*(W-pad.l-pad.r);
    const y=v=>pad.t+(1-(v-minY)/(maxY-minY))*(H-pad.t-pad.b);
    /* grid */
    c.strokeStyle='rgba(255,255,255,.06)'; c.lineWidth=1; c.fillStyle='#6b7590'; c.font='11px Inter,system-ui,sans-serif'; c.textAlign='right';
    for(let g=0;g<=4;g++){const v=minY+(maxY-minY)*g/4; const yy=y(v);
      c.beginPath(); c.moveTo(pad.l,yy); c.lineTo(W-pad.r,yy); c.stroke();
      c.fillText((P.chart.prefix||'')+fmt(v,P.chart.decimals??2),pad.l-8,yy+4);}
    c.textAlign='center';
    for(let g=0;g<=4;g++){const i=Math.round((series.length-1)*g/4); const d=new Date(xs[i]);
      c.fillText(d.toLocaleDateString('en-US',{month:'short',day:'numeric'}),x(i),H-8);}
    /* area */
    const grad=c.createLinearGradient(0,pad.t,0,H-pad.b);
    grad.addColorStop(0,color+'55'); grad.addColorStop(1,color+'00');
    c.beginPath(); c.moveTo(x(0),y(ys[0]));
    ys.forEach((v,i)=>c.lineTo(x(i),y(v)));
    c.lineTo(x(ys.length-1),H-pad.b); c.lineTo(x(0),H-pad.b); c.closePath();
    c.fillStyle=grad; c.fill();
    /* line */
    c.beginPath(); ys.forEach((v,i)=>i?c.lineTo(x(i),y(v)):c.moveTo(x(i),y(v)));
    c.strokeStyle=color; c.lineWidth=2; c.lineJoin='round'; c.stroke();
    /* last point */
    const lx=x(ys.length-1), ly=y(ys[ys.length-1]);
    c.beginPath(); c.arc(lx,ly,4,0,Math.PI*2); c.fillStyle=color; c.fill();
    c.beginPath(); c.arc(lx,ly,9,0,Math.PI*2); c.fillStyle=color+'33'; c.fill();
  }
  function initChart(){
    const canvas=$('#priceChart'); if(!canvas||!P.chart) return;
    const full=buildSeries(P.chart);
    const color=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||'#d4a53a';
    let range=90;
    const render=()=>{
      const s=full.slice(-range);
      drawChart(canvas,s,color);
      const first=s[0].v,last=s[s.length-1].v,chg=(last-first)/first*100;
      $('#chartPrice').textContent=(P.chart.prefix||'')+fmt(last,P.chart.decimals??2)+(P.chart.suffix||'');
      const el=$('#chartChg'); el.textContent=(chg>=0?'+':'')+fmt(chg,2)+'% ('+range+'d)';
      el.className='chg '+(chg>=0?'up':'down');
    };
    $$('.ranges button').forEach(b=>b.addEventListener('click',()=>{
      $$('.ranges button').forEach(x=>x.classList.remove('active')); b.classList.add('active');
      range=+b.dataset.r; render();
    }));
    render(); window.addEventListener('resize',render);
  }

  /* ---------- allocation bars ---------- */
  function initBars(){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
      $$('.fill',e.target).forEach(f=>f.style.width=f.dataset.w+'%'); io.unobserve(e.target);}}),{threshold:.3});
    $$('.bars').forEach(b=>io.observe(b));
  }

  /* ---------- calculator ---------- */
  function initCalc(){
    const inp=$('#calcAmt'), rng_=$('#calcRange'); if(!inp||!P.calc) return;
    const c=P.calc;
    const upd=v=>{
      v=Math.max(c.min,Math.min(c.max,+v||0)); inp.value=v; rng_.value=v;
      const tokens=v/c.price;
      $('#calcTokens').textContent=fmt(tokens,c.tokenDecimals??2)+' '+P.symbol;
      $('#calcUnits').textContent=c.unitLabel(tokens);
      $('#calcYield').textContent=c.yieldLabel(v);
      $('#calcFee').textContent='$'+fmt(v*c.feePct/100,2);
    };
    inp.addEventListener('input',e=>upd(e.target.value));
    rng_.addEventListener('input',e=>upd(e.target.value));
    upd(c.default);
  }

  /* ---------- FAQ ---------- */
  function initFaq(){
    $$('.q button').forEach(b=>b.addEventListener('click',()=>{
      const q=b.parentElement; const open=q.classList.contains('open');
      $$('.q').forEach(x=>x.classList.remove('open')); if(!open) q.classList.add('open');
    }));
  }

  /* ---------- news + doc modals ---------- */
  function openModal(h){
    let m=$('#modal'); if(!m){m=document.createElement('div');m.id='modal';m.className='modal';
      m.innerHTML='<div class="box"><button class="close" aria-label="Close">×</button><div class="content"></div></div>';
      document.body.appendChild(m);
      m.addEventListener('click',e=>{if(e.target===m||e.target.classList.contains('close')) m.classList.remove('open');});
      document.addEventListener('keydown',e=>{if(e.key==='Escape') m.classList.remove('open');});
    }
    $('.content',m).innerHTML=h; m.classList.add('open'); $('.box',m).scrollTop=0;
  }
  function initNews(){
    $$('.article').forEach(a=>a.addEventListener('click',()=>{
      const i=+a.dataset.i, n=P.news[i];
      openModal(`<h3>${n.title}</h3><div class="meta">${n.source} · ${n.date}</div>${n.body.map(p=>`<p>${p}</p>`).join('')}<p style="font-size:12px;color:var(--dim)">Illustrative article prepared for demonstration purposes. Not a real publication.</p>`);
    }));
    $$('.doc').forEach(d=>d.addEventListener('click',e=>{
      e.preventDefault(); const i=+d.dataset.i, doc=P.docs[i];
      openModal(`<h3>${doc.name}</h3><div class="meta">${doc.type} · ${doc.date} · ${doc.pages} pages</div>${doc.summary.map(p=>`<p>${p}</p>`).join('')}<p style="font-size:12px;color:var(--dim)">Document summary shown for demonstration. Full document available to verified investors through the issuer's data room.</p>`);
    }));
  }

  /* ---------- nav + reveal ---------- */
  function initNav(){
    const links=$$('.nav a'); const secs=links.map(l=>$(l.getAttribute('href'))).filter(Boolean);
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
      links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-40% 0px -55% 0px'});
    secs.forEach(s=>io.observe(s));
    const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target);}}),{threshold:.08});
    $$('.reveal').forEach(el=>ro.observe(el));
  }

  /* ---------- live-ish ticker ---------- */
  function initTicker(){
    const el=$('#liveNav'); if(!el||!P.chart) return;
    let v=P.chart.end; const r=rng(99);
    setInterval(()=>{v+= (r()-0.5)*P.chart.end*0.0004; el.textContent=(P.chart.prefix||'')+fmt(v,P.chart.decimals??2);},2500);
  }

  document.addEventListener('DOMContentLoaded',()=>{initChart();initBars();initCalc();initFaq();initNews();initNav();initTicker();});
})();
