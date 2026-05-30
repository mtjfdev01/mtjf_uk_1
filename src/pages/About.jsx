import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const values = [
  {
    icon: '🕊️',
    title: 'Mercy',
    description: 'We approach every person and every situation with compassion. Mercy is not weakness — it is the foundation from which true change begins.',
  },
  {
    icon: '⚖️',
    title: 'Justice',
    description: 'Compassion without advocacy is incomplete. We are committed to challenging what is unfair and standing up for those who need a voice.',
  },
  {
    icon: '🔍',
    title: 'Honesty',
    description: 'We will not pretend to be more than we are. We commit to full transparency — about our finances, our progress, and our limitations.',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'We do not work for communities — we work with them. Every decision we make will be shaped by listening to the people we serve.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Our Story Begins Here"
        subtitle="MTJF — Mercy to Justice — is a newly established UK charity. We have no long history to boast of. What we have is a clear purpose, genuine conviction, and the courage to begin."
      />

      {/* Founding Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="How We Started"
                title="Why MTJF Exists"
              />
              <p className="text-gray-600 mt-5 mb-4 leading-relaxed">
                MTJF was founded by a small group of individuals who share a common conviction:
                that mercy and justice are not opposites — they belong together. We saw a need
                for an organisation willing to act on that belief practically, not just in words.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are not here because we have all the answers. We are here because we believe
                the questions matter — and that communities deserve organisations willing to
                sit with them, listen deeply, and act with integrity.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                This is day one. We do not have a long list of achievements. What we have
                is a founding team committed to doing this properly, transparently, and for
                the long haul — and we are asking you to believe in that alongside us.
              </p>
              <Link to="/get-involved" className="btn-primary">Join Us</Link>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-navy">
                <h3 className="font-bold text-navy mb-2 text-sm uppercase tracking-wider">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  To serve communities across the UK with compassion, advocate for justice on
                  behalf of those who need it, and build programmes that create meaningful,
                  lasting change — starting from the ground up.
                </p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-accent">
                <h3 className="font-bold text-accent mb-2 text-sm uppercase tracking-wider">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  A United Kingdom where mercy shapes how we treat the vulnerable, and justice
                  ensures they are never left behind — regardless of background or circumstance.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-gray-300">
                <h3 className="font-bold text-gray-600 mb-2 text-sm uppercase tracking-wider">Where We Are Now</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We have just launched. We are in the process of registering formally with the
                  Charity Commission, building our team, and establishing our first partnerships.
                  This is the beginning — and we are glad you are here for it.
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
            title="What Guides Everything We Do"
            subtitle="These are not slogans. They are the commitments we are making — to the communities we serve, and to every person who chooses to support us."
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

      {/* Founding Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Our People"
              title="The Founding Team"
              subtitle="We are a small but passionate founding team. We come from different backgrounds but share the same belief: that this work matters and is worth doing well."
              center
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { initials: 'FT', role: 'Founder & Chair', note: 'Setting the vision and values for MTJF from the very first day.' },
                { initials: 'FT', role: 'Operations Lead', note: 'Building the organisational structure and day-to-day foundations.' },
                { initials: 'FT', role: 'Community Outreach', note: 'Connecting us with the communities we are here to serve.' },
              ].map((member, i) => (
                <div key={i} className="text-center bg-gray-50 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{member.initials}</span>
                  </div>
                  <p className="font-semibold text-navy text-sm">{member.role}</p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">{member.note}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs mt-6">
              We will add founder names and photos here once we are ready to share them publicly.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency commitment */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Our Commitment"
              title="Radical Transparency from Day One"
              subtitle="We are committed to being fully open about who we are, where money goes, and what we achieve — from the very beginning."
              center
              light
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              {[
                { icon: '📋', title: 'Charity Registration', desc: 'We are working through our formal Charity Commission registration. We will publish our registration number as soon as it is confirmed.' },
                { icon: '📊', title: 'Financial Reporting', desc: 'We will publish full accounts as required by law — and we aim to go further with accessible, plain-English financial summaries.' },
                { icon: '📣', title: 'Impact Updates', desc: 'As our work develops, we will share honest updates — including what went well and what we are still figuring out.' },
              ].map(item => (
                <div key={item.title} className="bg-white/10 rounded-2xl p-5 text-left">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-white font-semibold text-sm mb-2">{item.title}</div>
                  <div className="text-white/60 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-outline-white">Get in Touch</Link>
              <Link to="/donate" className="btn-accent">Support Our Launch</Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
