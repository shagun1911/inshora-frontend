export default function PageHeader({ title, subtitle, badge }) {
  return (
    <div className="bg-[#071654] text-white py-16 pt-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.3),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">{badge}</p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="text-lg text-blue-100/90 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
