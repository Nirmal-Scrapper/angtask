import { Component, OnInit } from '@angular/core';
import { MiniplayerComponent } from '../miniplayer/miniplayer.component';
import { SericeService } from '../service/serice.service';
@Component({
  selector: 'top-picks',
  templateUrl: './top-picks.component.html',
  styleUrls: ['./top-picks.component.css']
})
export class TopPicksComponent implements OnInit {
  picks: any;
  //ComponentService:any;
  from = 0;
  to = 0;
  constructor(private ComponentService: SericeService) {

  }
  slider($event) {
    let cards = document.querySelectorAll(".topcard");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("slide3100");
    }
  }
  sliderLeft($event) {
    var conwidth = document.getElementById('topPicks').offsetWidth;
    var cardwidth = document.getElementById(this.picks[0].playlistName).offsetWidth;
    let modifier = conwidth - cardwidth;
    if (this.to >= 0) {
      return;
    } else if (this.to + modifier >= 0) {
      modifier = (0 - this.to);
    }
    this.to = this.from + modifier;
    for (let temp of this.picks) {
      let card = document.getElementById(temp.playlistName);
      card.animate([
        // keyframes
        { transform: 'translateX(' + this.from + 'px)' },
        { transform: 'translateX(' + this.to + 'px)' }
      ], {
        // timing options
        duration: 500,
        fill: 'forwards', easing: 'ease-in'
      });
    }
    this.from = this.to;
  }

  sliderRight($event) {
    var conwidth = document.getElementById('topPicks').offsetWidth;
    var cardwidth = document.getElementById(this.picks[0].playlistName).offsetWidth;
    console.log(conwidth, cardwidth);
    var width = ((cardwidth + 0) * this.picks.length) - conwidth;
    console.log(conwidth, cardwidth, width);
    let modifier = conwidth - (cardwidth / 2);
    if (this.to <= -width) {
      return;
    } else if (this.to - modifier <= -width) {
      modifier = width + this.to;
    }
    this.to = this.from - modifier;
    for (let temp of this.picks) {
      let card = document.getElementById(temp.playlistName);
      card.animate([
        // keyframes
        { transform: 'translateX(' + this.from + 'px)' },
        { transform: 'translateX(' + this.to + 'px)' }
      ], {
        // timing options
        duration: 500,
        fill: 'forwards', easing: 'ease-in'
      });
    }
    this.from = this.to;
  }

  player(song: any) {
    var obj = new MiniplayerComponent();
    song.name = song.playlistName;
    //let card = document.getElementById(song.playlistName + "button");
    //if (card.innerHTML == "play_arrow") {
      //card.innerHTML = "pause";
      obj.playNow(song);
    // }else{
    //   card.innerHTML="play_arrow";
    //   obj.playPause();
    // }
  }

  ngOnInit(): void {
    this.ComponentService.getTopPicks()
      .subscribe(data1 => {
        this.picks = data1;
        this.picks = JSON.parse(this.picks.body);
        for (let i of this.picks) {
          if (i.image.charAt(0) != 'h') {
            i.image = "https://" + i.image;
          }
        }
        console.log("dataaaaaaaa", this.picks);
      })
  }

}
