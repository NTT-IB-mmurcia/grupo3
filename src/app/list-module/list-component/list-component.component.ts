import { Component, OnInit } from '@angular/core';
import { AirbnbApiService } from '../../services/airbnb-api.service';
import { Detail } from '../../models/detail-model';
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  details: Detail[]=[];

  constructor(private airbnbApiService: AirbnbApiService) { }

    ngOnInit(): void {
      this.getList();
      console.log(this.details)
    }


    getList(): void {
      this.airbnbApiService.getRoomListByCurrentPosition()
          .subscribe(details => this.details = details);
    }

}
