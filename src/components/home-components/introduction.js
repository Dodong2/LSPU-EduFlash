import React from 'react'
import IntroductionSVG from '../../assets/svg/introduction.svg'

const Introduction = () => {
  return (
    <>
      <div className='introduction'>
      <div className='get-started'>
      <h1>What would you like to learn today?</h1>
      <button>Get started</button>
      </div>
      <div className='banner'>
      <img src={IntroductionSVG} alt='introductionSVG'/>
      </div>
      </div>
    </>
  )
}

export default Introduction
