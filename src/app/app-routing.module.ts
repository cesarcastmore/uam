import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentRootComponent } from './pages/component-root/component-root.component';
import { ExternalComponentComponent } from './pages/external-component/external-component.component';
import { NpmComponentComponent } from './pages/npm-component/npm-component.component';
import { RoutingChildrenComponent } from './pages/routing-children/routing-children.component';


import { HtmlComponent } from './pages/routing-children/html/html.component';
import { CssComponent } from './pages/routing-children/css/css.component';
import { JavascriptComponent } from './pages/routing-children/javascript/javascript.component';
import { RoutingQueryparamsComponent } from './pages/routing-queryparams/routing-queryparams.component';
import { ObservableComponent } from './pages/observable/observable.component';

import { OperatorsComponent } from './pages/operators/operators.component';
import { PromisesComponent } from './pages/promises/promises.component';
import { JoinOperatorsComponent } from './pages/join-operators/join-operators.component';


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
  component: RoutingChildrenComponent,
  children: [{
    path: 'html',
    component: HtmlComponent
  }, {
    path: 'css',
    component: CssComponent
  }, {
    path: 'javascript',
    component: JavascriptComponent
  }],
}, {
  path: 'parametros-consulta',
  component: RoutingQueryparamsComponent

}, {
  path: 'observable',
  component: ObservableComponent
}, {
  path: 'operators',
  component: OperatorsComponent
}, {
  path: 'promises',
  component: PromisesComponent
}, {
  path: 'join-operators',
  component: JoinOperatorsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
