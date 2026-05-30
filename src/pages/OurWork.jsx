import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const areas = [
  {
    icon: '🌱',
    title: 'Community Resilience',
    description: 'Working with local neighbourhoods to build mutual support networks and the capacity for communities to face challenges together.',
    gradient: 'from-navy to-navy-light',
  },
  {
    icon: '⚖️',
    title: 'Justice & Advocacy',
    description: 'Standing alongside individuals and communities who face systemic unfairness — raising concerns, navigating systems, and advocating for change.',
    gradient: 'from-orange-600 to-amber-500',
  },
  {
    icon: '🤲',
    title: 'Direct Support',
    description: 'Delivering practical, direct support to individuals and families in need. Shaped by what communities tell us they actually need.',
    gradient: 'from-green-700 to-teal-600',
  },
  {
    icon: '📚',
    title: 'Awareness & Education',
    description: 'Creating resources and opportunities for communities, schools, and organisations to engage with the issues we work on.',
    gradient: 'from-purple-700 to-indigo-600',
  },
]

const approach = [
  { step: '01', title: 'Listen First', desc: 'Before designing any programme, we listen. Community insight shapes everything we do.' },
  { step: '02', title: 'Co-Design', desc: 'We design our responses with the people we serve, not for them.' },
  { step: '03', title: 'Start Small, Do it Well', desc: 'We would rather do one thing well than many things poorly.' },
  { step: '04', title: 'Be Honest About Progress', desc: 'We share what we learn — including what does not go as planned.' },
]

export default function OurWork() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="What We Do"
        subtitle="MTJF works across four interconnected areas, all rooted in the belief that every person deserves dignity, support, and justice."
      />

      {/* Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {areas.map((area, i) => (
              <div
                key={area.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className={i % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <h3 className="text-2xl font-bold text-navy mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
                <div className={i % 2 !== 0 ? 'order-2 lg:order-1' : ''}>
                  <div className={`aspect-video bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center`}>
                    <span className="text-6xl">{area.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto">
          <SectionHeading
            label="Our Approach"
            title="How We Work"
            center
          />
          <div className="mt-10 space-y-5">
            {approach.map(item => (
              <div key={item.step} className="flex gap-5 items-start bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-custom text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Support Our Work</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Your support helps us reach communities and deliver meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="btn-accent">Donate</Link>
            <Link to="/get-involved" className="btn-outline-white">Get Involved</Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
