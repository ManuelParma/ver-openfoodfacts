import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenffService } from '../openff.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  res: any = {};
  id: any = 0;

  constructor(private off: OpenffService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get("id");
    this.route.params.subscribe(p => {
      this.off.getItem(p["id"]).subscribe(item => {
        this.res = item.product;
      })
    })
  }

  keys(o: Object): any {
    if (!o) return;
    return Object.keys(o);
  }

  map(l: any) {
    if (!l) return;
    return Object.values(l).map((e: any) => e.replace(/[A-z]*\:/, ""));
  }

  getIng(l: any) {
    if (!l) return;
    return l.map((e: any) => e.id.replace(/[A-z]*\:/, ""))
  }

  goBack() {
    this.location.back();
  }
}
