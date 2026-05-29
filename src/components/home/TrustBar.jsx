const carriers = [
  'Progressive', 'Allstate', 'Liberty Mutual', 'USAA', 'The General', 'Bristol West', 'State Farm', 'Nationwide',
]

export default function TrustBar() {
  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Trusted carrier partners
          </p>
          <p className="text-slate-600 text-sm">
            <span className="font-semibold text-slate-900">25+ A-rated carriers</span>
            {' · '}Licensed Texas agents · No spam comparisons
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 items-center">
            {[...carriers, ...carriers].map((name, i) => (
              <span key={`${name}-${i}`} className="flex-shrink-0 text-lg font-semibold text-slate-300 whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
