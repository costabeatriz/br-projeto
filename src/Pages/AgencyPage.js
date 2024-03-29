import { Link } from 'react-router-dom'
import CSS from './AgencyPage.css'
import Cardbox from '../Images/cardbox-img.png'
import Agency from '../Images/agency.jpg'

const Agencies = () => {
    return (
    <div className='agencyPage'>
    <div className='content'>
    <img className='agency' src={Agency} alt= 'agency-img'/>
    <h1> BR Volunteer Spirit</h1>
    <span>It is the people that make Epic what it is. Their dedication to seeking out 
        the most unique and enjoyable new experiences, together with their creative and 
        friendly approach, underpin our promise to help people to do more, and be more, 
        through travel.</span>
    <h5>Ready to promote your agency at BRV?</h5>

    <div className='agencyPage-body'>
    <div className='questionsBox'>
    <div>
    <Link to='/addnewexchange'>
    <button type='button' className='addExchange-btn'>Add new Exchange</button>
    </Link> 
    </div>
    
    <h5>Your questions, answered</h5>

    <p><b>Is my agency rigth for BRV?</b></p>
    <p>BRV volunteers are interested in all kinds of exchanges. We have tiny agencies to big ones with all sorts of exchanges options.</p>
    <p><b>Do I have to have exchanges all the time?</b></p>
    <p>Not at all- you can control your calendar. You can promote once a year, a few days a month, or more often.</p>
    <p><b>How much should I interact with volunteers?</b></p>
    <p>It's up to you. Some agencies prefer to message volunteers only at key moments-like sending a short note when they book or anwerings quick questions- while others also enjoy meeting the volunteers in person. you'll find a style that works for you.</p>
    <p><b>Whate are BRV fees?</b></p>
    <p>BRV typicaly collects a flat service fee of 5% of the exchange subtotal when you get paid. We also collect a fee from volunteers when they book.</p>
    </div>
    <div>
        <img className="cardbox" src={Cardbox} alt="Card box iamge"/>
    </div>


    </div>
    </div>
</div>     
    )
}

export default Agencies

/**/

