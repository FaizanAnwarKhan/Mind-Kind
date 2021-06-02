import {useState} from 'react'
import { Link, withRouter } from "react-router-dom";
import "./signInStyle.css";

const SignIn = () => {
  const [forgetCheck , setForgetCheck] = useState("false")
  function handleClick(){
    if(forgetCheck){
      document.getElementById("forget").innerHTML=("<div><input type=email placeholder='Please enter your recovery email'></input><button class=btn>Get Code</button></div>")
    }else{
      document.getElementById("forget").innerHTML=("")
    }
     setForgetCheck(!forgetCheck)
      
      
      
  }
  function handleCancel(){
    return(
      document.getElementById("forget").innerHTML=("<div></div>")
    )
  }
  return (
    //container start
    <div className="container">
      {/* form start */}
      <form>
        <div className="row">
          <div className="col l12 m12 s12">
            <h4>Sign IN</h4>
          </div>
          {/*  username*/}
          <div className="input-field col l6 m6 s12 white-text">
            <input
              id="first_name"
              name="firstName"
              type="text"
              className="validate"
            />
            <label htmlFor="first_name">Username</label>
          </div>
          {/* password */}
          <div className="input-field col l6 m6 s12">
            <input
              id="password"
              name="password"
              type="password"
              className="validate"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="col l6 m6 s12">
            <p>
              Don't have an account ?<Link to="/signup"> Sign up</Link>
            </p>
          </div>
          <div className="col l6 m6 s12">
            <p>
              <a href="#" onClick={handleClick}>Forget password?</a>
            </p>
          </div>
        </div>
        <div className="row" >
            <div className="col" id="forget">
              
            </div>
        </div>
        <div id="buttons" className="row">
          <div className="input-field col l12 m12 s12">
            <a
              href="/newsfeed"
              className="btn-large waves-effect blue"
              id="register"
              type="submit"
              name="action"
            >
              Sign IN
            </a>
          </div>
          <div className="input-field col l12 m12 s12">
            <a
              href="/"
              className="btn-large waves-effect waves-light #1a237e #d50000 #b71c1c red darken-4"
              id="register"
              type="submit"
              name="action"
            >
              Sign in with Google
            </a>
          </div>
        </div>
        {/* form end */}
      </form>
    </div>
  );
};

export default withRouter(SignIn);
