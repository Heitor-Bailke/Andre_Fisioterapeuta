import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ContactButtonComponent } from "../shared/contact-button";
@Component({
  imports: [RouterLink, ContactButtonComponent],
  template: ` <article class="container privacy-page">
    <a routerLink="/" class="secondary-link">← Voltar para o início</a
    ><span class="eyebrow">SEUS DADOS</span>
    <h1>Política de Privacidade</h1>
    <p>
      Este site apresenta o trabalho de André Nunes Ladislau, fisioterapeuta,
      CREFITO 421269-F.
    </p>
    <h2>Durante a navegação</h2>
    <p>
      Este site não possui cadastro, formulário de pacientes, ferramentas de
      publicidade ou cookies de análise. A hospedagem poderá processar registros
      técnicos de acesso, como endereço IP e informações do navegador, para
      disponibilizar o site.
    </p>
    <h2>Contato pelo WhatsApp</h2>
    <p>
      Os botões de agendamento abrem o WhatsApp, um serviço externo. A mensagem
      sugerida pode ser editada antes do envio. As informações que você decidir
      compartilhar na conversa serão recebidas por André para responder ao
      contato e organizar o atendimento. O uso do WhatsApp também está sujeito
      às políticas desse serviço.
    </p>
    <h2>Dúvidas sobre seus dados</h2>
    <p>
      Para esclarecer como as informações compartilhadas no contato são
      utilizadas ou solicitar sua atualização ou exclusão, fale diretamente com
      André pelo WhatsApp.
    </p>
    <app-contact-button label="Falar com André" />
  </article>`,
})
export class PrivacyComponent {}
