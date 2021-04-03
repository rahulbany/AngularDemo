import { Component, OnInit } from '@angular/core';
export class ValidatorList {
  static account_validation_messages: any = {
    email: [
      { type: 'required', message: '* Email is required.' },
      { type: 'pattern', message: '* Enter a valid email.' },
      { type: 'emailValidator', message: '* Enter a valid email.' }
    ],
    password: [
      { type: 'required', message: '* Password is required.' },
      {
        type: 'minlength',
        message: '* Password must be at least 6 characters long.'
      },
      { type: 'pattern', message: '* Password must be alpha-numeric.' },
      { type: 'nameValidator', message: '* Enter a valid password.' },
       { type: 'nameValidator', message: '* Enter a valid password.' }
    ],
    newPassword: [
      { type: 'required', message: '* New Password is required.' },
    ],
    score_title: [
      { type: 'required', message: '* Title is required.' },
    ],
    score_value: [
      { type: 'required', message: '* This field is required.' },
    ],
    oldPassword: [
      { type: 'required', message: '* Old Password is required.' },
    ],
    firstName: [
      { type: 'required', message: '* First Name is required.' },
      { type: 'minlength', message: '* First Name atleast 3 character long.' },
      { type: 'maxlength', message: '* First Name can only have 16 character.' },
      {
        type: 'numberNotRequiredValidator',
        message: '* First Name should not contain numbers.'
      },
      { type: 'pattern', message: '* First Name should contain alphabets only.' },
      {
        type: 'avoidEmptyStrigs',
        message: '* First Name should not be empty string.'
      },
      { type: 'nameValidator', message: '* Enter a valid name.' }
    ],
    lastName: [
      { type: 'required', message: '* Last Name is required.' },
      { type: 'pattern', message: '* Last Name should contain alphabets only.' },
      { type: 'minlength', message: '* Last Name atleast 3 character long.' },
      { type: 'maxlength', message: '* Last Name can only have 16 character.' },
      {
        type: 'numberNotRequiredValidator',
        message: '* Last Name should not contain numbers.'
      },
      {
        type: 'avoidEmptyStrigs',
        message: '* Last Name should not be empty string.'
      },
      { type: 'nameValidator', message: '* Enter a valid name.' }
    ],
    countryCode: [
      { type: 'required', message: '* Country code is required.' }
    ],
    uname: [
      { type: 'required', message: '*  University name is required.' }
    ],
    selected_type: [
      { type: 'required', message: '*  Please select a type.' }
    ],
    cpassword: [
      {
        type: 'required',
        message: '* Confirm password is required.'
      }
    ],
    uniqueCode: [
      {
        type: 'required',
        message: '* Unique code is required.'
      }
    ],
    phone: [
      {type: 'required', message: '* Phone is required.'},
      { type: 'minlength', message: '* phone number atleast 10 numbers long.' },
      { type: 'maxlength', message: '* phone number can only have 10 numbers.' },
    ],
    role: [{ type: 'required', message: '* Role is required.' }],
    storageName: [
      { type: 'required', message: '* Storage Facility Name is required.' }
    ],
    storageFacility: [
      { type: 'required', message: '* Storage Facility Name is required.' }
    ],
 
    first_name: [{type: 'required', message: '*field is required.'}],
    last_name: [{type: 'required', message: '*field is required.'}],
    organization: [{type: 'required', message: '*field is required.'}],
    designation: [{type: 'required', message: '*field is required.'}],
    salary: [{type: 'required', message: '*field is required.'}],
    state: [
      { type: 'required', message: '* State is required.' }
      // { type: 'pattern', message: '*State  should contain alphabet only' },
    ],
    city: [
      { type: 'required', message: '* City is required.' },
      { type: 'pattern', message: '* City should contain alphabet only.' }
    ],
    country: [
      { type: 'required', message: '* Country is required.' },
      { type: 'pattern', message: '* Country should contain alphabet only.' }
    ],

    postalCode: [{ type: 'required', message: '* Postal code is required.' }],
    landmark: [{ type: 'required', message: '* landmark code is required.' }],
    emptyTankReturnFee: [
      { type: 'required', message: '* Return fee  is required.' }
    ],
    price: [{ type: 'required', message: '* Price  is required.' }],
    newTankConnectionFee: [
      { type: 'required', message: '* New Tank connection fee is required.' }
    ],
    tankCertificationFee: [
      { type: 'required', message: '* Tank certification fee  is required.' }
    ],
    size: [{ type: 'required', message: '* Tank Size is required.' }],
    quantity: [{ type: 'required', message: '* Tank quantity is required.' }],
    industryName: [{ type: 'required', message: '* Industry name is required.' }]
  };
  static numberNotRequiredValidator(number): any {
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

  static percentValidation(number): any {
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
