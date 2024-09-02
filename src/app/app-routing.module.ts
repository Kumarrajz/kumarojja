import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { InfoComponent } from './my-home/BIO/info/info.component';


const routes: Routes = [
 { path:'',component: MyHomeComponent},
 { path:'bio', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}