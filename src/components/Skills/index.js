import { faHtml5, faCss3Alt, faSquareJs, faReact, faJava, faGitAlt, faAws } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faFaceGrinSquint, faFaceGrinWink } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import LogoSkill from '../../assets/images/tool.png'
import LogoBootStrap from '../../assets/images/bootstrap.png'
import LogoHeroku from '../../assets/images/heroku.png'
import LogoPS from '../../assets/images/photoshop.png'
import LogoAI from '../../assets/images/illustrator.png'
import LogoXD from '../../assets/images/xd.png'
import skillImg from '../../assets/images/code.svg'
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
              <span><img src={LogoSkill} alt="skill" />Skills & Toolkit</span>
            </h1>
            <p>Here it comes, the 'Skills' section!
              Languages (of course, CS languages <FontAwesomeIcon icon={faFaceGrinSquint} /> )
              I speak, and the technologies I recently work with:
            </p>
            <div className='flex-container'>
              <div className='skill-tag'> <FontAwesomeIcon icon={faHtml5} />
                <span className='skill-text'> HTML5</span>
              </div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faCss3Alt} />
                <span className='skill-text'> CSS3</span>
              </div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faSquareJs} />
                <span className='skill-text'> JavaScript</span>
              </div>
              <div className='skill-tag'> <img src={LogoBootStrap} alt="bootstrap" />
                <span className='skill-text'> BootStrap</span>
              </div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faReact} />
                <span className='skill-text'> React</span>
              </div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faJava} />
                <span className='skill-text'> Java</span>
              </div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faDatabase} />
                <span className='skill-text'> MySql</span>
              </div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faGitAlt} />
                <span className='skill-text'> Git</span>
              </div>
              <div className='skill-tag'> <FontAwesomeIcon icon={faAws} />
                <span className='skill-text'> AWS</span>
              </div>
              <div className='skill-tag'> <img src={LogoHeroku} alt="heroku" />
                <span className='skill-text'>Heroku</span>
              </div>
              <div className='skill-tag'> <img src={LogoPS} alt="photoshop" />
                <span className='skill-text'> PhotoShop</span>
              </div>
              <div className='skill-tag'> <img src={LogoAI} alt="illustrator" />
                <span className='skill-text'> illustrator</span>
              </div>
              <div className='skill-tag'> <img src={LogoXD} alt="xd" />
                <span className='skill-text'> XD</span>
              </div>
            </div>
            <br />
            <br />
            <p>...And MORE!</p>
            <p>
              By the way, I also speak 4 human languages <FontAwesomeIcon icon={faFaceGrinWink} /> :
              English, Chinese (Cantonese, Mandarin), and Japanese.
            </p>
            <div className='flex-container sm'>
              <a
                href="https://drive.google.com/file/d/1Zon0kchxsuZD1kDNO3SF83wadzGVT6Pd/view?usp=share_link"
                target="_blank" rel="noreferrer" className='flat-button'>Resume (short)</a> &nbsp;&nbsp;&nbsp;
              <a
                href="https://drive.google.com/file/d/1UE8C7mzccOFCVL-6IOX4PJRfsT2KB2db/view?usp=share_link"
                target="_blank" rel="noreferrer" className='flat-button'>Resume (long)</a>

            </div>




          </div>
          <div className='bg-container'>
            <div className='solid-img'>
              <img src={skillImg} />
            </div>

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