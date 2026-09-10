import { Component, input } from "@angular/core";
import { ContactSubject, whatsappUrl } from "../core/site.config";
import { IconComponent } from "./icon";
@Component({
  selector: "app-contact-button",
  imports: [IconComponent],
  template: ` <a
    [href]="url"
    target="_blank"
    rel="noopener noreferrer"
    class="button"
    [class.button-light]="variant() === 'light'"
    [class.button-text]="variant() === 'text'"
    [attr.aria-label]="label() + ' pelo WhatsApp (abre em nova aba)'"
  >
    @if (variant() !== "text") {
      <app-icon name="whatsapp" />
    }
    <span>{{ label() }}</span
    ><app-icon name="arrow" />
  </a>`,
})
export class ContactButtonComponent {
  label = input("Agendar atendimento");
  subject = input<ContactSubject>("physiotherapy");
  variant = input<"primary" | "light" | "text">("primary");
  get url() {
    return whatsappUrl(this.subject());
  }
}
