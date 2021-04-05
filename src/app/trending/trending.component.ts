import { Component, OnInit } from '@angular/core';
import { MiniplayerComponent } from '../miniplayer/miniplayer.component';
import { SericeService } from '../service/serice.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trending:any;
  from = 0;
  to = 0;
  constructor(private ComponentService: SericeService) {

  }
  // constructor() { 
  //   fetch('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-trending')
  //   .then(response => response.json().then(data => ({
  //       data: data,
  //   })
  //   ).then(res => {
  //       this.trending=JSON.parse(res.data.body);
  //       console.log(this.trending);
  //   }));
  // }
  slider($event){
    let cards= document.querySelectorAll(".trendcard");
    for (let i =0;i<cards.length;i++){
      cards[i].classList.add("slide1000");
    }
  }

  sliderLeft($event) {
    let modifier = document.getElementById('trending').offsetWidth-document.getElementById(this.trending[0].name).offsetWidth;
    if (this.to >= 0) {
      return;
    } else if (this.to + modifier >= 0) {
      modifier = (0 - this.to);
    }
    this.to = this.from + modifier;
    for (let temp of this.trending) {
      let card = document.getElementById(temp.name);
      card.animate([
        // keyframes
        { transform: 'translateX(' + this.from + 'px)' },
        { transform: 'translateX(' + this.to + 'px)' }
      ], {
        // timing options
        duration: 500,
        fill: 'forwards',easing:'ease-in'
      });
    }
    this.from = this.to;
  }

  sliderRight($event) {
    var conwidth = document.getElementById('trending').offsetWidth;
    var cardwidth = document.getElementById(this.trending[0].name).offsetWidth;
    console.log(conwidth, cardwidth);
    var width = ((cardwidth + 0) * this.trending.length) - conwidth;
    console.log(conwidth, cardwidth, width);
    let modifier = conwidth-cardwidth;
    if (this.to <= -width) {
      return;
    } else if (this.to - modifier <= -width) {
      modifier = width + this.to;
    }
    this.to = this.from - modifier;
    for (let temp of this.trending) {
      let card = document.getElementById(temp.name);
      card.animate([
        // keyframes
        { transform: 'translateX(' + this.from + 'px)' },
        { transform: 'translateX(' + this.to + 'px)' }
      ], {
        // timing options
        duration: 500,
        fill: 'forwards',easing:'ease-in'
      });
    }
    this.from = this.to;
  }

  player(song:any){
    var obj=new MiniplayerComponent();
    song.name=song.name;
    obj.playNow(song);
  }

  ngOnInit(): void {
    this.ComponentService.getTrendingSongs()
      .subscribe(data1 => {
        this.trending = data1;
        this.trending = JSON.parse(this.trending.body);
        for (let i of this.trending) {
          if (i.image.charAt(0) != 'h') {
            i.image = "https://" + i.image;
          }
        }
        console.log("dataaaaaaaa", this.trending);
      })
  }

}
