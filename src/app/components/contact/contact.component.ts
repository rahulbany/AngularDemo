import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ValidatorList } from '../../services/validator.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactUsForm: FormGroup;
  public account_validation_messages = ValidatorList.account_validation_messages;
  constructor( private fb: FormBuilder,   private router: Router, private dataservice: DataService) {
    this.contactUsForm = fb.group(
      {
          first_name: ['', [Validators.required]],
          last_name: [ '', [Validators.required]],
          email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9.]+)@([a-zA-Z]+).([a-zA-Z]{2,5})$')]],
          phone: ['', [Validators.required]],
          organization: ['', [Validators.required]],
          designation: ['', [Validators.required]],
          salary: ['', [Validators.required]],
      },
    );
  }

  ngOnInit(): void {}


onSubmit() {
  console.log(this.contactUsForm.value, 'pppppppppppppp');
  if (this.contactUsForm.invalid) {
    this.validateAllFormFields(this.contactUsForm);
    return;
  }else{
    this.dataservice.getBlogs({data: this.contactUsForm.value}).subscribe(
      (res: any) => {
        if (res.status === true) {
          alert('success');
          // this.data = res.data;
        } else {

        }
      },
      err => {
        // this.toastr.error(err.message);
        console.log(err.message);
      });
    this.router.navigate(['/contact-list']);
  }
}


validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    control?.markAsTouched({ onlySelf: true });
    control?.markAsDirty({ onlySelf: true });
  });
}
}
