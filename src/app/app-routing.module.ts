import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { MemesComponent } from './memes/memes.component';
import { authGuard } from './auth.guard';
import { AccordionComponent } from './accordion/accordion.component';

const routes: Routes = [
  { path: '', redirectTo: 'memes', pathMatch: 'full' }, //default route
  { path: 'memes', component: MemesComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'about', component: AboutUsComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
