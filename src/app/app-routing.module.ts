import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropsComponent } from './drops/drops.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { DropDetailComponent } from './drop-detail/drop-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: DropDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'drops', component: DropsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
