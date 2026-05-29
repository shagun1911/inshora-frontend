/** Detailed content for individual insurance service pages */

export const SERVICE_PAGES = [
  {
    slug: 'auto-insurance',
    id: 'auto',
    icon: 'Car',
    name: 'Auto Insurance',
    badge: 'Personal lines',
    metaTitle: 'Auto Insurance Texas | Compare Car Insurance Quotes | Inshora Group',
    metaDescription:
      'Compare auto insurance from 25+ A-rated carriers in Texas. Liability, collision, comprehensive, UM/UIM, SR-22, and multi-vehicle quotes. Licensed agents since 2013.',
    heroTitle: 'Auto insurance built for Texas drivers',
    heroSubtitle:
      'From daily commutes on I-45 to hail season in Houston — we compare real quotes from 25+ carriers so you get the right limits, deductibles, and price.',
    overview: [
      'Auto insurance protects you financially when you cause injury or property damage, when your vehicle is damaged, or when an uninsured driver hits you. In Texas, liability coverage is legally required — but minimum limits rarely protect you after a serious accident.',
      'Inshora Group is an independent brokerage. We are not tied to one brand like GEICO or Progressive alone — we run your profile through our full carrier panel and explain which company fits your driving record, vehicles, and budget.',
    ],
    benefits: [
      { title: 'Shop 25+ carriers in one place', text: 'One wizard submission, multiple real quotes — not a single-company sales pitch.' },
      { title: 'Licensed agent review', text: 'Every auto quote request is reviewed by a Texas-licensed agent before you bind.' },
      { title: 'SR-22 & high-risk help', text: 'Need an SR-22 or have tickets/accidents? We know which carriers still compete for your business.' },
      { title: 'Multi-vehicle households', text: 'Stacking discounts across cars, teens, and bundled home policies when it actually saves money.' },
    ],
    coverage: [
      { title: 'Bodily injury liability', text: 'Pays for injuries you cause to others. Texas minimum: $30,000 per person / $60,000 per accident — we often recommend 100/300 or higher when affordable.' },
      { title: 'Property damage liability', text: 'Covers damage you cause to another person\'s vehicle or property. Texas minimum: $25,000.' },
      { title: 'Collision', text: 'Repairs your vehicle after an accident, regardless of fault — subject to your deductible.' },
      { title: 'Comprehensive', text: 'Covers theft, vandalism, hail, flood damage to your car, and animal strikes — critical in Texas hail corridors.' },
      { title: 'Uninsured / underinsured motorist', text: 'Protects you when the at-fault driver has little or no insurance — a major gap in Texas.' },
      { title: 'Medical payments / PIP', text: 'Optional coverage for medical expenses for you and passengers after an accident.' },
      { title: 'Rental & roadside', text: 'Add rental reimbursement and towing so a breakdown doesn\'t derail your week.' },
      { title: 'Gap coverage', text: 'For financed or leased vehicles — covers the difference if your car is totaled and you owe more than it\'s worth.' },
    ],
    texasNotes: [
      'Texas requires minimum 30/60/25 liability limits — carrying only minimums can leave you personally liable after a serious crash.',
      'Hail damage is filed under comprehensive, not collision — know your deductible before storm season.',
      'Rideshare drivers may need additional endorsements beyond a standard personal auto policy.',
      'Teen drivers and new Texas residents often see large rate swings — shopping multiple carriers matters.',
    ],
    howItWorks: [
      'Enter your ZIP and select Auto in our quote wizard.',
      'Answer 30+ carrier-ready questions (vehicles, drivers, garaging, usage, prior insurance).',
      'A licensed agent runs quotes through our carrier panel and follows up with options — typically within one business day.',
      'Bind the policy that fits — we help at renewal too, so you\'re not stuck with rate creep.',
    ],
    faqs: [
      { q: 'How much auto insurance do I need in Texas?', a: 'At minimum, you need 30/60/25 liability. Most agents recommend higher bodily injury limits and adding UM/UIM. We tailor recommendations to your assets and driving habits.' },
      { q: 'Can I get a quote with a bad driving record?', a: 'Yes. Different carriers accept different risk levels. We shop specialty and standard markets to find competitive options.' },
      { q: 'Does auto insurance cover hail damage?', a: 'Yes — under comprehensive coverage, not collision. Check your deductible before hail season in Houston, DFW, and Central Texas.' },
      { q: 'How fast will I get a quote?', a: 'Complete the wizard online; an agent typically follows up within one business day with personalized carrier quotes.' },
    ],
    quoteType: 'auto',
    relatedSlugs: ['home-insurance', 'renters-insurance'],
  },
  {
    slug: 'home-insurance',
    id: 'home',
    icon: 'Home',
    name: 'Homeowners Insurance',
    badge: 'Personal lines',
    metaTitle: 'Homeowners Insurance Texas | Home Insurance Quotes | Inshora Group',
    metaDescription:
      'Compare homeowners insurance in Texas. Dwelling, personal property, liability, wind/hail, and replacement cost coverage from 25+ A-rated carriers.',
    heroTitle: 'Homeowners insurance for Texas properties',
    heroSubtitle:
      'Protect your dwelling, belongings, and liability — with coverage tuned for hail, hurricanes, and rising rebuild costs across the state.',
    overview: [
      'Homeowners insurance covers your house structure, personal belongings, liability if someone is injured on your property, and additional living expenses if you can\'t live at home after a covered loss.',
      'Texas homeowners face unique risks: hail, hurricane wind, water backup, and — critically — flood damage that standard policies exclude. Inshora agents help you understand what your policy actually covers before you need it.',
    ],
    benefits: [
      { title: 'Replacement cost guidance', text: 'We help you insure to rebuild — not just market value — so you\'re not underinsured after a total loss.' },
      { title: 'Wind & hail expertise', text: 'Percentage vs dollar deductibles, roof age rules, and coastal windstorm considerations explained clearly.' },
      { title: 'New purchase & refinance', text: 'Fast quotes for closings — we work with your lender\'s insurance requirements.' },
      { title: 'Bundle savings review', text: 'We compare bundled and unbundled home + auto scenarios — bundling doesn\'t always win.' },
    ],
    coverage: [
      { title: 'Dwelling (Coverage A)', text: 'Pays to repair or rebuild your home after covered perils like fire, wind, hail, and vandalism.' },
      { title: 'Other structures (Coverage B)', text: 'Fences, detached garages, sheds — typically 10% of dwelling limit.' },
      { title: 'Personal property (Coverage C)', text: 'Furniture, electronics, clothing — at home or sometimes worldwide.' },
      { title: 'Loss of use (Coverage D)', text: 'Hotel and extra expenses if your home is uninhabitable after a covered loss.' },
      { title: 'Personal liability (Coverage E)', text: 'Legal defense and damages if someone is injured on your property or you cause property damage.' },
      { title: 'Medical payments (Coverage F)', text: 'Small medical payments to guests injured on your property, regardless of fault.' },
      { title: 'Water backup endorsement', text: 'Sewer/drain backup is often excluded — an important add-on in many Texas neighborhoods.' },
      { title: 'Scheduled valuables', text: 'Extra coverage for jewelry, art, and collectibles above standard sub-limits.' },
    ],
    texasNotes: [
      'Standard homeowners policies exclude flood — separate flood insurance is essential in Houston, coastal areas, and many FEMA zones.',
      'Wind and hail deductibles may be a percentage of dwelling coverage (e.g., 1–2%) rather than a flat dollar amount.',
      'Roof age and material affect both eligibility and premium — especially after recent hail events.',
      'Texas has seen significant premium increases — shopping at every renewal is smart, not disloyal.',
    ],
    howItWorks: [
      'Start the home quote wizard with your property ZIP.',
      'Provide details on year built, square footage, roof, construction, and prior claims.',
      'Our agent compares carrier options including dwelling limits, deductibles, and endorsements.',
      'Choose coverage and bind — we revisit at renewal to keep you competitive.',
    ],
    faqs: [
      { q: 'Does homeowners insurance cover flood?', a: 'No. Flood requires a separate NFIP or private flood policy. This is one of the biggest coverage gaps in Texas.' },
      { q: 'What is a wind/hail deductible?', a: 'In many Texas policies, wind/hail losses use a percentage deductible (e.g., 2% of dwelling coverage) instead of a flat $1,000.' },
      { q: 'How much dwelling coverage do I need?', a: 'Enough to rebuild your home at current construction costs — not just your mortgage balance or tax appraisal.' },
      { q: 'Can I get home insurance on an older roof?', a: 'Yes, but options vary by carrier and roof age. We shop carriers with flexible roof guidelines.' },
    ],
    quoteType: 'home',
    relatedSlugs: ['flood-insurance', 'auto-insurance'],
  },
  {
    slug: 'renters-insurance',
    id: 'renters',
    icon: 'Home',
    name: 'Renters Insurance',
    badge: 'Personal lines',
    metaTitle: 'Renters Insurance Texas | Apartment Insurance Quotes | Inshora Group',
    metaDescription:
      'Affordable renters insurance in Texas. Protect belongings, liability, and additional living expenses. Compare quotes from 25+ carriers. Often under $20/month.',
    heroTitle: 'Renters insurance — protect what you own',
    heroSubtitle:
      'Your landlord insures the building. You insure your belongings, liability, and living expenses — often for less than a streaming subscription bundle.',
    overview: [
      'Renters insurance (HO-4) covers your personal property, personal liability, and additional living expenses if your apartment becomes uninhabitable after a covered loss. It does not cover the building itself — that\'s your landlord\'s policy.',
      'Many Texas landlords require renters insurance as a lease condition. Even when they don\'t, a fire, burst pipe, or theft can wipe out thousands in belongings without coverage.',
    ],
    benefits: [
      { title: 'Affordable premiums', text: 'Most Texas renters policies cost $15–$30/month depending on coverage limits and ZIP code.' },
      { title: 'Liability protection', text: 'If a guest is injured in your apartment or you accidentally damage a neighbor\'s unit, liability coverage responds.' },
      { title: 'Landlord compliance', text: 'We provide declarations pages landlords accept for lease requirements.' },
      { title: 'Fast online quoting', text: 'Complete our renters wizard — agents return carrier options quickly.' },
    ],
    coverage: [
      { title: 'Personal property', text: 'Furniture, electronics, clothing, and belongings — covered for theft, fire, smoke, vandalism, and certain water damage.' },
      { title: 'Personal liability', text: 'Typically $100,000–$300,000 limits for bodily injury and property damage you\'re legally responsible for.' },
      { title: 'Additional living expenses', text: 'Hotel and extra costs if you can\'t live in your unit after a covered loss.' },
      { title: 'Medical payments to others', text: 'Small payments for guest injuries in your rental, regardless of fault.' },
      { title: 'Off-premises coverage', text: 'Belongings stolen from your car or while traveling may be covered — subject to limits.' },
      { title: 'Replacement cost option', text: 'Upgrade from actual cash value to replacement cost so you\'re not depreciated after a claim.' },
    ],
    texasNotes: [
      'Apartment complexes in Houston, Austin, and DFW increasingly require proof of renters insurance at move-in.',
      'Flood damage to your belongings may need separate flood coverage — renters policies don\'t cover flood.',
      'Roommates may need separate policies or named insured endorsements — one policy doesn\'t always cover everyone.',
      'College students away at school may be covered under a parent\'s homeowners policy — but limits vary.',
    ],
    howItWorks: [
      'Select Renters in the quote wizard and enter your ZIP.',
      'Tell us about your unit, belongings estimate, and liability needs.',
      'An agent compares renters options from multiple carriers.',
      'Bind and send your declarations page to your landlord if required.',
    ],
    faqs: [
      { q: 'Is renters insurance required in Texas?', a: 'Not by state law, but most leases require it. It\'s one of the most affordable policies you can buy.' },
      { q: 'Does renters insurance cover my roommate\'s stuff?', a: 'Generally only the named insured\'s property. Roommates should get their own policies or be added as named insureds.' },
      { q: 'What if my laptop is stolen from my car?', a: 'Often covered under renters personal property (off-premises), subject to your deductible and limits.' },
      { q: 'How much personal property coverage do I need?', a: 'Inventory your belongings — most people underestimate. Start at $20,000–$40,000 and adjust upward for electronics and furniture.' },
    ],
    quoteType: 'renters',
    relatedSlugs: ['auto-insurance', 'home-insurance'],
  },
  {
    slug: 'flood-insurance',
    id: 'flood',
    icon: 'Droplets',
    name: 'Flood Insurance',
    badge: 'Specialty lines',
    metaTitle: 'Flood Insurance Texas | NFIP & Private Flood Quotes | Inshora Group',
    metaDescription:
      'Flood insurance in Texas — NFIP and private options. Essential for Houston, coastal areas, and FEMA zones. Separate from homeowners. Licensed agent guidance.',
    heroTitle: 'Flood insurance — the coverage homeowners skip',
    heroSubtitle:
      'Standard home policies exclude flood. In Texas — especially Houston, bayou communities, and coastal counties — separate flood coverage can save your financial future.',
    overview: [
      'Flood insurance covers damage from rising water — storm surge, overflowing rivers, bayous, and heavy rain accumulation. It is not included in homeowners or renters policies, yet flooding is one of Texas\'s most common and costly disasters.',
      'Inshora agents help you navigate NFIP (National Flood Insurance Program) policies and private flood markets, understand FEMA flood zones, and meet mortgage requirements for properties in high-risk areas.',
    ],
    benefits: [
      { title: 'NFIP & private markets', text: 'We access FEMA-backed NFIP policies and private flood carriers where available for broader coverage.' },
      { title: 'Mortgage compliance', text: 'Lenders require flood insurance in SFHA zones — we help you satisfy requirements before closing.' },
      { title: 'Contents + building', text: 'Cover the structure, your belongings, or both — tailored to renters and owners.' },
      { title: 'Houston & Gulf Coast expertise', text: 'We understand bayou flooding, hurricane season, and why "not in a flood zone" doesn\'t mean "no flood risk."' },
    ],
    coverage: [
      { title: 'Building coverage', text: 'Structure, foundation, electrical, plumbing, HVAC, built-in appliances — up to NFIP or private policy limits.' },
      { title: 'Contents coverage', text: 'Furniture, clothing, electronics — essential for renters and homeowners alike.' },
      { title: 'Replacement cost (building)', text: 'Available on NFIP for primary residences — pays to rebuild without depreciation.' },
      { title: 'Increased cost of compliance', text: 'Extra cost to meet current building codes when repairing a flood-damaged property.' },
      { title: 'Private flood enhancements', text: 'Some private carriers offer higher limits, shorter waiting periods, or basement coverage beyond NFIP.' },
      { title: 'Loss avoidance', text: 'Coverage for sandbags, pumps, and temporary barriers in some policies.' },
    ],
    texasNotes: [
      'Hurricane Harvey showed that 80%+ of flooded Houston homes were outside high-risk FEMA zones.',
      'NFIP policies have a 30-day waiting period in most cases — don\'t wait until a storm is in the Gulf.',
      'Wind-driven rain vs rising floodwater is a critical distinction — only flood policies cover rising water.',
      'Coastal properties may also need windstorm coverage through TWIA — separate from standard homeowners.',
    ],
    howItWorks: [
      'Contact us or call (713) 943-9985 with your property address and flood zone if known.',
      'We determine NFIP vs private flood eligibility and required coverage limits.',
      'Receive a quote with building/contents breakdown and waiting period explained.',
      'Bind before closing or hurricane season — don\'t wait for the forecast.',
    ],
    faqs: [
      { q: 'Do I need flood insurance if I\'m not in a flood zone?', a: 'Flood can happen anywhere in Texas. Low-risk zones still flood — and premiums are often much lower outside SFHAs.' },
      { q: 'Does homeowners insurance cover hurricane flooding?', a: 'No. Rising floodwater requires a separate flood policy. Wind damage may be covered under homeowners — flood is not.' },
      { q: 'How much does flood insurance cost in Texas?', a: 'Varies widely by zone, elevation, and coverage. Preferred-risk NFIP policies can be a few hundred dollars annually; high-risk coastal properties cost more.' },
      { q: 'Is there a waiting period?', a: 'NFIP typically requires 30 days before coverage starts. Some private options offer shorter periods — ask an agent.' },
    ],
    quoteType: null,
    relatedSlugs: ['home-insurance', 'renters-insurance'],
  },
  {
    slug: 'life-insurance',
    id: 'life',
    icon: 'Heart',
    name: 'Life Insurance',
    badge: 'Specialty lines',
    metaTitle: 'Life Insurance Texas | Term & Whole Life Quotes | Inshora Group',
    metaDescription:
      'Life insurance in Texas — term, whole, universal, and final expense. Needs-based face amount analysis from licensed agents. Protect your family\'s future.',
    heroTitle: 'Life insurance — income replacement & legacy',
    heroSubtitle:
      'Term, whole, and permanent options sized to your mortgage, dependents, and goals — with licensed agents who explain the math, not just the premium.',
    overview: [
      'Life insurance pays a tax-free death benefit to your beneficiaries when you pass away. It replaces income, pays off debts, funds education, and provides estate liquidity — so your family isn\'t forced to sell assets or change their lifestyle overnight.',
      'Inshora agents provide needs-based analysis: how much coverage you actually need, term vs permanent trade-offs, and carrier financial strength ratings — not one-size-fits-all pitches.',
    ],
    benefits: [
      { title: 'Needs-based analysis', text: 'We calculate face amounts based on income, mortgage, debts, dependents, and education goals.' },
      { title: 'Term & permanent options', text: 'Term for affordable high coverage; whole/universal for lifetime needs and cash value strategies.' },
      { title: 'A-rated carriers only', text: 'We work with financially strong insurers — the company still has to pay claims decades from now.' },
      { title: 'Business & key person', text: 'Buy-sell agreements, key person coverage, and executive benefits for Texas business owners.' },
    ],
    coverage: [
      { title: 'Term life (10–30 years)', text: 'Affordable coverage for a set period — ideal for mortgage protection and raising children.' },
      { title: 'Whole life', text: 'Permanent coverage with guaranteed death benefit and cash value accumulation.' },
      { title: 'Universal life', text: 'Flexible premiums and death benefit with cash value tied to interest or index performance.' },
      { title: 'Final expense', text: 'Smaller policies ($5,000–$25,000) to cover funeral and end-of-life costs without medical exams in many cases.' },
      { title: 'Riders', text: 'Accelerated death benefit, waiver of premium, child term, and guaranteed insurability options.' },
      { title: 'Group & voluntary', text: 'Employer-sponsored life plans and supplemental individual coverage for employees.' },
    ],
    texasNotes: [
      'Texas is a community property state — spouse beneficiary designations and ownership matter for estate planning.',
      'No state mandate for life insurance, but mortgage lenders and business partners often require it.',
      'Younger and healthier applicants lock in lower rates — waiting costs more as age and health change.',
      'Cash value life insurance has tax advantages but higher premiums — we explain when term is the smarter choice.',
    ],
    howItWorks: [
      'Contact us with your age, health overview, and financial goals — or call (713) 943-9985.',
      'An agent runs a needs analysis and recommends term, permanent, or a blend.',
      'Complete the carrier application — medical underwriting may include a paramed exam for larger face amounts.',
      'Policy issued — review beneficiaries annually and at major life events (marriage, children, new home).',
    ],
    faqs: [
      { q: 'How much life insurance do I need?', a: 'A common starting point is 10–12× annual income, plus mortgage and education costs. We customize based on your actual situation.' },
      { q: 'Term vs whole life — which is better?', a: 'Term is cheaper for temporary needs (mortgage, kids). Whole/permanent fits estate planning and lifetime coverage. We explain both honestly.' },
      { q: 'Can I get life insurance with health issues?', a: 'Often yes — simplified issue and guaranteed issue products exist. Underwriting varies by carrier; we shop options.' },
      { q: 'Should my spouse have their own policy?', a: 'Yes — even non-working spouses provide childcare and household value that would cost money to replace.' },
    ],
    quoteType: null,
    relatedSlugs: ['home-insurance', 'business-insurance'],
  },
  {
    slug: 'business-insurance',
    id: 'business',
    icon: 'Briefcase',
    name: 'Business Insurance',
    badge: 'Commercial lines',
    metaTitle: 'Business Insurance Texas | Commercial Liability & BOP | Inshora Group',
    metaDescription:
      'Business insurance in Texas — general liability, BOP, workers comp, commercial auto, and professional liability. Licensed agents for contractors, retail, and professional services.',
    heroTitle: 'Business insurance for Texas companies',
    heroSubtitle:
      'General liability, property, workers\' comp, commercial auto, and professional lines — structured for contractors, retailers, startups, and growing teams.',
    overview: [
      'Business insurance protects your company from lawsuits, property damage, employee injuries, vehicle accidents, and professional mistakes. One uninsured claim can threaten everything you\'ve built.',
      'Texas has unique rules — including optional workers\' comp for many employers but contractual requirements from clients and general contractors. Inshora agents design coverage around your industry, contracts, and growth stage.',
    ],
    benefits: [
      { title: 'Industry-specific programs', text: 'Contractors, restaurants, professional services, and retail — carriers with appetite for your class of business.' },
      { title: 'Certificate of insurance', text: 'Fast COIs for landlords, GCs, and clients who require proof of coverage.' },
      { title: 'Workers\' comp guidance', text: 'Navigate Texas non-subscriber vs workers\' comp decisions and contractual requirements.' },
      { title: 'Growth-ready packaging', text: 'Start with a BOP and expand to umbrella, cyber, and EPLI as you scale.' },
    ],
    coverage: [
      { title: 'General liability', text: 'Bodily injury, property damage, and personal/advertising injury — the foundation for most businesses.' },
      { title: 'Business owners policy (BOP)', text: 'Bundles general liability and commercial property — cost-effective for many small businesses.' },
      { title: 'Workers\' compensation', text: 'Covers employee medical costs and lost wages after work injuries — required by many contracts even when not mandated by state.' },
      { title: 'Commercial auto', text: 'Vehicles used for business — higher limits and hired/non-owned coverage for employees driving personal cars.' },
      { title: 'Professional liability (E&O)', text: 'Protects against claims of professional mistakes — essential for consultants, accountants, and tech firms.' },
      { title: 'Cyber liability', text: 'Data breach response, notification costs, and ransomware — increasingly required by clients.' },
      { title: 'Commercial property', text: 'Buildings, equipment, inventory, and business personal property.' },
      { title: 'Umbrella / excess', text: 'Extra liability limits above underlying GL and auto policies.' },
    ],
    texasNotes: [
      'Texas does not require most private employers to carry workers\' comp — but GCs and government contracts often do.',
      'Contractors face additional requirements: general liability minimums, additional insured endorsements, and waiver of subrogation.',
      'Houston and Gulf Coast businesses should consider hurricane and flood business interruption exposures.',
      'Home-based businesses often need separate policies — homeowners excludes most business activity.',
    ],
    howItWorks: [
      'Tell us your business type, revenue, employees, and contract requirements.',
      'We shop commercial carriers for GL, property, workers\' comp, and auto as needed.',
      'Review quotes with coverage comparisons — not just premium.',
      'Bind, receive COIs, and revisit coverage at renewal or when you sign larger contracts.',
    ],
    faqs: [
      { q: 'Do I need business insurance for an LLC?', a: 'An LLC limits personal liability structurally but doesn\'t stop lawsuits. Business insurance pays defense costs and judgments — the LLC alone doesn\'t.' },
      { q: 'What is a certificate of insurance (COI)?', a: 'Proof of coverage your landlord or client requires. We issue COIs with additional insured endorsements when needed.' },
      { q: 'Is workers\' comp required in Texas?', a: 'Not for most private employers by state law — but many contracts require it. Going bare carries significant risk if an employee is injured.' },
      { q: 'Does my personal auto policy cover business driving?', a: 'Usually no — delivery, client visits, and commercial use need a commercial auto policy or business use endorsement.' },
    ],
    quoteType: null,
    relatedSlugs: ['life-insurance', 'auto-insurance'],
  },
]

export function getServiceBySlug(slug) {
  return SERVICE_PAGES.find((s) => s.slug === slug)
}

export function getServicePath(slug) {
  return `/services/${slug}`
}

export const FOOTER_SERVICES = SERVICE_PAGES.map(({ slug, name }) => ({
  label: name,
  to: getServicePath(slug),
}))
