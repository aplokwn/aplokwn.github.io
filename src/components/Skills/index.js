import { faHtml5, faCss3Alt, faSquareJs, faReact, faJava, faGitAlt, faAws } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faFaceGrinSquint, faFaceGrinWink } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoSkill from '../../assets/images/tool.png'
import LogoBootStrap from '../../assets/images/bootstrap.png'
import LogoHeroku from '../../assets/images/heroku.png'
import LogoPS from '../../assets/images/photoshop.png'
import LogoAI from '../../assets/images/illustrator.png'
import LogoXD from '../../assets/images/xd.png'
import ResumeApril from '../../assets/pdf/resume_lywanapril.pdf'
import Loader from 'react-loaders'
import './index.scss'


<FontAwesomeIcon icon="fa-brands fa-aws" />

const Skills = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])



  return (
    <>
      {loading === false ? (
        <div className='container skill-page'>
          <div className='text-zone'>
            <h1>
              <span><img src={LogoSkill} alt="mail" />Skills & Toolkit</span>
            </h1>
            <p>Here it comes, the 'Skills' section! Languages (of course, CS languages <FontAwesomeIcon icon={faFaceGrinSquint} /> ) I speak, and the technologies I recently work with:
            </p>
            <div className='flex-container'>
              <div className='skill-tag'> <FontAwesomeIcon icon={faHtml5} /> HTML5</div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faCss3Alt} /> CSS3</div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faSquareJs} /> JavaScript</div>
              <div className='skill-tag'> <img src={LogoBootStrap} alt="bootstrap" /> BootStrap</div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faReact} /> React</div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faJava} /> Java</div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faDatabase} /> MySql</div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faGitAlt} /> Git</div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faAws} /> AWS</div>
              <div className='skill-tag'> <img src={LogoHeroku} alt="heroku" /> Heroku</div>
              <div className='skill-tag'> <img src={LogoPS} alt="photoshop" /> PhotoShop</div>
              <div className='skill-tag'> <img src={LogoAI} alt="illustrator" /> illustrator</div>
              <div className='skill-tag'> <img src={LogoXD} alt="xd" /> XD</div>
            </div>
            <br />
            <p>...And MORE!</p>
            <p> <Link to={ResumeApril}>Check My Resume!</Link></p>
            <p>By the way, I also speak 4 human languages <FontAwesomeIcon icon={faFaceGrinWink} /> : English, Chinese (Cantonese, Mandarin), and Japanese.
            </p>
          </div>

        </div>

      ) : (
        <Loader type="line-scale" />
      )
      }

    </>

  )
}

export default Skills