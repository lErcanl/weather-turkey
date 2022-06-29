import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AlertComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    AlertComponent,
    HeaderComponent,
    //modules
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
