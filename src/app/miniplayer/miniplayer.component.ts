import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.css']
})
export class MiniplayerComponent implements OnInit {
  ballanim: Animation;
  constructor() { }
  index = 0;
  playNow(song: any) {
    //this.ballanim = undefined;
    let ball = document.getElementById("barball");
    var temp = ball.getAnimations();


    document.getElementById("songname").innerHTML = song.name;
    document.getElementById("play").innerHTML = "play_arrow";
    this.playPause();
  }
  playPause() {
    let ball = document.getElementById("barball");
    var temp = ball.getAnimations();
    //ball.remove();

    if (document.getElementById("songname").innerHTML == "") {
      return;
    }
    console.log(this.ballanim)
    if (temp.length == 0) {
      this.ballanim = this.player();
      //console.log("1", this.ballanim)
    }
    // else{
    //   console.log(this.ballanim.id);
    // }
    var play = document.getElementById("play").innerHTML;
    console.log(temp[0]);
    console.log(ball.style);
    if (play == "play_arrow") {
      document.getElementById("play").innerHTML = "pause";
      // console.log(this.ballanim);
      // console.log("2", this.ballanim)
      //this.ballanim.play();
      temp[0].play();
    }
    else {
      document.getElementById("play").innerHTML = "play_arrow";
      temp[0].pause();
      // console.log("3", this.ballanim)
    }
  }

  player(): Animation {
    var from: any;
    let ball = document.getElementById("barball");
    var to = (document.getElementById('bar').offsetWidth);
    from = 0;
    console.log(from, to);
    var temp = ball.getAnimations();
   // ball.style.
    if (temp.length == 0) {
      this.ballanim = ball.animate([
        { left: from + 'px' },
        { left: to + 'px' }
      ], {
        duration: 50000,
        fill: 'forwards',
        easing: 'linear',
      });
    }

//     var keyFrames = '\
// @keyframes ballmove {\
//   0%{\
// left:'+ from + 'px\
//   }\
//     100% {\
//       left:'+ to + 'px\
//     }\
// }\
// }';
// this.writeStyles(keyFrames);
//     this.writeStyles(".ballanime{ \
//       animation-name: ballmove;\
//   animation-duration: 10s;\
//   animation-fill-mode: forwards;\
//   animation-play-state: running;\
//   animation-timing-function: linear;\
// }");
//   ball.classList.add("ballanime");
    if (this.ballanim.id == "") {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = ' ';
      const charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.ballanim.id = result;
    }
    console.log(this.ballanim.id);
    return this.ballanim;
  }

  writeStyles(cssText) {
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = cssText;
    document.getElementsByTagName('body')[0].appendChild(styleElement);
  }
  ngOnInit(): void {
  }

}
