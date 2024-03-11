import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shimmer',
  templateUrl: './shimmer.component.html',
  styleUrl: './shimmer.component.scss',
  host: {
    style: 'display: contents',
  },
})
export class ShimmerComponent implements OnInit {
  @Input() memesCount: any;
  memesArray: any;
  ngOnInit(): void {
    this.memesArray = new Array(this.memesCount);
  }
}
