import React from 'react'

export default function SkeletonForDetails() {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 space-y-10 relative overflow-hidden">

      {/* وميض يغطي الكل */}
      <span className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent  animate-shine  pointer-events-none"></span>

      {/* --- دف المنتج --- */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-8 space-y-6 md:space-y-0">
        {/* صورة المنتج */}
        <div className="bg-gray-300 rounded-xl w-full md:w-1/3 h-48"></div>
        {/* تفاصيل بسيطة */}
        <div className="flex-1 space-y-4 w-full">
          <div className="h-8 bg-gray-300 rounded-md w-3/4"></div> {/* عنوان */}
          <div className="h-6 bg-gray-300 rounded-md w-1/4"></div> {/* سعر */}
          <div className="h-4 bg-gray-300 rounded-md w-1/2"></div> {/* وصف بسيط */}
        </div>
      </div>


    </div>
  )
}
