import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { TableEmployeeComponent } from './table-employee/table-employee.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormEmployeeComponent,
    TableEmployeeComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,      
    BrowserModule,
    AppRoutingModule,
    HttpClientModule/*3lshan esta5dmt module el HttpClient flazem adefo hena f el app module */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
