import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentRootComponent } from './pages/component-root/component-root.component';
import { ExternalComponentComponent } from './pages/external-component/external-component.component';
import { NpmComponentComponent } from './pages/npm-component/npm-component.component';
import { RoutingChildrenComponent } from './pages/routing-children/routing-children.component';

const routes: Routes = [{
  path: 'componente-raiz',
  component: ComponentRootComponent
}, {
  path: 'componente-externo',
  component: ExternalComponentComponent
}, {
  path: 'componente-npm',
  component: NpmComponentComponent
},
{
  path: 'lazy-loading',
  loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)
}, {
  path: 'rutas-anidadas',
  component: RoutingChildrenComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
