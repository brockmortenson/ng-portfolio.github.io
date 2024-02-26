import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatIconModule, MatTooltipModule,
  ],
  exports: [
    MatIconModule, MatTooltipModule,
  ]
})
export class MaterialModule { }
