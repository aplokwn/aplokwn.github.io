import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Loader from 'react-loaders'
import Logo from './Logo'
import './index.scss'


const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              Hello!

              <div className='TypeAnime'>
                <TypeAnimation
                  sequence={['I ', 1000, 'I am', 1000, 'I am April,',
                    1000, 'I am', 1000, 'I', 1000, '', 500]}
                  //  Continuing previous Text
                  style={{ fontSize: '2em' }}
                  wrapper="div"
                  repeat={Infinity}
                />
              </div>
              a software developer.
            </h1>

            <h2>I love problem solving, and love creation!</h2>
            <Link to="/contact" className='flat-button'> CONTACT ME</Link>
          </div>

          <Logo />
        </div>


      ) : (
        <Loader type="line-scale" />
      )}

    </>
  )

}
export default Home