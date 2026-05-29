import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah J.',
    location: 'Sugar Land, TX',
    text: 'The quote wizard was thorough but easy. An agent called back the next day with three solid options — saved on our auto bundle.',
    savings: '$840/yr',
  },
  {
    name: 'Michael C.',
    location: 'Houston, TX',
    text: 'Sarah on the website answered my coverage questions instantly. Then I completed the online quote and got real numbers from an agent.',
    savings: '$620/yr',
  },
  {
    name: 'Emily R.',
    location: 'Katy, TX',
    text: 'Finally a brokerage that doesn\'t spam me with ten carrier calls. One agent, multiple quotes, done.',
    savings: '$510/yr',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#0B1F8F] uppercase tracking-wider mb-3">Client stories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Texans who switched with confidence
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm text-slate-600">Trusted by thousands statewide</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/30 p-6 flex flex-col"
            >
              <p className="text-slate-700 leading-relaxed flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
              <footer className="border-t border-slate-200 pt-4 flex items-center justify-between">
                <div>
                  <cite className="not-italic font-semibold text-slate-900">{t.name}</cite>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <span className="text-sm font-bold text-emerald-600">{t.savings}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
