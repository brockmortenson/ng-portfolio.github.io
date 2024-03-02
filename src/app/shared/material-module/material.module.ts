import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatIconModule, MatTooltipModule, MatButtonModule,
  ],
  exports: [
    MatIconModule, MatTooltipModule, MatButtonModule,
  ]
})
export class MaterialModule { }
