import { Component, HostListener, OnInit } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrl: './memes.component.scss',
  host: {
    style: 'display: contents',
  },
})
export class MemesComponent implements OnInit {
  memesCount = 28;
  memesData: Array<any> = [];
  showShimmer = false;
  constructor(private memesService: MemesService) {}
  ngOnInit(): void {
    this.fetchMemes();
  }

  @HostListener('document:scroll', ['$event'])
  public handleScroll() {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      this.fetchMemes();
    }
  }

  fetchMemes = () => {
    this.showShimmer = true;
    this.memesService.fetchMemes(this.memesCount).subscribe({
      next: (resp: any) => {
        this.memesData = [...this.memesData, ...resp['memes']];
        this.showShimmer = false;
      },
    });
  };
}
