import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { ShimmerComponent } from './shimmer/shimmer.component';
import { MemesBodyComponent } from './memes-body/memes-body.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { NestedCommentsComponent } from './nested-comments/nested-comments.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MemesComponent,
    ShimmerComponent,
    MemesBodyComponent,
    AboutUsComponent,
    LoginComponent,
    AccordionComponent,
    AccordionItemComponent,
    ImageCarouselComponent,
    NestedCommentsComponent,
    CommentBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
