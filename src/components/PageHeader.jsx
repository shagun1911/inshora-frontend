export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white py-16 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-blue-100 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
