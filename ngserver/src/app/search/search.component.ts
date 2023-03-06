import { Component, OnInit } from '@angular/core';
import { OpenffService } from '../openff.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results!: any;

  constructor(private off: OpenffService) { }

  ngOnInit(): void {
  }

  kdown(event: any): void {
    if (!event.target?.value || event.target.value?.trim() === '')
      return;
    
    this.off.searchItem(event.target?.value, 1).subscribe(data => {
      this.results = data.products.map((p: any) => {return {name: p.generic_name, image: p.image_url, id: p._id}});
    });
  }

}
