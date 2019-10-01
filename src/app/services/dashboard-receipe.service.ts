import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardReceipeService {
  private url = '../assets/Data/recipe-data.json';
  constructor(private http: HttpClient) { }

  getRecipees() {
    return this.http.get(this.url);
  }
}
