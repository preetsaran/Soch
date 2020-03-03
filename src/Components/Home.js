import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import '../assets/Styles/styles.css';

class Home extends React.Component {
  
  render() {
    return (
      <React.Fragment>

  <Carousel>
         <Carousel.Item>
          <img  class="MainCarousel"

           src={require('../assets/Images/3.jpg')} 
           alt="First slide"/>

        </Carousel.Item>
        <Carousel.Item>
          <img  class="MainCarousel" 
            src={require('../assets/Images/MC2.png')} 
            alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img  class="MainCarousel"
                src={require('../assets/Images/MC3.png')} 
                alt="Third slide"/>
           </Carousel.Item>
</Carousel>

  <div class="container Hcontainer">
    <div class="row Home">
      <div class="col-md-12">
      <h3 class="Hhead text-center heading-custom">What We Do to save children</h3>
      <hr class="border border-primary rounded-circle" ></hr>
      </div>
    </div>
      
    <div class="row home-mid-section">

      <div class="col md-4">
          
               <div class="zoom">
                  <img class="Home-img" src={require('../assets/Images/FVCH.svg')}/>
               </div>
              <h6 class="bold mt-3 mid-headings text-center">Faeley Vidya Chanan Hoye</h6>
              <hr class="border border-primary"></hr>
              
              <p class="text-justify Home_text">
              FVCH is an initiative to provide Formal Education to the poor kids who can be self sufficient in future. We give children the opportunity to break with ignorance & poverty through high quality education
              </p>   
           
      </div>



     <div class="col md-4">
          
               <div class="view overlay zoom">
                  <img class="Home-img" src={require('../assets/Images/Medical1.jpg')}/>
                  
               </div>
              <h6 class="bold mt-3 mid-headings text-center">Medical and Hospitalization Aid</h6>
              <hr class="border border-primary"></hr>
              
              <p class="text-justify Home_text">
              SOCH provides Medical & Hospitalization Aid on an emergency case to case basis. In the past SOCH has been touching lives by assisting one in getting the right medical attention to save lives
              </p>   
           
      </div>

      <div class="col md-4">
          
               <div class="view overlay zoom">
                  <img class="Home-img" src={require('../assets/Images/Funds.svg')}/>
                  
               </div>
              <h6 class="bold mt-3 mid-headings text-center">School Building Funds</h6>
              <hr class="border border-primary"></hr>
              
              <p class="text-justify Home_text">
              SOCH is currently supporting over 250 children.The journey of SOCH started with one school, Montessori Public High School, and now has expanded to 4 schools.
              </p>   
           
      </div>
      </div>
      <div class="row home-mid-section">
<div class="col md-4">
    
         <div class="view overlay zoom">
            <img class="Home-img" src={require('../assets/Images/Hunger.svg')}/>
            
         </div>
        <h6 class="bold mt-3 mid-headings text-center">Zero Hunger</h6>
        <hr class="border border-primary"></hr>
        
        <p class="text-justify Home_text">
        Providing Medical Assistance, Serving langar with slum people (serving all human irrespective of their social status, religion)
        </p>   
     
</div>



<div class="col md-4">
    
         <div class="view overlay zoom">
            <img class="Home-img" src={require('../assets/Images/Sanitation.png')}/>
            
         </div>
        <h6 class="bold mt-3 mid-headings text-center">Water, Sanitation & Hygiene</h6>
        <hr class="border border-primary"></hr>
        
        <p class="text-justify Home_text">
        Improving sanitation is a key priority of the government which has introduced several flagship programmes including the Swachh Bharat Abhiyan to clean India.
        </p>   
     
</div>




<div class="col md-4">
    
         <div class="view overlay zoom">
            <img class="Home-img" src={require('../assets/Images/emergency.svg')}/>
            
         </div>
        <h6 class="bold mt-3 mid-headings text-center">Emergency Medical Support</h6>
        <hr class="border border-primary"></hr>
        
        <p class="text-justify Home_text">
            Committed to saving lives of ill children across 
            the nation and laying foundation for good health.
            742 Children Saved
        </p>   
     
</div>
</div>
  </div>

  <section class="testimonials">
    <div class="container test">
      <div class="row">
        <div class="col-md-12">
        <h2 class="text-center heading-custom">Testimonials</h2>
        <hr class="border border-primary" width="20%"></hr>
      
     <Carousel>
           <Carousel.Item>
               Joined Child Help Foundation in February 2015. After having experience of more than 20 years in accounts with different companies, this is my first-time experience with an NGO.I am very happy to be associated with an organization.
                <div class="Quotes blockquote-footer text-center w-100 ">Biju Nair</div> 
           </Carousel.Item>

        <Carousel.Item>
        "Child Help Foundation is an organization truly committed towards their vision and mission of intervening with varied innovative activity for the holistic development of underprivileged, disadvantaged and deprived children. With best wishes!"
        <div class="Quotes blockquote-footer text-center  w-100 ">Satej Daniel Dhiwar</div>
        </Carousel.Item>

        <Carousel.Item>
        "It is an honor and privilege to help the orphans of India in our own small way. I wish a day will come when there will be no unloved, orphaned in our society. God Bless you for the noble work you are doing for children, but to humanity as well."
           <div class="Quotes blockquote-footer text-center w-100 ">Dr. Viswanathan Gopalan</div>
        </Carousel.Item>
  </Carousel>

</div>
</div>
</div>
  </section>


   
  <div class="Supporters p-4">
    <h2 class="text-center heading-custom">Our Supporters</h2>
        <hr class="border border-primary" width="20%"></hr>
      <Carousel>
         <Carousel.Item>
          <img   
           className="d-block suimg" 
           src={require('../assets/Images/Znet.png')} 
           alt="First slide"/>

        </Carousel.Item>
        <Carousel.Item>
          <img  
            className="d-block suimg" 
            src={require('../assets/Images/Bisleri.svg')} 
            alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img  
                className="d-block suimg" 
                src={require('../assets/Images/mrf.svg')} 
                alt="Third slide"/>     
           </Carousel.Item>
</Carousel>
</div>

 </React.Fragment>
    )
  }
}


export default Home
