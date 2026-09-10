import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
} from "@angular/core";
@Directive({ selector: "[appReveal]" })
export class RevealDirective {
  private element = inject(ElementRef<HTMLElement>);
  private destroy = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)
      )
        return;
      const node = this.element.nativeElement;
      if (node.getBoundingClientRect().top < window.innerHeight) return;
      node.classList.add("reveal-pending");
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            node.classList.remove("reveal-pending");
            observer.disconnect();
          }
        },
        { threshold: 0.08 },
      );
      observer.observe(node);
      this.destroy.onDestroy(() => observer.disconnect());
    });
  }
}
