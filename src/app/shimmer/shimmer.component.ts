import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shimmer',
  templateUrl: './shimmer.component.html',
  styleUrl: './shimmer.component.scss',
})
export class ShimmerComponent implements OnInit {
  @Input() memesCount: any;
  memesArray: any;
  ngOnInit(): void {
    this.memesArray = new Array(this.memesCount);
  }
}
