import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './modules/home/home.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => HomeModule }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
