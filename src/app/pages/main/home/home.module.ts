import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './parent/layout/layout.component';
import { TestimonialComponent } from './child/testimonial/testimonial.component';
import { MapComponent } from './child/map/map.component';
import { ContactComponent } from './child/contact/contact.component';
import { ServicesComponent } from './child/services/services.component';
import { FooterComponent } from './parent/footer/footer.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    TestimonialComponent,
    MapComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
