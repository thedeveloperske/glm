'use client'

import { useState, Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'

function SelectCoverContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCover, setSelectedCover] = useState<string>('')
  const [additionalBenefits, setAdditionalBenefits] = useState<string[]>([])
  const [selectedComesaDuration, setSelectedComesaDuration] = useState<string>('')

  const insuranceType = searchParams.get('type') || 'motor-private'
  const vehicleMake = searchParams.get('vehicleMake') || ''
  const vehicleModel = searchParams.get('vehicleModel') || ''
  const yearOfManufacture = searchParams.get('yearOfManufacture') || ''
  const vehicleValue = searchParams.get('vehicleValue') || ''
  const vehicleTonnage = searchParams.get('vehicleTonnage') || '1'

  // Generate quotation number in format QUO-MUA-001
  const [quotationNo, setQuotationNo] = useState<string>('')
  
  useEffect(() => {
    // Get or initialize the quote counter from localStorage
    const getNextQuoteNumber = () => {
      if (typeof window !== 'undefined') {
        const storedCount = localStorage.getItem('quoteCounter')
        const count = storedCount ? parseInt(storedCount, 10) + 1 : 1
        localStorage.setItem('quoteCounter', count.toString())
        return `QUO-MUA-${count.toString().padStart(3, '0')}`
      }
      return 'QUO-MUA-001'
    }
    setQuotationNo(getNextQuoteNumber())
  }, [])

  const handleCoverSelect = (coverType: string) => {
    setSelectedCover(coverType)
    // Clear additional benefits when Third Party is selected
    if (coverType === 'third-party') {
      setAdditionalBenefits([])
    }
    // Clear comesa duration when switching away from comesa
    if (coverType !== 'comesa') {
      setSelectedComesaDuration('')
    }
  }

  const comesaDurations = [
    '1 to 30 days',
    'Up to 2 months',
    'Up to 3 months',
    'Up to 4 months',
    'Up to 5 months',
    'Up to 6 months',
    'over 6 months'
  ]

  const handleAdditionalBenefitToggle = (benefit: string) => {
    setAdditionalBenefits(prev =>
      prev.includes(benefit)
        ? prev.filter(b => b !== benefit)
        : [...prev, benefit]
    )
  }

  // Calculate premium (placeholder - set to 0 for now)
  const basicPremium = 0
  const additionalBenefitsTotal = 0
  const stampDuty = 0
  const levies = 0
  const totalPremium = basicPremium + additionalBenefitsTotal + stampDuty + levies

  const benefitOptions = [
    'Excess Protector',
    'Political Violence and Terrorism',
    'Windscreen',
    'Car Entertainment System',
    'Loss of Use',
    'Forced ATM Withdrawals',
    'Out of Station Accommodation',
    'Personal Effects',
    'Loss of Keys',
    'Loss of Spare Wheel/Accessories',
    'Third Party Property Damage',
    'Riot Strike and Civil Commotion (RSCC)',
    'Towing/Recovery Expenses',
    'Medical Expense',
    'Passenger Legal Liability Limit',
    'Commercial Passenger Legal Liability Limit',
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="MUA Insurance Logo"
              width={120}
              height={48}
              className="object-contain"
              priority
            />
            <button
              onClick={() => router.back()}
              className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Edit Sum Insured
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Quotation Details */}
        <div className="mb-8 space-y-2">
          <p className="text-gray-600">
            <span className="font-semibold">Quotation No:</span> {quotationNo}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Vehicle:</span> {vehicleMake.toUpperCase()}-{vehicleModel.toUpperCase()} YOM: {yearOfManufacture}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Sum Insured:</span> {vehicleValue ? `Kes ${parseInt(vehicleValue).toLocaleString()}` : 'N/A'} <span className="font-semibold">Tonnage:</span> {vehicleTonnage}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cover Selection */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Which cover would you like to buy?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Third Party Only Card */}
                <div className={`border-2 rounded-xl p-6 ${selectedCover === 'third-party' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <input
                      type="radio"
                      name="coverType"
                      value="third-party"
                      checked={selectedCover === 'third-party'}
                      onChange={() => handleCoverSelect('third-party')}
                      className="mt-1 w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Third Party Only</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        It is a basic and minimum cover available. It provides cover for liability to third parties only in respect of bodily injury and damage to third parties property. It is a mandatory cover that motorist needs to have in place.
                      </p>
                      <a href="#" className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        More Information
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCoverSelect('third-party')}
                    className="w-full py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:border-gray-400 transition-colors"
                  >
                    Select
                  </button>
                </div>

                {/* Comprehensive Card */}
                <div className={`border-2 rounded-xl p-6 ${selectedCover === 'comprehensive' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <input
                      type="radio"
                      name="coverType"
                      value="comprehensive"
                      checked={selectedCover === 'comprehensive'}
                      onChange={() => handleCoverSelect('comprehensive')}
                      className="mt-1 w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        This is the widest cover available and provides indemnity from: Accidental damage to the vehicle, including fire damage, Theft of vehicle, collision, overturning, effects of flood, earthquake and perils provided for in the policy document...
                      </p>
                      <a href="#" className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        More Information
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCoverSelect('comprehensive')}
                    className="w-full py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:border-gray-400 transition-colors"
                  >
                    Select
                  </button>
                </div>

                {/* Comesa Card */}
                <div className={`border-2 rounded-xl p-6 ${selectedCover === 'comesa' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <input
                      type="radio"
                      name="coverType"
                      value="comesa"
                      checked={selectedCover === 'comesa'}
                      onChange={() => handleCoverSelect('comesa')}
                      className="mt-1 w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Comesa</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        COMESA (Common Market for Eastern and Southern Africa) cover provides temporary insurance for vehicles traveling within COMESA member countries.
                      </p>
                      <a href="#" className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        More Information
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCoverSelect('comesa')}
                    className="w-full py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-semibold hover:border-gray-400 transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>

            {/* Comesa Duration Selection */}
            {selectedCover === 'comesa' && (
              <div>
                <h2 className="text-3xl font-bold text-orange-500 mb-6">Select Duration</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {comesaDurations.map((duration) => (
                    <label
                      key={duration}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        selectedComesaDuration === duration
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="comesaDuration"
                        value={duration}
                        checked={selectedComesaDuration === duration}
                        onChange={(e) => setSelectedComesaDuration(e.target.value)}
                        className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-gray-700 font-semibold">{duration}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Benefits - Only for Comprehensive */}
            {selectedCover === 'comprehensive' && (
              <div>
                <h2 className="text-3xl font-bold text-orange-500 mb-6">Additional Benefits</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefitOptions.map((benefit) => (
                    <label
                      key={benefit}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        additionalBenefits.includes(benefit)
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={additionalBenefits.includes(benefit)}
                        onChange={() => handleAdditionalBenefitToggle(benefit)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="ml-3 text-gray-700">{benefit}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Premium Summary - Right column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Premium summary</h3>
              
              {!selectedCover ? (
                <p className="text-gray-600">Please select a cover to view the premium summary.</p>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Basic Premium</span>
                      <span className="font-semibold">Kes {basicPremium.toLocaleString()}</span>
                    </div>
                    
                    {additionalBenefits.length > 0 && (
                      <div className="border-t border-gray-300 pt-3">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Additional Benefits:</p>
                        <ul className="text-sm text-gray-600 space-y-1 mb-2">
                          {additionalBenefits.map((benefit) => (
                            <li key={benefit} className="flex justify-between">
                              <span className="truncate mr-2">{benefit}</span>
                              <span>Kes 0</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-between font-semibold text-gray-700 pt-2 border-t border-gray-200">
                          <span>Subtotal</span>
                          <span>Kes {additionalBenefitsTotal.toLocaleString()}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between text-gray-700 pt-3 border-t border-gray-300">
                      <span>Stamp Duty</span>
                      <span className="font-semibold">Kes {stampDuty.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-gray-700">
                      <span>Levies</span>
                      <span className="font-semibold">Kes {levies.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-xl font-bold text-gray-900 pt-4 border-t-2 border-gray-400">
                      <span>Total Premium</span>
                      <span>Kes {totalPremium.toLocaleString()}</span>
                    </div>
                  </div>

                  <a href="#" className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors mt-6 text-center">
                    Download Quote
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SelectCover() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SelectCoverContent />
    </Suspense>
  )
}

