import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiCalComponent } from './emi-cal/emi-cal.component';

const routes: Routes = [
  { path: '', component: EmiCalComponent },
  { path: '*',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: EmiCalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
