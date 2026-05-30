import { useState } from 'react'
import PageHero from '../components/PageHero'
import NewsletterSection from '../components/NewsletterSection'

const presetAmounts = [5, 10, 25, 50, 100, 250]

const impactMap = {
  5: 'Helps cover essential admin and communications costs as we get started',
  10: 'Contributes to our outreach efforts to reach the communities we want to serve',
  25: 'Supports the cost of meetings, materials, and planning as we build our programmes',
  50: 'Helps fund a day of community consultation — listening to the people we aim to help',
  100: 'Contributes towards our formal charity registration and governance setup costs',
  250: 'Makes a significant contribution to getting our first programme off the ground',
}

export default function Donate() {
  const [frequency, setFrequency] = useState('monthly')
  const [selectedAmount, setSelectedAmount] = useState(25)
  const [customAmount, setCustomAmount] = useState('')
  const [giftAid, setGiftAid] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', address: '', postcode: '',
    cardName: '', cardNumber: '', expiry: '', cvv: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const displayAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount
  const giftAidValue = giftAid ? (displayAmount * 0.25).toFixed(2) : 0
  const impact = customAmount ? 'Makes a real difference to our launch and setup' : (impactMap[selectedAmount] || 'Makes a meaningful difference to our work')

  const handleAmountSelect = (amt) => {
    setSelectedAmount(amt)
    setCustomAmount('')
  }

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <PageHero label="Thank You" title="Your Donation is Confirmed" subtitle="You are now part of the MTJF story from the very beginning." />
        <section className="section-padding bg-white">
          <div className="container-custom max-w-lg text-center">
            <div className="card shadow-xl py-12">
              <div className="text-6xl mb-6">💙</div>
              <h2 className="text-2xl font-bold text-navy mb-4">Thank You, {formData.firstName}!</h2>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Your {frequency === 'monthly' ? 'monthly' : 'one-off'} donation of <strong>£{displayAmount}</strong> has been received.
                {giftAid && (
                  <span> With Gift Aid, your gift is worth <strong>£{(displayAmount * 1.25).toFixed(2)}</strong> to us — at no extra cost to you.</span>
                )}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A confirmation will be sent to <strong>{formData.email}</strong>. You are one of
                our very first donors, and that genuinely means the world to us.
              </p>
              <div className="bg-blue-50 rounded-xl p-4 mb-6 text-sm text-navy leading-relaxed">
                As we grow, we will keep you updated on exactly how your donation is being used.
                We believe in full transparency — because you deserve to know.
              </div>
              <button onClick={() => window.location.href = '/'} className="btn-primary">
                Return Home
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        label="Donate"
        title="Support Our Launch"
        subtitle="We are just getting started. Your donation right now — however large or small — directly helps us build MTJF into something that can genuinely make a difference."
      />

      {/* Honest context banner */}
      <div className="bg-blue-50 border-b border-blue-100 py-5">
        <div className="container-custom">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <span className="text-xl flex-shrink-0">💡</span>
            <p className="text-blue-900 text-sm leading-relaxed">
              <strong>Where does your donation go right now?</strong> At this early stage, donations
              fund our registration costs, essential operations, outreach, and the groundwork
              needed to launch our first community programmes. We will report on this fully and honestly.
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="card shadow-lg">
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-8">
                  {[1, 2].map(s => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        step >= s ? 'bg-navy text-white' : 'bg-gray-100 text-gray-400'
                      }`}>{s}</div>
                      <span className={`text-sm font-medium ${step >= s ? 'text-navy' : 'text-gray-400'}`}>
                        {s === 1 ? 'Choose Amount' : 'Your Details'}
                      </span>
                      {s < 2 && <div className="w-8 h-0.5 bg-gray-200 mx-1" />}
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <div>
                    {/* Frequency */}
                    <div className="mb-6">
                      <label className="label">Donation Frequency</label>
                      <div className="flex gap-3 mt-1">
                        {[
                          { key: 'monthly', label: 'Monthly' },
                          { key: 'single', label: 'One-off' },
                        ].map(f => (
                          <button
                            key={f.key}
                            onClick={() => setFrequency(f.key)}
                            className={`flex-1 py-3 px-5 rounded-xl border-2 font-semibold text-sm transition-all duration-200 ${
                              frequency === f.key
                                ? 'border-navy bg-navy text-white'
                                : 'border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
                            }`}
                          >
                            {f.label}
                          </button>
                        ))}
                      </div>
                      {frequency === 'monthly' && (
                        <p className="text-xs text-accent mt-2 font-medium">
                          ⭐ Regular giving helps us plan ahead and build sustainably
                        </p>
                      )}
                    </div>

                    {/* Amount selector */}
                    <div className="mb-6">
                      <label className="label">Select Amount</label>
                      <div className="grid grid-cols-3 gap-3 mt-1">
                        {presetAmounts.map(amt => (
                          <button
                            key={amt}
                            onClick={() => handleAmountSelect(amt)}
                            className={`py-3 rounded-xl border-2 font-bold text-base transition-all duration-200 ${
                              selectedAmount === amt && !customAmount
                                ? 'border-accent bg-accent text-white shadow-md'
                                : 'border-gray-200 text-gray-700 hover:border-accent hover:text-accent'
                            }`}
                          >
                            £{amt}
                          </button>
                        ))}
                      </div>
                      <div className="mt-3">
                        <label className="label">Or enter your own amount</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">£</span>
                          <input
                            type="number"
                            min="1"
                            value={customAmount}
                            onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                            className="input-field pl-8"
                            placeholder="Other amount"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Impact */}
                    {displayAmount > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">💚</span>
                        <div>
                          <p className="text-green-800 font-semibold text-sm">What this supports</p>
                          <p className="text-green-700 text-sm mt-0.5">{impact}</p>
                        </div>
                      </div>
                    )}

                    {/* Gift Aid */}
                    <div className="bg-blue-50 rounded-xl p-4 mb-6">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={giftAid}
                          onChange={e => setGiftAid(e.target.checked)}
                          className="mt-0.5 w-4 h-4 accent-navy"
                        />
                        <div>
                          <span className="font-semibold text-navy text-sm">Boost my donation with Gift Aid</span>
                          <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                            I am a UK taxpayer and I understand that if I pay less Income Tax and/or Capital Gains Tax
                            than the amount of Gift Aid claimed on all my donations in the relevant tax year, it is my
                            responsibility to pay any difference.
                            {giftAid && displayAmount > 0 && (
                              <span className="block mt-1 text-green-700 font-medium">
                                + £{giftAidValue} added by HMRC at no cost to you
                              </span>
                            )}
                          </p>
                        </div>
                      </label>
                    </div>

                    <button
                      onClick={() => displayAmount > 0 && setStep(2)}
                      disabled={displayAmount <= 0}
                      className="btn-accent w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue — £{displayAmount || 0}{frequency === 'monthly' ? '/month' : ''}
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-bold text-navy text-lg mb-2">Your Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label">First Name *</label>
                        <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="input-field" placeholder="Jane" />
                      </div>
                      <div>
                        <label className="label">Last Name *</label>
                        <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="input-field" placeholder="Smith" />
                      </div>
                    </div>
                    <div>
                      <label className="label">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="jane@example.com" />
                    </div>
                    {giftAid && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="label">Home Address *</label>
                          <input type="text" name="address" required value={formData.address} onChange={handleChange} className="input-field" placeholder="123 High Street" />
                        </div>
                        <div>
                          <label className="label">Postcode *</label>
                          <input type="text" name="postcode" required value={formData.postcode} onChange={handleChange} className="input-field" placeholder="SW1A 1AA" />
                        </div>
                      </div>
                    )}

                    <div className="border-t border-gray-100 pt-5">
                      <h3 className="font-bold text-navy text-lg mb-3">Payment Details</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 flex items-center gap-2 text-sm text-yellow-800">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        This is a UI demo — no real payment is processed here.
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="label">Name on Card *</label>
                          <input type="text" name="cardName" required value={formData.cardName} onChange={handleChange} className="input-field" placeholder="Jane Smith" />
                        </div>
                        <div>
                          <label className="label">Card Number *</label>
                          <input type="text" name="cardNumber" required maxLength="19" value={formData.cardNumber} onChange={handleChange} className="input-field" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="label">Expiry *</label>
                            <input type="text" name="expiry" required maxLength="5" value={formData.expiry} onChange={handleChange} className="input-field" placeholder="MM/YY" />
                          </div>
                          <div>
                            <label className="label">CVV *</label>
                            <input type="text" name="cvv" required maxLength="4" value={formData.cvv} onChange={handleChange} className="input-field" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
                      <button type="submit" className="btn-accent flex-1 py-4 text-base">
                        Donate £{displayAmount}{frequency === 'monthly' ? '/month' : ''}
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 text-center">
                      Your data is held securely and will never be sold. MTJF — UK Charity (registration in progress).
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card shadow-md">
                <h3 className="font-bold text-navy mb-4">Donation Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Frequency</span>
                    <span className="font-medium">{frequency === 'monthly' ? 'Monthly' : 'One-off'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amount</span>
                    <span className="font-medium">£{displayAmount || 0}</span>
                  </div>
                  {giftAid && (
                    <div className="flex justify-between text-green-700">
                      <span>+ Gift Aid</span>
                      <span className="font-medium">£{giftAidValue}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-navy">
                    <span>Total Value</span>
                    <span>£{giftAid ? (displayAmount * 1.25).toFixed(2) : (displayAmount || 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="card shadow-md">
                <h3 className="font-bold text-navy mb-4 text-sm">Why Donate Now?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    'We are at the very beginning — every pound has maximum impact',
                    'You become one of our founding supporters',
                    'We commit to full transparency on how every donation is used',
                    'Your support helps us reach the first communities we aim to serve',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card shadow-md bg-blue-50">
                <h3 className="font-bold text-navy mb-3 text-sm">Other Ways to Give</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Bank transfer details available on request via our <a href="/contact" className="text-navy underline">contact form</a>.</p>
                  <p>Cheques payable to:<br /><span className="font-medium text-navy">Mercy to Justice (MTJF)</span></p>
                  <p className="pt-1">Questions? <a href="/contact" className="text-navy underline">Get in touch</a> — we respond to every message.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
