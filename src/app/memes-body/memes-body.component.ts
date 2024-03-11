import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memes-body',
  templateUrl: './memes-body.component.html',
  styleUrl: './memes-body.component.scss'
})
export class MemesBodyComponent {
@Input() memesData:any
}
