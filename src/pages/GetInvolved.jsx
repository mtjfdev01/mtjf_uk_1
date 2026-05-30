import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const volunteerRoles = [
  {
    icon: '📋',
    title: 'Community Coordinator',
    commitment: '1 day/week',
    location: 'Various UK locations',
    description: 'Help organise and facilitate our community programmes, supporting frontline staff and engaging local residents.',
  },
  {
    icon: '💻',
    title: 'Digital Skills Mentor',
    commitment: '2–3 hrs/week',
    location: 'Remote or in-person',
    description: 'Share your digital knowledge with individuals looking to build essential technology skills for work and everyday life.',
  },
  {
    icon: '📣',
    title: 'Fundraising Champion',
    commitment: 'Flexible',
    location: 'Your local area',
    description: 'Help us raise vital funds by organising local events, sponsored challenges, or simply spreading the word.',
  },
  {
    icon: '🖊️',
    title: 'Grant Writer',
    commitment: 'Project-based',
    location: 'Remote',
    description: 'Use your writing skills to help us secure grant funding that keeps our programmes running and expanding.',
  },
  {
    icon: '🎨',
    title: 'Creative & Communications',
    commitment: 'Project-based',
    location: 'Remote',
    description: 'Designers, photographers, and storytellers — help us communicate our impact and reach more supporters.',
  },
  {
    icon: '🏢',
    title: 'Trustee',
    commitment: '4–6 meetings/year',
    location: 'London (hybrid)',
    description: 'Join our Board and help provide strategic oversight and governance for the organisation. Legal, finance, or sector expertise welcome.',
  },
]

const corporateOptions = [
  {
    title: 'Payroll Giving',
    description: 'The easiest way for employees to donate tax-efficiently, straight from their salary. We handle the admin.',
    icon: '💳',
  },
  {
    title: 'Match Funding',
    description: 'Double the impact of your employees\' charitable giving by matching their donations pound for pound.',
    icon: '✖️2',
  },
  {
    title: 'Team Volunteering',
    description: 'Bring your team together for a day of meaningful volunteering. We\'ll tailor the experience to your team\'s skills.',
    icon: '👥',
  },
  {
    title: 'Strategic Partnership',
    description: 'For longer-term, deeper engagement. Co-develop projects, share expertise, and align your CSR with lasting impact.',
    icon: '🤝',
  },
]

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', role: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Get Involved"
        title="Join the Movement"
        subtitle="There are many ways to make a difference with Hopefield Trust — whatever your time, skills, or resources, we have an opportunity for you."
      />

      {/* Ways to Get Involved */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🙋',
                title: 'Volunteer',
                description: 'Give your time and skills to support our work directly in communities across the UK.',
                cta: 'See Opportunities',
                href: '#volunteer',
                color: 'bg-blue-50 border-navy',
              },
              {
                icon: '💷',
                title: 'Donate',
                description: 'Make a one-off or regular donation that directly funds our life-changing programmes.',
                cta: 'Donate Now',
                href: '/donate',
                color: 'bg-orange-50 border-accent',
                highlight: true,
              },
              {
                icon: '🏢',
                title: 'Partner With Us',
                description: 'Engage your business, school, or organisation in meaningful corporate partnership.',
                cta: 'Partner With Us',
                href: '#corporate',
                color: 'bg-green-50 border-green-600',
              },
            ].map(item => (
              <div key={item.title} className={`rounded-2xl border-2 ${item.color} p-8 text-center flex flex-col items-center`}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
                {item.href.startsWith('/') ? (
                  <Link to={item.href} className={item.highlight ? 'btn-accent' : 'btn-primary'}>
                    {item.cta}
                  </Link>
                ) : (
                  <a href={item.href} className={item.highlight ? 'btn-accent' : 'btn-primary'}>
                    {item.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section id="volunteer" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Volunteer"
            title="Current Volunteer Opportunities"
            subtitle="We have roles to suit every schedule and skill set. All volunteers receive full induction, ongoing support, and a reference letter upon request."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {volunteerRoles.map(role => (
              <div key={role.title} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">{role.icon}</span>
                </div>
                <h3 className="font-bold text-navy mb-1">{role.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{role.commitment}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{role.location}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{role.description}</p>
                <button className="mt-4 text-navy font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200">
                  Apply for This Role
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraise Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Fundraise"
                title="Fundraise for Hopefield"
              />
              <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
                Whether it's a sponsored run, a bake sale, a birthday donation, or a skydive —
                any fundraising activity makes a real difference. We'll provide everything you need
                to get started.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Fundraising pack with tips and templates',
                  'Personalised online fundraising page',
                  'Gift Aid registration support',
                  'Dedicated fundraising support contact',
                  'Social media promotion of your effort',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">Register Your Fundraiser</Link>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-10 text-center">
              <span className="text-7xl">🏃</span>
              <h3 className="text-navy font-bold text-xl mt-4 mb-2">Challenge Events</h3>
              <p className="text-gray-600 text-sm mb-6">
                We have charity places in major UK events including the London Marathon, Great North Run,
                and more. Apply for your place today.
              </p>
              <Link to="/contact" className="btn-accent">Apply for a Place</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section id="corporate" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="Corporate"
            title="Partner with Hopefield"
            subtitle="Align your business with values-driven, evidence-based work. Our corporate partnerships create real shared value — for your organisation and the communities we serve."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {corporateOptions.map(opt => (
              <div key={opt.title} className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-3xl mb-3">{opt.icon}</div>
                <h3 className="font-bold text-navy mb-2">{opt.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary">Discuss a Partnership</Link>
          </div>
        </div>
      </section>

      {/* Volunteer Expression Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              label="Express Interest"
              title="Ready to Get Involved?"
              subtitle="Fill in this short form and a member of our team will be in touch within 48 hours to discuss how you can help."
              center
            />
            <div className="mt-10 card shadow-lg">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
                  <p className="text-gray-600">We've received your expression of interest and will be in touch within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+44 7700 900000"
                      />
                    </div>
                    <div>
                      <label className="label">I'm interested in *</label>
                      <select
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select an option</option>
                        <option>Volunteering</option>
                        <option>Corporate Partnership</option>
                        <option>Fundraising</option>
                        <option>Trusteeship</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label">Tell us a bit about yourself</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Any relevant skills, experience, or availability..."
                    />
                  </div>
                  <button type="submit" className="btn-accent w-full">
                    Submit Expression of Interest
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to our Privacy Policy. We will not share your details with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
