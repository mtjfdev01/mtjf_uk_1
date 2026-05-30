import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="bg-navy-dark py-16">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed">
            Sign up for updates on our work and how you can get involved.
          </p>
          {submitted ? (
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <p className="font-medium">You're subscribed — thank you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-xl border-0 bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button type="submit" className="btn-accent whitespace-nowrap px-7 py-3.5 rounded-xl">
                Subscribe
              </button>
            </form>
          )}
          <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
