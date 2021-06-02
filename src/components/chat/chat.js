import React, { useState } from "react";

import "../chat/chatStyle.css";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);
  const [sid, setSid] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setMsg(value);
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setCount(count+1)
    setSid("outsms"+count)
    console.log(sid)
    document.getElementById(sid).innerHTML=(msg)
    setMsg("")
  }
  return (
    <div>
      <div class="mainnotfixed">
        <div class="contact">
          <div class="headmsg">
            <p>Messaging</p>
          </div>

          <div class="leftcontent">
            <form id="contactsearch">
              <input
                type="text"
                name="search"
                placeholder="Search.."
                id="searchcontact"
              />
            </form>

            <div class="contacts">
              <div class="contactuser" onclick="select(1)">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  class="contimg"
                />
                <p class="name">User Name</p>
                <span id="time">11:00 AM</span>
              </div>
              <div class="contactuser" onclick="select(1)">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  class="contimg"
                />
                <p class="name">User Name</p>
                <span id="time">11:00 AM</span>
              </div>
              <div class="contactuser" onclick="select(1)">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  class="contimg"
                />
                <p class="name">User Name</p>
                <span id="time">11:00 AM</span>
              </div>
              <div class="contactuser" onclick="select(1)">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  class="contimg"
                />
                <p class="name">User Name</p>
                <span id="time">11:00 AM</span>
              </div>
              <div class="contactuser" onclick="select(1)">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  class="contimg"
                />
                <p class="name">User Name</p>
                <span id="time">11:00 AM</span>
              </div>
              <div class="contactuser" onclick="select(1)">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  class="contimg"
                />
                <p class="name">User Name</p>
                <span id="time">11:00 AM</span>
              </div>
              <div class="contactuser" onclick="select(1)">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  class="contimg"
                />
                <p class="name">User Name</p>
                <span id="time">11:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="chat">
          <div class="chatuser">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="chatimg"
            />
            <p class="viewname">Faizan Anwar</p>
          </div>

          <div class="chatmsg">
            <div class="received">
            <p id="insms">HI</p>
            </div>
            <div class="received">
            <p id="insms">where are you</p>
            </div>
            <div class="received">
            <p id="insms">Hello</p>
            </div>

            
            <div class="send" id="send">
              <p id="outsms0"></p>
            </div>
            <div class="send" id="send">
              <p id="outsms1"></p>
            </div>
            <div class="send" id="send">
              <p id="outsms2"></p>
            </div>
            <div class="send" id="send">
              <p id="outsms3"></p>
            </div>
            <div class="send" id="send">
              <p id="outsms4"></p>
            </div>

            
          </div>

          <div class="sendmessage">
            <form onSubmit={handleSubmit}>
              <input type="text" value={msg} name="" id="" onChange={handleChange} style={{width:"85%" , marginLeft:"2%"}} />
              <button className="btn right" onClick={handleSubmit} style={{ margin: "11px" }}>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
