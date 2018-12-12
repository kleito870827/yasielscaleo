import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import Img from "gatsby-image"
import SplitText from 'react-pose-text';

class HomeHeader extends Component {
  // scroll_point = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  componentDidMount(){
    const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    const TextScramble = function () {
      function TextScramble(el) {
        _classCallCheck(this, TextScramble);

        this.el = el;
        this.chars = '!<> []{ }—= +*^ ?#_ K&7';
        this.update = this.update.bind(this);
      }

      _createClass(TextScramble, [{
        key: 'setText',
        value: function setText(newText) {
          let _this = this;

          let oldText = this.el.innerText;
          let length = Math.max(oldText.length, newText.length);
          let promise = new Promise(function (resolve) {
            return _this.resolve = resolve;
          });
          this.queue = [];
          for (let i = 0; i < length; i++) {
            let from = oldText[i] || '';
            let to = newText[i] || '';
            let start = Math.floor(Math.random() * 40);
            let end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from: from, to: to, start: start, end: end });
          }
          cancelAnimationFrame(this.frameRequest);
          this.frame = 0;
          this.update();
          return promise;
        }
      }, {
        key: 'update',
        value: function update() {
          let output = '';
          let complete = 0;
          for (let i = 0, n = this.queue.length; i < n; i++) {
            let _queue$i = this.queue[i],
                from = _queue$i.from,
                to = _queue$i.to,
                start = _queue$i.start,
                end = _queue$i.end,
                char = _queue$i.char;

            if (this.frame >= end) {
              complete++;
              output += to;
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
              }
              output += '<span class="dud">' + char + '</span>';
            } else {
              output += from;
            }
          }
          this.el.innerHTML = output;
          if (complete === this.queue.length) {
            this.resolve();
          } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        }
      }, {
        key: 'randomChar',
        value: function randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
      }]);

      return TextScramble;
    }();

    const phrases = [
     'Wordpress Theme Create',
     'Responsive Website',
     'Optimized Speed',
     'Website Development',
     'WCAG 2.0 Compliance',
     'Full-Stack Developer'
    ];

    let el = document.querySelector('.text');
    let fx = new TextScramble(el);

    let counter = 0;
    const next = function next() {
      fx.setText(phrases[counter]).then(function () {
        setTimeout(next, 3000);
      });
      counter = (counter + 1) % phrases.length;
    };
    setTimeout(function(){
      next();
    }, 7000);
  }

  onClickScroll = (e) => {
    e.preventDefault();
    const contH = document.getElementsByClassName('homeHeader')[0].offsetHeight;
    const scroll_point = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scroll_point <= contH){
      window.scrollTo({
        top: contH,
        left: 0,
        behavior: 'smooth'
      })
      // document.querySelector("html, body").animate({ scrollTop: contH + "px" },1000, "easeInOutExpo");
    }
    return false;
  }

  render(){
    const charPosesTitle = {
      exit: {
        opacity: 0,
        y: 20,
        delay: () => 1000
      },
      enter: {
        opacity: 1,
        y: 0,
        // delay: ({ charIndex }) => charIndex * 70
        delay: ({ charIndex }) => (charIndex * 70) + 1000
      }
    };
    const charPosesSubTitle = {
      exit: {
        opacity: 0,
        y: 20,
        delay: () => 1000
      },
      enter: {
        opacity: 1,
        y: 0,
        // delay: ({ charIndex }) => charIndex * 70
        delay: ({ charIndex }) => (charIndex * 70) + 2700
      }
    };
    // console.log(this.props.bgImage.src);
    return (
      <div className="homeHeader">
        <video style={{
          position: 'absolute',
          display: 'block',
          zIndex: '-1',
          left: 0,
          top: 0,
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          // display: 'none',
          overflow: 'hidden'
        }} autoPlay loop muted >
          <source src={withPrefix('/video/home-hero-video.mp4')} type="video/mp4" />
        </video>
        <Img style={{
          position: 'absolute',
          zIndex: '-2',
          // display: 'none',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }} fluid={this.props.bgImage} />
        <div className="homeHeader__text-cont">
          <h1>
            <SplitText initialPose="exit" pose="enter" charPoses={charPosesTitle}>
              Hello, I'm Yasiel S Caleo.
            </SplitText>
          </h1>

          <h2>
            <span className="fadeInUp animated text h2header animate fadeInDown">
              <SplitText initialPose="exit" pose="enter" charPoses={charPosesSubTitle}>
                Full-Stack Developer
              </SplitText>
            </span>
          </h2>
        </div>
        <div id="scroll" onClick={this.onClickScroll} className="homeHeader-scroll">
          <a href="#"><span></span></a>
        </div>
      </div>
    )
  }
}
export default HomeHeader;
