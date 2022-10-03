import {Component, OnInit } from '@angular/core';
import { AirbnbApiService } from 'src/app/services/airbnb-api.service';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'src/app/models/detail-model';

@Component({
  selector: 'app-detail-component',
  templateUrl: '../assets/detail-component.component.html',
  styleUrls: ['../styles/detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  detail : Detail | undefined;

  constructor(
    private airbnApi : AirbnbApiService,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id!== null){
      this.airbnApi.getDetailById(id)
        .subscribe(data => this.detail = data)
    }
  }

}
