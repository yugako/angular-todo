import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoNewComponent } from '~components/todo/todo-new/todo-new.component';
import { TodoDashboardComponent } from '~components/todo/todo-dashboard/todo-dashboard.component';
import { NotFoundComponent } from '~components/not-found/not-found.component';
import { TodoEditComponent } from '~components/todo/todo-edit/todo-edit.component';

const routes: Routes = [
  { path: '', component: TodoDashboardComponent },
  { path: 'new-todo', component: TodoNewComponent },
  { path: 'edit-todo/:todo-id', component: TodoEditComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
