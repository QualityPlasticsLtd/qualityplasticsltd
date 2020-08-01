import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qpl-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  @Input()
  company: string;

  @Input()
  quote: string;

  @Input()
  quotee: string;

  @Input()
  quoteeTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
