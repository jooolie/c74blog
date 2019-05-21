import React from "react";
import { render } from "react-dom";
import Tone from "react-tone";

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.audioFile = React.createRef();

    this.state = {
      isTonePlaying: false,
      frequency: 100,
      length: 1000,
      volume: 1
    };
  }

  handleToneA = () => {
    this.setState({ isTonePlaying: true, frequency: 250 });
  };

  handleToneS = () => {
    this.setState({ isTonePlaying: true, frequency: 300 });
  };
 handleToneM = () => {
    this.setState({ isTonePlaying: true, frequency: 350 });
  };
 handleToneR = () => {
    this.setState({ isTonePlaying: true, frequency: 400 });
 };

  playToneA = () => {
    console.log(this.audioFile);
    this.audioFile.play();
  }

  handleToneStop = () => {
    this.setState({ isTonePlaying: false });
  };

 
  render() {
    const { isTonePlaying, frequency, length, volume } = this.state;

    return (
      <div id="flex">
        <div id="title">
          <span className="a" data-letter="A" onClick={this.playToneA}> </span>
          <span className="b" data-letter="S" onMouseOver={this.handleToneS}> </span>
          <span className="e" data-letter="M" onMouseOver={this.handleToneM}> </span>
          <span className="d" data-letter="R" onMouseOver={this.handleToneR}> </span>
        </div>
        <audio
          src="https://en.wikipedia.org/wiki/File:JOHN_MICHEL_CELLO-J_S_BACH_CELLO_SUITE_1_in_G_Prelude.ogg" ref= { el => this.audioFile = el }> </audio>
        <div id="caption"> 
		      <p>hover over the letters above</p> 
	      </div>

        <Tone
          play={isTonePlaying}
          onStop={this.handleToneStop}
          frequency={frequency}
          volume={volume}
          length={length / 1000}
        />

      <style jsx>{`
         	 @import url('https://fonts.googleapis.com/css?family=Modak|Press+Start+2P|Shrikhand|VT323&display=swap');

        	  *, *:before, *:after {
       		   box-sizing: border-box;
	       	 }

		 #flex {
                  display: flex;
		  flex-flow: column wrap;
		  align-items: center;
		  text-align: center;
		 }
			

		#title {
		  height: 100%;
   		  width: 100%;
		  padding-top: 10%;
		}

		#caption {
                  font-family: "Source Code Pro";
		  display: inline-block;
		  position: center; 
		}


		.a:before, .b:before, .c:before, .d:before, .e:before {
   		 font-family: "VT323";
    		 display: inline-block;
   		 font-weight: 900;
    		 font-size: 10em;
   		 letter-spacing: .3em;
   		 color: pink;
    		 content:attr(data-letter);
   		 transition: all 0.35s ease-out;
		}

		.d:before {
		 margin-right: -.3em;
		}

		.a:hover:before{
   		 color: #dbff9c;
   		 transform: rotate(45deg);
		}

	        .a:hover:after{
    		 color: #dbff9c;
   		 transform: rotate(45deg);
		}

		.b:hover:before{
   		 color: #ffc780;
   		 transform: rotate(45deg);
		}

		.b:hover:after{
   		 color: #ffc780;
   		 transform: rotate(45deg);
		}

		.c:hover:before{
   		 color: #ffbdb7;
   		 transform: rotate(45deg);
		}

		.c:hover:after{
   		 color: #ffbdb7;
   		 transform: rotate(45deg);
		}

		.d:hover:before{
   		 color: #b6f2fc;
   		 transform: rotate(45deg);
		}

		.d:hover:after{
   		 color: #b6f2fc;
   		 transform: rotate(45deg);
		}

		.e:hover:before{
   		 color: #ffee8c;
    		 transform: rotate(45deg);
		}

		.e:hover:after{
   		 color: #ffee8c;
   		 transform: rotate(45deg);
		}	
	`} </style> 
      </div>
    );
  }
}


export default App;
