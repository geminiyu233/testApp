import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RouterComponent } from './router/router.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormsComponent } from './forms/forms.component';
import { from } from 'rxjs';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    RouterComponent,
    TemplateSyntaxComponent,
    ObservablesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
