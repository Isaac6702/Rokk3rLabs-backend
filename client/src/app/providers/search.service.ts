import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {
  private api: string;
  private geolocation_options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

  constructor(
    private http: Http

  ) {
    this.api = environment.apiUrl;
  }

  private success(success: any): any {
    return Promise.resolve(success.json());
  }

  search(input: string) {
    const url = this.api + "/v1/searches?search="+input;
    return this.http.get(url)
      .toPromise()
      .then(this.success)
      .catch(error => {
        if (error.status === 0) {
          return Promise.reject({ description: 'Connection denied' });
        }
        return Promise.reject(JSON.parse(error._body));
      });
  }
}