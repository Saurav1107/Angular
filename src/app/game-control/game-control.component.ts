import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  intervalFired = new EventEmitter<number>();
  myVar ;
  index=0;
  constructor() { }

  ngOnInit(): void {
  }

  start(){
      this.myVar =  setInterval(()=>{
      this.intervalFired.emit(this.index+1);
      this.index++;
    },1000);
  }

  stop(){
    clearInterval(this.myVar);
  }

}
