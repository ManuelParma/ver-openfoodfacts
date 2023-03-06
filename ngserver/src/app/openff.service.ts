import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenffService {

  baseUrl = "https://world.openfoodfacts.org/";
  constructor(private http: HttpClient) { }

  public searchItem(query: string, nPages: number = 5) {
    const url = `${this.baseUrl}cgi/search.pl?search_terms=${encodeURIComponent(query)}&page_size=${nPages}&json=true`;
    return this.http.get(url);
  }

}
