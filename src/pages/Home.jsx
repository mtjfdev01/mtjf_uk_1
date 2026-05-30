import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import NewsletterSection from '../components/NewsletterSection'

const whatWeDo = [
  {
    icon: '🌱',
    title: 'Community Support',
    description: 'We intend to work directly alongside communities, listening first and acting on what people actually need — not what we assume they need.',
  },
  {
    icon: '⚖️',
    title: 'Advocacy & Justice',
    description: 'We are committed to standing up for those whose voices go unheard — working to challenge inequality and promote fairness in our society.',
  },
  {
    icon: '🤲',
    title: 'Practical Help',
    description: 'Alongside advocacy, we believe in getting hands-on. We plan to deliver practical, direct support to individuals and families who need it most.',
  },
  {
    icon: '🤝',
    title: 'Building Partnerships',
    description: 'We know we cannot do this alone. We are actively seeking partnerships with other charities, local organisations, and community groups.',
  },
  {
    icon: '📣',
    title: 'Raising Awareness',
    description: 'Change starts with understanding. We aim to raise awareness around the issues we care about and help others engage meaningfully.',
  },
  {
    icon: '🌍',
    title: 'Long-Term Vision',
    description: 'We are thinking beyond the immediate. Our goal is to build something sustainable that creates genuine, lasting change over time.',
  },
]

const whyJoin = [
  {
    icon: '🕊️',
    title: 'Be Part of the Beginning',
    description: 'There is something special about joining a cause from day one. Your support now will shape everything we become.',
  },
  {
    icon: '💡',
    title: 'Help Shape Our Direction',
    description: 'As a new organisation, we are still listening and learning. Your voice as an early supporter genuinely matters to us.',
  },
  {
    icon: '🔒',
    title: 'Honest & Transparent',
    description: 'We will not inflate numbers or make claims we cannot back up. We are committed to full transparency as we grow.',
  },
  {
    icon: '💙',
    title: 'Purpose-Driven',
    description: 'Every decision we make is guided by our core values — mercy, justice, compassion, and community. Not by politics or profit.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-dark via-navy to-navy-light overflow-hidden">

        {/* Background dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2" />

        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full bg-white/15 text-white">
              Just Launched · UK-Based Charity
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              From Mercy{' '}
              <span className="text-accent">to Justice</span>{' '}
              — We Begin Today
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              MTJF is a brand new UK charity, built on a simple belief: that mercy and justice
              must go hand in hand. We are at the very start of our journey, and we are inviting
              you to be part of it from the very first step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" className="btn-accent text-base px-8 py-4">
                Support Our Launch
              </Link>
              <Link to="/about" className="btn-outline-white text-base px-8 py-4">
                Learn More
              </Link>
            </div>

            {/* Honest launch note */}
            <div className="mt-12 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 max-w-xl">
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="font-semibold text-white">We are just getting started.</span>{' '}
                We have no grand statistics yet — only a clear vision, a committed founding team,
                and a genuine desire to make a difference. Your early support makes that possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Who We Are"
                title="A New Voice for Mercy & Justice"
              />
              <p className="text-gray-600 mt-4 mb-4 leading-relaxed">
                Mercy to Justice (MTJF) was established in the United Kingdom with one purpose:
                to serve communities with compassion and fight for fairness with integrity.
                We are newly formed, but our conviction is long-held.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We believe that charity is not just about giving — it is about listening, standing
                alongside people, and advocating for systemic change. That is what we are here to do.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are at the beginning of our story, and we want to build it with you.
                As an early supporter, you are not just donating — you are helping to define
                what MTJF becomes.
              </p>
              <Link to="/about" className="btn-primary">Our Story</Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center">
                <div className="text-center text-white/30">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Add your team or community photo here</p>
                </div>
              </div>
              {/* Founding note card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-lg">🚀</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">We launched</div>
                    <div className="text-navy font-bold">2025 — Year One</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Our Focus"
            title="What We Plan to Do"
            subtitle="We are still in our earliest days, but our intentions are clear. Here is what we are working towards — and what your support will help us build."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whatWeDo.map(item => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/our-work" className="btn-primary">See Our Plans</Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Why Now?"
            title="Why Support Us From the Start?"
            subtitle="We have no track record yet — and we are honest about that. But here is why joining us early matters."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyJoin.map(item => (
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

      {/* Donate CTA */}
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
              label="Support Us"
              title="Your Donation Starts Everything"
              subtitle="We are not asking you to trust a long track record. We are asking you to believe in a vision — and help us turn it into reality, starting now."
              center
              light
            />
            <div className="mt-10 bg-white/10 border border-white/20 rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-sm leading-relaxed">
                Right now, your donation helps us with the fundamental costs of setting up:
                registration, operations, building our first programmes, and reaching the first
                communities we aim to serve. Every pound at this stage goes further than you think.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="btn-accent text-base px-10 py-4">
                Make a Donation
              </Link>
              <Link to="/get-involved" className="btn-outline-white text-base px-10 py-4">
                Other Ways to Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Volunteer"
                title="Help Us Build This — With Your Time"
              />
              <p className="text-gray-600 mt-4 mb-5 leading-relaxed">
                As a brand new organisation, volunteers are not just helpful — they are essential.
                If you have skills, time, or simply a willingness to help, we want to hear from you.
                No experience required. Just compassion.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are looking for people who can help with outreach, administration, communications,
                community engagement, and more. If you want to shape something from the ground up,
                this is your opportunity.
              </p>
              <Link to="/get-involved" className="btn-primary">Get Involved</Link>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-10 text-center">
              <span className="text-8xl">🙋</span>
              <h3 className="text-navy font-bold text-xl mt-4 mb-2">We Need Volunteers Now</h3>
              <p className="text-gray-600 text-sm mb-6">
                Be among the first. Help us lay the foundations and become a core part of
                what MTJF stands for.
              </p>
              <Link to="/get-involved" className="btn-accent">Volunteer With Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </>
  )
}
