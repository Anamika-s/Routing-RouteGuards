import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { RegisterComponent } from './register/register.component';
 

@NgModule({
  declarations: [
    AppComponent,
    DeptComponent,
    EmpComponent,
    DeptListComponent,
    DeptDetailsComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
