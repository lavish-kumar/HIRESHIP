import React from 'react'
import Lottie from 'react-lottie';

 
export default class LottieControl extends React.Component {
 
  constructor(props) {
    super(props);
  }
 
  render() {
    const anim = this.props.animation
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: anim,

    };
 
    return <Lottie options={defaultOptions}
              height={this.props.h}
              width={this.props.w}/>
    
  }
}