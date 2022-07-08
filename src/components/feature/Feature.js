import React from 'react'
import '../feature/feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='barry__features-container__feature'>
      <div className='barry__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='barry__features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
