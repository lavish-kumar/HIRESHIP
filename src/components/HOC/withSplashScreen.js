import React, {Component} from 'react';
import SiteLoader from "../site-loader/SiteLoader"

function LoadingMessage() {
  return (
    <SiteLoader/>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

     componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        },1500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;