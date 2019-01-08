import React, { Component } from 'react'
import { MdMailOutline, MdPhone } from "react-icons/md";
import axios from 'axios'

class Contact extends Component {
  state= {
    name: '',
    email: '',
    phone: '',
    comment: '',
    message: '',
    inputs: '',
    placeholders: ''
  }

  componentDidMount(){
    this.setState({
      inputs: document.querySelectorAll('.styled-input__input'),
      placeholders: document.querySelectorAll('.styled-input__placeholder-text')
  }, () => {
    this.formAnimation()
  })
    // setTimeout(function(){
    //     document.body.classList.add('on-start');
    // }, 100);
    //
    // setTimeout(function(){
    //     document.body.classList.add('document-loaded');
    // }, 1800);


  }

  formAnimation = () => {

    this.state.placeholders.forEach(function(el, i){
        let value = el.innerText,
            html = '';
        for(let w of value){
            if(!value) value = '&nbsp;';
            html += `<span class="letter">${w}</span>`;
        }
        el.innerHTML = html;
    });

    this.onFocuseInput()
  }

  onFocuseInput = () => {
    const self = this;
    this.state.inputs.forEach(function(el){
        let parent = el.parentNode;
        el.addEventListener('focus', function(){
            parent.classList.add('filled');
            self.placeholderAnimationIn(parent, true);
        }, false);
        el.addEventListener('blur', function(){
            if(el.value.length) return;
            parent.classList.remove('filled');
            self.placeholderAnimationIn(parent, false);
        }, false);
    });
  }

  onFromSent = () => {
    const self = this;
    this.state.inputs.forEach(function(el){
        let parent = el.parentNode;
        parent.classList.remove('filled');
        self.placeholderAnimationIn(parent, false);
    });
  }

  placeholderAnimationIn = (parent, action) => {
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

  onSubmitForm = (e) => {
    e.preventDefault();
    const self = this;
    if(this.state.name.length < 1 || this.state.email.length < 1){
      self.setState({message: 'The file with * are required.'})
      return false;
    }
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLScTG8OngF06CjwyzmVH2rdmOd0ZEecc7BsbObA3Byx1I_96rA/formResponse';
    const data = {
      "entry.2005620554": this.state.name,
      "entry.1045781291": this.state.email,
      "entry.1166974658": this.state.phone,
      "entry.839337160": this.state.comment
    };

    axios({
    method: 'post',
    url: url,
    data: this.serialize(data),
    headers: {
      "Accept": "application/xml, text/xml, */*; q=0.01",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
    })
    .then(function (response) {
      console.log('res');
        //handle success
        self.setState({
          name: '',
          email: '',
          phone: '',
          comment: '',
          message: 'Thank you for getting in touch!.'
        }, () => {
          self.onFromSent()
        })
    })
    .catch(function (error) {
      console.log('error');
        self.setState({
          name: '',
          email: '',
          phone: '',
          comment: '',
          message: 'Thank you for getting in touch!'
        }, () => {
          self.onFromSent()
        })
    });
  }

  handleChange = e => this.setState({ [e.currentTarget.dataset.name]: e.target.value });

  serialize = obj => {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };

  render(){
    return (
      <div id="contact">
        <div className="contact on-start document-loaded container">
         <form onSubmit={this.onSubmitForm} className="form" id="ss-form" autoComplete="on">

             <div className="form__cover"></div>
             <div className="form__content">
             <h3 className="sub-title">Contact Me</h3>
                 <div className="styled-input">
                     <input type="text" name="entry.2005620554" data-name="name" value={this.state.name} onChange={this.handleChange} className="styled-input__input" id="entry_2005620554" dir="auto" aria-label="Name" aria-required="true" required="" title=""/>
                     <div className="styled-input__placeholder">
                         <label htmlFor="entry_2005620554" className="styled-input__placeholder-text">Name*</label>
                     </div>
                     <div className="styled-input__circle"></div>
                 </div>
                 <div className="styled-input">
                     <input type="email" name="entry.1045781291" data-name="email" value={this.state.email} onChange={this.handleChange} className="styled-input__input" id="entry_1045781291" dir="auto" aria-label="Email  Please enter a valid email address" aria-required="true" required="" title="Please enter a valid email address"/>
                     <div className="styled-input__placeholder">
                         <label htmlFor="entry_1045781291" className="styled-input__placeholder-text">Email*</label>
                     </div>
                     <div className="styled-input__circle"></div>
                 </div>
                 <div className="styled-input">
                     <input type="text" name="entry.1166974658" data-name="phone" value={this.state.phone} onChange={this.handleChange} className="styled-input__input" id="entry_1166974658" dir="auto" aria-label="Phone number" title=""/>
                     <div className="styled-input__placeholder">
                         <label htmlFor="entry_1166974658" className="styled-input__placeholder-text">Phone</label>
                     </div>
                     <div className="styled-input__circle"></div>
                 </div>
                 <div className="styled-input">
                      <textarea name="entry.839337160" value={this.state.comment} data-name="comment" onChange={this.handleChange} className="styled-input__input" id="entry_839337160" dir="auto" aria-label="Comments"></textarea>
                     <div className="styled-input__placeholder message">
                         <label htmlFor="entry_839337160" className="styled-input__placeholder-text">Message</label>
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
                 <p className="form-message">{this.state.message}</p>
             </div>
             <div className="get-touch">
               <a className="get-touch__email" href="mailto:kleito870827@gmail.com"><MdMailOutline className="icon" /> Kleito870827@gmail.com</a>
               <a className="get-touch__phone" href="tel:7863789087"><MdPhone className="icon" /> 786-378-9087</a>
             </div>
         </form>
       </div>
    </div>
    )
  }
}

export default Contact;
