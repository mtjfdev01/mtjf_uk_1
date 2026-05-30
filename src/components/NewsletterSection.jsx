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
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Our Updates
          </h2>
          <p className="text-white/70 mb-8 text-base leading-relaxed">
            Join thousands of supporters and receive our latest news, impact stories, and opportunities
            to get involved — delivered straight to your inbox.
          </p>

          {submitted ? (
            <div className="bg-white/10 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold text-lg">Thank you for subscribing!</p>
              <p className="text-white/70 text-sm mt-1">We'll be in touch with our latest updates.</p>
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

          <p className="text-white/40 text-xs mt-4">
            No spam, ever. Unsubscribe at any time. By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}
