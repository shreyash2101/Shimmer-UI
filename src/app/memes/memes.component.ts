import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrl: './memes.component.scss',
})
export class MemesComponent implements OnInit {
  memesCount = 28;
  memesData: any;
  isLoading = true;
  ngOnInit(): void {
    this.fetchMemes().then(() => {
      this.isLoading = false;
    });
  }

  fetchMemes = async () => {
    const data = await fetch(`https://meme-api.com/gimme/${this.memesCount}`);
    this.memesData = await data.json();
    console.log(this.memesData);
  };
}
