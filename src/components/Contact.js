import React, { Component } from 'react'
import { MdMailOutline, MdPhone } from "react-icons/md";

class Contact extends Component {

  componentDidMount(){
    const
      placeholders = document.querySelectorAll('.styled-input__placeholder-text'),
      inputs = document.querySelectorAll('.styled-input__input');

    placeholders.forEach(function(el, i){
        let value = el.innerText,
            html = '';
        for(let w of value){
            if(!value) value = '&nbsp;';
            html += `<span class="letter">${w}</span>`;
        }
        el.innerHTML = html;
    });

    inputs.forEach(function(el){
        let parent = el.parentNode;
        el.addEventListener('focus', function(){
            parent.classList.add('filled');
            placeholderAnimationIn(parent, true);
        }, false);
        el.addEventListener('blur', function(){
            if(el.value.length) return;
            parent.classList.remove('filled');
            placeholderAnimationIn(parent, false);
        }, false);
    });

    function placeholderAnimationIn(parent, action){
        let act = (action)? 'add' : 'remove';
        let letters = parent.querySelectorAll('.letter');
        letters = [].slice.call(letters, 0);
        if(!action) letters = letters.reverse();
        letters.forEach(function(el, i){
            setTimeout(function(){
                let contains = parent.classList.contains('filled');
                if( (action && !contains) || (!action && contains)) return;
                el.classList[act]('active');
            }, (50*i));
        });
    }

    // setTimeout(function(){
    //     document.body.classList.add('on-start');
    // }, 100);
    //
    // setTimeout(function(){
    //     document.body.classList.add('document-loaded');
    // }, 1800);


  }

  render(){
    return (
      <div id="contact">
        <div className="contact on-start document-loaded container">
         <form className="form" name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">

             <div className="form__cover"></div>
             <div className="form__content">
             <h3 className="sub-title">Contact Me</h3>
                 <div className="styled-input">
                     <input id="name" type="text" className="styled-input__input" name="name"/>
                     <div className="styled-input__placeholder">
                         <label htmlFor="name" className="styled-input__placeholder-text">Name*</label>
                     </div>
                     <div className="styled-input__circle"></div>
                 </div>
                 <div className="styled-input">
                     <input id="phone" type="text" className="styled-input__input" name="phone"/>
                     <div className="styled-input__placeholder">
                         <label htmlFor="phone" className="styled-input__placeholder-text">Phone</label>
                     </div>
                     <div className="styled-input__circle"></div>
                 </div>
                 <div className="styled-input">
                     <input id="email" type="email" className="styled-input__input" name="email"/>
                     <div className="styled-input__placeholder">
                         <label htmlFor="email" className="styled-input__placeholder-text">Email*</label>
                     </div>
                     <div className="styled-input__circle"></div>
                 </div>
                 <div className="styled-input">
                      <textarea id="message" name="message" className="styled-input__input"></textarea>
                     <div className="styled-input__placeholder message">
                         <label htmlFor="message" className="styled-input__placeholder-text">Message*</label>
                     </div>
                     <div className="styled-input__circle"></div>
                 </div>

                 <button type="submit" className="styled-button">
                     <span className="styled-button__real-text-holder">
                         <span className="styled-button__real-text">Submit</span>
                         <span className="styled-button__moving-block face">
                             <span className="styled-button__text-holder">
                                 <span className="styled-button__text">Submit</span>
                             </span>
                         </span><span className="styled-button__moving-block back">
                             <span className="styled-button__text-holder">
                                 <span className="styled-button__text">Submit</span>
                             </span>
                         </span>
                     </span>
                 </button>
                 <button>Send</button>
             </div>
             <div className="get-touch">
               <a className="get-touch__email" href="mailto:kleito870827@gmail.com"><MdMailOutline className="icon" /> Kleito870827@gmail.com</a>
               <a className="get-touch__phone" href="tel:7863789087"><MdPhone className="icon" /> 786-378-9087</a>
             </div>
         </form>
       </div>
       <form name="contact-us" action="/success" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
    )
  }
}

export default Contact;

// <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
//   <p className="hidden">
//     <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
//   </p>
//   <p>
//     <label>Name: <input type="text" name="name" /></label>
//   </p>
//   <p>
//     <label>Email: <input type="email" name="email" /></label>
//   </p>
//   <p>
//     <label>Message: <textarea name="message"></textarea></label>
//   </p>
//   <div data-netlify-recaptcha="true"></div>
//   <p>
//     <button type="submit">Send</button>
//   </p>
// </form>
// </div>
