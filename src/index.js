import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={ lat: null, errorMessage: '' };
  // }

  state = {lat:null, errorMessage: ''};

  // componentDidMount(){
  //   console.log("My component was rendered to the screen");
  // }
  //
  // componentDidUpdate(){
  //   console.log("My component was just updated - it rerendered");
  // }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat : position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //USER-DEFINED HELPER FUNCTION. LETS NAME IT RENDERCONTENT
  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Loading message="Please accept location request!"/>
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>
  }

  // render(){
  //   if(this.state.errorMessage && !this.state.lat){
  //     return <div clasName="border red">
  //             <div>Error: {this.state.errorMessage}</div>
  //           </div>
  //   }
  //   if(!this.state.errorMessage && this.state.lat){
  //     return <div clasName="border red">
  //             <div><SeasonDisplay lat={this.state.lat} /></div>
  //           </div>
  //   }
  //   return <div clasName="border Red">
  //           <Loading message="Please accept location request!"/>
  //          </div>
  // }
  
}

ReactDOM.render(<App />, document.querySelector("#root"));
