module.exports={
slug:'meridian-tbill',symbol:'TBLL',name:'Meridian Treasury Bill Fund',issuer:'Meridian Digital Funds LLC',updated:'September 12, 2026',
tagline:'Tokenized units of a short-duration U.S. Treasury bill portfolio.',
lede:'TBLL is a tokenized share of a Delaware fund holding short-dated U.S. Treasury bills and overnight repo. Yield accrues daily into the token price, with same-day subscriptions and T+1 redemptions.',
status:'Ongoing Offering · Continuous',
image:'tbll.png',accent:'#4f7cff',accent2:'#8fb0ff',accentRgb:'79,124,255',
stats:[
  {k:'NAV per token',v:'$1.0384',s:'accrues daily',live:true},
  {k:'Tokens Offered',v:'50,000,000',s:'continuous issuance'},
  {k:'Fund AUM',v:'$38.2M',s:'as of Sep 11, 2026'},
  {k:'7-Day Yield',v:'4.91%',s:'net of fees, annualised',cls:'up'},
  {k:'Weighted Maturity',v:'34 days',s:'WAM · max 90'},
],
overview:{
  sub:'TBLL brings the cash-management profile of a government money market vehicle to the platform, with daily accrual, transparent holdings and no lock-up.',
  body:[
    'Meridian Treasury Bill Fund (TBLL) invests exclusively in U.S. Treasury bills with 90 days or less to maturity and overnight repurchase agreements collateralised by Treasuries. The fund is structured as a Delaware series LLC, and each TBLL token represents one unit of the series.',
    'Yield is reflected in a rising net asset value rather than distributions, so holders benefit from compounding without needing to reinvest. NAV is struck daily at 4:00 pm ET by the fund administrator and published to the platform.',
    'Holdings are published weekly with CUSIP-level detail. The portfolio is held in segregated custody at a U.S. bank custodian and is never lent or used as collateral for any purpose other than settlement.'
  ],
  badges:['100% U.S. Treasuries & repo','Daily NAV','T+1 redemption','Weekly holdings','Big-four audited'],
  pillars:[
    {icon:'shield',t:'Government Credit Only',d:'No commercial paper, no bank deposits, no corporate credit. Treasuries and Treasury-collateralised repo exclusively.'},
    {icon:'chart',t:'Daily Accrual',d:'Interest income accrues into the token price every business day. No coupon dates, no reinvestment drag.'},
    {icon:'scale',t:'Bankruptcy-Remote Structure',d:'Series assets are legally segregated from the manager and from every other series under the LLC.'},
  ]
},
asset:{
  title:'The Portfolio',sub:'Holdings and characteristics of the fund as of the most recent weekly disclosure.',
  spec:[
    ['Asset class','U.S. Treasury bills; Treasury-backed overnight repo'],['Fund type','Delaware series LLC (Series TB-1)'],['Portfolio size','$38.2 million'],['Number of holdings','11 bills; 2 repo counterparties'],['Weighted average maturity','34 days'],['Maximum single maturity','90 days'],['Credit quality','100% U.S. government'],['Custodian','Northern Meridian Bank, N.A.'],['Administrator','Apex Fund Services (US)'],['Auditor','Deloitte & Touche LLP'],
  ],
  allocTitle:'Maturity Ladder',
  alloc:[['Overnight repo',18],['1–30 days',31],['31–60 days',33],['61–90 days',18]],
  custodyTitle:'Custody & Segregation',
  custody:[
    'Securities are held in a segregated custody account at Northern Meridian Bank, N.A., titled in the name of Series TB-1. The manager has no ability to withdraw assets other than to settle trades and pay disclosed fees.',
    'Repo transactions are conducted under standard MRA documentation with daily margining; collateral is limited to U.S. Treasuries and is held at the custodian, not the counterparty.'
  ]
},
perf:{
  sub:'TBLL NAV rises with accrued interest. The series below is illustrative of a short-bill portfolio at prevailing rates.',
  label:'TBLL Net Asset Value (USD / token)',note:'Illustrative series for demonstration. Yield varies with Treasury bill rates. A fund is not a bank deposit and is not insured by the FDIC.',
  metrics:[
    {k:'7-Day Yield',v:'4.91%',cls:'up',s:'net, annualised'},{k:'30-Day Yield',v:'4.88%',s:'net, annualised'},{k:'Expense Ratio',v:'0.20%',s:'all-in, per annum'},{k:'Days with negative NAV move',v:'0',s:'since inception'},
  ]
},
chart:{seed:4411,points:365,start:0.9903,end:1.0384,vol:0.00012,prefix:'$',decimals:4},
terms:{
  sub:'Summary of the continuous offering of Series TB-1 units. The Private Placement Memorandum governs.',
  table:[
    ['Token','TBLL — Meridian Treasury Bill Fund, Series TB-1'],['Underlying','One unit of Series TB-1; pro-rata interest in the portfolio'],['Tokens offered','Up to 50,000,000 (continuous)'],['Subscription price','Daily NAV (4:00 pm ET)'],['Minimum subscription','$1,000 initial; $100 thereafter'],['Redemption','Daily at NAV; settled T+1 in USD or USDC'],['Management fee','0.20% p.a., accrued daily'],['Eligible investors','Verified investors; U.S. persons must be accredited'],['Lock-up','None'],['Governing law','Delaware, USA'],
  ],
  timeline:[
    {d:'Mar 2026',t:'Series TB-1 launched',p:'Initial $5M seeded by the manager and anchor investors.',state:'done'},
    {d:'May 2026',t:'First audited financials',p:'Deloitte issued an unqualified opinion on the March–April stub period.',state:'done'},
    {d:'Sep 2026',t:'$38M AUM · continuous offering',p:'Weekly holdings disclosure expanded to CUSIP level.',state:'now'},
    {d:'Q4 2026',t:'Intraday NAV',p:'Move from daily to hourly indicative NAV for platform pricing.'},
    {d:'2027',t:'Collateral eligibility',p:'Planned acceptance of TBLL as margin collateral on the platform.'},
  ]
},
calc:{min:1000,max:5000000,default:100000,price:1.0384,feePct:0,tokenDecimals:2,unitTitle:'Share of fund',yieldTitle:'Projected 1Y income (4.91%)',note:'Subscriptions at daily NAV. No subscription or platform fee on TBLL.',
  unitLabel:function(t){return (t*1.0384/38200000*100).toFixed(4)+'% of $38.2M'},
  yieldLabel:function(v){return '$'+(v*0.0491).toFixed(2)}},
docs:[
  {name:'Private Placement Memorandum',type:'Primary offering document',date:'Mar 2, 2026',pages:112,summary:['Describes the continuous offering of Series TB-1 units, the investment objective and restrictions, NAV methodology, subscription and redemption procedures, fees, conflicts of interest, and risk factors.','Investment restrictions: U.S. Treasury bills ≤ 90 days; Treasury-collateralised repo ≤ 7 days; WAM ≤ 60 days; no leverage; no derivatives.']},
  {name:'Series LLC Agreement',type:'Legal · constitutional',date:'Feb 20, 2026',pages:58,summary:['Establishes Meridian Digital Funds LLC as a Delaware series LLC and Series TB-1 as a protected series with segregated assets and liabilities under 6 Del. C. § 18-215.']},
  {name:'Weekly Holdings Report',type:'Portfolio disclosure',date:'Sep 11, 2026',pages:3,ext:'CSV',summary:['CUSIP-level list of all 11 Treasury bills and 2 repo positions with par, market value, maturity date and yield. Total $38.21M; WAM 34 days.']},
  {name:'Audited Financial Statements',type:'Deloitte & Touche LLP',date:'May 28, 2026',pages:22,summary:['Unqualified opinion on the statement of assets and liabilities as of April 30, 2026, and the results of operations for the period from inception. No material weaknesses noted.']},
  {name:'NAV Methodology & Pricing Policy',type:'Operational disclosure',date:'Mar 2, 2026',pages:9,summary:['Bills are valued at amortised cost with daily mark-to-market shadow pricing; deviations exceeding 10 bps trigger a valuation committee review. NAV is struck at 4:00 pm ET and published within 60 minutes.']},
  {name:'Custody Agreement Summary',type:'Disclosure',date:'Mar 2, 2026',pages:6,summary:['Summary of the custody agreement with Northern Meridian Bank, N.A. covering segregation, permitted instructions, reporting and liability standards.']},
  {name:'Form D Notice',type:'Regulatory filing',date:'Mar 9, 2026',pages:4,summary:['Notice of exempt offering of securities under Regulation D Rule 506(c) filed with the SEC. Reproduced for investor convenience.']},
  {name:'Investor Tax Guide',type:'Investor guidance',date:'Mar 2, 2026',pages:7,summary:['Series TB-1 is treated as a partnership for U.S. tax purposes; investors receive a Schedule K-1. Interest on Treasuries is generally exempt from state and local income tax.']},
],
news:[
  {tag:'Portfolio',source:'Issuer announcement',date:'Sep 11, 2026',title:'Weekly holdings: WAM shortened to 34 days ahead of FOMC',summary:'The manager has let longer bills roll off to retain flexibility around the September rate decision.',body:['Meridian Digital Funds published its weekly holdings report for Series TB-1, showing a weighted average maturity of 34 days, down from 41 days the prior week.','Portfolio manager Dana Okafor said the shortening was deliberate: "Into a meeting where the path is uncertain, we\'d rather be short and reinvest at whatever the market gives us than be locked into a 90-day bill."','Fund assets reached $38.2 million, with net inflows of $2.1 million for the week.']},
  {tag:'Markets',source:'Money Market Monitor',date:'Sep 4, 2026',title:'Bill supply steady as Treasury holds auction sizes into quarter-end',summary:'Treasury bill yields have been range-bound near 4.9% as issuance and money-fund demand remain balanced.',body:['Three-month bill yields have traded in a narrow band around 4.9% through late summer as the Treasury kept auction sizes unchanged and money market fund assets remained near record levels.','Tokenised Treasury products have continued to gather assets, with several vehicles now offering same-day subscriptions settled in stablecoins.']},
  {tag:'Product',source:'Issuer announcement',date:'Aug 18, 2026',title:'TBLL redemptions now settle in USDC as well as USD wire',summary:'Investors can choose settlement currency at the time of redemption.',body:['Series TB-1 now offers redemption proceeds in USDC on supported networks in addition to USD by wire. Settlement remains T+1 in both cases.','The manager noted that stablecoin settlement has been the most requested feature since launch and that roughly a third of subscriptions now arrive as USDC.']},
  {tag:'Audit',source:'Issuer announcement',date:'May 28, 2026',title:'Deloitte issues unqualified opinion on inaugural financial statements',summary:'First audit covers the period from inception through April 30, 2026.',body:['Deloitte & Touche LLP has issued an unqualified opinion on the financial statements of Series TB-1 for the stub period ending April 30, 2026. The audit confirmed the existence and valuation of all holdings and the accuracy of the published NAV series.']},
  {tag:'Regulatory',source:'Digital Finance Daily',date:'Apr 22, 2026',title:'Tokenized government funds pass $10B as regulators signal comfort',summary:'Comments from U.S. regulators suggest tokenised money-market-style vehicles fit within existing frameworks.',body:['Assets in tokenised government securities funds have surpassed $10 billion, according to industry trackers, up from under $1 billion two years ago.','Regulators speaking at an industry conference indicated that existing fund and private-placement rules are generally sufficient for these products, provided that custody, valuation and disclosure standards match those of traditional vehicles.']},
  {tag:'Offering',source:'Issuer announcement',date:'Mar 2, 2026',title:'Meridian launches Series TB-1 tokenized Treasury bill fund',summary:'Continuous offering opens with $5M seed capital and daily NAV.',body:['Meridian Digital Funds LLC has launched Series TB-1, a tokenised fund investing exclusively in short-dated U.S. Treasury bills and Treasury-backed repo. Units are offered continuously at daily NAV with T+1 redemption.','The fund was seeded with $5 million from the manager and anchor investors and targets an all-in expense ratio of 0.20%.']},
],
faq:[
  ['Is TBLL a money market fund?','No. TBLL is a private fund that invests in the same instruments as a government money market fund, but it is not registered under the Investment Company Act and does not target a stable $1.00 NAV. NAV floats and rises with accrued interest.'],
  ['How is yield paid?','Yield is not distributed. It accrues into the daily NAV, so the value of each token rises over time. Selling or redeeming tokens realises the accrued income.'],
  ['How quickly can I redeem?','Redemption requests received before 3:00 pm ET are processed at that day\'s NAV and settled the next business day in USD or USDC.'],
  ['What could cause the NAV to fall?','A sharp rise in interest rates can reduce the market value of bills held, though with a 34-day WAM the effect is very small and reverses as bills mature. Fees are accrued daily and reduce NAV by roughly 0.0005% per day.'],
  ['Is my investment insured?','No. TBLL is not a bank deposit and is not insured by the FDIC or any government agency. It is backed only by the securities held in the portfolio.'],
  ['What tax reporting do I receive?','Series TB-1 is a partnership for U.S. tax purposes. Investors receive a Schedule K-1 annually. Non-U.S. investors should consult the tax guide regarding portfolio-interest treatment.'],
],
risks:[
  ['Interest rate risk','A rise in short-term interest rates will reduce the market value of the bills held, and a fall in rates will reduce the yield the fund can earn on reinvestment.'],
  ['Not a bank deposit','An investment in TBLL is not insured or guaranteed by the FDIC or any other government agency. It is possible to lose money.'],
  ['Repo counterparty risk','Although fully collateralised by Treasuries, repo transactions expose the fund to the risk that a counterparty fails to repurchase securities, requiring liquidation of collateral.'],
  ['Liquidity and redemption risk','In periods of market stress the manager may impose redemption gates or in-kind redemptions as permitted by the PPM.'],
  ['Regulatory risk','The regulatory treatment of tokenised private funds is evolving. Changes could require restructuring or limit the availability of TBLL to certain investors.'],
  ['Operational and technology risk','NAV calculation, custody and token record-keeping depend on third parties and on the platform. Errors or outages could delay subscriptions or redemptions.'],
  ['Tax risk','Partnership tax treatment may be unfavourable for some investors and results in K-1 reporting that may be delivered after standard filing deadlines.'],
],
team:[{i:'DO',n:'Dana Okafor',r:'Portfolio Manager, Meridian Digital Funds'},{i:'NM',n:'Northern Meridian Bank, N.A.',r:'Custodian'},{i:'AX',n:'Apex Fund Services (US)',r:'Administrator'},{i:'DT',n:'Deloitte & Touche LLP',r:'Independent auditor'}],
legal:'This offering profile is a summary only and is qualified in its entirety by the Private Placement Memorandum. Series TB-1 units are offered under Rule 506(c) of Regulation D and have not been registered under the Securities Act of 1933. An investment in the fund is not a bank deposit and is not insured by the FDIC. Yield figures are historical and will change.'
};
