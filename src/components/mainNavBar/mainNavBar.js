import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../mainNavBar/mainNavBarStyle.css"
const MainNavbar = () => {
    return (
       <div className="">
          <nav>
    <div class="nav-wrapper grey row">
        
       <div className="col l5 m7 s12 offset-s2 offset-l1">
       <form action="">
       <input type="search" name="" id="" placeholder="Search..." 
        style={{
            width:"50%" , 
            border:"solid" , 
            borderRadius:"5px" , 
            borderWidth:"1px" ,  
            marginRight:"0px",
            backgroundColor:"white"
        }}
            
        />
        <button className="btn" style={{height:"45px" , marginBottom:"8px"}}><span class="large material-icons black-text" style={{marginTop:"10px" , fontSize:"30px"}}>search</span></button>
       </form>
       </div>
     <div className="col l6 m5 s12 grey">
     <ul id="nav-mobile" class="">
        
        <li><a href="#"><Link to="/newsfeed">News feed</Link></a></li>
        <li><a href="#"><Link to="/setting">Settings</Link></a></li>      
        <li><a href="#"><Link to="/profile">My Profile</Link></a></li>
        <li><a href="#"><Link to="/chat">Chat</Link></a></li>
			 	<li><a href="#"><Link>Notifications</Link></a>
			 	<div id="notify">
			 		<p>No New Notification</p>
			 		<hr style={{backgroundColor:"white" , width: "90%"}}/>
			 	</div>
			 	</li>
			
      </ul>
     </div>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>
       </div>
  );
};

export default withRouter(MainNavbar);
