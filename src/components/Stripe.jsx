import React from 'react';

function Stripe({data}) {
  return (
    <>
      {
        data.map((item, index) => {
          return <div key={index} className='flex items-center gap-5 w-[16.66%] px-4 border-l-[1.2px] border-b-[1.2px] border-t-[1.2px] border-zinc-800'>
          <img src={item.url} alt="Image Not Found" className='h-12 py-3' />
          <h3 className='font-medium text-white'>{item.text}</h3>
        </div>
        })
      }
    </>
  )
}

export default Stripe