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
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-white/15 text-white">
            Follow Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay With Us as We Grow
          </h2>
          <p className="text-white/70 mb-8 text-base leading-relaxed">
            We are just beginning. Sign up and we will keep you updated with honest news about
            our progress, our challenges, and how your support is making a difference — no spam, ever.
          </p>

          {submitted ? (
            <div className="bg-white/10 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold text-lg">You're on the list — thank you!</p>
              <p className="text-white/60 text-sm mt-1">We will be in touch as MTJF grows.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-xl border-0 bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button
                type="submit"
                className="btn-accent whitespace-nowrap px-7 py-3.5 rounded-xl"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-white/35 text-xs mt-4">
            No spam. Unsubscribe at any time. We respect your privacy and comply with UK GDPR.
          </p>
        </div>
      </div>
    </section>
  )
}
