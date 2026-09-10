import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-footer",
  imports: [RouterLink],
  template: ` <footer class="site-footer">
    <div class="container footer-main">
      <a class="brand" routerLink="/" fragment="inicio"
        ><img src="media/andre-logo.webp" width="56" height="56" alt="" /><span
          >André Nunes Ladislau<small
            >FISIOTERAPEUTA
            <span class="brand-registration">CREFITO 421269-F</span></small
          ></span
        ></a
      >
      <p>Cuidado próximo.<br />Movimento para a vida.</p>
      <nav aria-label="Navegação do rodapé">
        <a routerLink="/" fragment="inicio">Início</a
        ><a routerLink="/" fragment="sobre">Sobre</a
        ><a routerLink="/" fragment="servicos">Serviços</a
        ><a routerLink="/" fragment="contato">Contato</a>
      </nav>
    </div>
    <div class="container footer-bottom">
      <span
        >© {{ year }} André Nunes Ladislau. Todos os direitos reservados.</span
      ><a routerLink="/privacidade">Política de Privacidade</a>
    </div>
    <p class="container footer-credit">Desenvolvido por Heitor Bailke de Bem</p>
  </footer>`,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
