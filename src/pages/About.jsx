import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const values = [
  {
    icon: '🕊️',
    title: 'Mercy',
    description: 'We approach every person and every situation with compassion. Mercy is the foundation from which genuine change begins.',
  },
  {
    icon: '⚖️',
    title: 'Justice',
    description: 'We are committed to challenging what is unfair and standing up for those who need a voice.',
  },
  {
    icon: '🔍',
    title: 'Honesty',
    description: 'We commit to full transparency — about our finances, our progress, and our limitations.',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'Every decision we make is shaped by listening to the people we serve. We work with communities, not for them.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="About MTJF"
        subtitle="Mercy to Justice (MTJF) is a UK-based charity working to support communities, promote fairness, and advocate for those who need it most."
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                label="Our Purpose"
                title="Why We Exist"
              />
              <p className="text-gray-600 mt-5 mb-4 leading-relaxed">
                MTJF was established by a group of individuals who share a common belief:
                that mercy and justice belong together. We exist to put that belief into practice —
                through community support, advocacy, and direct action.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are a small organisation. We do not have grand claims to make.
                What we do have is a clear sense of purpose and a genuine commitment
                to doing this work with integrity.
              </p>
              <Link to="/get-involved" className="btn-primary">Get Involved</Link>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-navy">
                <h3 className="font-bold text-navy mb-2 text-sm uppercase tracking-wider">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  To serve communities across the UK with compassion, advocate for justice
                  on behalf of those who need it, and build programmes that create meaningful,
                  lasting change.
                </p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-accent">
                <h3 className="font-bold text-accent mb-2 text-sm uppercase tracking-wider">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  A United Kingdom where mercy shapes how we treat the vulnerable, and justice
                  ensures they are never left behind — regardless of background or circumstance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Our Values"
            title="What Guides Us"
            subtitle="These values shape every decision we make and every relationship we build."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{v.icon}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <SectionHeading
            label="Our People"
            title="Our Team"
            subtitle="We are a small, committed team working to build MTJF into an organisation that communities can trust."
            center
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: 'Founder & Chair' },
              { role: 'Operations' },
              { role: 'Community Outreach' },
            ].map((member, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="font-semibold text-navy text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-navy">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <SectionHeading
            label="Governance"
            title="Transparency"
            subtitle="We are committed to operating openly and accountably. Our registration and financial information will be published as it becomes available."
            center
            light
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/contact" className="btn-outline-white">Contact Us</Link>
            <Link to="/donate" className="btn-accent">Support MTJF</Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
