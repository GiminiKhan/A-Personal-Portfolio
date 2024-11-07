import React from 'react'
import Heading from './Heading'
import Card from './Card'



const data = [
    {
        id:0,
        title:"Static Resume",
        desc: "A simple static resume.",
        img:"/project1.png",
        tags:["HTML","CSS","TypeScript"]
    },
    {
      id:1,
      title:"Editable Resume",
      desc: "A simple Editable Professional resume.",
      img:"/Editable Resume.png",
      tags:["HTML","CSS","TypeScript", "Nextjs"]
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title= 'My Project'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-10 md:grid-cols-2 lg:grid-col-3 place-items-center'>
          {data.map((el) => (<Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}
          />) )}
        </div>
      
    </div>
  )
}

export default Projects
