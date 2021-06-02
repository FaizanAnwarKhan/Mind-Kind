import "./profileStyle.css";
import MainNavBar from '../mainNavBar/mainNavBar'

function Profile() {
    return (
        <div className="">
            <MainNavBar/>
               
<div class="the-header row">
<dic className="col l3 offset-l9 m3 offset-m9 s3 offset-s9">
<i class=" large material-icons right hide-on-med-and-down">add_a_photo</i>
<i class=" small material-icons right hide-on-large-only">add_a_photo</i>
</dic>
  <div class="col l12 m12 s12">
    <img class="header-background" src="https://learnodo-newtonic.com/wp-content/uploads/2017/12/Famous-Abstract-Art-Featured.jpg" id="header-background-id" alt="background-img"/>
  </div>
</div>


<div class="row">
  <div className="col l12 m12 s6">
  <img class="profile-picture" src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile-picture"/>
  {/* <i class="meduim material-icons">add_a_photo</i> */}
  </div>
  </div>



    <div className="row">
    <div className="col l4">
                    <div className="card large grey lighten-1">
                        <div className="class-content" style={{padding:"5px"}}>
                            <span className="class-title"><h3>About</h3></span>
                            <p><i class="material-icons">description</i> I'm currently pursuing my 8th semester of BS Computer Science at University of Management and Technology, Lahore.
I have immense interest in web development. I love learning javascript and its frameworks. Currently working on my final year project which is a MERN stack web application</p>
                            <p> <i class="material-icons">work</i> Node Developer</p>
                            <p> <i class="material-icons">wc</i> Single</p>
                            <p> <i class="material-icons">phone</i> +9237878782</p>
                            <p> <i class="material-icons">people</i> Male</p>
                        </div>
                    </div>
                </div>
                <div className="col l8" style={{ marginTop: "1%" }}>
          <div
            class="main mainpost"
            style={{ marginBottom: "20px", paddingBottom: "10px" }}
          >
            <div className="row">
              <div className="col l1">
                <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{width:"70px" , height:"70px" , marginTop:"0px"}}/>
              </div>
              <div className="col">
                <p style={{fontSize:"20px" ,marginTop:"0px"}}><strong>Faizan anwar</strong></p>
              </div>
            </div>
           <div className="row">
             <div className="col l12 m12 s12">
             <textarea
                id="mypara"
                placeholder="Share an article ,photo ,video or idea."
                style={{height:"100px"}}
              ></textarea>
             </div>
           </div>

            <div class="post">
              <img id="load2" class="postimg" src=" " />
            </div>

            <div class="row">
            <div className="col l2 m5 s5">
              <button className="btn ">
                &#x1f4f7; Images
              </button></div>
            <div className="col l2 m5 s5">
              <button className="btn ">&#x1f4f7; Videos</button>
            </div>
            <div className="col l2  m5 s2 right">
              <button className="btn blue right">Post</button>
            </div>
              
              
              
            
          </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col l8 offset-l2">
    <div class="mainpost">
        <div className="row">
              <div className="col l1">
                <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{width:"70px" , height:"70px" , marginTop:"0px"}}/>
              </div>
              <div className="col">
                <p style={{fontSize:"20px" ,marginTop:"0px"}}><strong>Faizan Anwar</strong></p>
              </div>
            </div>
            <p class="quotes">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas aut perspiciatis eaque, quas adipisci quod, assumenda, rerum soluta doloremque maxime suscipit magnam? Provident placeat voluptatum quos necessitatibus sunt ducimus!
            </p>
            <div class="post">
              <img
                class="postimg"
                src="https://www.brightful.me/content/images/2020/07/david-kovalenko-G85VuTpw6jg-unsplash.jpg"
              />
            </div>

            <div class="likedislike">
              <p class="like">
                <span class="nooflike" id="like1">
                  0{" "}
                </span>{" "}
                likes{" "}
                <span class="noofdislike" id="dislike1">
                  0{" "}
                </span>{" "}
                dislikes

                <span class="noofdislike" id="dislike1" style={{marginLeft:"5px"}}>
                  0{" "}
                </span>{" "}
                comments
              </p>
              <p class="likedisbttn">
              <i class="small material-icons">thumb_up</i>
              <i class="small material-icons">thumb_down</i>
              
                <span>
                <input type="text" name="" id="" placeholder="Comment here "/>
                </span>
              </p>
            </div>
          </div>
    </div>
</div>
<div className="row">
    <div className="col l8 offset-l2">
    <div class="mainpost">
        <div className="row">
              <div className="col l1">
                <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{width:"70px" , height:"70px" , marginTop:"0px"}}/>
              </div>
              <div className="col">
                <p style={{fontSize:"20px" ,marginTop:"0px"}}><strong>Faizan Anwar</strong></p>
              </div>
            </div>
            <p class="quotes">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas aut perspiciatis eaque, quas adipisci quod, assumenda, rerum soluta doloremque maxime suscipit magnam? Provident placeat voluptatum quos necessitatibus sunt ducimus!
            </p>
            <div class="post">
              <img
                class="postimg"
                src="https://machinelearningmastery.com/wp-content/uploads/2018/07/How-to-Generate-Random-Numbers-in-Python.jpg "
              />
            </div>

            <div class="likedislike">
              <p class="like">
                <span class="nooflike" id="like1">
                  0{" "}
                </span>{" "}
                likes{" "}
                <span class="noofdislike" id="dislike1">
                  0{" "}
                </span>{" "}
                dislikes

                <span class="noofdislike" id="dislike1" style={{marginLeft:"5px"}}>
                  0{" "}
                </span>{" "}
                comments
              </p>
              <p class="likedisbttn">
              <i class="small material-icons">thumb_up</i>
              <i class="small material-icons">thumb_down</i>
              
                <span>
                <input type="text" name="" id="" placeholder="Comment here "/>
                </span>
              </p>
            </div>
          </div>
    </div>
</div>
<div className="row">
    <div className="col l8 offset-l2">
    <div class="mainpost">
        <div className="row">
              <div className="col l1">
                <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{width:"70px" , height:"70px" , marginTop:"0px"}}/>
              </div>
              <div className="col">
                <p style={{fontSize:"20px" ,marginTop:"0px"}}><strong>Faizan Anwar</strong></p>
              </div>
            </div>
            <p class="quotes">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas aut perspiciatis eaque, quas adipisci quod, assumenda, rerum soluta doloremque maxime suscipit magnam? Provident placeat voluptatum quos necessitatibus sunt ducimus!
            </p>
            <div class="post">
              <img
                class="postimg"
                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Among-Us-Random-Name-Generator.jpg"
              />
            </div>

            <div class="likedislike">
              <p class="like">
                <span class="nooflike" id="like1">
                  0{" "}
                </span>{" "}
                likes{" "}
                <span class="noofdislike" id="dislike1">
                  0{" "}
                </span>{" "}
                dislikes

                <span class="noofdislike" id="dislike1" style={{marginLeft:"5px"}}>
                  0{" "}
                </span>{" "}
                comments
              </p>
              <p class="likedisbttn">
              <i class="small material-icons">thumb_up</i>
              <i class="small material-icons">thumb_down</i>
              
                <span>
                <input type="text" name="" id="" placeholder="Comment here "/>
                </span>
              </p>
            </div>
          </div>
    </div>
</div>
                
        </div>

    );
}

export default Profile;
