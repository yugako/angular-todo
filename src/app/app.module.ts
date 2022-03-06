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

/* Pipes */
import { CamelCasePipe } from '~pipes/camelcase.pipe';
import { FilterPipe } from '~pipes/filter.pipe';

/* Directives */
import { HighlightStatusDirective } from '~directives/highlight-status.directive';
import { MarkSeverityDirective } from '~directives/mark-severity.directive';

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
    MarkSeverityDirective,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
