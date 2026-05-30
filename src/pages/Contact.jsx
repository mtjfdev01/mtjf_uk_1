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
  { label: 'Feedback', value: 'feedback' },
]

const faqs = [
  {
    q: 'Are you a registered charity?',
    a: 'We are currently going through the Charity Commission registration process. We will publish our registration number as soon as it is confirmed.',
  },
  {
    q: 'How can I volunteer?',
    a: 'Visit our Get Involved page to see current volunteer opportunities and submit an expression of interest. We will follow up personally.',
  },
  {
    q: 'How can I stay updated?',
    a: 'Sign up to our newsletter at the bottom of this page. We send honest, regular updates on our progress.',
  },
  {
    q: 'Can I donate by bank transfer?',
    a: 'Yes. Please contact us via the form below and we will send you our bank details.',
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
        title="Get in Touch"
        subtitle="We read every message personally and aim to respond within 2 working days."
      />

      {/* Info cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '✉️', title: 'Email', lines: ['info@mtjf.org.uk', 'Response within 2 working days'] },
              { icon: '📍', title: 'Location', lines: ['United Kingdom', 'Operating nationally'] },
              { icon: '🕐', title: 'Hours', lines: ['Mon–Fri', 'Best efforts basis'] },
            ].map(item => (
              <div key={item.title} className="card text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2 text-sm">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className={`text-sm ${i === 0 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeading label="Message" title="Send a Message" />
              <div className="mt-8">
                {submitted ? (
                  <div className="card text-center py-10 shadow-md">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-navy mb-2">Message received.</h3>
                    <p className="text-gray-600">
                      We will reply to <strong>{formData.email}</strong> within 2 working days.
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
                        <label className="label">Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="label">Topic *</label>
                      <select name="department" required value={formData.department} onChange={handleChange} className="input-field">
                        <option value="">Please select</option>
                        {departments.map(d => (
                          <option key={d.value} value={d.value}>{d.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">Subject *</label>
                      <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="input-field" placeholder="Brief subject" />
                    </div>
                    <div>
                      <label className="label">Message *</label>
                      <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="input-field resize-none" placeholder="Your message..." />
                    </div>
                    <button type="submit" className="btn-primary w-full py-4">Send Message</button>
                    <p className="text-xs text-gray-400">We comply with UK GDPR. Your data will not be shared.</p>
                  </form>
                )}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <SectionHeading label="FAQ" title="Common Questions" />
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
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
