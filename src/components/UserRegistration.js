import React, { useState}  from 'react'


const UserRegistration = ()=>{
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setConfirmPassword] = useState("");
    // const [selectedValue, setSelectedValue] = useState('Are you a Student?');


      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform authentication logic with the username and password
        console.log('Username:', email);
        console.log('Password:', password);
      };
    
    return(
        <>
            <div id="background-wrap">
                <div className="bubble1 x1"></div>
                <div className="bubble2 x2"></div>
                <div className="bubble3 x3"></div>
                <div className="bubble4 x4"></div>
                <div className="bubble5 x5"></div>
                <div className="bubble1 x6"></div>
                <div className="bubble2 x7"></div>
                <div className="bubble3 x8"></div>
                <div className="bubble4 x9"></div>
                <div className="bubble5 x10"></div>
                <div className="bubble1 x11"></div>
                <div className="bubble2 x12"></div>
                <div className="bubble3 x13"></div>
                <div className="bubble4 x14"></div>
                <div className="bubble5 x15"></div>
                <div className="bubble1 x16"></div>
                <div className="bubble2 x17"></div>
                <div className="bubble3 x18"></div>
                <div className="bubble4 x19"></div>
                <div className="bubble5 x20"></div>
            </div>
            <div className="container element-registration">
                <div className="row justify-content-center">
                <div className="custom_form_box column  form_border_radius_reg">
                    <form className="" onSubmit={handleSubmit}>
                            <h1>Sign Up</h1>
                            <div className="mb-3">
                                <input type="text"placeholder='Name' autoComplete="name" onChange={handleNameChange}  value={name}  id="exampleInputName"  />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <input type="email"placeholder='Email' autoComplete="email" onChange={handleEmailChange}  value={email}  id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <input autoComplete="current-password"  placeholder="Password" onChange={handlePasswordChange}type="password" value={password} id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <input autoComplete="current-password"  placeholder="Confirm Password" onChange={handleConfirmPasswordChange} type="password" value={confirmpassword} id="exampleInputConfirmPassword1" />
                            </div>
                            <div className="mb-3">
                            {/* value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} */}
                            <select id="select-container" >
                                <option selected hidden>Are you Student?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                
                            </select>
                   
                            </div>
                            

                            <div className=" form-check ">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label form-text" htmlFor="exampleCheck1"> I agree to the <b>Terms & Condition</b> </label>
                             </div>
                            <div className="mb-3 form-check">
                               <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                <label className="form-check-label form-text" htmlFor="exampleCheck2"> I agree to the   <b> Privacy Policy</b></label>
                            
                            </div>
                            
                            
                            <button type="submit" className="btn btn-dark mb-3">Submit</button>
  
                            <div id="g_id_onload"
                                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                                data-login_uri="https://your.domain/your_login_endpoint"
                                data-auto_prompt="false">
                            </div>
                            <div className="g_id_signin mb-3"
                                data-type="standard"
                                data-size="large"
                                data-theme="outline"
                                data-text="sign_in_with"
                                data-shape="rectangular"
                                data-logo_alignment="left">
                            </div>
                            
                            <div  className="form-text1 mb-3">Already have an account?</div>
                            <div  className="form-text3 mb-3"><a  href="/login"><b>Sign in</b></a></div>
                        </form>
                    </div>
                      
                </div>
            </div>
        </>
    );
     
}

export default UserRegistration; 