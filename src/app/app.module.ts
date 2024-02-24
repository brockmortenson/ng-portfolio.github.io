import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/material-module/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ContactButtonComponent } from './contact/contact-button/contact-button.component';
import { ProjectPreviewComponent } from './projects/project-preview/project-preview.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [				
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProjectPreviewComponent,
    ContactComponent,
    ContactButtonComponent,
   ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/portfolio' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
