import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
FormsModule



@NgModule({
  declarations: [MainPageComponent, ListComponent, FormComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
