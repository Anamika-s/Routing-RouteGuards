import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChildAuthGuard } from './child-auth.guard';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';
import { ProtectGuard } from './protect.guard';
import { RegisterComponent } from './register/register.component';
 
const routes: Routes = [
  {"path":"dept", component:DeptComponent, children:
    [
        {"path":"list", component:DeptListComponent},
        {"path":"details", component:DeptDetailsComponent}
  ],  canActivateChild:[ChildAuthGuard]},
  
  {"path":"emp", component:EmpComponent, canActivate:[AuthGuard] ,data:["manager","admin"] },
  {"path":"register", component:RegisterComponent, canDeactivate:[ProtectGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
