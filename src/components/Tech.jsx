import React from 'react'
import { BallCanvas } from './canvas'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' >
          <BallCanvas icon={technology.icon}{...technology.name}/>  
          </div>
      ))}
    </div>

  )
}

export default SectionWrapper(Tech, "n")