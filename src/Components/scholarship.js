import  React from 'react';
import '../assets/Styles/styles.css';
class Scholarship extends React.Component {
    // state = {  }


    render() { return (
            <React.Fragment>
         <div class="container-fluidainer divcolor ">

        <div class="container div-outer divcss">                 

            <div id="instituteModel">
                <br/>

                <div class="col-sm-12 text-center">
                    <h4 class="modal-title"> <label>Scheme Wise Scholarship Sanctioned List</label></h4><br/><br/>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <label>Academic Year</label>
                        <select name="academicYear" id="academicYear1" class="custom-select" onChange={this.handleYear}>
                            <option value="-1">----------Choose Academic Year----------</option>  
                            <option value="201617">----------ACADEMIC YEAR: 2016-17---------</option>   
                            <option value="201718">----------ACADEMIC YEAR: 2017-18---------</option>  
                            <option value="201819">----------ACADEMIC YEAR: 2018-19---------</option>
                              <option value="201920">----------ACADEMIC YEAR: 2019-20---------</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label>Application Type</label>
                        <select name="applicationsstatus" id="applicationsstatus1" class="custom-select"  onChange={this.handleApplicationType}>
                            <option value="-1">----------Choose Application Type----------</option>  
                            <option value="1">Fresh</option>   
                            <option value="2">Renewal</option>
                        </select>
                    </div>

                    <div class="col-sm-6">
                        <label>Ministry</label>
                        

<select name="ministryName" id="ministryList" class="form-control input-dm" required="true"  onChange={this.handleMinistry}>
<option value="-1">--Select Ministry--</option>
<option value="5">Ministry of Minority Affairs</option>
<option value="1">Ministry of Social Justice &amp; Empowerment</option>
<option value="3">Department of Higher Education</option>
<option value="2">Department of Empowerment of Persons with Disabilities</option>
<option value="4">Ministry of Tribal Affairs</option>
<option value="7">Department of School Education &amp; Literacy</option>
<option value="9">Ministry of Labour &amp; Employment</option>
<option value="10">Ministry of Home Affairs</option>
<option value="11">North Eastern Council(NEC)</option>
<option value="12">Ministry of Railways (Railway Board)</option>
<option value="13">All India Council For Technical Education</option>
<option value="14">UGC</option>


</select>





                    </div>
                    <div class="col-sm-6">
                        <label>Scheme</label>
                        

<select name="scheme" id="minSchemeList" class="form-control input-dm"  onChange={this.handleScheme}>
<option value="-1">--Select Scheme--</option>


</select>





                    </div>

                    <div class="col-sm-6">
                        <label>State</label>
                        

<select name="stateName" id="stateid" class="form-control input-dm" required="true"  onChange={this.handleState}>
<option value="-1">--Select State--</option>
<option value="35">ANDAMAN AND NICOBAR</option>
<option value="28">ANDHRA PRADESH</option>
<option value="12">ARUNACHAL PRADESH</option>
<option value="18">ASSAM</option>
<option value="10">BIHAR</option>
<option value="4">CHANDIGARH</option>
<option value="22">CHHATTISGARH</option>
<option value="26">DADRA AND NAGAR HAVELI</option>
<option value="25">DAMAN AND DIU</option>
<option value="7">DELHI</option>
<option value="30">GOA</option>
<option value="24">GUJARAT</option>
<option value="6">HARYANA</option>
<option value="2">HIMACHAL PRADESH</option>
<option value="1">JAMMU AND KASHMIR</option>
<option value="20">JHARKHAND</option>
<option value="29">KARNATAKA</option>
<option value="32">KERALA</option>
<option value="31">LAKSHADWEEP</option>
<option value="23">MADHYA PRADESH</option>
<option value="27">MAHARASHTRA</option>
<option value="14">MANIPUR</option>
<option value="17">MEGHALAYA</option>
<option value="15">MIZORAM</option>
<option value="13">NAGALAND</option>
<option value="21">ODISHA</option>
<option value="34">PUDUCHERRY</option>
<option value="3">PUNJAB</option>
<option value="8">RAJASTHAN</option>
<option value="11">SIKKIM</option>
<option value="33">TAMIL NADU</option>
<option value="36">TELANGANA</option>
<option value="16">TRIPURA</option>
<option value="5">UTTARAKHAND</option>
<option value="9">UTTAR PRADESH</option>
<option value="19">WEST BENGAL</option>
</select>





                    </div>
                    <div class="col-sm-6">
                        <label>District</label>
                        

<select name="districtName" id="district" class="form-control input-md" onchange="getRangeList(this.value);">
<option value="-1">--Select District--</option>


</select>





                    </div>

                    <div id="range_details_id" >
                    <div class="col-sm-6 required">
                            
<label for="Select Record Range" class="label">Select Record Range:</label>
<label id="Select Record Range" for="District">Select Record Range</label>


                           

                        </div>

                        <div class="col-sm-6 required" id="comm_id">
                            <select name="rangeName" id="range_id" class="form-control input-sm">
                                <option value="0"> Choose Record Range</option>
                            </select>
                        </div>
                    </div>

                </div>

            </div> <br/><br/>
            {/* <div class="col-sm-12 text-center"><b><label>Please Enter Captcha</label></b>&nbsp;&nbsp;

                <input size="4" type="hidden" id="chkCaptchatemp"/>
                <input type="text" name="chkCaptcha" id="chkCaptcha" placeholder="Captcha..." maxlength="6" autocomplete="off"/>
                <img src="/fresh/captchaservlet.java" id="imgCaptcha" align="middle" width="130px" height="40px"/>
                <img src="/fresh/img/Button_Refresh.png" value="" alt="refresh" height="30px" width="30px" title="refresh" align="middle" border="0" id="imgRefresh" onclick="setTimeout('resetCaptcha()', 300);
                        return false;"/>
            </div><br/><br/> */}
            <div class="row voffset3">
                <div class="col-sm-12 text-center">
                    <input type="button" name="senctionedListSelection" id="senctionedListSelection" class="btn btn-success btn-md" value="Submit"/>
                </div>

            </div>  

            <br/><br/>  

        </div>
            </div> 
            </React.Fragment>
        );
            }
        }
         
export default Scholarship;