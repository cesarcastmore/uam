import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentRootComponent } from './component-root/component-root.component';

const routes: Routes = [{
  path:'componente-raiz',
  component: ComponentRootComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
