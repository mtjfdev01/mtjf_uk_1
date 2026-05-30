import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const departments = [
  { label: 'General Enquiry', value: 'general' },
  { label: 'Donations & Fundraising', value: 'donations' },
  { label: 'Volunteering', value: 'volunteering' },
  { label: 'Corporate Partnerships', value: 'corporate' },
  { label: 'Media & Press', value: 'press' },
  { label: 'Complaints', value: 'complaints' },
]

const officeInfo = [
  {
    icon: '🏢',
    title: 'Registered Office',
    lines: ['Hopefield House', '14 Charity Lane', 'London', 'EC1A 1AA'],
  },
  {
    icon: '📞',
    title: 'Phone',
    lines: ['0300 123 4567', 'Mon–Fri, 9am–5pm'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['info@hopefieldtrust.org.uk', 'We respond within 2 working days'],
  },
]

const faqs = [
  {
    q: 'How can I find out how my donation is being used?',
    a: 'We publish detailed annual reports and impact updates. Monthly donors receive a quarterly impact email. You can also request a printed impact report by contacting us.',
  },
  {
    q: 'Can I donate in memory of someone?',
    a: 'Yes — we welcome tribute donations and can provide a personalised acknowledgement letter for families. Please contact our fundraising team for assistance.',
  },
  {
    q: 'How do I cancel a regular donation?',
    a: 'You can cancel anytime by contacting us via phone or email with your donor reference number. We will process your request within 5 working days.',
  },
  {
    q: 'I want to leave a gift in my will. Who should I speak to?',
    a: 'Legacies are one of the most impactful ways to support our work. Please contact our legacy team at legacies@hopefieldtrust.org.uk for a confidential conversation.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', department: '', message: '',
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
        label="Contact Us"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you have a question, a partnership idea, or just want to learn more — our team is here to help."
      />

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {officeInfo.map(item => (
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
            {/* Contact Form */}
            <div>
              <SectionHeading
                label="Send a Message"
                title="Write to Us"
                subtitle="Fill in the form and we'll respond within 2 working days."
              />
              <div className="mt-8">
                {submitted ? (
                  <div className="card text-center py-10 shadow-md">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-navy mb-2">Message Received!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out, <strong>{formData.name}</strong>.
                      We'll reply to <strong>{formData.email}</strong> within 2 working days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="Jane Smith" />
                      </div>
                      <div>
                        <label className="label">Email Address *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="jane@example.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label">Phone (optional)</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="+44 7700 900000" />
                      </div>
                      <div>
                        <label className="label">Department *</label>
                        <select name="department" required value={formData.department} onChange={handleChange} className="input-field">
                          <option value="">Select department</option>
                          {departments.map(d => (
                            <option key={d.value} value={d.value}>{d.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="label">Subject *</label>
                      <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="input-field" placeholder="How can we help?" />
                    </div>
                    <div>
                      <label className="label">Message *</label>
                      <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="input-field resize-none" placeholder="Tell us more..." />
                    </div>
                    <button type="submit" className="btn-primary w-full py-4">
                      Send Message
                    </button>
                    <p className="text-xs text-gray-400">
                      Your data will be held securely in line with our Privacy Policy and GDPR obligations.
                      We will not share your information with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <SectionHeading
                label="FAQ"
                title="Frequently Asked Questions"
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

              {/* Media enquiries */}
              <div className="mt-8 bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Media Enquiries</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  For press enquiries, interview requests, or access to our spokespeople and experts,
                  please contact our communications team directly.
                </p>
                <div className="text-sm text-white/90">
                  <p>📧 press@hopefieldtrust.org.uk</p>
                  <p className="mt-1">📞 0300 123 4568 (media line)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100 h-72 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <svg className="w-16 h-16 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm font-medium">Interactive Map</p>
          <p className="text-xs mt-1">Replace with Google Maps embed or Mapbox integration</p>
          <p className="text-xs text-gray-400 mt-1">Hopefield House, 14 Charity Lane, London EC1A 1AA</p>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
