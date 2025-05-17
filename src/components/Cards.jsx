import React from 'react';
import Card from './Card';

function Cards() {

  const cardData = [
    {width: "w-[30%]", para: true, head: false, hover : "hover:bg-zinc-700 p-5 duration-100", padding: "hover:px-2 duration-300", smHead: "Up Next: Culture", bigHead: "Who we are"},
    {width: "w-[70%]", para: false, head: true, hover : "hover:bg-violet-500 duration-100", padding: "hover:px-2 duration-300", smHead: "Get In Touch", bigHead: "Let's get to it, together"}
  ]
  return (
    <div className='w-full bg-inherit pb-32'>
        <div className="max-w-6xl mx-auto flex gap-2">
            {cardData.map((item, index) => <Card key={index} width={item.width} para={item.para} head={item.head} hover={item.hover} padding={item.padding} smHead={item.smHead} bigHead={item.bigHead} />)}
        </div>
    </div> 
  )
}

export default Cards