import {Component, Input} from '@angular/core';

@Component({
  selector: 'progressbar',
  templateUrl: 'progressbar.html'
})
export class ProgressbarComponent {

  @Input('progress') progress;
private temp='';
  constructor() {
  }

  getProgressColor() {
    let colors = {
      0: `#FF0000`,
      3: `#FF1100`,
      6: `#FF2200`,
      9: `#FF3300`,
      12: `#FF4400`,
      15: `#FF5500`,
      18: `#FF6600`,
      21: `#FF7700`,
      24: `#FF8800`,
      27: `#FF9900`,
      30: `#FFAA00`,
      33: `#FFBB00`,
      36: `#FFCC00`,
      39: `#FFDD00`,
      42: `#FFEE00`,
      45: `#FFFF00`,
      48: `#EEFF00`,
      52: `#FFEE00`,
      55: `#FFFF00`,
      58: `#EEFF00`,
      61: `#DDFF00`,
      64: `#CCFF00`,
      67: `#BBFF00`,
      70: `#AAFF00`,
      73: `#99FF00`,
      76: `#88FF00`,
      79: `#77FF00`,
      82: `#66FF00`,
      85: `#55FF00`,
      88: `#44FF00`,
      91: `#33FF00`,
      94: `#22FF00`,
      97: `#11FF00`,
      100: `#00FF00`
    };

    if(colors[this.progress]){
      this.temp=colors[this.progress];
      return colors[this.progress];
    }else{
      return this.temp;
    }
  }

}
