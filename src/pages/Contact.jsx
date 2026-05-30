import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const departments = [
  { label: 'General Enquiry', value: 'general' },
  { label: 'Volunteering', value: 'volunteering' },
  { label: 'Donations & Fundraising', value: 'donations' },
  { label: 'Partnerships', value: 'partnerships' },
  { label: 'Media & Press', value: 'press' },
  { label: 'Feedback or Suggestions', value: 'feedback' },
]

const faqs = [
  {
    q: 'You have just launched — are you a registered charity yet?',
    a: 'We are currently going through the Charity Commission registration process. We are operating as an unincorporated organisation in the meantime and will publish our registration number as soon as it is confirmed. We are committed to full legal compliance and transparency throughout.',
  },
  {
    q: 'Where will my donation actually go right now?',
    a: 'At this stage, donations directly fund our setup costs — charity registration fees, essential operations, outreach materials, and the groundwork for our first programmes. We will publish a clear breakdown of all expenditure once we are formally registered.',
  },
  {
    q: 'Can I volunteer even though you have only just started?',
    a: 'Absolutely — in fact, this is the best time to get involved. As a founding volunteer, you will help shape who we are and what we do. We are actively welcoming expressions of interest across a wide range of skills and time commitments.',
  },
  {
    q: 'How can I stay updated on MTJF\'s progress?',
    a: 'The best way is to sign up for our newsletter at the bottom of this page. We will send honest, regular updates — including what we are working on, challenges we face, and milestones we reach.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', department: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Contact"
        title="Talk to Us"
        subtitle="We are a small founding team and we read every message personally. We do not have a call centre — just real people who care. Get in touch."
      />

      {/* Contact info cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '✉️',
                title: 'Email Us',
                lines: ['info@mtjf.org.uk', 'We aim to reply within 2 working days'],
              },
              {
                icon: '📍',
                title: 'Based In',
                lines: ['United Kingdom', 'We operate nationally'],
              },
              {
                icon: '🕐',
                title: 'Response Time',
                lines: ['Within 2 working days', 'Mon–Fri, best efforts'],
              },
            ].map(item => (
              <div key={item.title} className="card text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className={`text-sm ${i === 0 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeading
                label="Message Us"
                title="Send a Message"
                subtitle="Whether you want to volunteer, partner, donate, or simply learn more — we would love to hear from you."
              />
              <div className="mt-8">
                {submitted ? (
                  <div className="card text-center py-10 shadow-md">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-navy mb-2">Message Received!</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. A real member of our team
                      will reply to <strong>{formData.email}</strong> personally within 2 working days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="label">Email Address *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="label">What is this about? *</label>
                      <select name="department" required value={formData.department} onChange={handleChange} className="input-field">
                        <option value="">Please select</option>
                        {departments.map(d => (
                          <option key={d.value} value={d.value}>{d.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">Subject *</label>
                      <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="input-field" placeholder="Brief subject line" />
                    </div>
                    <div>
                      <label className="label">Your Message *</label>
                      <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="input-field resize-none" placeholder="Tell us whatever is on your mind..." />
                    </div>
                    <button type="submit" className="btn-primary w-full py-4">
                      Send Message
                    </button>
                    <p className="text-xs text-gray-400">
                      Your data will be held securely and never shared. We comply with UK GDPR.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <SectionHeading
                label="FAQ"
                title="Common Questions"
              />
              <div className="mt-8 space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-medium text-navy text-sm pr-4">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-8 bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">A Note From Our Team</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We are a small, newly formed team. We do not have a switchboard or a large
                  communications department. But we do read every message, and we will reply to
                  every genuine enquiry. We appreciate your patience as we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
