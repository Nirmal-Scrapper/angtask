import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.css']
})
export class MiniplayerComponent implements OnInit {
  constructor() { }
  index = 0;
  alt="";
  playNow(song: any) {
    //this.ballanim = undefined;
    let ball = document.getElementById("barball");
    var temp = ball.getAnimations();
    document.getElementById("songname").innerHTML = song.name;
    document.getElementById("play").innerHTML = "pause";
    ball.classList.remove("ballanime");
    ball.style.animationPlayState="running";
    this.player();
    this.alt=song.name;
    document.getElementById("songpic").innerHTML='<img src='+ song.image+'  width="50" height="50" alt='+song.name+'>'
  }
  playPause() {
    let ball = document.getElementById("barball");
    var temp = ball.getAnimations();
    if (document.getElementById("songname").innerHTML == "") {
      return;
    }
    var play = document.getElementById("play").innerHTML;
    console.log(temp[0]);
    console.log(ball.style);
    if (play == "play_arrow") {
      document.getElementById("play").innerHTML = "pause";
      //temp[0].play();
      ball.style.animationPlayState="running";
    }
    else {
      document.getElementById("play").innerHTML = "play_arrow";
      //temp[0].pause();
      ball.style.animationPlayState="paused";

    }
  }

  player() {
    var from: any;
    let ball = document.getElementById("barball");
    var to = (document.getElementById('bar').offsetWidth);
    from = 0;
    console.log(from, to);


    var keyFrames = '\
                    @keyframes ballmove {\
                      0%{\
                    left:'+ from + 'px\
                      }\
                        100% {\
                          left:'+ to + 'px\
                        }\
                    }\
                    }';
      this.writeStyles(keyFrames);
      this.writeStyles(".ballanime{ \
                            animation-name: ballmove;\
                            animation-duration: 100s;\
                            animation-fill-mode: forwards;\
                            animation-play-state: running;\
                            animation-timing-function: linear;\
          }");
      ball.classList.add("ballanime");
    
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
