import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {BanksService} from "../banks.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public form: FormGroup;
  public response: string;

  constructor(private formBuilder: FormBuilder, private banksService: BanksService) {
    this.form = formBuilder.group({
      'title': ['', [
        Validators.required,
      ]],
      'firstName': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),

      ]],
      'lastName': ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]],
      'email': ['', [
        Validators.email
      ]],
      'zipCode': ['', [
        Validators.maxLength(5),
        Validators.minLength(5)
      ]]
      ,
      'streetName': ['', [

      ]]
      ,
      'streetNumber': ['', [

      ]]
    })
  }

  public onSubmit() {
    console.log(this.form);
    if (!this.form.valid) {
      console.log(this.form.errors);
    } else {

      const form = this.form.value;
      this.banksService.sendForm(form).subscribe((response) => {
        this.response = response
        console.log(response);

      })

    }
    // Form isn't valid



  }


}
