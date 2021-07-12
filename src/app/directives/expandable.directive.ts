import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExpandable]'
})
export class ExpandableDirective implements AfterViewInit {
  text: string = "";
  expanded: boolean = true;

  constructor(private el: ElementRef){}

  ngAfterViewInit(){
    this.text = this.el.nativeElement.innerText;
    this.toggleText();
  }

  @HostListener('click') toggleText(){
    if(this.expanded){
      this.el.nativeElement.innerText = this.text.slice(0, 30);
    }else{
      this.el.nativeElement.innerText = this.text;
    }

    this.expanded = !this.expanded
  }
}
