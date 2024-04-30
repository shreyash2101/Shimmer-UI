import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { MemesComponent } from './memes/memes.component';
import { authGuard } from './auth.guard';
import { AccordionComponent } from './accordion/accordion.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { NestedCommentsComponent } from './nested-comments/nested-comments.component';

const routes: Routes = [
  { path: '', redirectTo: 'memes', pathMatch: 'full' }, //default route
  { path: 'memes', component: MemesComponent },
  { path: 'carousel', component: ImageCarouselComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'comments', component: NestedCommentsComponent },
  { path: 'about', component: AboutUsComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
