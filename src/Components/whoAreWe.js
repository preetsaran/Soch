import React from 'react';
import '../assets/Styles/styles.css';

class WhoAreWe extends React.Component {
  render() {
    return (
        <React.Fragment>
            <div className="WHO-ARE-WE">
        <h3 class="Main-heading text-center heading-custom">WHO ARE WE</h3>
        <hr class="headHr border border-primary" width="20%"></hr>
    <img class="img-fluid waw" src={require('../assets/Images/edu1.png')}/>

        <div class="text-justify">
        <p class="mt-1 p-3 content-p-1 who_are_we">
        The <code class="Soch">SOCH</code> is a non-profit organization with a mission to impact the lives of less privileged children, enabling them to maximize their potential and change their lives. <code class="Soch">SOCH</code> primarily focus is in the field of education, addressing formal education through sponsoring child’s school expenditure.<code class="Soch">SOCH</code> also works in the area of Medical Assistance for the needy.


        <code class="Soch">SOCH</code> is currently supporting over 250 children. A commitment is made to support each child by giving him or her a strong educational foundation along with spiritual dimension, a good time, self esteem and values, and to help them plan how they can earn a steady livelihood as a step towards improving their standard of living.


The <code class="Soch">SOCH</code> Team does a Selfless Service with No factionalism, where everyone is a leader and follower at same time, demonstrating Ethical behavior and Humility. <code class="Soch">SOCH</code> is registered NGO with AP Government in the year 2009 and holds a valid 80G certificate.
       </p>
        <div>
            <p class="p-3 text-center">
                Registered as not for profit organization in 2010 under the Bombay Trust Act. CHF Registration No: E-6427/Thane/2009-10.
            </p>
        </div>
      
        <h4 class="text-center heading-custom">VISION</h4>
        <hr class="border border-primary" width="20%"></hr>
        <p class="p-3 content-p-1 text-center">
            Reaching out to marginalized children in need, empowering them, bringing smiles and making them future ready. 
        </p>
        <h4 class="text-center heading-custom">MISSION</h4>
        <hr class="border border-primary" width="20%"></hr>
        <p class="p-3 content-p-1 text-center">
            Our Mission is to inspire and empower people to the culture of giving into changing the lives of the children in need. 
        </p>
        </div>
        </div>
    </React.Fragment>
    )
  }
}
export default WhoAreWe