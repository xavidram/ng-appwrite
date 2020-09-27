import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardLayoutComponent
      }
    ])
  ],
  declarations: [DashboardLayoutComponent],
})
export class DashboardModule {}
