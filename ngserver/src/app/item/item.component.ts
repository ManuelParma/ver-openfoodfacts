import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenffService } from '../openff.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  res!: any;
  id: any = 0;

  constructor(private off: OpenffService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }

}
