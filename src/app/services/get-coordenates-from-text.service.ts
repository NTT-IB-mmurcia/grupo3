import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail-model';

@Injectable({
  providedIn: 'root'
})
export class GetCoordenatesFromTextService {

  constructor(private http: HttpClient) { 

    
    //https://developer.mapquest.com
    // get http://www.mapquestapi.com/geocoding/v1/address

  }

  //efpRzcQZ77fdDNhlG9bcuOJ2xA7dJald    public

  //TwC7jdXatLxt7XtR                    private

  getCoordenates(city: string): Observable<any> {
    //http://www.mapquestapi.com/datamanager/v2/create-table
    
    //http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC

    let coordenates = this.http.get("http://www.mapquestapi.com/geocoding/v1/address?key=efpRzcQZ77fdDNhlG9bcuOJ2xA7dJald&location="+ city);

    return coordenates;
   

    //return coordenates;
    //return this.http.get("http://www.mapquestapi.com/geocoding/v1/address?key=efpRzcQZ77fdDNhlG9bcuOJ2xA7dJald&location="+ city);

    //"https://maps.googleapis.com/maps/api/js?key=AIzaSyBUuK8rv5_cbl3JHnS9b5EmWAxjO0pdHbk"

    //return this.http.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyBUuK8rv5_cbl3JHnS9b5EmWAxjO0pdHbk")
  }


  }

