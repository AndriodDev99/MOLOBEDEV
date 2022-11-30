import React from 'react'
import Line from './LineGradient/Line'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="section" name="Bio">
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
                  About Faith Nyayi
                </p>
                <Line width="mx-auto w-2/5" />
              </motion.div>
              <hr className="mb-8 opacity-5" />
              <motion.div
                className="md:w-11/12 md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
              <p className="mb-8">
                Record of bringing cultural transformations, driving
                organisational development, and building high-performance work
                enviroments by creating capability building strategies, leading
                high-impact development programmes, and executing talent
                management plans. <br />
                <br />
                Well-reputed OD Specialist and Change Agent offering over two
                decades of global experience across industries, strategies
                transformation frameworks, development plans, and learning tools
                for large projects while providing strategic guidance around
                skills and knowledge management. Succesfull in recruiting highly
                talented professionals while driving professional growth of
                employees by spearheading mentoship, graduate recruitment,
                apprenticeship, and training programmes. Known for implementing
                leadership development initiatives that increse employee
                moral/retention, promote better decision-making, and build
                future leaders that drive business success. Unemployed youths
                along with success in applying the 70-20-10 learning model that
                reduce the company's call out rate. Strategic thinker and skills
                development facilitator with commercial business acumen and
                expertise in budgeting, operational plannning, quality
                assurance, training material creation, and audits execution.
              </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
