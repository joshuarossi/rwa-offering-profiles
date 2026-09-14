// Static site generator: src/tokens/*.js -> <slug>/index.html
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const ICONS={
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></svg>',
  vault:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 8v1M12 15v1M8 12h1M15 12h1"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
  coins:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c3 3.5 3 16.5 0 20M12 2c-3 3.5-3 16.5 0 20"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20c0-9 5-15 16-16-1 11-7 16-16 16z"/><path d="M4 20c4-5 8-8 12-10"/></svg>',
  scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M3 7h18M5 7l-3 7a4 4 0 008 0zM19 7l-3 7a4 4 0 008 0z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
  warn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/></svg>',
};
function render(T){
  const nav=[['#overview','Overview'],['#asset','The Asset'],['#performance','Performance'],['#terms','Offering Terms'],['#documents','Documents'],['#news','News'],['#faq','FAQ'],['#risks','Risk Factors']];
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(T.name)} (${T.symbol}) — Offering Profile</title>
<meta name="description" content="${esc(T.tagline)}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/site.css">
<style>:root{--accent:${T.accent};--accent2:${T.accent2};--accent-rgb:${T.accentRgb}}</style>
</head><body>
<header class="topbar"><div class="wrap">
  <div class="brand"><span class="sym">${T.symbol}</span><span>${esc(T.name)}</span></div>
  <nav class="nav">${nav.map(([h,l])=>`<a href="${h}">${l}</a>`).join('')}</nav>
</div></header>

<div class="hero"><div class="hero-bg"></div><div class="wrap">
  <div>
    <div class="eyebrow"><span class="dot"></span>${esc(T.status)}</div>
    <h1>${esc(T.name)}<small>${esc(T.tagline)}</small></h1>
    <p class="lede">${esc(T.lede)}</p>
    <div class="cta"><a class="btn btn-primary" href="#terms">View Offering Terms</a><a class="btn btn-ghost" href="#documents">Read the Prospectus</a></div>
  </div>
  <div class="hero-img"><img src="${T.image}" alt="${esc(T.name)} artwork"></div>
</div></div>

<div class="wrap"><div class="stats">
${T.stats.map(s=>`  <div class="stat"><div class="k">${esc(s.k)}</div><div class="v ${s.cls||''}">${esc(s.v)}</div><div class="s">${esc(s.s||'')}</div></div>`).join('\n')}
</div></div>

<section id="overview"><div class="wrap">
  <h2>Overview</h2><p class="sub">${esc(T.overview.sub)}</p>
  <div class="grid g2">
    <div class="prose reveal">${T.overview.body.map(p=>`<p>${p}</p>`).join('')}
      <div class="badges" style="margin-top:8px">${T.overview.badges.map(b=>`<span class="badge"><i></i>${esc(b)}</span>`).join('')}</div>
    </div>
    <div class="grid" style="gap:14px">
      ${T.overview.pillars.map(p=>`<div class="card reveal"><h3><span class="icon">${ICONS[p.icon]}</span>${esc(p.t)}</h3><p style="margin:0;font-size:14.5px">${esc(p.d)}</p></div>`).join('')}
    </div>
  </div>
</div></section>

<section id="asset"><div class="wrap">
  <h2>${esc(T.asset.title)}</h2><p class="sub">${esc(T.asset.sub)}</p>
  <div class="grid g2">
    <div class="card reveal"><h3>Asset Specification</h3><table class="kv">${T.asset.spec.map(([k,v])=>`<tr><td>${esc(k)}</td><td>${v}</td></tr>`).join('')}</table></div>
    <div>
      <div class="card reveal" style="margin-bottom:20px"><h3>${esc(T.asset.allocTitle)}</h3><div class="bars">${T.asset.alloc.map(([l,p])=>`<div class="bar"><span>${esc(l)}</span><div class="track"><div class="fill" data-w="${p}"></div></div><span class="pct">${p}%</span></div>`).join('')}</div></div>
      <div class="card reveal"><h3>${esc(T.asset.custodyTitle)}</h3>${T.asset.custody.map(p=>`<p style="font-size:14.5px">${p}</p>`).join('')}</div>
    </div>
  </div>
