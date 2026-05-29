import { labelClass, inputClass } from './quoteStyles'

export default function QuoteField({ field, value, onChange, details }) {
  const id = `quote-${field.name}`

  if (field.type === 'yesno' || field.type === 'radio') {
    return (
      <div className={field.half ? '' : 'md:col-span-2'}>
        <span className={labelClass}>{field.label}{field.required ? ' *' : ''}</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {field.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              id={id === `quote-${field.name}` && opt.value === value ? id : undefined}
              onClick={() => onChange(field.name, opt.value)}
              className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition ${
                value === opt.value
                  ? 'border-[#0B1F8F] bg-blue-50 text-[#0B1F8F] shadow-sm'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (field.type === 'select') {
    return (
      <div className={field.half ? '' : 'md:col-span-2'}>
        <label htmlFor={id} className={labelClass}>
          {field.label}{field.required ? ' *' : ''}
        </label>
        <select
          id={id}
          className={inputClass}
          value={value ?? ''}
          onChange={(e) => onChange(field.name, e.target.value)}
        >
          {field.options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    )
  }

  if (field.type === 'textarea') {
    return (
      <div className="md:col-span-2">
        <label htmlFor={id} className={labelClass}>
          {field.label}{field.required ? ' *' : ''}
        </label>
        <textarea
          id={id}
          className={inputClass}
          rows={3}
          value={value ?? ''}
          placeholder={field.placeholder}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      </div>
    )
  }

  return (
    <div className={field.half ? '' : 'md:col-span-2'}>
      <label htmlFor={id} className={labelClass}>
        {field.label}{field.required ? ' *' : ''}
      </label>
      <input
        id={id}
        type={field.type || 'text'}
        className={inputClass}
        value={value ?? ''}
        placeholder={field.placeholder}
        maxLength={field.maxLength}
        onChange={(e) => onChange(field.name, e.target.value)}
      />
    </div>
  )
}
