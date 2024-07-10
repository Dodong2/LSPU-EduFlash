import React from 'react'
import Img1 from '../../assets/img/home-img1.png'


const homeHeader = () => {
  return (
    <>
      <div className='home-header'>
      <div className='txt-left'><span>10 Jul</span><br/><span>Hi, Kathryn</span></div>
      <div className='img-right'><img src={Img1} alt='img1'/></div>
      </div>
    </>
  )
}

export default homeHeader
