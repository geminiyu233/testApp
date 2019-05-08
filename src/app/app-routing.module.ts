import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { ObservablesComponent } from './observables/observables.component';
import { RouterComponent } from './router/router.component';
import { FormsComponent } from './forms/forms.component';

// path 不能以斜杠（/）开头
const routes: Routes = [
  { path: 'forms', component: FormsComponent, data: { title: '表单' } },
  { path: 'template-syntax', component:  TemplateSyntaxComponent, data: { title: '模板语法' } },
  { path: 'observables', component: ObservablesComponent, data: {  title: 'Observable与RxJS'} },
  { path: 'router', component: RouterComponent, data: { title: '路由与导航' } },
  { path: '', redirectTo: '/router', pathMatch: 'full' }
];
// enableTracing: true <-- debugging purposes only
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