</div></section>

<section id="performance"><div class="wrap">
  <h2>Performance</h2><p class="sub">${esc(T.perf.sub)}</p>
  <div class="grid g2" style="grid-template-columns:1.6fr 1fr">
    <div class="chart-wrap reveal">
      <div class="chart-head"><div><div style="font-size:12px;color:var(--dim);font-weight:600;letter-spacing:1px;text-transform:uppercase">${esc(T.perf.label)}</div><div class="big" id="chartPrice">—</div><div class="chg" id="chartChg">—</div></div>
      <div class="ranges"><button data-r="30">1M</button><button data-r="90" class="active">3M</button><button data-r="180">6M</button><button data-r="365">1Y</button></div></div>
      <canvas id="priceChart" height="260"></canvas>
      <div class="chart-note">${esc(T.perf.note)}</div>
    </div>
    <div class="grid" style="gap:14px">
      ${T.perf.metrics.map(m=>`<div class="stat reveal"><div class="k">${esc(m.k)}</div><div class="v ${m.cls||''}">${esc(m.v)}</div><div class="s">${esc(m.s||'')}</div></div>`).join('')}
    </div>
  </div>
</div></section>

<section id="terms"><div class="wrap">
  <h2>Offering Terms</h2><p class="sub">${esc(T.terms.sub)}</p>
  <div class="grid g2">
    <div class="card reveal"><h3>Token Terms</h3><table class="kv">${T.terms.table.map(([k,v])=>`<tr><td>${esc(k)}</td><td>${v}</td></tr>`).join('')}</table></div>
    <div>
      <div class="card reveal" style="margin-bottom:20px"><h3>Investment Calculator</h3>
        <div class="calc">
          <div><label for="calcAmt">Investment amount (USD)</label><input type="number" id="calcAmt" min="${T.calc.min}" max="${T.calc.max}" step="100" value="${T.calc.default}"><input type="range" id="calcRange" min="${T.calc.min}" max="${T.calc.max}" step="100" value="${T.calc.default}" style="margin-top:14px"><p style="font-size:12px;margin-top:10px">${esc(T.calc.note)}</p></div>
          <div class="out"><div class="row"><span>Tokens received</span><b id="calcTokens">—</b></div><div class="row"><span>${esc(T.calc.unitTitle)}</span><b id="calcUnits">—</b></div><div class="row"><span>${esc(T.calc.yieldTitle)}</span><b id="calcYield">—</b></div><div class="row"><span>Platform fee (${T.calc.feePct}%)</span><b id="calcFee">—</b></div></div>
        </div></div>
      <div class="card reveal"><h3>Offering Timeline</h3><div class="timeline">${T.terms.timeline.map(t=>`<div class="tl ${t.state||''}"><div class="d">${esc(t.d)}</div><div class="t">${esc(t.t)}</div><p>${esc(t.p)}</p></div>`).join('')}</div></div>
    </div>
  </div>
</div></section>

<section id="documents"><div class="wrap">
  <h2>Documents &amp; Disclosures</h2><p class="sub">All offering documents are available to prospective investors. Click any document for a summary.</p>
  <div class="docs">${T.docs.map((d,i)=>`<a class="doc reveal" href="#" data-i="${i}"><div class="ft">${d.ext||'PDF'}</div><div><div class="n">${esc(d.name)}</div><div class="m">${esc(d.type)} · ${esc(d.date)} · ${d.pages} pp</div></div></a>`).join('')}</div>
</div></section>

<section id="news"><div class="wrap">
  <h2>News &amp; Updates</h2><p class="sub">Recent coverage and issuer announcements relevant to ${esc(T.symbol)} holders.</p>
  <div class="news">${T.news.map((n,i)=>`<div class="article reveal" data-i="${i}"><div class="thumb" style="background:linear-gradient(135deg,rgba(var(--accent-rgb),${.2+ (i%3)*.15}),var(--card2))"><span>${esc(n.tag)}</span></div><div class="body"><div class="meta">${esc(n.source)} · ${esc(n.date)}</div><h3>${esc(n.title)}</h3><p>${esc(n.summary)}</p><span class="more">Read more →</span></div></div>`).join('')}</div>
