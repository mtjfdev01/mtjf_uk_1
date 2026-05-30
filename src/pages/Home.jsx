import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'
import Card from '../components/Card'
import NewsletterSection from '../components/NewsletterSection'

const stats = [
  { value: '250K+', label: 'Lives Impacted', icon: '🤝' },
  { value: '180+', label: 'Active Projects', icon: '📋' },
  { value: '40+', label: 'UK Communities', icon: '🏘️' },
  { value: '£12M+', label: 'Funds Raised', icon: '💷' },
]

const whatWeDo = [
  {
    icon: '🌱',
    title: 'Community Development',
    description: 'We work hand-in-hand with local communities to identify needs, build capacity, and create sustainable programmes that last.',
  },
  {
    icon: '🤲',
    title: 'Direct Support',
    description: 'Our frontline teams provide direct, practical assistance to individuals and families who need it most, when they need it most.',
  },
  {
    icon: '📣',
    title: 'Advocacy & Policy',
    description: 'We amplify the voices of those we serve, working with government, local authorities, and partners to drive systemic change.',
  },
  {
    icon: '🔬',
    title: 'Research & Evidence',
    description: 'Our work is grounded in evidence. We invest in research to understand what works and share learnings with the wider sector.',
  },
  {
    icon: '🤝',
    title: 'Partnerships',
    description: 'We believe change happens together. We collaborate with charities, businesses, and institutions to maximise collective impact.',
  },
  {
    icon: '🌍',
    title: 'International Reach',
    description: 'Our expertise extends beyond UK borders. We support partner organisations internationally to replicate proven models.',
  },
]

const whySupport = [
  {
    icon: '✅',
    title: 'Fully Transparent',
    description: 'We publish annual reports, financial accounts, and impact data. Every pound is accounted for.',
  },
  {
    icon: '🏆',
    title: 'Award-Winning Work',
    description: 'Recognised by the Charity Commission and sector peers for excellence in governance and impact delivery.',
  },
  {
    icon: '🔒',
    title: 'Trusted & Regulated',
    description: 'Registered with the Charity Commission for England & Wales and a member of the Fundraising Regulator.',
  },
  {
    icon: '💯',
    title: 'Real Impact',
    description: 'Over 25 years of proven results. We measure what matters and continuously improve our delivery.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-dark via-navy to-navy-light overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2" />

        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full bg-white/15 text-white">
              UK Registered Charity · Est. 1999
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Making a Lasting{' '}
              <span className="text-accent">Difference</span>{' '}
              Together
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Hopefield Trust has been at the heart of community change since 1999.
              We work alongside individuals, families, and communities across the UK
              to create lasting, meaningful impact — and we need your support to continue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" className="btn-accent text-base px-8 py-4">
                Donate Now
              </Link>
              <Link to="/about" className="btn-outline-white text-base px-8 py-4">
                Learn More
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Charity Commission Registered
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Fundraising Regulator Member
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Gift Aid Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Impact"
            title="Numbers That Matter"
            subtitle="Every statistic represents a real person, a real story. Here's what 25 years of dedicated work looks like."
            center
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map(stat => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="What We Do"
            title="Our Areas of Work"
            subtitle="We take a holistic approach to creating change — tackling root causes, not just symptoms, through a range of interconnected programmes."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whatWeDo.map(item => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/our-work" className="btn-primary">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading
                label="Our Story"
                title="25 Years of Community-Led Change"
                subtitle="Founded in 1999 by a group of passionate volunteers, Hopefield Trust has grown from a small community initiative into one of the UK's most respected charities."
              />
              <p className="text-gray-600 text-base leading-relaxed mt-4 mb-6">
                We believe that the people closest to a problem are best placed to solve it.
                That's why everything we do is shaped by the communities we serve. Our approach
                is person-centred, evidence-based, and always driven by genuine need.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Over two and a half decades, we've built deep roots across the UK, fostering trust,
                nurturing local leaders, and creating lasting infrastructure that communities
                continue to benefit from long after our direct involvement ends.
              </p>
              <Link to="/about" className="btn-primary">
                Read Our Story
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white/30">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Community Impact Photo</p>
                    </div>
                  </div>
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <span className="text-accent text-lg">💷</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Donated this year</div>
                      <div className="text-navy font-bold text-lg">£1.8 Million</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '72%' }} />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">72% of annual goal reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Why Choose Us"
            title="Why Support Hopefield Trust?"
            subtitle="We hold ourselves to the highest standards of transparency, governance, and impact. Here's what makes us different."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whySupport.map(item => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow duration-200">
                <div className="w-14 h-14 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Make a Difference"
              title="Your Donation Changes Lives"
              subtitle="Every contribution — no matter the size — directly funds our work in communities across the UK. Your generosity makes it possible."
              center
              light
            />
            <div className="grid grid-cols-3 gap-4 mt-10 mb-10">
              {[
                { amount: '£10', impact: 'Funds a community session' },
                { amount: '£25', impact: 'Supports a family for a week' },
                { amount: '£50', impact: 'Trains a local volunteer' },
              ].map(tier => (
                <div key={tier.amount} className="bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                  <div className="text-2xl font-bold text-white">{tier.amount}</div>
                  <div className="text-white/60 text-xs mt-1">{tier.impact}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="btn-accent text-base px-10 py-4">
                Donate Now
              </Link>
              <Link to="/get-involved" className="btn-outline-white text-base px-10 py-4">
                Other Ways to Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Volunteer"
                title="Give Your Time, Change a Life"
                subtitle="We have volunteering opportunities to suit everyone — from one-off days to regular commitments. No experience necessary; just a willingness to help."
              />
              <ul className="mt-6 mb-8 space-y-3">
                {[
                  'Flexible opportunities across the UK',
                  'Full training and support provided',
                  'Make real friends and build real skills',
                  'Count towards employer volunteering days',
                ].map(point => (
                  <li key={point} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/get-involved" className="btn-primary">
                Become a Volunteer
              </Link>
            </div>
            <div className="aspect-square max-w-md mx-auto w-full bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl">🤝</span>
                <p className="text-gray-400 mt-4 text-sm">2,400+ Active Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </>
  )
}
