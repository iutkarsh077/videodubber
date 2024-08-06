import Content from '@/components/Content'
import HeaderNavbar from '@/components/Header'
import OnBoarding from '@/components/Onboarding'
import TrackPage from '@/components/TrackPage'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeaderNavbar/>
      <OnBoarding/>
      <TrackPage/>
      <Content/>
    </div>
  )
}

export default Home
