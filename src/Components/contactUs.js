import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import '../assets/Styles/styles.css';

class ContactUs extends React.Component {
  
  render() {
    return (
      <React.Fragment>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
{/* <!------ Include the above in your HEAD tag ----------> */}

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous"></link>

<div class="row" id="Contact">
<div class="container mt-5" >

{/* style="height:550px;" */}
    <div class="row">
      <div class="col-md-6 maps" >
      <iframe src={"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30445.337981930097!2d78.37292780434433!3d17.47563350090971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFlat%20No%20204%2C%20SaiNilayam%20Apartments%20Behind%20Harsha%20Toyota%20Showroom%20Kondapur%2C%20Hyderabad%20%E2%80%93%20500084%20INDIA!5e0!3m2!1sen!2sin!4v1577609940983!5m2!1sen!2sin"} frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="col-md-6">
        <h2 class="text-uppercase mt-3 font-weight-bold text-white">CONTACT US</h2>
        <form action="">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" class="form-control mt-2" placeholder="First Name" required/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="text" class="form-control mt-2" placeholder="Last Name" required/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="email" class="form-control mt-2" placeholder="Email" required/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <input type="String" class="form-control mt-2" placeholder="Telephone" required/>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3" required></textarea>
              </div>
            </div>
            <div class="col-12">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                <label class="form-check-label" for="invalidCheck2">
                  Accept the conditions
                </label>
              </div>
            </div>
            </div>
            <div class="col-12">
              <button class="btn btn-light" type="submit">Submit</button>
            </div>
          </div>
        </form>
        <div class="text-white">
        <h2 class="text-uppercase mt-4 font-weight-bold">Where We Are</h2>

        <i class="fas fa-phone mt-3"></i> <a href="tel:+">+91 986 650 0198</a><br/>
        <i class="fab fa-whatsapp mt-3 fa-1.5x"></i> <a href="tel:+">+91 986 650 0198</a><br/>
        <i class="fa fa-envelope mt-3"></i> <a href="">sochgroup@gmail.com</a><br/>
        <i class="fas fa-globe text-justify mt-3"></i> Flat No 204, SaiNilayam  Apartments Behind Harsha Toyota Showroom Kondapur, Hyderabad – 500084 INDIA<br/>
        <div class="my-4">
        <a href="https://www.facebook.com/SOCH.Group"><i class="fab fa-facebook fa-3x pr-4"></i></a>
        <a href="https://api.whatsapp.com/send?phone=+9198665001987"><i class="fab fa-whatsapp fa-3x pr-4"></i></a>
        </div>
        </div>
      </div>
    </div>
</div>
</div>
</React.Fragment>
    )
  }
}


export default ContactUs
