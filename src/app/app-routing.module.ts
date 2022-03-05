import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoNewComponent} from "./components/todo/todo-new/todo-new.component";
import {TodoDashboardComponent} from "./components/todo/todo-dashboard/todo-dashboard.component";

const routes: Routes = [
  { path: '', component: TodoDashboardComponent},
  { path: 'new-todo', component: TodoNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
