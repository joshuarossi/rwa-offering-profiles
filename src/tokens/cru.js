module.exports={
slug:'cru-reserve',symbol:'CRU',name:'Cru Reserve Fine Wine',issuer:'Cru Reserve Cellars Ltd.',updated:'September 12, 2026',
tagline:'A curated cellar of investment-grade Bordeaux and Burgundy, stored in bond.',
lede:'CRU tokens represent fractional ownership of a professionally managed collection of 1,180 cases of classified-growth Bordeaux, Grand Cru Burgundy and Super Tuscan wines held under bond in London and Geneva.',
status:'Ongoing Offering · Vintage I',
image:'cru.png',accent:'#c0392b',accent2:'#e8736a',accentRgb:'192,57,43',
stats:[
  {k:'Token NAV',v:'$248.60',s:'per token · Sep 1 valuation',live:true},
  {k:'Tokens Offered',v:'12,000',s:'of 20,000 units'},
  {k:'Cellar',v:'1,180 cases',s:'7,668 bottles · 41 wines'},
  {k:'12M Return',v:'+9.8%',s:'Liv-ex 1000 benchmark +6.1%',cls:'up'},
  {k:'Insured Value',v:'$4.97M',s:'Sep 1, 2026 · full replacement'},
],
overview:{
  sub:'Fine wine is a finite, consumable asset: every bottle drunk makes the rest scarcer. CRU offers diversified exposure to the most liquid segment of the market with professional sourcing, storage and exit.',
  body:[
    'Cru Reserve Fine Wine (CRU) owns a cellar of 1,180 cases assembled by a team with two decades of trade experience. The portfolio is concentrated in wines with deep secondary markets: First and Second Growth Bordeaux from 2005–2020, Grand Cru Burgundy from top domaines, and a satellite allocation to Super Tuscans and Champagne.',
    'Every case is stored in bond at Octavian (Corsham, UK) or Geneva Freeport under the ownership of Cru Reserve Cellars Ltd., which means no duty or VAT is paid until a case leaves bond. Cases are held in original wooden cases with provenance documented from the producer or négociant.',
    'The collection is valued monthly against Liv-ex market prices, and the manager sells cases as they reach their target drinking window or valuation, distributing proceeds or reinvesting in younger vintages according to the cellar plan.'
  ],
  badges:['Stored in bond','Provenance-verified','Monthly Liv-ex valuation','Fully insured','No duty/VAT paid'],
  pillars:[
    {icon:'globe',t:'Blue-Chip Cellar',d:'70% of value in Liv-ex Fine Wine 50 constituents: Lafite, Latour, Margaux, Mouton, Haut-Brion and top Burgundy domaines.'},
    {icon:'vault',t:'Bonded Storage',d:'Temperature 13°C, humidity 70%, vibration-free. Cases are identified by unique barcode and rotation is inspected annually.'},
    {icon:'chart',t:'Active Management',d:'Sell into drinking-window demand, buy en primeur and ex-château releases. Target 8–12% net annual return over the cycle.'},
  ]
},
asset:{
  title:'The Cellar',sub:'Composition of the CRU collection as of the September 1, 2026 monthly valuation.',
  spec:[
    ['Total cases','1,180 (12 × 75cl equivalent)'],['Wines','41 distinct wines · 9 vintages'],['Regions','Bordeaux 58% · Burgundy 27% · Tuscany 9% · Champagne 6%'],['Vintage range','2005 – 2022'],['Storage','Octavian Vaults (Corsham, UK) 74% · Geneva Freeport 26%'],['Condition','OWC, provenance documented; 100% inspected Feb 2026'],['Valuation source','Liv-ex mid-price, monthly'],['Insured value','$4.97M full replacement'],['Top holding','Château Lafite Rothschild 2016 · 84 cases · 9.1%'],['Custodian record','Cru Reserve Cellars Ltd. as owner of record at both bonds'],
  ],
  allocTitle:'Cellar by Region (value)',
  alloc:[['Bordeaux',58],['Burgundy',27],['Tuscany',9],['Champagne',6]],
  custodyTitle:'Ownership & Provenance',
  custody:[
    'Cru Reserve Cellars Ltd., a UK company, is the legal owner of every case. CRU tokens are shares in that company, giving holders indirect ownership of the whole cellar rather than specific cases. The company has no debt and no activity other than owning the wine.',
    'Every case entered the cellar either en primeur via a Bordeaux négociant, directly from the producer, or from a merchant with a documented chain of custody. Cases are photographed at intake and physically inspected each February by an independent wine auditor.'
  ]
},
perf:{
  sub:'CRU NAV is marked monthly to Liv-ex mid-prices. Fine wine has historically shown low correlation to equities with lower volatility than most alternatives.',
  label:'CRU Net Asset Value (USD / token)',note:'Illustrative series for demonstration. NAV = Liv-ex mid-price valuation of the cellar plus cash, less accrued fees, divided by tokens outstanding. Past performance does not indicate future results.',
  metrics:[
    {k:'12M NAV Return',v:'+9.8%',cls:'up',s:'net of fees, illustrative'},{k:'Benchmark',v:'+6.1%',s:'Liv-ex 1000, 12M'},{k:'Volatility',v:'6.4%',s:'annualised, 3Y benchmark'},{k:'Cases Sold (12M)',v:'96',s:'avg 14% above cost'},
  ]
},
chart:{seed:8080,points:365,start:226.4,end:248.6,vol:0.005,prefix:'$',decimals:2},
terms:{
  sub:'Summary of the Vintage I share offering. The Offering Document governs in the event of any inconsistency.',
  table:[
    ['Token','CRU — Cru Reserve Fine Wine ordinary share'],['Underlying','1 / 20,000 share in Cru Reserve Cellars Ltd.'],['Tokens offered','12,000 (Vintage I); 8,000 held by founders and seed investors'],['Issue price','Monthly NAV + 1.5% sourcing charge (Sep: $252.33)'],['Minimum subscription','4 tokens (≈ $1,000)'],['Distributions','Discretionary on case sales; reinvestment default'],['Management fee','1.25% p.a. of NAV; 10% performance fee over 6% hurdle'],['Storage & insurance','Included in management fee'],['Eligible investors','Verified investors; excludes jurisdictions restricting alcohol investment'],['Governing law','England & Wales'],
  ],
  timeline:[
    {d:'2023–2025',t:'Cellar assembled',p:'Founders built the collection across three en primeur campaigns and secondary purchases.',state:'done'},
    {d:'Feb 2026',t:'Full physical audit',p:'Independent inspection of all 1,180 cases; 2 cases downgraded for label condition.',state:'done'},
    {d:'May 2026',t:'Vintage I opens',p:'12,000 tokens offered at NAV plus 1.5%.',state:'done'},
    {d:'Sep 2026',t:'62% subscribed · 2024 en primeur allocation',p:'Proceeds deployed into 2024 Bordeaux en primeur at attractive release prices.',state:'now'},
    {d:'Q4 2026',t:'First case sales distribution',p:'Sale of 2009 and 2010 Bordeaux entering peak drinking windows.'},
    {d:'2027',t:'Vintage II',p:'Optional second raise to expand Burgundy and Champagne allocation.'},
  ]
},
calc:{min:1000,max:500000,default:10000,price:252.33,feePct:0.5,tokenDecimals:2,unitTitle:'Cellar equivalent',yieldTitle:'Annual management fee (1.25%)',note:'September issue price $252.33 (NAV $248.60 + 1.5%).',
  unitLabel:function(t){return (t/20000*1180).toFixed(2)+' cases · '+(t/20000*7668).toFixed(0)+' bottles'},
  yieldLabel:function(v){return '$'+(v*0.0125).toFixed(2)}},
docs:[
  {name:'Offering Document — Vintage I',type:'Primary offering document',date:'May 5, 2026',pages:76,summary:['Describes the offering of up to 12,000 shares in Cru Reserve Cellars Ltd., the cellar, the investment strategy, the manager, fees, valuation and distribution policy, and risk factors.','Investment guidelines: minimum 60% in Liv-ex 1000 constituents; maximum 12% in any single wine; no wine younger than en primeur release.']},
  {name:'Articles of Association',type:'Legal · constitutional',date:'Apr 20, 2026',pages:33,summary:['Constitutional document of Cru Reserve Cellars Ltd. Provides for shareholder approval (75%) of any change to the investment guidelines, manager removal by 50%, and wind-up and liquidation procedures.']},
  {name:'Cellar Inventory & Valuation — September 2026',type:'Monthly valuation',date:'Sep 1, 2026',pages:14,ext:'XLS',summary:['Case-level inventory: wine, vintage, format, bond location, barcode, cost, Liv-ex mid-price and current value. Total valuation $4.97M. Top ten holdings represent 47% of value.']},
  {name:'Independent Cellar Audit Report',type:'Physical inspection',date:'Feb 27, 2026',pages:21,summary:['Wine Owners Ltd. physically inspected 100% of cases at both bonds. All cases present and matched to the inventory. Two cases of 2005 Château Margaux noted with minor label scuffing and revalued at a 4% discount.']},
  {name:'Storage Agreements',type:'Octavian & Geneva Freeport',date:'Apr 28, 2026',pages:18,summary:['Bonded storage agreements confirming Cru Reserve Cellars Ltd. as owner of record, storage conditions, access rights, insurance and the independent auditor\'s inspection rights.']},
  {name:'Insurance Certificate',type:'Hiscox Fine Art & Specie',date:'May 1, 2026',pages:3,summary:['All-risks cover at full replacement value, revalued monthly to Liv-ex prices, including transit between bonds and to auction.']},
  {name:'Fee & Valuation Policy',type:'Disclosure',date:'May 5, 2026',pages:5,summary:['Management fee 1.25% p.a. on NAV, accrued monthly. Performance fee 10% of NAV growth above a 6% annual hurdle with high-water mark. Sourcing charge 1.5% on new subscriptions. Valuation at Liv-ex mid-price; wines without a Liv-ex price use the last three merchant offers.']},
  {name:'Tax Considerations',type:'Investor guidance',date:'May 5, 2026',pages:6,summary:['UK residents: shares are not a wasting asset and gains are subject to CGT. Storage in bond defers UK duty and VAT until removal. Other jurisdictions vary; obtain independent advice.']},
],
news:[
  {tag:'Cellar',source:'Issuer update',date:'Sep 8, 2026',title:'CRU secures allocation of 2024 Bordeaux en primeur at lowest release prices since 2019',summary:'The manager deployed $410,000 of subscription proceeds into First Growth and Right Bank 2024s.',body:['Cru Reserve has completed its 2024 en primeur purchases, securing 68 cases across Lafite, Mouton, Cheval Blanc, Figeac and Pontet-Canet at release prices that were on average 22% below the 2022 campaign.','"The 2024 campaign was the most buyer-friendly in years. Châteaux cut prices to restore demand and we bought the wines we\'d want to hold for a decade," said Head of Cellar Antoine Delacroix.','The cases will arrive in bond in 2027 and are carried at cost until then.']},
  {tag:'Markets',source:'Liv-ex Market Report',date:'Sep 2, 2026',title:'Fine wine market stabilises; Burgundy and Champagne lead August gains',summary:'The Liv-ex 1000 rose 0.8% in August, its third consecutive monthly gain after a two-year correction.',body:['The Liv-ex 1000 index posted its third consecutive monthly rise in August, led by Burgundy 150 (+1.4%) and Champagne 50 (+1.1%). Bordeaux was flat as en primeur activity absorbed trade attention.','Analysts noted that trade volumes have recovered to 2022 levels and that the bid-offer spread on blue-chip wines has narrowed materially.']},
  {tag:'Sales',source:'Issuer update',date:'Aug 14, 2026',title:'Twelve cases of 2010 Château Latour sold at 18% above valuation',summary:'Peak-drinking-window demand from Asian merchants drove the premium.',body:['Cru Reserve sold 12 cases of 2010 Château Latour to a Hong Kong merchant at $9,850 per case, 18% above the Liv-ex mid-price used in the July valuation. Proceeds have been allocated to the 2024 en primeur campaign.']},
  {tag:'Audit',source:'Issuer announcement',date:'Jul 2, 2026',title:'Geneva Freeport allocation expanded; interim inspection confirms condition',summary:'306 cases were transferred to Geneva to diversify storage location and simplify sales to Swiss and Asian buyers.',body:['A further 190 cases were moved from Corsham to Geneva Freeport in June under insured, temperature-controlled transport. Wine Owners Ltd. inspected the cases on arrival and confirmed no change in condition.']},
  {tag:'Offering',source:'Issuer announcement',date:'May 5, 2026',title:'Vintage I opens: 12,000 CRU shares in a $4.6M blue-chip cellar',summary:'Tokens issued monthly at NAV plus a 1.5% sourcing charge.',body:['Cru Reserve Cellars Ltd. has opened Vintage I, offering 12,000 shares representing 60% of the company. Founders and seed investors retain 8,000 shares, subject to a 24-month lock-up.','The cellar was independently audited in February and is valued monthly against Liv-ex market prices.']},
  {tag:'Insight',source:'Cru Reserve Research',date:'Apr 18, 2026',title:'The drinking-window premium: why old wine gets scarcer and dearer',summary:'How consumption drives fine wine returns, and how CRU times its sales.',body:['Unlike most collectibles, fine wine is consumed. A 2010 First Growth had roughly 20,000 cases produced; each year several hundred are opened. As supply shrinks and the wine enters its drinking window, prices for remaining cases tend to rise.','CRU\'s cellar plan sells wines as they enter their peak window, typically 12–18 years after vintage for Bordeaux, and recycles proceeds into young vintages bought at release.']},
],
faq:[
  ['What do I own?','A share in Cru Reserve Cellars Ltd., a UK company whose only assets are the wine, cash and its storage and insurance contracts. Your share gives you exposure to the whole cellar, not to specific cases.'],
  ['Can I take delivery of wine?','No. CRU is an investment vehicle and cases are sold on the market, not distributed in kind. Holders may buy cases from the company at valuation in a periodic offer, subject to duty and VAT on removal from bond.'],
  ['How is NAV calculated?','Monthly, using Liv-ex mid-prices for each wine. Wines without an active Liv-ex market are priced from the last three merchant offers. Cash and accrued fees are included.'],
  ['What are the fees?','1.25% of NAV per year, which covers management, storage and insurance, plus a 10% performance fee above a 6% annual hurdle with a high-water mark. New subscriptions pay 1.5% sourcing.'],
  ['How do I get money out?','Sell tokens on the platform, or receive distributions when the manager sells cases and elects to distribute rather than reinvest. Holders may vote to wind up the company and liquidate the cellar.'],
  ['What about counterfeit wine?','Every case was bought en primeur, direct from the producer, or from a merchant with documented provenance, and is inspected physically each year. Cases showing any inconsistency are removed from the cellar and disputed with the supplier.'],
],
risks:[
  ['Market risk','Fine wine prices can fall. The Liv-ex 1000 declined roughly 15% between late 2022 and mid-2025. Concentration in Bordeaux exposes the cellar to that region\'s cycles.'],
  ['Liquidity risk','Wine is sold case by case through merchants and auctions. Realising the whole cellar could take a year or more, and secondary trading of CRU on the platform may be thin.'],
  ['Valuation risk','Liv-ex mid-prices may not be achievable on sale, particularly for large quantities or wines with few recent trades.'],
  ['Storage and condition risk','Damage, theft, temperature excursion or label deterioration can reduce value. Insurance may not cover loss of value from condition issues.'],
  ['Provenance and authenticity risk','Counterfeit wine exists in the market. Despite due diligence, a case could prove inauthentic and worthless.'],
  ['Regulatory and tax risk','Alcohol, import and investment regulations vary and change. Removal of wine from bond triggers duty and VAT. Tax treatment of the shares varies by jurisdiction.'],
  ['Manager risk','Returns depend on the manager\'s purchase and sale decisions. Performance fees may incentivise risk-taking.'],
],
team:[{i:'AD',n:'Antoine Delacroix',r:'Head of Cellar, Cru Reserve'},{i:'OC',n:'Octavian Vaults',r:'Bonded storage, Corsham UK'},{i:'WO',n:'Wine Owners Ltd.',r:'Independent cellar auditor'},{i:'HX',n:'Hiscox',r:'Fine art & specie insurer'}],
legal:'This offering profile is a summary only and is qualified in its entirety by the Offering Document. Shares in Cru Reserve Cellars Ltd. are not regulated collective investment scheme units and are not covered by any investor compensation scheme. Fine wine prices can fall as well as rise and past performance is not a guide to future returns. Not available where investment in alcohol is restricted.'
};
