import { Component, input } from "@angular/core";
export type IconName =
  | "arrow"
  | "whatsapp"
  | "home"
  | "movement"
  | "person"
  | "heart"
  | "check"
  | "clock"
  | "shield"
  | "spark"
  | "menu"
  | "close"
  | "plus";
const paths: Record<IconName, string> = {
  arrow: "M5 12h14m-5-5 5 5-5 5",
  whatsapp:
    "M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.4-4.6a8.5 8.5 0 1 1 16.1-4.2ZM8 7.5c-.7 0-1 1-.7 2.2.6 2.5 3.6 5.4 6.4 6 .9.2 2.1-.7 2.1-1.4l-2.7-1.4-1 1c-1.4-.7-2.3-1.6-2.9-2.8l.9-1-1.3-2.6Z",
  home: "m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7",
  movement: "M3 13h4l3-8 4 14 3-8h4",
  person: "M15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5 21v-3a7 7 0 0 1 14 0v3",
  heart:
    "M20.8 5.8a5.3 5.3 0 0 0-7.5 0L12 7.1l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5L12 22l8.8-8.7a5.3 5.3 0 0 0 0-7.5Z",
  check: "m5 12 4 4L19 6",
  clock: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 7v5l3 2",
  shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6",
  spark: "m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7L12 2Z",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
  plus: "M12 5v14M5 12h14",
};
@Component({
  selector: "app-icon",
  template:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path [attr.d]="path" /></svg>',
  styles: [
    ":host{display:inline-flex;width:24px;height:24px;flex-shrink:0}svg{width:100%;height:100%}",
  ],
})
export class IconComponent {
  name = input<IconName>("arrow");
  get path() {
    return paths[this.name()];
  }
}
