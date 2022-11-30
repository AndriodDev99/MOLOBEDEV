import React from 'react'
import { motion } from 'framer-motion'
import Line from './LineGradient/Line'
import TestiSlider from './TestiSlider'

const Skills = () => {
  return (
    <section className="section" name="Skills">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-24">
        <div className="flex flex-col p-8 items-center text-center lg:items-start lg:text-left">
          <div className="flex flex-col">
          <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
            <p className="text-4xl lg:text-4xl text-center font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
              Skills
            </p>
            <Line width="mx-auto w-2/5" />
            </motion.div>
            <hr className="mb-8 opacity-5" />
            
         
            <ul className='mb-8'>
            <li>Learning and Organizational Development</li>
            <li>BBBEE Regulations/ Skills Development Legilation</li>
            <li>Coaching & Mentoring| Inspiring Teams</li>
            <li>Capability Development Strategy Formulation</li>
            <li>Skills Development Facilitation</li>
            <li>Leadership & Success Planning</li>
            <li>Graduate Recruitment Program Execution </li>
            <li>Training Programme Implementation</li>
            <li>Project/ Programme Management</li>
          </ul>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Skills
