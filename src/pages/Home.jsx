import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import NewsletterSection from '../components/NewsletterSection'

const whatWeDo = [
  {
    icon: '🌱',
    title: 'Community Support',
    description: 'Working directly alongside communities — listening first, then acting on what people actually need.',
  },
  {
    icon: '⚖️',
    title: 'Advocacy & Justice',
    description: 'Standing up for those whose voices go unheard, and challenging inequality wherever we find it.',
  },
  {
    icon: '🤲',
    title: 'Practical Help',
    description: 'Delivering hands-on, practical support to individuals and families who need it most.',
  },
  {
    icon: '🤝',
    title: 'Building Partnerships',
    description: 'Collaborating with other organisations, charities, and community groups to achieve more together.',
  },
  {
    icon: '📣',
    title: 'Raising Awareness',
    description: 'Creating opportunities for communities and organisations to engage meaningfully with the issues we work on.',
  },
  {
    icon: '🌍',
    title: 'Long-Term Thinking',
    description: 'Building for sustainability — so that our work creates genuine, lasting change over time.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-dark via-navy to-navy-light overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2" />

        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Mercy to Justice
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-10">
              A UK-based charity working to support communities, promote fairness,
              and advocate for those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" className="btn-accent text-base px-8 py-4">
                Donate
              </Link>
              <Link to="/about" className="btn-outline-white text-base px-8 py-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="About MTJF"
                title="Who We Are"
              />
              <p className="text-gray-600 mt-4 mb-4 leading-relaxed">
                Mercy to Justice (MTJF) is a UK charity established to serve communities
                with compassion and advocate for fairness with integrity.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that lasting change comes from genuinely listening to people,
                standing alongside them, and working together — not imposing solutions from above.
              </p>
              <Link to="/about" className="btn-primary">About Us</Link>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center">
              <div className="text-center text-white/25">
                <svg className="w-20 h-20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Our Work"
            title="What We Do"
            subtitle="We work across several interconnected areas, all rooted in the same core belief — that every person deserves dignity, support, and justice."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whatWeDo.map(item => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/our-work" className="btn-primary">Our Work</Link>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <SectionHeading
            label="Support Us"
            title="Make a Difference"
            subtitle="Your donation, however large or small, goes directly towards our work in communities across the UK."
            center
            light
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/donate" className="btn-accent text-base px-10 py-4">Donate Now</Link>
            <Link to="/get-involved" className="btn-outline-white text-base px-10 py-4">Get Involved</Link>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Volunteer"
                title="Give Your Time"
              />
              <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
                Volunteers are at the heart of what we do. Whether you have a few hours
                or a regular commitment, there is a role for you at MTJF.
                No specific experience needed — just a willingness to help.
              </p>
              <Link to="/get-involved" className="btn-primary">Get Involved</Link>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-10 text-center">
              <span className="text-7xl">🙋</span>
              <p className="text-gray-500 text-sm mt-6">
                Volunteering opportunities available across the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
