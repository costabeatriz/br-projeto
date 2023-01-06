import { Link } from 'react-router-dom'
import VolunteerImage from '../Images/Volunteer-background.jpg'

const AboutUsPage = () => {
    return (
        <div>
           <div> 
            <img src={VolunteerImage} alt='volunteerImage'/>
            <h1> Who are we?</h1>
            <h4> OUR MISSION</h4>
           </div>
        </div>
       
    )
}

export default AboutUsPage