import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qpl-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  @Input()
  service: string;

  altText: string;

  constructor() {}

  ngOnInit(): void {}

  get imageUrl(): string {
    switch (this.service) {
      case 'Plastic Fabrication':
        return 'assets/services/plastic_fabrication.webp';
      case 'Bespoke Duct Work':
        return 'assets/services/bespoke_duct_work.webp';
      case 'Laboratory Installations':
        return 'assets/services/laboratory_installations.webp';
      default:
        return '';
    }
  }

  get imageAltText(): string {
    switch (this.service) {
      case 'Plastic Fabrication':
        return 'Photo of some plastic pipes.';
      case 'Bespoke Duct Work':
        return 'Photo of some duct work.';
      case 'Laboratory Installations':
        return 'Photo of some laboratory chimneys.';
      default:
        return 'No image.';
    }
  }
}