</div></section>

<section id="faq"><div class="wrap">
  <h2>Frequently Asked Questions</h2><p class="sub">Common questions from prospective ${esc(T.symbol)} investors.</p>
  <div class="faq">${T.faq.map(([q,a])=>`<div class="q"><button>${esc(q)}</button><div class="a">${a}</div></div>`).join('')}</div>
</div></section>

<section id="risks"><div class="wrap">
  <h2>Risk Factors</h2><p class="sub">An investment in ${esc(T.symbol)} involves a high degree of risk. Prospective investors should carefully consider the following, together with the full risk disclosure in the offering memorandum.</p>
  <div class="risk reveal"><h3>${ICONS.warn} Principal Risks</h3><ol>${T.risks.map(([t,d])=>`<li><b>${esc(t)}.</b> ${esc(d)}</li>`).join('')}</ol></div>
  <div style="margin-top:36px"><h3 style="margin-bottom:16px">Issuer &amp; Service Providers</h3><div class="team">${T.team.map(t=>`<div class="person reveal"><div class="avatar">${esc(t.i)}</div><div class="n">${esc(t.n)}</div><div class="r">${esc(t.r)}</div></div>`).join('')}</div></div>
</div></section>

<footer><div class="wrap">
  <div class="legal">${T.legal}</div>
  <div class="legal"><b>Demonstration notice.</b> ${esc(T.name)} is a fictional token created for product demonstration purposes only. The issuer, assets, figures, documents, news articles, and individuals described on this page do not exist. Nothing here is an offer to sell or a solicitation of an offer to buy any security in any jurisdiction.</div>
  <div class="row"><span>© 2026 ${esc(T.issuer)}. All rights reserved.</span><span>Offering profile v1.0 · Last updated ${esc(T.updated)}</span></div>
</div></footer>
<div class="demo-tag">DEMO</div>
<script>window.PROFILE=${JSON.stringify({symbol:T.symbol,chart:T.chart,news:T.news,docs:T.docs,calc:{min:T.calc.min,max:T.calc.max,default:T.calc.default,price:T.calc.price,feePct:T.calc.feePct,tokenDecimals:T.calc.tokenDecimals}})};
window.PROFILE.calc.unitLabel=${T.calc.unitLabel.toString()};
window.PROFILE.calc.yieldLabel=${T.calc.yieldLabel.toString()};</script>
<script src="../assets/site.js"></script>
</body></html>`;
}
const dir=path.join(__dirname,'tokens');
const index=[];
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.js'))){
  const T=require(path.join(dir,f));
  const out=path.join(root,T.slug); fs.mkdirSync(out,{recursive:true});
  fs.writeFileSync(path.join(out,'index.html'),render(T));
  index.push(T); console.log('built',T.slug);
}
// landing index listing all profiles
fs.writeFileSync(path.join(root,'index.html'),`<!DOCTYPE html><html><head><meta charset="utf-8"><title>RWA Offering Profiles</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="assets/site.css"><style>.list{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;padding:40px 0}.t{background:var(--card);border:1px solid var(--line);border-radius:14px;overflow:hidden;color:var(--text)}.t img{aspect-ratio:4/3;object-fit:cover}.t div{padding:18px}.t:hover{border-color:var(--muted);text-decoration:none}</style></head><body><div class="wrap"><h1 style="padding-top:48px">Real-World Asset Offering Profiles</h1><p>Demonstration offering profiles for tokenized real-world assets.</p><div class="list">${index.map(T=>`<a class="t" href="${T.slug}/index.html"><img src="${T.slug}/${T.image}"><div><b>${T.symbol}</b> · ${esc(T.name)}<p style="margin:6px 0 0;font-size:13.5px">${esc(T.tagline)}</p></div></a>`).join('')}</div></div></body></html>`);
