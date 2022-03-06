import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TODO_STATUSES_VIEW } from '~constants';
import { TStatusesView } from '~types';

@Directive({
  selector: '[appHighlightStatus]',
})
export class HighlightStatusDirective implements OnInit {
  @Input() appHighlightStatus: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.highlightStatus();
  }

  private highlightStatus() {
    Object.assign(
      this.el.nativeElement.style,
      TODO_STATUSES_VIEW[this.appHighlightStatus as keyof TStatusesView]
    );
  }
}
