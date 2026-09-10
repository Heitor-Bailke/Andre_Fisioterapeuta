import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header";
import { FooterComponent } from "./components/footer";
import { IconComponent } from "./shared/icon";
import { whatsappUrl } from "./core/site.config";
@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, FooterComponent, IconComponent],
  template: ` <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <app-header />
    <main id="conteudo" tabindex="-1"><router-outlet /></main>
    <app-footer />
    <a
      class="floating-whatsapp"
      [href]="contactUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com André pelo WhatsApp (abre em nova aba)"
      ><app-icon name="whatsapp" /><span>Fale com André</span></a
    >`,
})
export class AppComponent {
  contactUrl = whatsappUrl();
}
