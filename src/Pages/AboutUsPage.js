import { Link } from 'react-router-dom'
import VolunteerImage from '../Images/Volunteer-background.jpg'
import Background from '../Images/background.png'
import CSS from './AboutUsPage.css'
import OurMission from '../Images/ourMission.webp'
import Globe from '../Images/icon-globe.svg'
import Computer from '../Images/computer.png'
import Fundo1 from '../Images/Fundo1.jpg'

const AboutUsPage = () => {
    return (
           <div className='aboutUs'> 
            <img src={Fundo1} alt='Background' className='background'/>
            <div className='content'>
            <div className='ourMission'>
            <img src={Computer} alt='ourMissionImage' className='computer-img'/> 
            <div>
            <h4> OUR MISSION</h4>
            <p>It happens hundreds of times each month: a volunteer 
            sends an application to a project on Volunteer World.
            But each application is unique.We make sure that 
            everything we do is designed to make each and every
            application as easy and safe as possible. From the way
            we engage with our volunteers and social projects, to
            our commitment to make volunteering a mutually beneficial
            and responsible activity.</p>
            </div>  
            </div>
            <div className='platform'>
            <img src={Globe} alt='globeImage' className='globe-img'/> 
            <div>
            <h4> WHAT ARE WE DOING BR VOLUNTEER?</h4>
            <p>We are launching a Volunteer Platform, we've
            tried to stay true to our core beliefs and to deliver
            an experience for our community. We owe a huge thanks to  
            every single volunteer for joining us on this
            awesome journey, and we hope that you'll continue to
            be a part of our story.</p>
            </div>
            </div>
            </div>
        </div>
       
    )
}

export default AboutUsPage