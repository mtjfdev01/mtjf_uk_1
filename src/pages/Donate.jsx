import { useState } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import NewsletterSection from '../components/NewsletterSection'

const presetAmounts = [5, 10, 25, 50, 100, 250]

const impactMap = {
  5: 'Buys essential supplies for one community session',
  10: 'Funds one hour of frontline support for a family',
  25: 'Provides a week of wrap-around support for an individual',
  50: 'Trains and equips a local community volunteer',
  100: 'Sponsors a young person\'s skills course',
  250: 'Funds a month of community resilience activities',
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
  const impact = impactMap[selectedAmount] || 'Makes a meaningful difference to our work'

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
        <PageHero label="Thank You" title="Your Donation is Confirmed" subtitle="You've made a real difference today. Here's your confirmation." />
        <section className="section-padding bg-white">
          <div className="container-custom max-w-lg text-center">
            <div className="card shadow-xl py-12">
              <div className="text-6xl mb-6">💙</div>
              <h2 className="text-2xl font-bold text-navy mb-4">Thank You, {formData.firstName}!</h2>
              <p className="text-gray-600 mb-2 leading-relaxed">
                Your {frequency} donation of <strong>£{displayAmount}</strong> has been received.
                {giftAid && <span> With Gift Aid, your gift is worth <strong>£{(displayAmount * 1.25).toFixed(2)}</strong> to us — at no extra cost to you.</span>}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A confirmation email has been sent to <strong>{formData.email}</strong>.
                Your reference number is <strong>HT-{Math.floor(100000 + Math.random() * 900000)}</strong>.
              </p>
              <div className="bg-blue-50 rounded-xl p-4 mb-6 text-sm text-navy">
                <strong>What happens next:</strong> Your donation goes straight to our programmes.
                You'll receive an impact update within 30 days showing exactly how your gift was used.
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
        title="Make a Donation"
        subtitle="Your gift — however large or small — directly funds our work in communities across the UK. Every pound counts."
      />

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
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
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
                        {['monthly', 'single'].map(f => (
                          <button
                            key={f}
                            onClick={() => setFrequency(f)}
                            className={`flex-1 py-3 px-5 rounded-xl border-2 font-semibold text-sm transition-all duration-200 ${
                              frequency === f
                                ? 'border-navy bg-navy text-white'
                                : 'border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
                            }`}
                          >
                            {f === 'monthly' ? 'Monthly' : 'One-off'}
                          </button>
                        ))}
                      </div>
                      {frequency === 'monthly' && (
                        <p className="text-xs text-accent mt-2 font-medium">
                          ⭐ Monthly giving lets us plan ahead and deliver more consistent support
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

                    {/* Impact preview */}
                    {displayAmount > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                        <span className="text-2xl">💚</span>
                        <div>
                          <p className="text-green-800 font-semibold text-sm">Your Impact</p>
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
                            I am a UK taxpayer and I confirm this donation is my own money. Hopefield Trust can claim
                            25p of Gift Aid for every £1 I donate — at no extra cost to me.
                            {giftAid && displayAmount > 0 && (
                              <span className="block mt-1 text-green-700 font-medium">
                                + £{giftAidValue} free from HMRC on your £{displayAmount} donation
                              </span>
                            )}
                          </p>
                        </div>
                      </label>
                    </div>

                    <button onClick={() => setStep(2)} className="btn-accent w-full py-4 text-base">
                      Continue — £{displayAmount}{frequency === 'monthly' ? '/month' : ''}
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-bold text-navy text-lg mb-4">Your Details</h3>
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
                          <input type="text" name="address" required={giftAid} value={formData.address} onChange={handleChange} className="input-field" placeholder="123 High Street" />
                        </div>
                        <div>
                          <label className="label">Postcode *</label>
                          <input type="text" name="postcode" required={giftAid} value={formData.postcode} onChange={handleChange} className="input-field" placeholder="SW1A 1AA" />
                        </div>
                      </div>
                    )}

                    <div className="border-t border-gray-100 pt-5">
                      <h3 className="font-bold text-navy text-lg mb-4">Payment Details</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 flex items-center gap-2 text-sm text-yellow-800">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        This is a UI demo. No real payment will be processed.
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
                            <label className="label">Expiry Date *</label>
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
                      <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">
                        Back
                      </button>
                      <button type="submit" className="btn-accent flex-1 py-4 text-base">
                        Donate £{displayAmount}{frequency === 'monthly' ? '/month' : ''}
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 text-center">
                      Secure donation. Hopefield Trust will never sell your data. Registered Charity No. 1234567.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Summary */}
              <div className="card shadow-md">
                <h3 className="font-bold text-navy mb-4">Donation Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Frequency</span>
                    <span className="font-medium capitalize">{frequency === 'monthly' ? 'Monthly' : 'One-off'}</span>
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

              {/* Trust signals */}
              <div className="card shadow-md">
                <h3 className="font-bold text-navy mb-4 text-sm">Your Money is Safe</h3>
                <ul className="space-y-3">
                  {[
                    { icon: '🔒', text: '256-bit SSL encryption' },
                    { icon: '✅', text: 'Charity Commission regulated' },
                    { icon: '🤝', text: 'Fundraising Regulator member' },
                    { icon: '💷', text: 'Gift Aid approved charity' },
                    { icon: '📊', text: 'Annual impact reports published' },
                  ].map(item => (
                    <li key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other ways to give */}
              <div className="card shadow-md bg-blue-50">
                <h3 className="font-bold text-navy mb-3 text-sm">Other Ways to Give</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Bank transfer to: <br /><span className="font-medium text-navy">Hopefield Trust<br />Sort: 20-00-00 | Acc: 12345678</span></li>
                  <li className="pt-2">Cheques payable to:<br /><span className="font-medium text-navy">Hopefield Trust</span></li>
                  <li className="pt-2">Call us: <br /><span className="font-medium text-navy">0300 123 4567</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
