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
import { SubjectComponent } from './pages/subject/subject.component';
import { ContentComponent } from './pages/content/content.component';
import { TemplateOutletComponent } from './pages/template-outlet/template-outlet.component';
import { ViewChildComponent } from './pages/view-child/view-child.component';
import { ViewchildTemplatesComponent } from './pages/viewchild-templates/viewchild-templates.component';
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';
import { OnPushComponent } from './pages/on-push/on-push.component';
import { ChangeDetectorComponent } from './pages/change-detector/change-detector.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

import {AuthGuard} from './guards/auth.guard';
import { EncapsulationComponent } from './pages/encapsulation/encapsulation.component';
import { ProfileResolver } from './resolvers/profile.resolver';
import { CustomDirectivesComponent } from './pages/custom-directives/custom-directives.component';
import { LoadingReduxComponent } from './pages/loading-redux/loading-redux.component';


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
  canLoad: [AuthGuard],
  loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)
}, {
  path: 'rutas-anidadas',
  component: RoutingChildrenComponent,
  canActivateChild: [AuthGuard],
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
}, {
  path: 'subject',
  component: SubjectComponent
},{
  path: 'content',
  component: ContentComponent
}, {
  path:'template-outlet',
  component: TemplateOutletComponent
},{
  path:'view-child',
  component: ViewChildComponent
},{
  path: 'viewchild-template',
  component: ViewchildTemplatesComponent
},{
  path:'dynamic-component',
  component: DynamicComponentsComponent
},{
  path: 'on-push',
  component: OnPushComponent
},{
  path: 'change-detector',
  component: ChangeDetectorComponent
},{
  path:'login',
  component: LoginComponent
}, {
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard], 
  resolve: {
    profile: ProfileResolver
  }
},{
  path: 'encapsulation',
  component:EncapsulationComponent
},{
  path: 'custom-directives',
  component:CustomDirectivesComponent
},{
  path:'loading_redux',
  component:LoadingReduxComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
