import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { ReactiveFormComponent } from '../../components/reactive-form/reactive-form.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
