import React from 'react';
import '../assets/Styles/styles.css';

class Donate extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Donate-Page">
        <h3 class="Main-heading text-center heading-custom">DONATE</h3>
        <hr class="headHr border border-primary" width="20%"></hr>
    <img class="donate_img" src={require('../assets/Images/Donate.svg')}/>

        <div class="text-justify"> 
        <p>
        Your support can change their dreams and transform lives. Today they are able to stand with our heads high, because there was someone like you to care for us.
        <br></br>
        <code class="Soch">SOCH</code> is YOUR platform to make a difference to the lives of children and gift them a promising future. 
        We are a grassroots agency, but YOU make our mission possible and give inspiration to SERVE more children in need and serve them BETTER. 
        We value your relationship with <code class="Soch">SOCH</code> immensely and carry out your wishes in serving the children.
        <br/>We strive to make each of your moments spent here, a <code class="Soch">MEMORABLE EXPERIENCE </code> , More <code class="Soch">IMPACTFUL</code>  , More <code class="Soch">FUN</code>. You can contribute in the following categories :
        </p>
        </div>
        <ul class="Dlist">
        <li>Support Child Education</li>
        <li>Medical and Hospitalization Aid</li>
        <li>School Building Fund</li>
        </ul>

        <div id="font1"> 
        <div class="Dtable">
        <h3 >Donations in India</h3>
        <hr/>
      
<table className="Donate" width="600" border="0" cellpadding="0" cellspacing="0">
  <tbody><tr>
    <td>Account Name</td>
    <td>SOCH</td>
  </tr>
  <tr>
    <td>Account Number</td>
    <td>30693679634</td>
  </tr>
  <tr>
    <td>Name of the Bank</td>
    <td>State Bank Of India</td>
  </tr>
  <tr>
    <td>Name of the Branch</td>
    <td>Madhapur, Hyderabad</td>
  </tr>
  <tr>
    <td>MICR Code</td>
    <td>MICR 500002103</td>
  </tr>
  <tr>
    <td>IFSC Code</td>
    <td>IFSC SBIN0010102</td>
  </tr>
  <tr>
    <td>Account Type</td>
    <td>Savings Account</td>
  </tr>
</tbody></table>
<hr/>
</div>
     <div class="last-sec">
				SOCH holds a valid 80G certificate. Your 
				kind donations are eligible for tax exemption in India. <br/>
				<br/>
				Do email us your donations details with category to: <a href="mailto:sochgroup@gmail.com"><code className="Email">sochgroup@gmail.com</code></a>	  
        </div>
        </div>
        </div>
    </React.Fragment>
    ) 
  }
}
export default Donate