'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { carMakesModels, carMakes } from '@/app/data/carMakesModels'

export default function MotorCommercialQuote() {
  const router = useRouter()
  const currentYear = new Date().getFullYear()
  const [vehicleAge, setVehicleAge] = useState<number | null>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    yearOfManufacture: '',
    vehicleValue: '',
    vehicleBodyType: '',
    vehicleTonnage: '1',
    driverAge: '',
    yearsExperience: '',
    vehicleUse: 'Commercial',
  })

  useEffect(() => {
    if (formData.yearOfManufacture) {
      const age = currentYear - parseInt(formData.yearOfManufacture)
      setVehicleAge(age >= 0 ? age : null)
    } else {
      setVehicleAge(null)
    }
  }, [formData.yearOfManufacture, currentYear])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: value,
      }
      // Reset model when make changes
      if (name === 'vehicleMake') {
        updated.vehicleModel = ''
      }
      return updated
    })
  }

  // Get available models for selected make
  const availableModels = formData.vehicleMake ? (carMakesModels[formData.vehicleMake] || []) : []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store form data and navigate to cover selection
    const queryParams = new URLSearchParams({
      type: 'motor-commercial',
      ...Object.fromEntries(Object.entries(formData).map(([k, v]) => [k, String(v)])),
    })
    router.push(`/quote/select-cover?${queryParams.toString()}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Image
            src="/logo.png"
            alt="MUA Insurance Logo"
            width={120}
            height={48}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
          Get Your Quote Now
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Form Section - Left 2 columns */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Vehicle Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Vehicle Make <span className="text-orange-500">*</span>
                    </label>
                    <select
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="">Select Vehicle Make</option>
                      {carMakes.map((make) => (
                        <option key={make} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Vehicle Model <span className="text-orange-500">*</span>
                    </label>
                    <select
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      required
                      disabled={!formData.vehicleMake}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">
                        {formData.vehicleMake ? 'Select Vehicle Model' : 'Select Make First'}
                      </option>
                      {availableModels.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Year of Manufacture <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="yearOfManufacture"
                      value={formData.yearOfManufacture}
                      onChange={handleInputChange}
                      required
                      min="1900"
                      max={currentYear}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="YOM"
                    />
                    {vehicleAge !== null && (
                      <p className="mt-2 text-sm text-gray-600">
                        Vehicle Age: <span className="font-semibold text-orange-500">{vehicleAge} years</span>
                        {vehicleAge > 15 && (
                          <span className="text-red-600 ml-2">(Maximum vehicle age for comprehensive cover is 15 yrs)</span>
                        )}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Vehicle Value <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">Kes</span>
                      <input
                        type="number"
                        name="vehicleValue"
                        value={formData.vehicleValue}
                        onChange={handleInputChange}
                        required
                        min="0"
                        className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="Enter vehicle value"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Minimum value for comprehensive cover is Kes 500,000
                    </p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Vehicle Body Type <span className="text-orange-500">*</span>
                    </label>
                    <select
                      name="vehicleBodyType"
                      value={formData.vehicleBodyType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="">Select Vehicle Body Type</option>
                      <option value="truck">Truck</option>
                      <option value="van">Van</option>
                      <option value="bus">Bus</option>
                      <option value="trailer">Trailer</option>
                      <option value="pickup">Pickup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Vehicle Tonnage <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="vehicleTonnage"
                      value={formData.vehicleTonnage}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Vehicle Use <span className="text-orange-500">*</span>
                    </label>
                    <select
                      name="vehicleUse"
                      value={formData.vehicleUse}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="Private">Private</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Driver Age <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="driverAge"
                      value={formData.driverAge}
                      onChange={handleInputChange}
                      required
                      min="18"
                      max="100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Enter driver age"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Years Experience Driving <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={handleInputChange}
                      required
                      min="0"
                      max="100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Enter years of driving experience"
                    />
                  </div>
                </div>

                {/* Special Note */}
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                  <p className="text-sm text-red-700">
                    <strong>N/B:</strong> Refer to back office on +254 793 772 728 or +254 113 921 047 for special type e.g Petroleum tankers, Ambulance, Fire engines, psv assets among others
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </form>
          </div>

          {/* Quoting For Card - Right column */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg sticky top-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Quoting For</h3>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Motor Commercial Insurance</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This policy provides cover for loss or damage to the insured vehicle and legal liability to third parties for bodily injury and property damage. It also covers personal accident benefits for the driver and passengers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
