import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import '../assets/Styles/styles.css';

class WhoSupportUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="WHO_SUPPORT_US">
        <h3 class="Main-heading text-center heading-custom WSU">WHO SUPPORT US</h3>
        <hr class="headHr border border-primary" width="20%"></hr>
    <img class="img-fluid wsum" src={require('../assets/Images/Support.jpg')}/>

        <div class="text-center whoSupportUs">
        <p>
            <code class="Soch">SOCH</code> is supported by individuals across the globe for the organizations Nobel cause. 
             Apart from the like minded individuals the organization is also supported by various organizations
        </p>
      </div>
        <div class="WSUC">
      <Carousel>
         <Carousel.Item>
          <img   
           className="d-block wsuimg" 
           src={require('../assets/Images/Znet.png')} 
           alt="First slide"/>

        </Carousel.Item>
        <Carousel.Item>
          <img  
            className="d-block wsuimg" 
            src={require('../assets/Images/Bisleri.svg')} 
            alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
                className="d-block wsuimg" 
                src={require('../assets/Images/mrf.svg')} 
                alt="Third slide"/>
           </Carousel.Item>
</Carousel>
</div>

</div>
    </React.Fragment>
    )
  }
}
export default WhoSupportUs