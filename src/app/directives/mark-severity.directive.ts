import {Directive, ElementRef, Input} from '@angular/core';
import {TODO_SEVERITY_VIEW} from "~constants";
import {TSeverityView} from "~types";

@Directive({
  selector: '[appMarkSeverity]'
})
export class MarkSeverityDirective {

  @Input() appMarkSeverity: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.highlightStatus();
  }

  private highlightStatus() {
    Object.assign(this.el.nativeElement.style, TODO_SEVERITY_VIEW[this.appMarkSeverity as keyof TSeverityView]);
  }
}
