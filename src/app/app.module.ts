import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/material-module/shared.module';
import { AppRoutingModule } from './app-routing-module.ts.module';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
   ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
