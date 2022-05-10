import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentRootComponent } from './pages/component-root/component-root.component';
import { ExternalComponentComponent } from './pages/external-component/external-component.component';

const routes: Routes = [{
  path: 'componente-raiz',
  component: ComponentRootComponent
}, {
  path: 'componente-externo',
  component: ExternalComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
