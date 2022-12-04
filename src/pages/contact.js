import React, { Component } from "react";
// import Typed from "react-typed";
import {
  RiSnapchatLine,
  RiMailLine,
  RiPhoneLine,
  RiInstagramLine,
} from "react-icons/ri";
import "../style/component/contact.css";

class Contact extends Component {
  render() {
    const textLines = [
      `I Develop <a>Cool Website</a>`,
      `I Design <a>Amazing Logo</a>`,
    ];
    return (
      <div id="contact">
        <div className="works_topbar">
          <h1>Rajnish Kumar</h1>
          {/* <div>
            <Typed
              strings={textLines}
              loop
              typeSpeed={100}
              backSpeed={50}
              smartBackspace={0}
              cursorChar="."
            />
          </div> */}
        </div>
        <div className="works_filter_menu blog_filter_menu">
          <h1>Contacts info</h1>
        </div>
        <div className="contact_info">
          <div className="contact_info_sub">
            <a href="https://instagram.com/rajnish.007">
              <div>
                <p>
                  <RiInstagramLine />
                </p>
                <span>instagram.com@rajnish.007</span>
              </div>
            </a>
            <a href="https://www.snapchat.com/add/rajnish.007?share_id=DUYXaFsDTqqnfNUOtZNXoA&locale=en_IN">
              <div>
                <p>
                  <RiSnapchatLine />
                </p>
                <span>snapchat.com@rajnish.007</span>
                {/* <button>Send Message</button> */}
              </div>
            </a>
          </div>
          <div className="contact_info_sub">
            <div>
              <p>
                <RiPhoneLine />
              </p>
              <span>+91 9915315630</span>
            </div>
            <div>
              <p>
                <RiMailLine />
              </p>
              <span>786rajnish.rk@gmail.com</span>
            </div>
          </div>
        </div>
        {/* <div className="works_filter_menu blog_filter_menu">
          <h1>Contacts Form</h1>
        </div>
        <div className="contact_form">
          <form>
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <textarea style={{fontFamily: "arial"}} cols="40" rows="10" aria-invalid="false" aria-required="true" placeholder="Message"></textarea>
            
          </form>
        </div> */}
      </div>
    );
  }
}

export default Contact;
