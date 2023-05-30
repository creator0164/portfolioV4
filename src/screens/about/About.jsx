import './about.css'
import Sidebar from "../../components/Sidebar"
import ButtonSide from "../../components/ButtonSide"
import ParticlesBackground from "../../components/ParticlesBackground"
import me1 from "../../assets/images/a.jpg"
import Socials from "../../components/Socials"
const About = () => {
  return (
    <>
    <ParticlesBackground/>
    <Sidebar/>
    <div className="main-page">
        <div className="about container">
            <div className="row">
                <div className="col">
                    <h1 className="section-title">
                        About Me
                    </h1>
                    <img src={me1} alt="Kean Ulrich Labor Gozon"/>
                    <h2 className="sub-title" style={{marginTop:0}}>
                        Kean Ulrich Gozon
                    </h2>
                    <p className="content__justify">I am a passionate web developer with a Bachelor's degree in Computer Engineering. I aim to expand my web development expertise and deliver high-quality solutions. I am proficient in HTML, CSS, JavaScript, React, and Node.js, and I prioritize staying up-to-date with the latest trends and technologies. Collaboration, effective communication, and strong relationships are essential to my work philosophy. I am eager to take on new challenges and contribute to the dynamic field of web development.<br/><br/><a href='#!' className="about__download" download>DOWNLOAD RESUME</a></p>
                    <p><br/></p>
                    <Socials/>
                </div> 
                <div className="col">
                    <h1 className="section-title">
                        Background
                    </h1>
                    <h2 className="sub-title">
                        Skills
                    </h2>
                    <p className="content__justify">I have a comprehensive skill set in web development and related areas. I am proficient in HTML, CSS, and JavaScript, enabling me to create visually appealing and well-structured web pages. My expertise extends to Python for web development and scripting. I strongly understand databases, including schema design and data querying. Additionally, I am skilled in frameworks such as Django and Express.js for backend development. I have experience with Node.js for building scalable server-side applications and React.js for creating interactive user interfaces. I am adept at deploying applications to production environments using platforms like Heroku and leveraging containerization with Docker.</p>
                    <p className="content__justify">Moreover, I possess knowledge of Azure services for cloud computing. Alongside web development, I have expertise in data analysis, computer networks, and Linux. These skills collectively equip me to excel in web development and related areas.</p>
                    <h2 className="sub-title">
                        Education
                    </h2>
                    <p className="content__justify">I completed a Bachelor of Science degree in Computer Engineering during my academic journey. This program provided me with a solid foundation in various aspects of computer engineering, including hardware, software, and the integration of both disciplines. Throughout my studies, I gained a deep understanding of computer systems, programming languages, algorithms, data structures, and networking principles. The program also emphasized problem-solving skills and critical thinking, which are crucial in computer engineering. With my educational background, I have the knowledge and skills to tackle complex challenges and contribute effectively to technology and computer engineering.</p>
                    <h2 className="sub-title">
                        Certificates
                    </h2>
                    <p>Holder of Udemy Full Stack Web Dev certificate </p>
                </div>
            </div>
        </div>
    </div>
    <ButtonSide/>
    </>
  )
}

export default About
