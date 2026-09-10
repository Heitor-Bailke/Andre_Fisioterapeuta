import { ApplicationConfig } from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { HomeComponent } from "./pages/home/home";
export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideRouter(
      [
        {
          path: "",
          component: HomeComponent,
          title: "André Nunes Ladislau | Fisioterapia e Pilates Domiciliar",
        },
        {
          path: "privacidade",
          title: "Política de Privacidade | André Nunes Ladislau",
          loadComponent: () =>
            import("./pages/privacy").then((m) => m.PrivacyComponent),
        },
        { path: "**", redirectTo: "" },
      ],
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      }),
    ),
  ],
};
