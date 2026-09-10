import { Component } from "@angular/core";
import { ContactButtonComponent } from "../../shared/contact-button";
import { IconComponent } from "../../shared/icon";
import { RevealDirective } from "../../shared/reveal";
import { GalleryComponent } from "../../components/gallery/gallery";
import {
  audiences,
  benefits,
  faqs,
  services,
  steps,
  testimonials,
} from "../../core/content";
@Component({
  selector: "app-home",
  imports: [
    ContactButtonComponent,
    IconComponent,
    RevealDirective,
    GalleryComponent,
  ],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class HomeComponent {
  services = services;
  audiences = audiences;
  benefits = benefits;
  faqs = faqs;
  steps = steps;
  testimonials = testimonials;
}
