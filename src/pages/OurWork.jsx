import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const programmes = [
  {
    title: 'Community Resilience Programme',
    tag: 'Flagship',
    tagColor: 'bg-accent text-white',
    description: 'Our longest-running initiative, the Community Resilience Programme works with neighbourhoods across England and Wales to build the social infrastructure that allows communities to adapt, recover, and thrive in the face of challenges. Since 2008, we\'ve worked in over 40 areas, training local leaders and establishing community hubs.',
    stats: [
      { value: '40+', label: 'Communities' },
      { value: '1,200+', label: 'Leaders Trained' },
      { value: '18', label: 'Years Running' },
    ],
    gradient: 'from-navy to-navy-light',
  },
  {
    title: 'Early Intervention Initiative',
    tag: 'Preventative',
    tagColor: 'bg-green-100 text-green-700',
    description: 'Prevention is always better than cure. This programme identifies risk early and provides wrap-around support to individuals and families before situations become crises. Working in partnership with local authorities, NHS trusts, and schools, we\'ve helped thousands of people navigate difficult periods and emerge stronger.',
    stats: [
      { value: '8,500+', label: 'People Supported' },
      { value: '92%', label: 'Positive Outcomes' },
      { value: '14', label: 'Partnerships' },
    ],
    gradient: 'from-green-700 to-green-500',
  },
  {
    title: 'Skills & Futures Programme',
    tag: 'Empowerment',
    tagColor: 'bg-purple-100 text-purple-700',
    description: 'Unlocking potential through skills, confidence, and opportunity. This programme provides tailored support to help individuals develop vocational skills, access employment, and build financial resilience. We work with local employers to create direct pathways to meaningful work.',
    stats: [
      { value: '3,200+', label: 'Participants' },
      { value: '78%', label: 'Into Employment' },
      { value: '6', label: 'UK Regions' },
    ],
    gradient: 'from-purple-700 to-purple-500',
  },
  {
    title: 'International Partnerships',
    tag: 'Global',
    tagColor: 'bg-blue-100 text-blue-700',
    description: 'The approaches we\'ve refined in UK communities have global relevance. We work alongside partner organisations in several countries to share knowledge, transfer models, and build local capacity — always led by local partners, never imposed from outside.',
    stats: [
      { value: '8', label: 'Countries' },
      { value: '22', label: 'Partner Orgs' },
      { value: '50K+', label: 'Beneficiaries' },
    ],
    gradient: 'from-blue-700 to-blue-500',
  },
]

const caseStudies = [
  {
    location: 'Manchester',
    title: 'Rebuilding Community Ties in Moss Side',
    excerpt: 'After years of underinvestment, our team worked with residents to establish a community hub that now serves 400+ people each week. Local volunteers now run the centre independently.',
    gradient: 'from-navy to-navy-light',
  },
  {
    location: 'Cardiff',
    title: 'Skills for Life in South Wales',
    excerpt: 'A partnership with local employers created a tailored skills pathway that has helped over 200 long-term unemployed individuals find sustainable work in the past two years.',
    gradient: 'from-green-700 to-teal-600',
  },
  {
    location: 'Birmingham',
    title: 'Early Support Saves Lives in Balsall Heath',
    excerpt: 'Our early intervention model, applied in one of the UK\'s most diverse urban communities, led to a 35% reduction in crisis referrals within 18 months of launch.',
    gradient: 'from-purple-700 to-indigo-600',
  },
]

export default function OurWork() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="What We Do & How"
        subtitle="Our programmes are evidence-based, community-led, and designed for lasting impact. Explore how we're making a difference across the UK and beyond."
      />

      {/* Programmes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Programmes"
            title="Our Core Programmes"
            subtitle="Each programme is carefully designed based on evidence of what works, adapted for local context, and continuously evaluated for impact."
            center
          />
          <div className="mt-12 space-y-12">
            {programmes.map((prog, i) => (
              <div
                key={prog.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${prog.tagColor}`}>{prog.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{prog.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{prog.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {prog.stats.map(stat => (
                      <div key={stat.label} className="text-center bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-navy">{stat.value}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'order-2 lg:order-1' : ''}>
                  <div className={`aspect-video bg-gradient-to-br ${prog.gradient} rounded-2xl flex items-center justify-center`}>
                    <div className="text-white/30 text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">{prog.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Case Studies"
            title="Stories of Change"
            subtitle="Real places, real people, real impact. Each story represents hundreds more across the UK."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {caseStudies.map(cs => (
              <div key={cs.title} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 group">
                <div className={`h-40 bg-gradient-to-br ${cs.gradient} flex items-center justify-center`}>
                  <span className="text-white/40 text-sm">📍 {cs.location}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.location}</span>
                  <h3 className="font-bold text-navy mt-1 mb-3 group-hover:text-navy-light transition-colors">{cs.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.excerpt}</p>
                  <button className="mt-4 text-navy font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Our Approach"
              title="How We Work"
              subtitle="Our model is built on four interconnected pillars that together create sustainable, community-owned change."
              center
            />
            <div className="mt-12 space-y-6">
              {[
                { step: '01', title: 'Listen & Learn', desc: 'We begin by genuinely listening. Community needs assessments, resident consultations, and data analysis shape every programme we design.' },
                { step: '02', title: 'Co-Design', desc: 'Programmes are co-designed with community members, not for them. Local knowledge is as important as academic evidence.' },
                { step: '03', title: 'Implement & Support', desc: 'Our frontline teams work alongside communities, providing the resources, training, and support needed to deliver meaningful change.' },
                { step: '04', title: 'Evaluate & Share', desc: 'Rigorous evaluation tells us what works. We publish our findings openly so the whole sector can learn and improve.' },
              ].map(item => (
                <div key={item.step} className="flex gap-6 items-start">
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

      {/* CTA */}
      <section className="section-padding bg-accent/5 border-y border-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Help Us Do More</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Every programme you've read about was made possible by supporters like you.
            Your donation funds the next community we reach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="btn-accent">Donate Now</Link>
            <Link to="/get-involved" className="btn-primary">Get Involved</Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
