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
import { SkillAnalysisComponent } from './about-me/skills/skill-analysis/skill-analysis.component';
import { GraphBarComponent } from './about-me/skills/skill-analysis/graph/graph-bar/graph-bar.component';
import { GraphComponent } from './about-me/skills/skill-analysis/graph/graph.component';
import { SafePipe } from 'src/shared/pipes/safe.pipe';
import { EnumPipe } from 'src/shared/pipes/enum.pipe';

@NgModule({
  declarations: [				
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    SkillAnalysisComponent,
    GraphBarComponent,
    GraphComponent,
    ProjectsComponent,
    ProjectPreviewComponent,
    ContactComponent,
    ContactButtonComponent,
    SafePipe,
    EnumPipe,
   ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
