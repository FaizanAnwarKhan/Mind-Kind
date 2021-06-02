import { Link, withRouter } from "react-router-dom";
import "./signUpStyle.css"

function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        //container start
        <div className="container white">
            <h4>SIGN UP</h4>
            {/* form start */}
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    {/* first name*/}
                    <div className="input-field col l6 m6 s6">
                        <input id="first_name" name="firstName" type="text" className="validate" />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    {/* last name*/}
                    <div className="input-field col l6 m6 s6">
                        <input id="last_name" name="lastName" type="text" className="validate" />
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    {/* date */}
                    <div className="input-field col l6 m6 s6">
                        <input id="date" name="date" type='date' className="validate" />
                        <label for="date">DOB</label>
                    </div>
                    {/* email */}
                    <div className="input-field col l6 m6 s6">
                        <input id="email" name='email' type='email' className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    {/* phone */}
                    <div className="input-field col l4 m4 s6 ">
                        <input id="phone" name='phone' type='number' className="validate" />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    {/* password */}
                    <div className="input-field col l4 m4 s6 ">
                        <input id="password" name='password' type='password' className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                    {/* confirm password */}
                    <div className="input-field col l4 m4 s12 ">
                        <input id="password2" name='password2' type='password' className="validate" />
                        <label id='lblPassword2' htmlFor="password2">Confirm Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col l6">
                        <p>Already have an account ?<Link to="/signin"> Sign in</Link></p>
                    </div>
                    <div className="col l6"></div>
                </div>
                {/* sign up manually */}
                <div className='row' id='buttons'>
                    <div className="col s12">
                        <button className="btn-large waves-effect waves-light #1a237e indigo darken-4" id='register' type="submit" name="action">SignUp</button>
                        <a href='/' className="btn-large waves-effect waves-light #1a237e #d50000 #b71c1c red darken-4" id='register' type="submit" name="action">Sign up with Google</a>
                    </div>
                </div>
            {/* form end */}
            </form>
        </div>
    );
}

export default withRouter(Signup);
