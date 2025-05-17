import React from 'react';
import Button from './Button';


function Product({val, count, mover}) {
  return (
    <div onMouseEnter={() => mover(count)} className='group/products w-full py-[2rem]'>
      <div className={`${val.gradient} delay-100 duration-100`} >
      <div className='max-w-6xl mx-auto h-[14rem] px-2 flex items-center justify-between'>
            <h1 className='text-[4vw] text-white' >{val.title}</h1>
            <div className='w-[28vw] text-white'>
                <p className='text-sm mb-5'>{val.description}</p>
                
                <div className="buttons flex gap-5">
                    { val.live && <Button title="Live Website" />}
                    { val.case && <Button title="Case Study" />}
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Product