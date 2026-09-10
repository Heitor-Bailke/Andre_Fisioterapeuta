import {
  Component,
  ElementRef,
  ViewChild,
  computed,
  signal,
} from "@angular/core";
import { GalleryItem, featuredCare, galleryItems } from "../../core/gallery";
import { IconComponent } from "../../shared/icon";
import { RevealDirective } from "../../shared/reveal";

@Component({
  selector: "app-gallery",
  imports: [IconComponent, RevealDirective],
  templateUrl: "./gallery.html",
  styleUrl: "./gallery.css",
})
export class GalleryComponent {
  @ViewChild("viewer") viewer!: ElementRef<HTMLDialogElement>;
  readonly featured = featuredCare;
  readonly filter = signal<"all" | "photo" | "video">("all");
  readonly expanded = signal(false);
  readonly selected = signal<GalleryItem | null>(null);
  readonly filters = [
    { value: "all", label: "Todos" },
    { value: "photo", label: "Fotos" },
    { value: "video", label: "Vídeos" },
  ] as const;
  readonly filtered = computed(() =>
    galleryItems.filter(
      (item) => this.filter() === "all" || item.type === this.filter(),
    ),
  );
  readonly visible = computed(() =>
    this.expanded() ? this.filtered() : this.filtered().slice(0, 6),
  );
  private trigger?: HTMLElement;
  setFilter(filter: "all" | "photo" | "video") {
    this.filter.set(filter);
    this.expanded.set(false);
  }
  open(item: GalleryItem, event: Event) {
    this.trigger = event.currentTarget as HTMLElement;
    this.selected.set(item);
    this.viewer.nativeElement.showModal();
  }
  close() {
    this.viewer.nativeElement.close();
  }
  onClosed() {
    this.selected.set(null);
    this.trigger?.focus({ preventScroll: true });
  }
  onBackdrop(event: MouseEvent) {
    if (event.target === this.viewer.nativeElement) this.close();
  }
}
