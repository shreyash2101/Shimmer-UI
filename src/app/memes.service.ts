import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemesService {
  constructor(private http: HttpClient) {}

  fetchMemes(memesCount: number) {
    return this.http.get(`https://meme-api.com/gimme/${memesCount}`);
  }
}
