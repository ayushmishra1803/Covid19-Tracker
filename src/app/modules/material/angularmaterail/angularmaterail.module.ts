import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
  ],
})
export class AngularmaterailModule {}
