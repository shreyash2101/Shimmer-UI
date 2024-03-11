import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { ShimmerComponent } from './shimmer/shimmer.component';
import { MemesBodyComponent } from './memes-body/memes-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MemesComponent,
    ShimmerComponent,
    MemesBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
