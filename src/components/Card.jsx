import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width, head, para, hover, padding, smHead, bigHead}) {
  return (
    <div className={`${width} bg-zinc-800 rounded-xl p-5 ${hover} `}>
        <div className={`${padding} min-h-[26rem] flex flex-col justify-between`}>
        <div className={`top w-full`}>
            <div className='up flex justify-between items-center text-white'>
                <h3 className='capitalize text-zinc-300'>{smHead}</h3>
                <FaArrowRightLong />
            </div>
            <h2 className='text-3xl mt-5 text-zinc-200 text-wrap w-64'>{bigHead}</h2>
        </div>
        <div className="bottom w-full">
            {
                head &&  (
                    <>
                    
                <h3 className='text-[5rem] text-zinc-100 font-semibold my-4' >Start a Project</h3>
                <button className='px-4 py-2 rounded-full border-[1px] border-zinc-300 text-zinc-300 capitalize'>Contact US</button>
                </>
                 )
            }
            {
                para && (
                    <p className='text-sm text-zinc-500'>Explore what derives our team</p>
                )
            }
            
        </div>
        </div>
    </div>
  )
}

export default Card