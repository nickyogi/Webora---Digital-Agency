import React from 'react';
import Stripe from './Stripe';

function Stripes() {
  const ImageData = [
    {url:"src/assets/images/BottomImage1.svg", text: "48"},
    {url:"src/assets/images/BottomImage2.svg", text: "2"},
    {url:"src/assets/images/BottomImage3.svg", text: "11"},
    {url:"src/assets/images/BottomImage1.svg", text: "48"},
    {url:"src/assets/images/BottomImage2.svg", text: "2"},
    {url:"src/assets/images/BottomImage3.svg", text: "11"}
  ]

  return (
    <div className='flex items-center mt-12'>
        <Stripe data={ImageData}/>
    </div>
  )
}

export default Stripes