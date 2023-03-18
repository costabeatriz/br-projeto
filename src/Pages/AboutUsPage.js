import { Link } from 'react-router-dom'
import VolunteerImage from '../Images/Volunteer-background.jpg'
import CSS from './AboutUsPage.css'
import OurMission from '../Images/ourMission.webp'
import Globe from '../Images/icon-globe.svg'
import Computer from '../Images/computer.png'
import AboutUs from '../Images/aboutUs.jpg'

const AboutUsPage = () => {
    return (
           <div className='aboutUs'> 
            <img src={AboutUs} alt='Background' className='background'/>
            <h1>BR Volunteer Stories</h1>
            <span>
            Travel opens you up to all sorts of sensations and emotions, it is a chance to bond, explore, learn, 
            escape and recharge your batteries. Our aim is to help travellers do and be more when they visit one 
            of our countries. Discover what they enjoyed most on their trip, written in their own words.</span>
            <div className='content'>
            <div className='ourMission'>
            
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