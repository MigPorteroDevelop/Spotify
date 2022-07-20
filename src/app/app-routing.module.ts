import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //localhost:4200/
    //component: '' --> This is best for small applications and Lazy load cannot be used.
    //Needs a dynamic import of a module//Promise
    //In the root path it will load the module home.module, from home.module
    //These modules we start them with routing
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule) 

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
