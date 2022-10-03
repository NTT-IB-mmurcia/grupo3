import { Component, OnInit } from '@angular/core';
import { AirbnbApiService } from '../../../services/airbnb-api.service';
import { ActivatedRoute } from '@angular/router';
//import { Detail } from '../../detail/controllers/detail-component.component';
//import {  } from '../../detail/controllers/detail-component.component';
//import { Detail } from '../../detail/controllers/detail-component.component';

import { Detail } from 'src/app/models/detail-model'; //es el modelo??

@Component({
  selector: 'app-list-component',
  templateUrl: '../assets/list-component.component.html',
  styleUrls: ['../styles/list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  details: Detail[]=[];
  constructor(private airbnbApiService: AirbnbApiService, private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.queryParams.subscribe((params: any) => {
        console.log(params);
      });

      this.getList();
      console.log(this.details)
    }


    getList(): void {
      this.airbnbApiService.getRoomListByCurrentPosition()
          .subscribe((details: Detail[]) => this.details = details);
    }

}
