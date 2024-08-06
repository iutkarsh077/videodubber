import React from 'react'

const OnBoarding = () => {
  return (
    <div className="w-full h-auto bg-green-600 opacity-75 flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row justify-center items-center gap-x-3 p-4 md:h-10">
      <p className="text-center text-white text-xs sm:text-base">
        Hey there! Please, complete your onboarding.
      </p>
      <button className="bg-white text-sm  py-1 px-2 rounded-md hover:bg-gray-200 duration-300 ease-in-out">
        Complete onboarding
      </button>
    </div>
  )
}

export default OnBoarding
