import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class LoadingButton extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        isLoading: false
      };
    }
  
    refreshConfession(e){
      e.preventDefault();
      var event = new Event("onConfessionChanged");
      document.dispatchEvent(event);
      console.log("You clicked refresh");
    }

    handleClick(e) {
      this.setState({ isLoading: true });
      this.refreshConfession(e);
      // This probably where you would have an `ajax` call
      setTimeout(() => {
        // Completed of async action, set loading state back
        this.setState({ isLoading: false });
      }, 2000);
    }
  
    render() {
      const { isLoading } = this.state;
  
      return (
        <Button
          bsStyle="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick.bind(this) : null}
        >
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </Button>
      );
    }
  }
  
  export default LoadingButton;