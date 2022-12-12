import about from '../Resources/Images/about.png'
import '../Styles/About.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const About =  () => {
  return (
   <div id='aboutContainer'>
      <div id='imageAboutContainer'>
        <img id='imageAbout' src={about} alt='profile' />
      </div>
      <div id='textAboutContainer'>
        <h1 id='aboutTitle'>Hello there! I'm Daniel</h1>
        <p className='aboutP'>I'm a full-stack software engineer who specializes in using Javascript, React, Redux, and Rails to bring optimized, effective, and efficient solutions to reality</p>
        <p className='aboutP'>I'm currently studying at a prestigious international code school called Microverse and thanks to that, I had the opportunity to use these technologies in different projects with multicultural teams.</p>
        <p className='aboutP'>In fact, this website was created for a React and Redux certification class at that school, and I put a lot of effort into every aspect. </p>
        <p className='aboutP'>If you want to see the source, please click the button below. I'm always interested in hearing about new projects and am open to any suggestions. If you want to connect, I'll include the link to all my profiles below</p>
        <div id='btnsContainer'>
          <a className='buttonAbout' href='https://github.com/carreraprogrammer/react-capstone'>Source <BsGithub style={{paddingTop: '5px'}}/></a>
          <a className='buttonAbout' href='https://www.linkedin.com/in/carreraprogrammer/'>Linkedin <BsLinkedin style={{paddingTop: '5px'}}/></a>
        </div>
      </div>
   </div>
  )
}

export default About
