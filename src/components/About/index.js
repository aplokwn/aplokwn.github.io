import LogoFace from '../../assets/images/aboutme.png'
import skillImg from '../../assets/images/skill.svg'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import './index.scss'


const About = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])


  return (
    <>
      {loading === false ? (
        <div className='container about-page'>
          <div className='text-zone'>
            <h1>
              <span><img src={LogoFace} alt="smile" /> About Me</span>
            </h1>
            <p>
              I devote myself to being a software developer because it
              lets me use my creative and problem-solving skills as I believe
              design thinking can be adapted into building app/web/projects!
            </p>
            <p>Software development wasn't my initial career
              path, but I'm glad I discovered it. I sought more flexibility,
              possibility, and improvement for projects and works during my
              marketing and graphic design career. In the end, all the
              experience points me to the same goal: software development.</p>
            <p>I'm a self-motivated learner with strong
              organization, time management and communication skills.</p>
          </div>

          <div className='bg-container'>
            <div className='solid-img'>
              <img src={skillImg} alt="computer" />
            </div>

          </div>
        </div>
      ) : (
        <Loader type="line-scale" />
      )}

    </>



  )
}

export default About