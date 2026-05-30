import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const plannedAreas = [
  {
    icon: '🌱',
    title: 'Community Resilience',
    tag: 'Planned',
    tagColor: 'bg-blue-100 text-blue-700',
    description: 'We plan to work with local neighbourhoods to help build the kind of social connections and mutual support networks that allow communities to face challenges together — not alone. Our approach will always begin with listening.',
    gradient: 'from-navy to-navy-light',
  },
  {
    icon: '⚖️',
    title: 'Justice & Advocacy',
    tag: 'Planned',
    tagColor: 'bg-orange-100 text-orange-700',
    description: 'We will stand alongside individuals and communities who face systemic unfairness — raising their concerns with decision-makers, helping them navigate complex systems, and advocating for change at a structural level.',
    gradient: 'from-orange-600 to-amber-500',
  },
  {
    icon: '🤲',
    title: 'Direct Community Support',
    tag: 'Planned',
    tagColor: 'bg-green-100 text-green-700',
    description: 'Beyond advocacy, we believe in getting practical. We are developing plans to deliver direct support to individuals and families in need — the exact shape of this will be informed by community consultations we are planning.',
    gradient: 'from-green-700 to-teal-600',
  },
  {
    icon: '📚',
    title: 'Awareness & Education',
    tag: 'Planned',
    tagColor: 'bg-purple-100 text-purple-700',
    description: 'Change starts with understanding. We aim to run awareness campaigns, publish educational resources, and create opportunities for communities, schools, and organisations to engage meaningfully with the issues we work on.',
    gradient: 'from-purple-700 to-indigo-600',
  },
]

const approach = [
  {
    step: '01',
    title: 'Listen First',
    desc: 'Before we design any programme or initiative, we will sit with communities and listen — genuinely. Community insight will shape everything.',
  },
  {
    step: '02',
    title: 'Co-Design Together',
    desc: 'We will design our responses with the people we are trying to serve, not for them. Their lived experience is the most valuable input we can have.',
  },
  {
    step: '03',
    title: 'Start Small, Do it Well',
    desc: 'We are not trying to do everything at once. We would rather do one thing excellently than many things poorly. We will scale what works.',
  },
  {
    step: '04',
    title: 'Be Honest About Progress',
    desc: 'We will share what we learn — including what does not go as planned. Honest reporting builds trust, and trust is the foundation of all good charity work.',
  },
]

export default function OurWork() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="What We're Building"
        subtitle="We are a new organisation. We do not yet have programmes to report on — but we have a clear plan for what we will build, and we want to share it with you openly."
      />

      {/* Honest context */}
      <section className="bg-amber-50 border-b border-amber-100 py-8">
        <div className="container-custom">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <span className="text-2xl flex-shrink-0">📌</span>
            <div>
              <p className="font-semibold text-amber-900 mb-1">A Note on Where We Are</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                MTJF has just launched. The programmes below are what we are <em>planning and working towards</em> — not
                yet operational. We are sharing our plans publicly so that you can see what your support is building.
                We will update this page as things develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Our Plans"
            title="Areas We're Working Towards"
            subtitle="These are the areas we intend to focus on. Your donations and support are what will allow us to turn these plans into reality."
            center
          />
          <div className="mt-12 space-y-16">
            {plannedAreas.map((area, i) => (
              <div
                key={area.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? '' : ''}`}
              >
                <div className={i % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${area.tagColor}`}>
                      {area.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
                <div className={i % 2 !== 0 ? 'order-2 lg:order-1' : ''}>
                  <div className={`aspect-video bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-6xl mb-3">{area.icon}</div>
                      <p className="text-white/50 text-sm">{area.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Our Approach"
              title="How We Will Work"
              subtitle="We are committed to doing this the right way, even if it takes longer. Here are the principles that will guide everything we do."
              center
            />
            <div className="mt-12 space-y-6">
              {approach.map(item => (
                <div key={item.step} className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center flex-shrink-0">
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
        </div>
      </section>

      {/* What's Happening Now */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Right Now"
            title="What We're Doing Today"
            subtitle="Since we are in our first days, here is an honest look at where our energy is currently going."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
            {[
              {
                icon: '📋',
                title: 'Setting Up',
                desc: 'We are completing our formal Charity Commission registration, putting governance structures in place, and ensuring we operate properly from day one.',
              },
              {
                icon: '🔊',
                title: 'Listening',
                desc: 'We are in conversations with communities, local organisations, and potential partners to understand needs and identify where we can make the most meaningful difference.',
              },
              {
                icon: '🤝',
                title: 'Building Relationships',
                desc: 'We are connecting with other charities, local authorities, and community leaders. We believe in collaboration — not duplication.',
              },
            ].map(item => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Help Us Get These Plans Off the Ground</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Everything on this page is a plan — and plans need people and resources to become reality.
            Your support at this stage is more valuable than you know.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="btn-accent">Support Our Work</Link>
            <Link to="/get-involved" className="btn-outline-white">Volunteer With Us</Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
