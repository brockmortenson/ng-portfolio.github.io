import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule, MatSidenavModule, MatIconModule,
  ],
  exports: [
    MatButtonModule, MatSidenavModule, MatIconModule,
  ]
})
export class MaterialModule { }
