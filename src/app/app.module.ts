import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentRootComponent } from './pages/component-root/component-root.component';
import { AlertasModule } from './alertas/alertas.module';
import { ExternalComponentComponent } from './pages/external-component/external-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentRootComponent,
    ExternalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
