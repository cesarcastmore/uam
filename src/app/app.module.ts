import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentRootComponent } from './pages/component-root/component-root.component';
import { AlertasModule } from './alertas/alertas.module';
import { ExternalComponentComponent } from './pages/external-component/external-component.component';
import { NpmComponentComponent } from './pages/npm-component/npm-component.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingChildrenComponent } from './pages/routing-children/routing-children.component';
import { HtmlComponent } from './pages/routing-children/html/html.component';
import { CssComponent } from './pages/routing-children/css/css.component';
import { JavascriptComponent } from './pages/routing-children/javascript/javascript.component';
import { RoutingQueryparamsComponent } from './pages/routing-queryparams/routing-queryparams.component';


import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from './pages/observable/observable.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PromisesComponent } from './pages/promises/promises.component';
import { JoinOperatorsComponent } from './pages/join-operators/join-operators.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { ContentComponent } from './pages/content/content.component';
import { SharedModule } from './shared/shared.module';
import { TemplateOutletComponent } from './pages/template-outlet/template-outlet.component';
import { ViewChildComponent } from './pages/view-child/view-child.component';
import { TitleComponent } from './pages/view-child/title/title.component';
import { CardComponent } from './pages/view-child/card/card.component';
import { ViewchildTemplatesComponent } from './pages/viewchild-templates/viewchild-templates.component';
import { TemplateNgContainerComponent } from './pages/viewchild-templates/template-ng-container/template-ng-container.component';
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';
import { ProductoComponent } from './pages/dynamic-components/producto/producto.component';
import { UsuarioComponent } from './pages/dynamic-components/usuario/usuario.component';
import { OnPushComponent } from './pages/on-push/on-push.component';
import { ChangeDetectorComponent } from './pages/change-detector/change-detector.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EncapsulationComponent } from './pages/encapsulation/encapsulation.component';
import { ChildEncapsulationComponent } from './pages/encapsulation/child-encapsulation/child-encapsulation.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { CustomDirectivesComponent } from './pages/custom-directives/custom-directives.component';
import { DragDirective } from './directives/drag.directive';
import { DropDirective } from './directives/drop.directive';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/store.reducer';
import { LoadingReduxComponent } from './pages/loading-redux/loading-redux.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LoadingEffects } from './store/loading.effects';


@NgModule({
  declarations: [
    AppComponent,
    ComponentRootComponent,
    ExternalComponentComponent,
    NpmComponentComponent,
    RoutingChildrenComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    RoutingQueryparamsComponent,
    ObservableComponent,
    OperatorsComponent,
    PromisesComponent,
    JoinOperatorsComponent,
    SubjectComponent,
    ContentComponent,
    TemplateOutletComponent,
    ViewChildComponent,
    TitleComponent,
    CardComponent,
    ViewchildTemplatesComponent,
    TemplateNgContainerComponent,
    DynamicComponentsComponent,
    ProductoComponent,
    UsuarioComponent,
    OnPushComponent,
    ChangeDetectorComponent,
    LoginComponent,
    ProfileComponent,
    EncapsulationComponent,
    ChildEncapsulationComponent,
    CustomDirectivesComponent,
    DragDirective,
    DropDirective,
    LoadingReduxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertasModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot({ is_loading: storeReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([LoadingEffects])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
