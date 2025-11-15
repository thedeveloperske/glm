'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Logo in top left */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center mb-8">
          <div className="flex items-center gap-3">
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
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            GET Quote instantly
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mt-6">
            Choose your product
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {/* Motor Private Card */}
          <Link href="/quote/motor-private">
            <div className="bg-white border-2 border-orange-500 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  {/* Car/Sedan Icon for Private Vehicle */}
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Motor Private</h2>
                <p className="text-gray-600 mb-6">Get a quote for your private vehicle insurance</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </Link>

          {/* Motor Commercial Card */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-8 shadow-lg opacity-75 relative">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Truck/Van Icon for Commercial Vehicle */}
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Motor Commercial</h2>
              <p className="text-gray-600 mb-6">Get a quote for your commercial vehicle insurance</p>
              <div className="bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg inline-block">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

