import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap-trial'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'


import LogoABS from '../../../assets/images/project/ABS_pic.webp'
import pro01Img from '../../../assets/images/project/APportfolio01.webp'
import RanImg from '../../../assets/images/project/reactRandom.png'
import SpringImg from '../../../assets/images/project/spring.webp'
import pro02Img from '../../../assets/images/project/APportfolio02.webp'

import './index.scss'

const ProjectCard = () => {


  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const cardDisplay = useRef()


  const divStyle = {
    //overflowY: 'scroll',
    width: '50%',
    height: '90%',
    //border: '1px solid red',

  }



  useEffect(() => {
    gsap.fromTo(
      cardDisplay.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 2,
      }
    )
  }, [])

  return (
    <>
      <div className='project-card' ref={cardDisplay}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className='carousel-size'>
            <img
              className=""
              src={LogoABS}
              alt="First slide"
            />
            <Carousel.Caption className="ctext-zone">
              <h3>Alberta Bike Swap</h3>
              <p>This is a Java with Mavel web application which act as an
                infornation display for the Alberta Bike Swap Event,
                and also act as a bike inventory display platform during the event.</p>
              <div className='Stack'>
                <Button variant="warning">HTML</Button>{' '}
                <Button variant="warning">Bootstrap</Button>{' '}
                <Button variant="warning">JavaScript</Button>{' '}
                <Button variant="warning">Java</Button>{' '}
                <Button variant="warning">Gson</Button>{' '}
                <Button variant="warning">Heroku</Button>{' '}
              </div>
              <div className=''>
                <Button variant="outline-light">GitHub</Button>{' '}
                <Button variant="outline-light">Live Demo</Button>{' '}
              </div>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-size'>
            <img
              className=""
              src={pro01Img}
              alt="Second slide"
            />
            <Carousel.Caption className="ctext-zone">
              <h3>Personal Profolio V1 + V1.5</h3>
              <p>
                First iteration of my profolio. Designed and developed with a
                conscious effort and applied my knowlege with
                Java web development technologies like Servlet and JSP. Rebuild in plain HTML and CSS by taking hosting in consideration.
              </p>
              <div className='Stack'>
                <Button variant="warning">HTML</Button>{' '}
                <Button variant="warning">Bootstrap</Button>{' '}
                <Button variant="warning">JavaScript</Button>{' '}
                <Button variant="warning">Java</Button>{' '}
                <Button variant="warning">JSP</Button>{' '}
                <Button variant="warning">Servlet</Button>{' '}
                <Button variant="warning">Heroku</Button>{' '}
              </div>


              <div className=''>
                <a
                  href="https://github.com/aplokwn/aplokwnPersonalPage"
                  target="_blank" rel="noreferrer">
                  <Button variant="outline-light">GitHub</Button></a>{' '}
                <a href="https://aplokwn.herokuapp.com/" target="_blank" rel="noreferrer">
                  <Button variant="outline-light">Live Demo v1</Button></a>{' '}

                <a href=" https://aplokwn.github.io/v1.5/" target="_blank" rel="noreferrer">
                  <Button variant="outline-light">Live Demo v1.5</Button></a>{' '}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-size'>
            <img
              className=""
              src={RanImg}
              alt="Third slide"
            />
            <Carousel.Caption className="ctext-zone">
              <h3>Random Quote Machine</h3>
              <p>
                This is React Project generate random quote. Hands-on experence
                of building a React app with Component State and Inheritance.
              </p>
              <div className='Stack'>
                <Button variant="warning">React</Button>{' '}
                <Button variant="warning">Bootstrap</Button>{' '}
                <Button variant="warning">CSS3</Button>{' '}
              </div>
              <div className=''>
                <a
                  href="https://github.com/aplokwn/random-quote" target="_blank" rel="noreferrer">
                  <Button variant="outline-light">
                    GitHub</Button></a>{' '}
                <a href="https://codepen.io/aplokwn/pen/BaxePQW" target="_blank" rel="noreferrer">
                  <Button variant="outline-light">CodePen</Button></a>{' '}
              </div>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-size'>
            <img
              className=""
              src={pro02Img}
              alt="Forth slide"
            />
            <Carousel.Caption className="ctext-zone">
              <h3>Personal Profolio V2</h3>
              <p>
                Second iteration of my profolio. Applied React Router Dom for insite navigation.
                Restrutcial the profolio which felt more completed compare to the v1.
              </p>
              <div className='Stack'>
                <Button variant="warning">React</Button>{' '}
                <Button variant="warning">Bootstrap</Button>{' '}
                <Button variant="warning">JavaScript</Button>{' '}
                <Button variant="warning">SASS</Button>{' '}
                <Button variant="warning">GitHub Page</Button>{' '}
              </div>
              <div className=''>
                <a
                  href="https://github.com/aplokwn/random-quote" target="_blank" rel="noreferrer">
                  <Button variant="outline-light">
                    GitHub</Button></a>{' '}
                <a href="https://codepen.io/aplokwn/pen/BaxePQW" target="_blank" rel="noreferrer">
                  <Button variant="outline-light">Live Demo</Button></a>{' '}
              </div>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-size'>
            <img
              className=""
              src={SpringImg}
              alt="Fifth slide"
            />
            <Carousel.Caption className="ctext-zone">
              <h3>Spring Boot Introducation Tutorial</h3>
              <p>
                An Academic tutorial project introduced Spring Boot and its magnesium,
                including <b>RESTful</b> and <b>CRUD</b>webpages interacted
                with a database.
              </p>
              <div className="secondPa">
                <p>
                  The reason I pick Spring Boot as my topic is
                  Spring Boot and the Spring family are one of the most popular
                  morden Java Development framework. It is good to learn about it
                  if pursuing Full Stack Java developer as future career path.
                </p>
              </div>

              <div className='Stack'>
                <Button variant="warning">HTML</Button>{' '}
                <Button variant="warning">Bootstrap</Button>{' '}
                <Button variant="warning">Spring Boot</Button>{' '}
                <Button variant="warning">thymeleaf</Button>{' '}
                <Button variant="warning">Hibernate</Button>{' '}
                <Button variant="warning">H2 Database</Button>{' '}
              </div>
              <div className=''>
                <a
                  href="https://github.com/aplokwn/INTP362Demo" target="_blank" rel="noreferrer">
                  <Button variant="outline-light">
                    GitHub</Button></a>{' '}
                <a href="https://apsslok.wordpress.com/2022/04/10/spring-boot-crud-web-via-database/3/" target="_blank" rel="noreferrer">
                  <Button variant="outline-light">Blog</Button></a>{' '}
              </div>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


    </>

  )
}

export default ProjectCard