import { Component, OnInit } from '@angular/core';
import { MiniplayerComponent } from '../miniplayer/miniplayer.component';
import { SericeService } from '../service/serice.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  charts: any;
  colors = ["#ff6370", "#5991ff", "#ff9430", "#a87dff", "#8aff92"];
  from=0;
  to=0;
  constructor(private ComponentService: SericeService) {

  }
   // constructor() {
  //   fetch('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-charts')
  //     .then(response => response.json().then(data => ({
  //       data: data,
  //     })
  //     ).then(res => {
  //       this.charts = JSON.parse(res.data.body);
  //       //console.log(this.charts);

  //     }));
  // }
  // back() {
  //   let i = 0;
  //   for (let temp of this.charts) {
  //     let card = document.querySelector(temp.langauge);
  //     card.style.color = this.colors[i++];
  //     if (i == this.colors.length) {
  //       i = 0;
  //     }
  //   }
  // }
  sliderLeft($event) {
    var conwidth = document.getElementById('topCharts').offsetWidth;
    var cardwidth=document.getElementById(this.charts[0].langauge).offsetWidth;
    let modifier = conwidth-cardwidth;
    if(this.to>=0){
      return;
    }else if(this.to+modifier>=0){
      modifier=(0-this.to);
    }
    this.to=this.from+modifier;
    for (let temp of this.charts) {
      let card = document.getElementById(temp.langauge);
      card.animate([
        // keyframes
        { transform: 'translateX('+this.from+'px)' },
        { transform: 'translateX('+this.to+'px)' }
      ], {
        // timing options
        duration: 500,
        fill: 'forwards',easing:'ease-in'
      });
    }
    this.from=this.to;
  }

  sliderRight($event) {
    var conwidth = document.getElementById('topCharts').offsetWidth;
    var cardwidth=document.getElementById(this.charts[0].langauge).offsetWidth;
    console.log(conwidth,cardwidth);
    var width= ((cardwidth+40)*this.charts.length)-conwidth;
    console.log(conwidth,cardwidth,width);
    let modifier = conwidth-cardwidth;
    if(this.to<=-width){
      return;
    } else if(this.to-modifier<=-width){
      modifier=width+this.to;
    }
    this.to=this.from-modifier;
    for (let temp of this.charts) {
      let card = document.getElementById(temp.langauge);
      card.animate([
        // keyframes
        { transform: 'translateX('+this.from+'px)' },
        { transform: 'translateX('+this.to+'px)' }
      ], {
        // timing options
        duration: 500,
        fill: 'forwards',
        easing:'ease-in'
      });
    }
    this.from=this.to;
  }
  getColor(index: number): string {
    return this.colors[index % 5];

  }

  player(song:any){
    var obj=new MiniplayerComponent();
    song.name=song.langauge;
    obj.playNow(song);
  }

  ngOnInit(): void {
    this.ComponentService.getTopCharts()
      .subscribe(data1 => {
        this.charts = data1;
        this.charts = JSON.parse(this.charts.body);
        console.log("dataaaaaaaa", this.charts);
      })
  }
}



window.onload = (event) => {
  
};

window.onresize=(event)=>{

}