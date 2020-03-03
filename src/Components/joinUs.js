import React from 'react';
import '../assets/Styles/styles.css';

class JoinUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="JOIN_US">
        <h3 class="Main-heading text-center heading-custom">JOIN US</h3>
        <hr class="headHr border border-primary" width="20%"></hr>
    <img class="ju" src={require('../assets/Images/Join.png')}/>

        <div class="text-justify">
        <p class="mt-1 p-3 content-p-1">
        The <code class="Soch">SOCH</code> is team is a professional, committed group of individuals from diverse backgrounds but with a shared vision of a better future for India’s children and better health.
        A career at <code class="Soch">SOCH</code> gives you the opportunity to truly make a difference in your life and in the world
          <br/><br/>     
            The <code class="Soch">SOCH</code> volunteer works directly with the <code class="Soch">SOCH</code> children or in the various Projects. 
            Volunteers need not have any prior experience and just need to love children and believe that they can make a difference. 
            You can also join us by bringing genuine cases of children who are willing to study but don't have money / resources.
            You can also refer us people / families who are in-need of medical / hospitalization aid. To refer cases reach us at sochgroup@gmail.com
            <br/><br/>  
            For more details, please come to the office to attend a Volunteer Information Session.
            Or Write us at <code class="Email" >sochgroup@gmail.com</code>
          </p>
        </div>
        </div>
    </React.Fragment>
    )
}
}
export default JoinUs