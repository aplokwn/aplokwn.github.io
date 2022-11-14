import LogoMail from '../../assets/images/mail.png'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { useState, useEffect, useRef } from 'react'
import './index.scss'


const Contact = () => {

  const [loading, setLoading] = useState(true)
  const form = useRef()

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      {loading === false ? (

        <div className='container contact-page'>
          <div className='text-zone'>
            <h1>
              <span><img src={LogoMail} alt="mail" /> Contact</span>
            </h1>
            <p>
              I am interested in freelance opportunities. However, if you have any other requests or
              questions, don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>

              </form>

            </div>
          </div>
        </div>


      ) : (
        <Loader type="line-scale" />
      )}

    </>

  )
}

export default Contact