import React from 'react';
import { motion, useScroll } from "motion/react";
import { useState } from 'react';

function Work() {

    const [ImgData, setImgData] = useState([
        {url:"src/assets/images/TopImage1.jpg", top: "50%", left: "50%", isActive: false },
        {url:"src/assets/images/TopImage2.jpg", top: "55%", left: "52%", isActive: false },
        {url:"src/assets/images/TopImage3.jpg", top: "60%", left: "45%", isActive: false },
        {url:"src/assets/images/TopImage4.jpg", top: "65%", left: "54%", isActive: false },
        {url:"src/assets/images/TopImage5.jpg", top: "70%", left: "45%", isActive: false },
        {url:"src/assets/images/TopImage6.jpg", top: "75%", left: "48%", isActive: false },
    ]);

    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (latestScrollVal) => {
        
        function imageShow(arr) {
            setImgData(
                (prev) => 
                prev.map((item, index) => 
                arr.indexOf(index) == -1 
                ? ({...item, isActive : false})
                : ({...item, isActive : true})
                )
            )
        }

        switch(Math.floor(latestScrollVal*100)) {
            case 0 : 
                imageShow([]); 
                break;
            case 2 : 
                imageShow([0]); 
                break;
            case 4 : 
                imageShow([0, 1]); 
                break;
            case 6 : 
                imageShow([0, 1, 2]); 
                break;
            case 8 : 
                imageShow([0, 1, 2, 3]); 
                break;
            case 10 : 
                imageShow([0, 1, 2, 3, 4]); 
                break;
            case 12 : 
                imageShow([0, 1, 2, 3, 4, 5]); 
                break;
        }
    });


  return (
    <div className='w-full mt-10'>
        <div className='relative max-w-6xl mx-auto text-[30vw] text-white font-semibold leading-none tracking-tight select-none text-center'>
            work
            <div className="absolute Images w-full h-full top-0">
                {ImgData.map((item, index) => {
                    return (item.isActive && <img key={index} src={item.url} alt="image" className='absolute h-52 rounded-lg -translate-x-[50%] -translate-y-[50%]' style={{top: item.top, left: item.left, boxShadow: '0 0 10px rgb(255 255 255 / 0.2)' }} />)
                })}
            </div>
        </div>
    </div>
  )
}

export default Work