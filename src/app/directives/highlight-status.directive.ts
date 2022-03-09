import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TODO_SEVERITY_VIEW, TODO_STATUSES_VIEW } from '~constants';
import { TSeverityView, TStatusesView } from '~types';

type THighlightConfig = {
  status: TStatusesView;
  severity: TSeverityView;
};

@Directive({
  selector: '[appHighlightStatus]',
})
export class HighlightStatusDirective implements OnInit {
  @Input() appHighlightStatus: string = '';
  @Input() highlightType: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.highlightStatus();
  }

  private highlightStatus() {
    const highlightConfig: THighlightConfig = {
      status: TODO_STATUSES_VIEW,
      severity: TODO_SEVERITY_VIEW,
    };

    const highlightStyles =
      highlightConfig[this.highlightType as keyof THighlightConfig];

    Object.assign(
      this.el.nativeElement.style,
      highlightStyles[
        this.appHighlightStatus as keyof (TStatusesView | TSeverityView)
      ]
    );
  }
}
