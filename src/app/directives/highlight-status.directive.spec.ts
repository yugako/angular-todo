import { HighlightStatusDirective } from './highlight-status.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {TodoItemComponent} from "../components/todo/todo-item/todo-item.component";
import {CUSTOM_ELEMENTS_SCHEMA, ElementRef} from "@angular/core";

describe('HighlightStatusDirective', () => {
  let fixture: ComponentFixture <TodoItemComponent>;
  beforeEach(() => {

    fixture = TestBed.configureTestingModule({
      declarations: [ TodoItemComponent, HighlightStatusDirective ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .createComponent(TodoItemComponent);
    fixture.detectChanges(); // initial binding
  });
  it('should create an instance', () => {
    const statusEl: ElementRef = fixture.nativeElement.querySelector('.todo-list__item-status');
    const directive = new HighlightStatusDirective(statusEl);
    expect(directive).toBeTruthy();
  });
});
