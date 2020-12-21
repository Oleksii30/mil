import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { XpAnimations } from './scroll-animations';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements AfterViewInit, OnInit{
  player: AnimationPlayer | undefined;
  private eleAnimations = '';
  private animateOnce = true

  @Input()
  set eleAnimation(elementAnimation: string) {
    if (elementAnimation) {
      this.eleAnimations = elementAnimation;
    }
  }
  @Input()delay
  @Input()timing

  constructor(private el: ElementRef, private builder: AnimationBuilder, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0')  
  }

  ngAfterViewInit(){       
    const observer = new IntersectionObserver((event)=> {
      if (event[0].isIntersecting){
        if (this.animateOnce){
          this.animate(this.delay, this.timing)
          this.animateOnce = false
        }
       
      }     
    })
    observer.observe(this.el.nativeElement)
  }

  animate(delay, timing) {
    if (this.eleAnimations ) {
      if (this.player) {
        this.player.destroy();
      }
      if (XpAnimations[this.eleAnimations]) {
        const metadata = XpAnimations[this.eleAnimations](delay, timing);
        const factory = this.builder.build(metadata);
        const player = factory.create(this.el.nativeElement);
        player.play();
      } else {
        throw new Error(`Inavild animation  ${this.eleAnimations}`);
      }
    }   
  }

}
