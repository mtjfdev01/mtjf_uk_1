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
    description: 'Help us connect with communities — attending local events, having conversations, and letting people know MTJF exists.',
  },
  {
    icon: '💻',
    title: 'Digital & Social Media',
    commitment: 'A few hours/week',
    location: 'Remote',
    description: 'We need help building our online presence — creating content, managing social channels, and growing our audience from zero.',
  },
  {
    icon: '✍️',
    title: 'Writing & Communications',
    commitment: 'Project-based',
    location: 'Remote',
    description: 'If you are a confident writer, we need help with newsletters, website content, grant applications, and other written materials.',
  },
  {
    icon: '🎨',
    title: 'Design & Creativity',
    commitment: 'Project-based',
    location: 'Remote',
    description: 'Graphic designers, illustrators, video editors — help us look and sound credible as a new organisation without a big budget.',
  },
  {
    icon: '📋',
    title: 'Administration & Operations',
    commitment: 'Flexible',
    location: 'Remote or in-person',
    description: 'Charities run on behind-the-scenes work. If you are organised and reliable, we have a place for you in our team.',
  },
  {
    icon: '🏢',
    title: 'Trustee / Governance',
    commitment: 'Approx. 4–6 meetings/year',
    location: 'UK (hybrid)',
    description: 'We are looking for founding trustees to help govern MTJF responsibly. Legal, financial, or charity sector experience is welcome.',
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
        title="We Need You — Genuinely"
        subtitle="As a brand new organisation, every volunteer, every donor, and every supporter counts. There is no small contribution at this stage. Join us and help build MTJF from the ground up."
      />

      {/* Three ways */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🙋',
                title: 'Volunteer',
                description: 'Give your time and skills. As a new organisation, volunteers are essential — not optional. Every role matters right now.',
                cta: 'See Roles',
                href: '#volunteer',
                border: 'border-navy',
                bg: 'bg-blue-50',
              },
              {
                icon: '💷',
                title: 'Donate',
                description: 'Your donation at this early stage directly funds our ability to set up, reach communities, and launch our first programmes.',
                cta: 'Donate Now',
                href: '/donate',
                border: 'border-accent',
                bg: 'bg-orange-50',
                highlight: true,
              },
              {
                icon: '📢',
                title: 'Spread the Word',
                description: 'You do not need money or skills to help — just tell people about us. Share our page, mention us to friends. Awareness is everything at this stage.',
                cta: 'Get in Touch',
                href: '/contact',
                border: 'border-green-600',
                bg: 'bg-green-50',
              },
            ].map(item => (
              <div key={item.title} className={`rounded-2xl border-2 ${item.border} ${item.bg} p-8 text-center flex flex-col items-center`}>
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
            title="Volunteer Roles We're Looking to Fill"
            subtitle="These are the areas where we most need help right now. All roles are unpaid and flexible. Full support will be provided — we are building this together."
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
            Don't see your skill listed? We are open to all offers of help. Tell us what you can do.
          </p>
        </div>
      </section>

      {/* Fundraise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Fundraise"
                title="Fundraise on Our Behalf"
              />
              <p className="text-gray-600 mt-4 mb-5 leading-relaxed">
                Whether you want to organise a fundraising event, run a sponsored challenge,
                or simply collect donations from friends and family — we welcome it all.
                At this stage, every fundraising effort is genuinely significant.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get in touch and we will support you with everything we can — materials,
                messaging, and our genuine gratitude.
              </p>
              <Link to="/contact" className="btn-primary">Register Your Fundraiser</Link>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-10 text-center">
              <span className="text-7xl">🏃</span>
              <h3 className="text-navy font-bold text-xl mt-4 mb-2">Any Fundraising Helps</h3>
              <p className="text-gray-600 text-sm mb-6">
                Sponsored walk. Bake sale. Birthday donation. Community quiz night.
                Whatever you can organise — it all counts at this stage of our journey.
              </p>
              <Link to="/contact" className="btn-accent">Tell Us Your Idea</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            label="For Organisations"
            title="Corporate & Institutional Support"
            subtitle="If you represent a business, school, faith community, or other organisation that wants to support MTJF's launch, we want to hear from you."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-2xl mx-auto">
            {[
              {
                icon: '💳',
                title: 'Donate on Behalf of Your Organisation',
                description: 'Corporate donations at this stage directly fund our ability to launch. We can provide acknowledgement and updates on how the funds are used.',
              },
              {
                icon: '👥',
                title: 'Team Volunteering',
                description: 'Bring your team together to support MTJF\'s early work. We can shape a meaningful day that fits your team\'s skills and your CSR goals.',
              },
              {
                icon: '🤝',
                title: 'Become a Founding Partner',
                description: 'Join us at the very beginning as an officially recognised founding partner. Help shape our direction and be part of our founding story.',
              },
              {
                icon: '📢',
                title: 'Spread the Word',
                description: 'Share our launch with your network, newsletter, or social media. For a new charity, visibility is invaluable.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl shadow-md p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary">Contact Us to Discuss</Link>
          </div>
        </div>
      </section>

      {/* Expression of Interest Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              label="Get Started"
              title="Express Your Interest"
              subtitle="Fill in this short form and we will be in touch as soon as we can. We respond to every message personally."
              center
            />
            <div className="mt-10 card shadow-lg">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-navy mb-2">Thank You So Much!</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We have received your message and a real person from our founding team will
                    reply to you personally. Your support at this stage means a great deal to us.
                  </p>
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
                        placeholder="Your name"
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
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Phone (optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+44 7700 000000"
                      />
                    </div>
                    <div>
                      <label className="label">How can you help? *</label>
                      <select
                        name="area"
                        required
                        value={formData.area}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Please select</option>
                        <option>Volunteering</option>
                        <option>Fundraising</option>
                        <option>Corporate / Organisational Support</option>
                        <option>Trusteeship</option>
                        <option>Spreading the Word</option>
                        <option>Something Else</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label">Tell us more (optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="What skills or experience do you bring? Any questions for us?"
                    />
                  </div>
                  <button type="submit" className="btn-accent w-full py-4">
                    Submit — We'll Be in Touch
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    We will not share your details with anyone. By submitting you agree to our Privacy Policy.
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
