import { Component, OnInit } from '@angular/core';
export class ValidatorList {
  static account_validation_messages: any = {
    first_name: [{type: 'required', message: '*field is required.'}],
    last_name: [{type: 'required', message: '*field is required.'}],
    organization: [{type: 'required', message: '*field is required.'}],
    designation: [{type: 'required', message: '*field is required.'}],
    salary: [{type: 'required', message: '*field is required.'}],
    phone: [{type: 'required', message: '*field is required.'}],
    email: [
      { type: 'required', message: '* Email is required.' },
      { type: 'pattern', message: '* Enter a valid email.' },
      { type: 'emailValidator', message: '* Enter a valid email.' }
    ],
  };

  static numberNotRequiredValidator(number: any): any {
    if (number.pristine) {
      return null;
    }
    const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;

    number.markAsTouched();

    const value = number.value.trim();

    if (NUMBER_REGEXP.test(value)) {
      return {
        numberNotRequiredValidator: true
      };
    }

    return null;
  }

  static percentValidation(number ): any {
    if (number.pristine) {
      return null;
    }
    number.markAsTouched();
    // tslint:disable-next-line: radix
    const temp_number = parseInt(number.value);
    if (temp_number > 100 || temp_number < 0) {
      return {
        percentValidation: true
      };
    } else {
      return null;
    }
  }

  static avoidEmptyStrigs(value): any {
    if (value.pristine) {
      return null;
    }

    value.markAsTouched();

    if (value.value.trim() === '' && value.value.length > 0) {
      return {
        avoidEmptyStrigs: true
      };
    }

    return null;
  }

  static emailValidator(value): any {
    if (value.pristine) {
      return null;
    }

    if (value.value.length === 0) {
      return;
    }

    const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    value.markAsTouched();

    if (EMAIL_REGEXP.test(value.value)) {
      return null;
    }

    return {
      emailValidator: true
    };
  }

  static nameValidator(value): any {
    if (value.pristine) {
      return null;
    }

    if (value.value.length === 0) {
      return;
    }

    const EMAIL_REGEXP = /^[^\s]+$/;

    value.markAsTouched();

    if (EMAIL_REGEXP.test(value.value)) {
      return null;
    }

    return {
      namelValidator: true
    };
  }
}
