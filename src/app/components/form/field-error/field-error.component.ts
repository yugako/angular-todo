import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { keys, pickAll } from 'ramda';
import { TErrorMessage } from '~types';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
})
export class FieldErrorComponent implements OnInit {
  @Input() field!: AbstractControl | null;
  @Input() fieldName!: string | null;
  @Input() errorMessages!: TErrorMessage;

  errors: string[] = [];

  constructor() {}

  ngOnInit() {
    this.field?.valueChanges.subscribe(() => {
      const fieldMessages =
        this.errorMessages[this.fieldName as keyof TErrorMessage];

      this.errors = Object.values(
        pickAll(keys(this.field?.errors), fieldMessages)
      );
    });
  }
}
