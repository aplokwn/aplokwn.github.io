import LogoProject from '../../assets/images/project.png'
import Loader from 'react-loaders'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.scss'


const Project = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])





  return (
    <>
      {loading === false ? (

        <div className='container project-page'>
          <div className='text-zone'>
            <h1>
              <span><img src={LogoProject} alt="project" /> Projects</span>
            </h1>
            <p>A Selection of projects I have contributed to / done so far.</p>
            <a
              href="https://github.com/aplokwn/"
              target="_blank" rel="noreferrer" className='flat-button'>More on GitHub</a>
          </div>

          <ProjectCard />


        </div>



      ) : (
        <Loader type="line-scale" />
      )}

    </>

  )
}

export default Project