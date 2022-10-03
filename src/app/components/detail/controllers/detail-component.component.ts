import {Component, OnInit } from '@angular/core';
import { AirbnbApiService } from 'src/app/services/airbnb-api.service';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'src/app/models/detail-model';

import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail-component',
  templateUrl: '../assets/detail-component.component.html',
  styleUrls: ['../styles/detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  detail : Detail | undefined;
  hasResult : boolean = false;

  airbnForm = this.fb.group({
    start : ['', {
      validator: Validators.required,
      updateOn: 'blur',
    }],
    end : ['', {
      validator: Validators.required,
      updateOn: 'blur',
    }],
    guests : ['', {
      validator: Validators.required,
      updateOn: 'blur',
    }],
  });

  constructor(
    private airbnApi : AirbnbApiService,
    private route : ActivatedRoute,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id!== null){
      this.airbnApi.getDetailById(id)
        .subscribe(data => this.detail = data)
    }
  }

  onSubmit() {
    console.log(this.airbnForm.value);
    if(this.airbnForm.valid) {
      this.hasResult = true;
    }
  }

}
