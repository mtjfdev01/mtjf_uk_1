import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'
import NewsletterSection from '../components/NewsletterSection'

const values = [
  {
    icon: '🤝',
    title: 'Community First',
    description: 'Every decision we make starts with the people we serve. We listen deeply, act collaboratively, and put community needs at the heart of everything.',
  },
  {
    icon: '🔍',
    title: 'Transparency',
    description: 'We publish our accounts, report on our impact, and welcome scrutiny. Our supporters deserve to know exactly how their contributions are used.',
  },
  {
    icon: '⚖️',
    title: 'Equity & Inclusion',
    description: 'We are committed to reaching those who are most marginalised. We actively work to remove barriers and ensure no one is left behind.',
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    description: 'We build for the long term. Our programmes are designed to create lasting change, not quick fixes, and to empower communities to thrive independently.',
  },
]

const team = [
  { name: 'Dr. Sarah Williams', role: 'Chief Executive', initials: 'SW' },
  { name: 'James Hartley', role: 'Director of Programmes', initials: 'JH' },
  { name: 'Priya Nair', role: 'Director of Fundraising', initials: 'PN' },
  { name: 'Tom Edwards', role: 'Director of Finance', initials: 'TE' },
  { name: 'Amelia Clarke', role: 'Head of Communications', initials: 'AC' },
  { name: 'Marcus Okonkwo', role: 'Head of Partnerships', initials: 'MO' },
]

const milestones = [
  { year: '1999', event: 'Hopefield Trust founded by a group of community volunteers in London.' },
  { year: '2003', event: 'Awarded first major government grant; expanded operations to three UK regions.' },
  { year: '2008', event: 'Launched our flagship community resilience programme, now replicated in 40+ areas.' },
  { year: '2013', event: 'Received the Queen\'s Award for Voluntary Service — the highest accolade for volunteers.' },
  { year: '2018', event: 'Expanded international partnerships; launched capacity-building programmes abroad.' },
  { year: '2024', event: 'Surpassed £12 million in total funds raised. Impact reaches 250,000+ individuals.' },
]

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Who We Are"
        subtitle="For over 25 years, Hopefield Trust has been dedicated to creating lasting, meaningful change in communities across the United Kingdom and beyond."
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Mission & Vision"
                title="Why We Exist"
              />
              <div className="mt-6 space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-navy">
                  <h3 className="font-bold text-navy mb-2 text-sm uppercase tracking-wider">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower individuals and strengthen communities across the UK through evidence-based
                    programmes, direct support, and meaningful advocacy — ensuring everyone has the
                    opportunity to thrive.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-accent">
                  <h3 className="font-bold text-accent mb-2 text-sm uppercase tracking-wider">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A United Kingdom where every person, regardless of background or circumstance,
                    can live with dignity, purpose, and hope.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed">
                We were founded on the belief that lasting change comes from within communities.
                Our role is to listen, support, amplify, and connect — never to impose or dictate.
                Twenty-five years of doing this work has only deepened that conviction.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="25+" label="Years of Service" icon="🏛️" />
              <StatCard value="250K+" label="People Supported" icon="🤝" />
              <StatCard value="40+" label="UK Communities" icon="📍" />
              <StatCard value="2,400+" label="Volunteers" icon="🌟" />
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
            subtitle="Our values are not aspirational — they are operational. They shape every decision, every programme, and every partnership."
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

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Our Journey"
            title="25 Years of Impact"
            subtitle="From a small volunteer group to a nationally recognised charity — here are the milestones that shaped who we are."
            center
          />
          <div className="mt-12 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 flex justify-end md:block">
                    <div className={`max-w-sm card ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <span className="text-accent font-bold text-sm">{m.year}</span>
                      <p className="text-gray-700 text-sm leading-relaxed mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Our People"
            title="Leadership Team"
            subtitle="Experienced, passionate, and committed. Our leadership team brings decades of combined expertise in the charity sector."
            center
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {team.map(member => (
              <div key={member.name} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow duration-200">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <h4 className="font-semibold text-navy text-sm">{member.name}</h4>
                <p className="text-gray-500 text-xs mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Governance"
              title="Accountable to You"
              subtitle="We hold ourselves to the highest standards of charity governance. All our legal and financial documents are publicly available."
              center
              light
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {[
                { label: 'Charity Commission\nRegistered', no: 'Reg. No. 1234567' },
                { label: 'Companies House\nRegistered', no: 'Co. No. 09876543' },
                { label: 'ICO Data Protection\nRegistered', no: 'ZA123456' },
              ].map(item => (
                <div key={item.label} className="bg-white/10 rounded-2xl p-5 text-center">
                  <div className="text-white font-semibold text-sm whitespace-pre-line">{item.label}</div>
                  <div className="text-white/60 text-xs mt-1">{item.no}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-outline-white">
                Request Annual Report
              </Link>
              <Link to="/donate" className="btn-accent">
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
