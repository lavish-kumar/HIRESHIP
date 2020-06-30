import React,{Component} from 'react';
import typed from 'typed.js';
import styles from './Typed.module.css';

class Typed extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
        strings: strings,
        typeSpeed: this.props.ts,
        backSpeed: 30,
        loop: true,
        loopCount: Infinity,
        cursorChar: ' _',
      };
      // this.el refers to the <span> in the render() method
      this.typed = new typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
            <span className={(this.props.textstyle === "whitetext" ) ? styles.whitetext :styles.pinktext }
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
      );
    }
  }

  export default Typed;