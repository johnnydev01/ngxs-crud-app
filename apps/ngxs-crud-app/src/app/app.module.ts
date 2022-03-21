import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxsModule } from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TodoState } from './states/todo.state';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      TodoState
  ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
