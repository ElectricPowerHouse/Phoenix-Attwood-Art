import React, { Component } from 'react';

import './App.css';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import CrossfadeImage from 'react-crossfade-image';
import PaintingA from './images/ArtworkA.png';
import PaintingB from './images/ArtworkB.png';
import PaintingC from './images/ArtworkC.png';
import PaintingD from './images/ArtworkD.png';
import PaintingE from './images/ArtworkE.png';
import PaintingF from './images/ArtworkF.png';

import Fade from 'react-reveal/Fade';

import { useSpring, animated } from 'react-spring'

import Thumbnail from './images/favicon-16x16.png'

import Lightbox from 'react-images';


let textboxhigh = {
  marginLeft:'10%',
marginTop:'50%',

webkitTransition: 'marginTop 0.4s',
transition: 'marginTop 0.4s'

}

let textboxlow = {
  marginLeft:'10%',
marginTop:'60%'}

let textboxstyle = textboxlow;


let paintings = [PaintingA,PaintingB,PaintingC,PaintingD,PaintingE,PaintingF]

let CurrentImage = paintings[2];
let CurrentImage2 = paintings[3];




class App extends Component {

  constructor(props){
    super(props);
  this.state = {

    painting: 2,
    painting2: 3,
   seconds: 15,   // responsible for the seconds

   currentImage:0,
   lightboxIsOpen:false,

   contactIsOpen:false
  }


  this.gotoNext = this.gotoNext.bind(this);
  this.gotoPrevious = this.gotoPrevious.bind(this);
  this.closeLightbox = this.closeLightbox.bind(this);
  this.gotoImage = this.gotoImage.bind(this);


  this.startTimer = this.startTimer.bind(this);
  this.countDown = this.countDown.bind(this);
  this.startTimer();
}



componentDidMount() {
    let sec = this.state.seconds;
    this.setState({ seconds: sec });
  }

  startTimer() {
      //this.timer = setInterval(this.countDown, 1000);
  }

  gotoPrevious(){

    let current = this.state.currentImage;
    current = current-1;
    this.setState({currentImage:current});

  }

  gotoNext(){

    let current = this.state.currentImage;
    current = current+1;
    this.setState({currentImage:current});


  }


  closeLightbox(){

    let open = this.state.lightboxIsOpen;
    open = !open;
    this.setState({lightboxIsOpen:open});
  }


  gotoImage(id){

    let open = this.state.lightboxIsOpen;
    open = !open;
    this.setState({lightboxIsOpen:open});

    console.log(id);

  }



  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let painting = this.state.painting;
    let painting2 = this.state.painting2;

    if(seconds == 0){ painting = painting+1; painting2 = painting2+1;
      if(painting >= paintings.length){
        painting = 0;
      }

      if(painting2 >= paintings.length){
        painting2 = 0;
      }

       CurrentImage = Object.assign(paintings[painting]);
       CurrentImage2 = Object.assign(paintings[painting2]);

         seconds = 11; }

    console.log(seconds);

    this.setState({
      painting: painting,
      painting2: painting2,
      seconds: seconds,

    });



  }




  render() {



    return (
      <div className="App">


      <Fade when = {this.state.lightboxIsOpen} >
      <Lightbox
        showThumbnails={true}
        images={[{ src: PaintingA, caption: 'zie' },{ src: PaintingB, caption: 'sddffefef'},
        { src: PaintingC , caption: 'hi this is cool picture'},{ src: PaintingD, caption: 'jaden smith'},
        { src: PaintingE, caption: 'beepboop'},{ src: PaintingF, caption: '' }]}
        currentImage = {this.state.currentImage}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}

      />

      </Fade>

        <div className = 'Container'>
          <div className = 'Text-Column'>
            <Fade>
            <div className = 'Text-Box' style = {textboxstyle}>
              <div className = 'Title'>
                <div className = 'Title-Small' > Phoenix </div>
                <div className = 'Title-Big' > Attwood</div>
              </div>
              <div className = 'Bio-Container'>
                <div className = 'Line-1'>   <hr className = 'Upper-Line'/> </div>
                <div className = 'Bio'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo  </div>
                <hr className = 'Bottom-Line'/>
              </div>
              <div className = 'Gallery' onClick = {()=> {this.setState({lightboxIsOpen:true}); this.setState({currentImage:0})}}> gallery </div>
              {this.chooseRenderContact()}

            </div>
            </Fade>
          </div>
          <div className = 'Column'>


        {this.renderPainting()}



        </div>

            <div className = 'Column'>
        {this.renderPainting2()}
            </div>

        </div>
      </div>
    );
  }

  chooseRenderContact(){
    if(this.state.contactIsOpen === true){
      return ( this.renderContactExtended() );
    }
    else{
      return (this.renderContactText());
    }

  }

  renderContactText(){
            return (  <div className = 'Contact'  onClick = {()=> {this.setState({contactIsOpen:true}); textboxstyle = textboxhigh}}> contact </div> );
  }

  renderContactExtended(){
      return (
        <Fade >
        <div className = 'Contact-Container'>
             <div className = 'Line-1'>  <hr className = 'Upper-Line'/> </div>
            <div className = 'Contact-Text'> If you would like to get in contact with Phoenix to purchase prints or originals please email or call at:  </div>
            <div className = 'Phone'> phone: 023 022 0233  </div>
            <div className = 'Email'> email: phoenixattwood@gmail.com </div>
            <div className = 'Arrow' onClick = {()=> {this.setState({contactIsOpen:false}); textboxstyle = textboxlow}}/>

        </div>
        </Fade>
      )
  }

  renderPainting(){
    /*return (<CrossfadeImage duration = {5000} key="transitioning-component-1" style = {divStyle} src = {CurrentImage}/>*/
    return (
      <div className = 'Painting1' onClick = {()=> {this.setState({lightboxIsOpen:true}); this.setState({currentImage:2})}} />

    )
  }

  renderPainting2(){
    /*return (<CrossfadeImage duration = {5000} key="transitioning-component-2" style = {divStyle} src = {CurrentImage2}/> )*/
    return (

      <div className = 'Painting2' onClick = {()=> {this.setState({lightboxIsOpen:true}); this.setState({currentImage:3})}} />

    )
  }

}

  const divStyle = {maxHeight:'100vh', minHeight:'100vh',minWidth:'100%'};

export default App;
