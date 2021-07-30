import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string = 'transparent';
  @Input() secondColor : string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor : string = this.defaultColor;

  constructor(private elRef: ElementRef,private renderer : Renderer2) { }
  ngOnInit(){
    console.log(this.elRef.nativeElement);
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue')
  }
  @HostListener('mouseenter') mouseover(eventData : Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue');
    this.backgroundColor = this.secondColor;
  }
  @HostListener('mouseleave') mouseleave(eventData : Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'transparent');
    this.backgroundColor= this.defaultColor;
  }
} 