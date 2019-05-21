import React, {Component} from 'react'
     
class ASMRHover extends Component {
  constructor(props) {
    super(props);     
    this.handleMouseHoverA = this.handleMouseHoverA.bind(this);
    this.handleMouseHoverS = this.handleMouseHoverS.bind(this);
    this.handleMouseHoverM = this.handleMouseHoverM.bind(this);
    this.handleMouseHoverR = this.handleMouseHoverR.bind(this);
    this.state = {
      isHoveringA: false,
      isHoveringS: false,
      isHoveringM: false,
      isHoveringR: false,
    };              
  }                   
                                
  handleMouseHoverA() {
    this.setState(this.toggleHoverStateA);
  } 

  handleMouseHoverS() {
    this.setState(this.toggleHoverStateS);
  } 

  handleMouseHoverM() {
    this.setState(this.toggleHoverStateM);
  } 

  handleMouseHoverR() {
    this.setState(this.toggleHoverStateR);
  }                
                      
  toggleHoverStateA(state) {     
    return {
      isHoveringA: !state.isHoveringA,
    };              
  }    

   toggleHoverStateS(state) {     
    return {
      isHoveringS: !state.isHoveringS,
    };              
  }  

   toggleHoverStateM(state) {     
    return {
      isHoveringM: !state.isHoveringM,
    };              
  }  

   toggleHoverStateR(state) {     
    return {
      isHoveringR: !state.isHoveringR,
    };              
  }                 
                                  
  render() {
    return (
      <div>        
        <div id="title">
        <div>                   
        <div onMouseEnter={this.handleMouseHoverA} onMouseLeave={this.handleMouseHoverA}>
          <span className = "a" data-letter="A"> </span>
        </div>
        {this.state.isHoveringA && <div>Hovering riasdasght meow! 🐱</div>}
      </div>
            
        <div>
        <div onMouseEnter={this.handleMouseHoverS} onMouseLeave={this.handleMouseHoverS}>
          <span className = "b" data-letter="S"> S</span>
        </div>
        {this.state.isHoveringS && <div>Hovering right meow! 🐱</div>}
        </div>
      
        <div>
        <div onMouseEnter={this.handleMouseHoverM} onMouseLeave={this.handleMouseHoverM}>
          <span className = "e" data-letter="M"> M</span>
        </div>
        {this.state.isHoveringM && <div>Hovering right meow! 🐱</div>}
        </div>

        <div>
        <div onMouseEnter={this.handleMouseHoverR} onMouseLeave={this.handleMouseHoverR}>
          <span className = "d" data-letter="R"> R</span>
        </div>
        {this.state.isHoveringR && <div>Hovering right meow! 🐱</div>}
        </div> 
      </div> 
      
      <style jsx> {`
        
import url('https://fonts.googleapis.com/css?family=Modak|Press+Start+2P|Shrikhand|VT323&display=swap');

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


    `}</style>

      </div>
    );
  }
}

export default ASMRHover
                                                                                                                               


class ASMRHover extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div id="title">
        <div>
        <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <span className = "a" data-letter="A"> </span>
        </div>
        {this.state.isHovering && <div>Hovering riasdasght meow! 🐱</div>}
      </div>

        <div>
        <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <span className = "b" data-letter="S"> S</span>
        </div>
        {this.state.isHovering && <div>Hovering right meow! 🐱</div>}
        </div>
      
        <div>
        <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <span className = "e" data-letter="M"> M</span>
        </div>
        {this.state.isHovering && <div>Hovering right meow! 🐱</div>}
        </div>

        <div>
        <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <span className = "d" data-letter="R"> R</span>
        </div>
        {this.state.isHovering && <div>Hovering right meow! 🐱</div>}
        </div> 
      </div> 
      
      <style jsx> {`
        
rt url('https://fonts.googleapis.com/css?family=Modak|Press+Start+2P|Shrikhand|VT323&display=swap');

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


    `}</style>

      </div>
    );
  }
}

export default ASMRHover
