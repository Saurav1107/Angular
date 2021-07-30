import { ElementRef, HostBinding, HostListener, ViewChild } from "@angular/core";
import { Directive, OnInit } from "@angular/core";

@Directive({
  selector : '[colorPicker]'
})
export class ColorPickerDirective implements OnInit{
  color : string
  @HostBinding('style.backgroundColor') backgroundColor : string = 'blue';

  constructor(private elRef : ElementRef ) { }
  ngOnInit(){
    console.log(this.backgroundColor);
  }
  
  @HostListener('input') inputColor(eventData : Event){
    this.color=  this.elRef.nativeElement.value
    this.backgroundColor = this.color
  }
}