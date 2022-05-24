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


import {HttpClientModule} from '@angular/common/http';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertasModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
