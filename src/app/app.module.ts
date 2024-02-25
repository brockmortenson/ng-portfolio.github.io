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
import { SkillsComponent } from './about-me/skills/skills.component';

@NgModule({
  declarations: [				
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectPreviewComponent,
    ContactComponent,
    ContactButtonComponent,
   ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
