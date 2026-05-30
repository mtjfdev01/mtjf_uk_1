import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const volunteerAreas = [
  {
    icon: '📣',
    title: 'Community Outreach',
    commitment: 'Flexible',
    location: 'Local to you',
    description: 'Help us connect with communities — attending local events and letting people know about MTJF.',
  },
  {
    icon: '💻',
    title: 'Digital & Social Media',
    commitment: 'A few hours/week',
    location: 'Remote',
    description: 'Help us build our online presence — creating content and managing our social channels.',
  },
  {
    icon: '✍️',
    title: 'Writing & Communications',
    commitment: 'Project-based',
    location: 'Remote',
    description: 'Support us with newsletters, website content, and other written materials.',
  },
  {
    icon: '🎨',
    title: 'Design & Creativity',
    commitment: 'Project-based',
    location: 'Remote',
    description: 'Graphic designers, illustrators, and video editors who can help us communicate our work.',
  },
  {
    icon: '📋',
    title: 'Administration',
    commitment: 'Flexible',
    location: 'Remote or in-person',
    description: 'Organised and reliable? We always need support with day-to-day operations and admin.',
  },
  {
    icon: '🏢',
    title: 'Trustee / Governance',
    commitment: 'Approx. 4–6 meetings/year',
    location: 'UK (hybrid)',
    description: 'Join our board and help govern MTJF responsibly. Legal, financial, or charity experience welcome.',
  },
]

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', area: '', message: '',
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
        title="Get Involved"
        subtitle="There are several ways to support MTJF — with your time, your skills, or a donation. Every contribution is welcome."
      />

      {/* Three ways */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🙋',
                title: 'Volunteer',
                description: 'Give your time and skills to support our work across a range of roles.',
                cta: 'See Roles',
                href: '#volunteer',
                border: 'border-navy',
              },
              {
                icon: '💷',
                title: 'Donate',
                description: 'Make a one-off or regular donation that directly funds our programmes.',
                cta: 'Donate',
                href: '/donate',
                border: 'border-accent',
                highlight: true,
              },
              {
                icon: '📢',
                title: 'Spread the Word',
                description: 'Tell people about us. Share our page, mention us to friends and colleagues.',
                cta: 'Contact Us',
                href: '/contact',
                border: 'border-gray-300',
              },
            ].map(item => (
              <div key={item.title} className={`rounded-2xl border-2 ${item.border} bg-gray-50 p-8 text-center flex flex-col items-center`}>
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
            title="Volunteer Roles"
            subtitle="All roles are unpaid and flexible. Full support provided."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {volunteerAreas.map(role => (
              <div key={role.title} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">{role.icon}</span>
                </div>
                <h3 className="font-bold text-navy mb-2">{role.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{role.commitment}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{role.location}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{role.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            Don't see your skill listed? Let us know what you can offer.
          </p>
        </div>
      </section>

      {/* Fundraise */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <SectionHeading
            label="Fundraise"
            title="Fundraise for MTJF"
            subtitle="Whether it's a sponsored run, a bake sale, or any other fundraising activity — we welcome it and will support you however we can."
            center
          />
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">Register Your Fundraiser</Link>
          </div>
        </div>
      </section>

      {/* Expression of Interest */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto">
          <SectionHeading
            label="Get Started"
            title="Express Your Interest"
            subtitle="Fill in this short form and we will be in touch."
            center
          />
          <div className="mt-10 card shadow-lg">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-navy mb-2">Thank you!</h3>
                <p className="text-gray-600">We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="label">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="label">Phone (optional)</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="+44 7700 000000" />
                  </div>
                  <div>
                    <label className="label">How can you help? *</label>
                    <select name="area" required value={formData.area} onChange={handleChange} className="input-field">
                      <option value="">Please select</option>
                      <option>Volunteering</option>
                      <option>Fundraising</option>
                      <option>Corporate Support</option>
                      <option>Trusteeship</option>
                      <option>Something Else</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label">Anything else (optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="input-field resize-none" placeholder="Skills, availability, questions..." />
                </div>
                <button type="submit" className="btn-accent w-full py-4">Submit</button>
                <p className="text-xs text-gray-400 text-center">
                  We will not share your details with anyone.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
