import './contact.css'
import Sidebar from "../../components/Sidebar";
import ButtonSide from "../../components/ButtonSide";
import ParticlesBackground from "../../components/ParticlesBackground";
const Contact = () => {
    const get = (selector) => document.querySelector(selector)
    const handleSubmit = (e) => {
        e.preventDefault()
        get('.notification').classList.remove('hidden')
        e.target.reset()
        
    }
  return (
    <>
      <ParticlesBackground/>
        <Sidebar/>
        <div className="main-page">
            <div className="contact container">
                <h1 className="content-title">
                    <span>Message</span><br/>
                    Contact Me
                </h1>
                <div className="notification hidden">
                    Thank you for sending me a message! Your message has been delivered. Please wait for my response in 72 hours.
                </div>
                <form onSubmit={handleSubmit} name='Message Me'>
                    <input required type="text" name="name" id="name" placeholder="Name"/>
                    <input required type="email" name="email" id="email" placeholder="Email"/>
                    <textarea required name="message" id="id" rows="7" placeholder="Message ..."></textarea>
                    <div id='cap'>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        <ButtonSide/>
    </>
  )
}

export default Contact
