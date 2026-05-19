const variants = {
  primary: 'bg-[#0B1F8F] text-white hover:bg-[#1C2ED6]',
  secondary: 'bg-white text-[#0B1F8F] border border-[#0B1F8F] hover:bg-blue-50',
  outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-6 py-3 rounded-xl font-semibold transition ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
