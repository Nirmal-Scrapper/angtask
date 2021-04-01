import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SericeService {

  constructor(private http: HttpClient){
    
  }
  getTrendingSongs() {
    return this.http.get('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-trending');
  }

  getTopPicks() {
    return this.http.get('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-picks')
  }

  getTopCharts() {
    return this.http.get('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-charts')
  }
}
