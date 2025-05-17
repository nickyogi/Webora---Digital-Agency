import React, { useState, useRef, useEffect } from 'react';
import Product from './Product';
import Button from './Button';
import { motion } from "framer-motion";


function Products() {

  const [pos, setPos] = useState(18);
  const [hovered, setHovered] = useState(null);

  const videoRefs = useRef([]);


  const mover = (count) => {
    setHovered(count);
    setPos((18*count));
    console.log(count);
  }

    const data = [
        {title: "Arqitel", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates in real estate", live : true, case : false, gradient: "group-hover/products:bg-gradient-to-r from-[#870FDB] to-[#1A0A39]" },
        {title: "TTR", description: "We crafted an interactive site using Generative AI to allowa user to engage with our thinking about AI, Industry trends and design.", live : true, case : true, gradient: "group-hover/products:bg-gradient-to-r from-[#014574] to-[#011030]"},
        {title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amaing people - so we made another showcase to celebrate", live : true, case : false, gradient: "group-hover/products:bg-gradient-to-r from-[#3bb9cd] to-[#5956D4]" },
        {title: "Yahoo!", description: "We enhanced the NewYork Fashion Week, by creating a fully digital AR fashion for Yahoo  and Maisie Wilen, featuring a holographic 3D model and a integrated web shop.", live : true, case : false, gradient: "group-hover/products:bg-gradient-to-r from-[#6D00F2] to-[#2C005C]"},
        {title: "Rainfall", description: "We casted a website for rainfall Ventures, developing websites and custom code that ultimately allow their them to update content regularly and with ease", live : true, case : true, gradient: "group-hover/products:bg-gradient-to-r from-[#ED0097] to-[#9100C0]" },
        {title: "Jungle", description: "We crafted a timeless visual system for Jungle workers, covering all aspects of web design and empower their marketing team to scale origanically using webflow", live : true, case : true, gradient: "group-hover/products:bg-gradient-to-r from-[#F4C100] to-[#F04E00]" },
    ]

    useEffect(() => {
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === hovered) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0;
          }
        }
      });
    }, [hovered]);
    
  return (
    <div className='relative w-full bg-inherit pt-20' >
        { data.map((val, index) => (
            <Product key={index} val={val} count={index} mover={mover} />
        ))}
        <div className='absolute w-full h-full mt-20 top-0 pointer-events-none'>
          <motion.div 
          initial={{ y: pos, x: "-50%" }}
          animate={{y: pos + `rem`}}
          transition={{ease: [0.76, 0, 0.24, 1], duration : 0.6}}
          className='absolute h-[18rem] w-[24rem] left-[42vw] -translate-x-[50%] overflow-hidden pointer-events-none'>
            {[
            "arqitel.mp4",
            "ttr.mp4",
            "yir.mp4",
            "yahoo.mp4",
            "rainfall.mp4",
            "jungle.mp4",
          ].map((src, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="h-full w-full rounded-2xl overflow-hidden"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                muted
                loop
                src={`src/assets/videos/${src}`}
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
          ))}
          </motion.div>
        </div>
    </div>
  )
}

export default Products;