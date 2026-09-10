import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
} from "@angular/core";
import { DOCUMENT, ViewportScroller } from "@angular/common";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { HomeComponent } from "./pages/home/home";
export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => {
      const document = inject(DOCUMENT);
      const scroller = inject(ViewportScroller);
      // Angular scrolls by coordinates, so CSS scroll-padding alone is insufficient.
      scroller.setOffset(() => [
        0,
        document.querySelector("header.site-header")?.getBoundingClientRect()
          .height ?? 0,
      ]);
    }),
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
