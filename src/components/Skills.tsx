import React from 'react'

const Skills = () => {
  return (
    <div id='skills'className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>

            <div>
                <h2 className='4xl md:text-5xl'>Fields I Work With</h2>
                <p className='text-gray-500-pt-2'>

Dedicated Principal with 25 + years of experience maintaining a positive environment for students to thrive and focus on their academic growth.
Recognized for implementing efficient education policies. Excellent communicator with a reputation for being a disciplinarian with active listening skills. Boasting strong interpersonal skills and keen on improving students’ academic wellbeing and strong relationships with staff with a strong interest in providing students with a safe environment and encouraging top-notch education while supporting faculty training and professional development. Attentive to the ever-changing school culture and ready to adopt new methods to evaluate academic performance fairly and efficiently.

  </p>
            </div>
            <div>
              <div className='grid grid-cols-2 text-accent text 3xl sm:text-4xl'>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in">Administrator</h2>
                  <h2 data-aos="zoom-in">Educationist</h2>
                  <h2 data-aos="zoom-in">I.T Student</h2>
                </div>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in">Communication</h2>
                  <h2 data-aos="zoom-in">Teamwork</h2>
                  <h2 data-aos="zoom-in">Problem-Solving</h2>
                </div>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
