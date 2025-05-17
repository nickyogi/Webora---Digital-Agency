import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-inherit'>
        <div className='max-w-6xl mx-auto py-5 flex gap-40'>
            <div className='basis-1/2'>
                <h1 className='text-[10rem] text-white font-semibold leading-none tracking-tight'>webora.</h1>
            </div>
            <div className='basis-1/3 text-white flex gap-16 pt-5'>
                <div className='flex flex-col'>
                    <h5 className='capitalize text-sm text-zinc-500 mb-8'>Socials</h5>
                    {
                        ["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index) => {
                            return <a key={index} href="/blank" className='my-1 text-sm text-zinc-500'>{item}</a>
                        })
                    }
                </div>
                <div className='flex flex-col'>
                    <h5 className='capitalize text-sm text-zinc-500 mb-8'>Sitemap</h5>
                    {
                        ["Home", "Work", "Career", "Contact"].map((item, index) => {
                            return <a key={index} href="/blank" className='my-1 text-sm text-zinc-200'>{item}</a>
                        })
                    }
                </div>
                <div className='w-52 p-1 pb-2 text-zinc-200 flex flex-col gap-5 justify-end items-end '>
                    <p className='text-sm text-end font-semibold'>Webora is a pioneering digital agency driven by design and empowered by technology.</p>
                    <img src="src/assets/images/footerImage.svg" alt="Error 404 : Not Found" className='h-7 object-contain ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer