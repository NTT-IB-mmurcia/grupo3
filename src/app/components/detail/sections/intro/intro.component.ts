import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/models/detail-model';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @Input() detail: Detail | undefined;

  hasResult : boolean = false;

  airbnForm = this.fb.group({
    start : ['', {
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    end : ['', {
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
    guests : ['', {
      validators: Validators.compose([
        Validators.required,
      ]),
      updateOn: 'blur',
    }],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.airbnForm.valid) {
      this.hasResult = true;
    }
  }

}
