import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
/* Components */
import { AppComponent } from '~components/app-root/app.component';
import { SearchBarComponent } from '~components/search-bar/search-bar.component';
import { TodoDashboardComponent } from '~components/todo/todo-dashboard/todo-dashboard.component';
import { TodoHeaderComponent } from '~components/todo/todo-header/todo-header.component';
import { TodoListComponent } from '~components/todo/todo-list/todo-list.component';
import { TodoItemComponent } from '~components/todo/todo-item/todo-item.component';
import { TodoNewComponent } from '~components/todo/todo-new/todo-new.component';
import { TodoWrapperComponent } from '~components/todo/todo-wrapper/todo-wrapper.component';
import { NotFoundComponent } from '~components/not-found/not-found.component';
import { FieldErrorComponent } from '~components/form/field-error/field-error.component';
import { TodoFormComponent } from '~components/todo/todo-form/todo-form.component';
import { TodoEditComponent } from '~components/todo/todo-edit/todo-edit.component';
/* Pipes */
import { CamelCasePipe } from '~pipes/camelcase.pipe';
import { FilterPipe } from '~pipes/filter.pipe';
/* Directives */
import { HighlightStatusDirective } from '~directives/highlight-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TodoDashboardComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    HighlightStatusDirective,
    CamelCasePipe,
    TodoNewComponent,
    TodoWrapperComponent,
    FilterPipe,
    NotFoundComponent,
    FieldErrorComponent,
    TodoFormComponent,
    TodoEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
