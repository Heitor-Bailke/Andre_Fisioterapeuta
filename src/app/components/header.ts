import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  signal,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { ContactButtonComponent } from "../shared/contact-button";
import { IconComponent } from "../shared/icon";
@Component({
  selector: "app-header",
  imports: [RouterLink, ContactButtonComponent, IconComponent],
  template: ` <header class="site-header">
    <div class="container header-inner">
      <a class="brand" routerLink="/" fragment="inicio" (click)="close()">
        <img src="media/andre-logo.webp" width="52" height="52" alt="" />
        <span
          >André Nunes Ladislau<small
            >FISIOTERAPEUTA
            <span class="brand-registration">CREFITO 421269-F</span></small
          ></span
        >
      </a>
      <nav
        #navigation
        id="main-navigation"
        aria-label="Navegação principal"
        [class.is-open]="menuOpen()"
        (keydown.escape)="close(true)"
      >
        @for (item of links; track item.id) {
          <a routerLink="/" [fragment]="item.id" (click)="close()">{{
            item.label
          }}</a>
        }
        <app-contact-button class="mobile-contact" />
      </nav>
      <app-contact-button class="header-contact" />
      <button
        #menuToggle
        class="menu-toggle"
        [attr.aria-expanded]="menuOpen()"
        aria-controls="main-navigation"
        [attr.aria-label]="menuOpen() ? 'Fechar menu' : 'Abrir menu'"
        (click)="menuOpen.set(!menuOpen())"
      >
        <app-icon [name]="menuOpen() ? 'close' : 'menu'" />
      </button>
    </div>
  </header>`,
})
export class HeaderComponent {
  menuOpen = signal(false);
  @ViewChild("menuToggle") toggle?: ElementRef<HTMLButtonElement>;
  @ViewChild("navigation") navigation?: ElementRef<HTMLElement>;
  links = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "galeria", label: "Galeria" },
    { id: "atendimento", label: "Atendimento" },
    { id: "pilates", label: "Pilates" },
    { id: "faq", label: "FAQ" },
    { id: "contato", label: "Contato" },
  ];
  close(restoreFocus = false) {
    this.menuOpen.set(false);
    if (restoreFocus) this.toggle?.nativeElement.focus();
  }
  @HostListener("document:keydown.escape") escape() {
    if (this.menuOpen()) this.close(true);
  }
  @HostListener("document:click", ["$event"]) outside(event: MouseEvent) {
    const target = event.target as Node;
    if (
      this.menuOpen() &&
      !this.navigation?.nativeElement.contains(target) &&
      !this.toggle?.nativeElement.contains(target)
    )
      this.close();
  }
}
