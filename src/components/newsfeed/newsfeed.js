import React from "react";
import "./newsfeedStyle.css";
import MainNavBar from '../mainNavBar/mainNavBar'
const NewsFeed = () => {
  return (
    
    <div className="">
    <MainNavBar/>
      <div className="row">
        <div className="col l2 offset-l1 m2 offset-m1 s2 offset-s1">
          <div className="img-circle mb-3">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="picture not found"
              className="shadow"
            />
          </div>
          <p>Faizan Anwar</p>
          <p>Bio</p>
          <hr />
          <p>Followers</p>
          <p>5</p>

          <hr />
          <p>Following</p>
          <p>9</p>
        </div>
        <div className="col l8" style={{ marginTop: "5%" }}>
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
                <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" style={{width:"70px" , height:"70px" , marginTop:"0px"}}/>
              </div>
              <div className="col">
                <p style={{fontSize:"20px" ,marginTop:"0px"}}><strong>John</strong></p>
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
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" style={{width:"70px" , height:"70px" , marginTop:"0px"}}/>
              </div>
              <div className="col">
                <p style={{fontSize:"20px" ,marginTop:"0px"}}><strong>Mike</strong></p>
              </div>
            </div>
            <p class="quotes">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas aut perspiciatis eaque, quas adipisci quod, assumenda, rerum soluta doloremque maxime suscipit magnam? Provident placeat voluptatum quos necessitatibus sunt ducimus!
            </p>
            <div class="post">
              <img
                class="postimg"
                src="https://images.unsplash.com/photo-1586256053013-81353db35ff4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
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
                <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" style={{width:"70px" , height:"70px" , marginTop:"0px"}}/>
              </div>
              <div className="col">
                <p style={{fontSize:"20px" ,marginTop:"0px"}}><strong>Harris</strong></p>
              </div>
            </div>
            <p class="quotes">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptas aut perspiciatis eaque, quas adipisci quod, assumenda, rerum soluta doloremque maxime suscipit magnam? Provident placeat voluptatum quos necessitatibus sunt ducimus!
            </p>
            <div class="post">
              <img
                class="postimg"
                src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
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
};

export default NewsFeed;
