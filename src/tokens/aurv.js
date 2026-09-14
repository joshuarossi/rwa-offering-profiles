module.exports={
slug:'aurum-vault',symbol:'AURV',name:'Aurum Vault Gold',issuer:'Aurum Vault Trust AG',updated:'September 12, 2026',
tagline:'One token. One troy ounce of allocated, LBMA Good Delivery gold.',
lede:'AURV gives investors direct, fully-allocated ownership of physical gold bullion held in a Class III vault in Zurich, Switzerland, with monthly independent bar audits and redemption for physical metal.',
status:'Ongoing Offering · Series A',
image:'aurv.png',accent:'#d4a53a',accent2:'#f2cf6e',accentRgb:'212,165,58',
stats:[
  {k:'Reference Price',v:'$3,412.50',s:'per troy oz · LBMA PM fix'},
  {k:'Tokens Offered',v:'2,500',s:'of 10,000 authorised'},
  {k:'Gold in Vault',v:'2,500.31 oz',s:'77.77 kg · 62 bars'},
  {k:'Storage Fee',v:'0.12% p.a.',s:'deducted quarterly'},
  {k:'Subscribed',v:'68%',s:'1,701 tokens · 214 investors',cls:'up'},
],
overview:{
  sub:'AURV is a bearer-style digital receipt for allocated gold. Each token corresponds to one fine troy ounce of gold held in segregated storage under the investor\'s beneficial ownership.',
  body:[
    'Aurum Vault Gold (AURV) is designed for investors who want the store-of-value properties of physical gold without the friction of sourcing, insuring and storing bullion themselves. Each AURV token is backed 1:1 by one fine troy ounce of LBMA Good Delivery gold, held on an <b>allocated</b> basis. The bars are never lent, leased, pledged or rehypothecated.',
    'Bars are held at a Class III high-security vault operated by Helvetia Secure Logistics in the Zurich Freeport. Title to the metal is held by Aurum Vault Trust AG as trustee for token holders, and the bar list (refiner, serial number, gross weight, fineness) is published monthly and reconciled by an independent assayer.',
    'Token holders may redeem any whole 400 oz bar, or 1 oz and 100 g coins and bars for smaller balances, for physical delivery in Switzerland, or sell their tokens on the platform at any time during trading hours.'
  ],
  badges:['100% allocated','LBMA Good Delivery','Monthly bar audit','Lloyd\'s of London insured','Physical redemption'],
  pillars:[
    {icon:'vault',t:'Segregated Vault Storage',d:'Every bar is identified by serial number and assigned to the AURV pool. No fractional-reserve, no metal lending.'},
    {icon:'shield',t:'Independent Assurance',d:'Bureau Veritas conducts an unannounced monthly bar count and quarterly assay. Reports are published to the data room.'},
    {icon:'coins',t:'Redeemable for Metal',d:'Holders of 400 AURV or more may take delivery of a Good Delivery bar. Smaller balances redeem for 1 oz products.'},
  ]
},
asset:{
  title:'The Gold',sub:'Specification of the bullion backing AURV, reconciled to the bar list as of the most recent audit.',
  spec:[
    ['Metal','Gold (Au), minimum fineness 995.0'],['Standard','LBMA Good Delivery, post-2012 responsible sourcing'],['Form','400 oz (12.4 kg) cast bars; 1 kg bars for reserve float'],['Bar count','62 bars (58 × 400 oz, 4 × 1 kg)'],['Total fine weight','2,500.31 troy oz'],['Refiners','Valcambi, Argor-Heraeus, PAMP, Metalor'],['Vault','Helvetia Secure Logistics, Zurich Freeport (Class III)'],['Insurance','All-risk, Lloyd\'s syndicate, full replacement value'],['Last audit','August 29, 2026 · Bureau Veritas · no exceptions'],
  ],
  allocTitle:'Bar Composition by Refiner',
  alloc:[['Valcambi',38],['Argor-Heraeus',27],['PAMP',22],['Metalor',13]],
  custodyTitle:'Custody & Chain of Title',
  custody:[
    'Legal title to the bullion sits with Aurum Vault Trust AG, a Swiss trust company regulated by FINMA, acting solely as trustee for the benefit of AURV holders. The trust deed prohibits encumbrance of the metal.',
    'Movement of any bar in or out of the AURV allocation requires dual authorisation from the trustee and the vault operator and is recorded in the published bar list within one business day.'
  ]
},
perf:{
  sub:'AURV tracks the LBMA PM gold price less accrued storage fees. Historical values below are illustrative.',
  label:'AURV Net Asset Value (USD / token)',note:'Illustrative series for demonstration. NAV = LBMA PM fix × 1 oz − accrued storage. Past performance does not indicate future results.',
  metrics:[
    {k:'1Y Change',v:'+18.4%',cls:'up',s:'gold spot, USD'},{k:'Tracking Error',v:'0.03%',s:'vs LBMA PM fix, 12M'},{k:'Realised Volatility',v:'13.1%',s:'annualised, 90d'},{k:'Total Storage Cost',v:'0.12%',s:'all-in, per annum'},
  ]
},
chart:{seed:1201,points:365,start:2880,end:3412.5,vol:0.012,prefix:'$',decimals:2},
terms:{
  sub:'Summary of the Series A offering. The offering memorandum governs in the event of any inconsistency.',
  table:[
    ['Token','AURV — Aurum Vault Gold'],['Underlying','1 fine troy oz allocated gold per token'],['Tokens offered','2,500 (Series A)'],['Issue price','LBMA PM fix + 0.35% sourcing premium'],['Minimum subscription','1 AURV (≈ $3,425)'],['Storage & insurance','0.12% p.a., accrued daily, settled quarterly in AURV'],['Redemption','Physical: 400 AURV per bar, T+5; Cash: sell on platform'],['Eligible investors','Verified retail and institutional; excludes sanctioned jurisdictions'],['Lock-up','None'],['Governing law','Switzerland'],
  ],
  timeline:[
    {d:'Jun 2026',t:'Trust established, initial 1,000 oz sourced',p:'Aurum Vault Trust AG incorporated; first bars allocated and audited.',state:'done'},
    {d:'Jul 2026',t:'Series A opens',p:'2,500 tokens offered on the platform at a rolling LBMA-linked price.',state:'done'},
    {d:'Sep 2026',t:'68% subscribed',p:'Second tranche of bars delivered to Zurich; monthly audit published.',state:'now'},
    {d:'Q4 2026',t:'Series A closes',p:'Remaining tokens allocated; Series B (5,000 oz) to be announced.'},
    {d:'2027',t:'Physical redemption in Singapore',p:'Second redemption point via partner vault.'},
  ]
},
calc:{min:1000,max:1000000,default:25000,price:3424.44,feePct:0.5,tokenDecimals:3,unitTitle:'Gold equivalent',yieldTitle:'Annual storage cost',note:'Issue price $3,424.44 (fix $3,412.50 + 0.35% premium).',
  unitLabel:function(t){return (t).toFixed(3)+' troy oz · '+(t*31.1035).toFixed(0)+' g'},
  yieldLabel:function(v){return '$'+(v*0.0012).toFixed(2)+' (0.12%)'}},
docs:[
  {name:'Offering Memorandum — Series A',type:'Primary offering document',date:'Jul 1, 2026',pages:84,summary:['The Offering Memorandum sets out the terms of the Series A offering of up to 2,500 AURV tokens, the rights attaching to the tokens, the trust structure, fee schedule, redemption mechanics and a complete statement of risk factors.','Key sections: Summary of the Offering (§1), The Trust and Trustee (§3), Custody Arrangements (§4), Fees and Expenses (§6), Redemption (§7), Risk Factors (§9), Tax Considerations (§11).']},
  {name:'Trust Deed',type:'Legal · constitutional',date:'Jun 18, 2026',pages:41,summary:['Constitutes Aurum Vault Trust AG as trustee holding legal title to the bullion for the exclusive benefit of AURV token holders. Prohibits lending, leasing, pledging or encumbering the metal. Provides for replacement of the trustee by holder vote (66⅔%).']},
  {name:'Monthly Bar List — August 2026',type:'Audit · reconciliation',date:'Aug 29, 2026',pages:6,ext:'XLS',summary:['Full list of 62 bars: refiner, serial number, year, gross weight, fineness and fine ounces. Total fine weight 2,500.31 oz against 2,500 tokens authorised for Series A. No exceptions noted by Bureau Veritas.']},
  {name:'Bureau Veritas Audit Report Q2 2026',type:'Independent assurance',date:'Jul 8, 2026',pages:14,summary:['Unannounced physical count of all AURV-allocated bars performed June 30, 2026. All bars present, seals intact, serials matched to bar list. Random assay of 3 bars confirmed fineness within LBMA tolerance.']},
  {name:'Insurance Certificate',type:'Lloyd\'s of London',date:'Jun 20, 2026',pages:3,summary:['All-risks specie insurance covering the full replacement value of the metal in storage and in transit for redemption. Policy limit USD 25 million, reviewed quarterly against vault value.']},
  {name:'Fee Schedule',type:'Disclosure',date:'Jul 1, 2026',pages:2,summary:['Sourcing premium 0.35% on issue; storage and insurance 0.12% p.a.; platform trading fee per platform schedule; physical redemption handling CHF 250 per bar plus delivery.']},
  {name:'Responsible Sourcing Statement',type:'ESG disclosure',date:'Jun 25, 2026',pages:9,summary:['All bars were refined after 2012 and are compliant with the LBMA Responsible Gold Guidance. No metal sourced from conflict-affected or high-risk areas as defined by OECD guidance.']},
  {name:'Tax Information Sheet',type:'Investor guidance',date:'Jul 1, 2026',pages:5,summary:['General overview of the treatment of AURV in Switzerland, the EU and the United States. Physical gold may be treated as a collectible in some jurisdictions. Investors should obtain independent advice.']},
],
news:[
  {tag:'Audit',source:'Issuer announcement',date:'Sep 2, 2026',title:'August bar audit completed with no exceptions; 62 bars verified',summary:'Bureau Veritas confirms all bars present and sealed following delivery of the second tranche.',body:['Aurum Vault Trust AG today published the August 2026 bar list and the accompanying Bureau Veritas count report. All 62 bars allocated to AURV were physically verified, with seals intact and serial numbers matched to the register.','The count included 18 bars delivered on August 21 as part of the second sourcing tranche, bringing total fine weight to 2,500.31 troy ounces against 2,500 tokens authorised for Series A.','"Our audit cadence is monthly rather than quarterly because we believe holders should never be more than 30 days away from independent proof that the metal is there," said Chief Executive Lena Marchetti.']},
  {tag:'Markets',source:'Bullion Desk Weekly',date:'Aug 26, 2026',title:'Central bank buying keeps gold bid as real yields drift lower',summary:'Official-sector demand and softer real rates have supported bullion through the summer.',body:['Gold has held near record territory through August as central banks continued to add to reserves and real yields eased from their spring highs. Analysts note that tokenised and ETF vehicles have absorbed a growing share of retail flows.','Demand for allocated products in particular has grown, with several issuers reporting that investors increasingly want a bar list rather than an unallocated claim on a bank\'s balance sheet.','Market participants cautioned that gold remains sensitive to shifts in rate expectations and the dollar, and that periods of sharp drawdown remain part of the asset\'s history.']},
  {tag:'Product',source:'Issuer announcement',date:'Aug 12, 2026',title:'Physical redemption now available in 1 oz and 100 g formats',summary:'Holders with fewer than 400 AURV can now take delivery of small-format bars and coins.',body:['Following investor feedback, Aurum Vault Trust AG has expanded physical redemption to include 1 oz Valcambi bars and 100 g PAMP bars for holders with balances below the 400 oz Good Delivery threshold.','Small-format redemption carries a fabrication premium, disclosed at the time of request, and is available for collection at the Zurich vault or insured delivery within Switzerland and the EU.']},
  {tag:'Regulatory',source:'Swiss Financial Press',date:'Jul 30, 2026',title:'FINMA guidance clarifies treatment of allocated-metal tokens',summary:'Updated guidance confirms that tokens conferring direct ownership of segregated bullion are treated as asset tokens.',body:['FINMA has published updated guidance on the classification of tokens representing segregated physical commodities. Tokens that confer a direct, allocated ownership claim on identified bars are classified as asset tokens rather than payment tokens.','Issuers welcomed the clarity, noting that the guidance aligns with structures already used by trust-based gold products.']},
  {tag:'Offering',source:'Issuer announcement',date:'Jul 1, 2026',title:'Series A offering opens: 2,500 troy ounces of allocated Zurich gold',summary:'AURV launches on the platform with an initial 1,000 oz in the vault and a rolling LBMA-linked price.',body:['Aurum Vault Trust AG has opened subscriptions for Series A of AURV, its allocated gold token. Tokens are issued at the LBMA PM fix plus a 0.35% sourcing premium, and each token confers beneficial ownership of one fine troy ounce.','The initial 1,000 oz was allocated and audited prior to launch; additional bars are sourced in tranches as subscriptions are received, with a maximum three-day sourcing window.']},
  {tag:'Insight',source:'Aurum Vault Research',date:'Jun 20, 2026',title:'Allocated vs. unallocated gold: why the distinction matters',summary:'A primer on counterparty risk in bullion products and how AURV is structured.',body:['Unallocated gold is a claim against a bank; the investor is an unsecured creditor. Allocated gold is specific bars, identified by serial number, held in the investor\'s name. In the event of an intermediary\'s insolvency, allocated metal is not part of the estate.','AURV is structured as allocated metal held in trust. The trade-off is cost: allocated storage is more expensive than an unallocated account, which is why AURV charges a storage fee rather than a spread.']},
],
faq:[
  ['What exactly do I own when I hold AURV?','You hold a beneficial interest in one fine troy ounce of specific, serial-numbered gold bars held in trust by Aurum Vault Trust AG. The trust holds legal title on your behalf and may not lend, lease or pledge the metal.'],
  ['How is the token price determined?','Tokens are issued at the LBMA PM gold price plus a 0.35% sourcing premium. On the secondary market, price is set by buyers and sellers on the platform and has historically tracked the fix closely.'],
  ['Can I take physical delivery?','Yes. 400 AURV or more redeems for a Good Delivery bar. Smaller balances can redeem for 1 oz and 100 g products subject to a fabrication premium. Delivery is available at the Zurich vault or by insured courier in Switzerland and the EU.'],
  ['How do I know the gold is really there?','The full bar list is published monthly. Bureau Veritas performs an unannounced count every month and a quarterly assay. All reports are in the Documents section.'],
  ['What are the fees?','0.35% sourcing premium on issue and 0.12% per annum for storage and insurance, deducted quarterly in AURV. Platform trading fees apply per the platform schedule.'],
  ['What happens if the issuer becomes insolvent?','The metal is held in trust and is not an asset of Aurum Vault Trust AG. The trust deed provides for the appointment of a successor trustee by holder vote and, failing that, orderly liquidation with proceeds paid to holders.'],
],
risks:[
  ['Price risk','The price of gold is volatile and can decline significantly over short and long periods. AURV holders bear the full price risk of the underlying metal.'],
  ['Custody and operational risk','Although insured, physical metal is subject to theft, loss, and operational error at the vault. Insurance may not cover all losses in all circumstances.'],
  ['Liquidity risk','There is no assurance that an active secondary market for AURV will develop or be sustained. Physical redemption has minimum sizes and lead times.'],
  ['Trustee and counterparty risk','Holders rely on the trustee, vault operator, auditor and insurer performing their obligations. Failure of any provider could delay access to the metal.'],
  ['Regulatory risk','Changes in the regulation of digital assets, precious metals or trust structures in Switzerland or the investor\'s jurisdiction may adversely affect AURV.'],
  ['Tax risk','Physical gold may be taxed as a collectible or subject to VAT on redemption in some jurisdictions. Investors should obtain independent advice.'],
  ['Technology risk','Token records are maintained on the platform. Loss of access credentials, platform outages or cyber incidents could impair the ability to transfer or redeem tokens.'],
],
team:[{i:'LM',n:'Lena Marchetti',r:'CEO, Aurum Vault Trust AG'},{i:'HS',n:'Helvetia Secure Logistics',r:'Vault operator, Zurich'},{i:'BV',n:'Bureau Veritas',r:'Independent auditor & assayer'},{i:'LL',n:'Lloyd\'s Syndicate 2488',r:'Specie insurer'}],
legal:'This offering profile is a summary only and is qualified in its entirety by the Offering Memorandum. AURV tokens have not been registered under the securities laws of any jurisdiction and are offered only to eligible investors who have completed the platform\'s verification process. Gold prices can fall as well as rise. Storage fees reduce the amount of gold backing each token over time.'
};
