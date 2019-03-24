import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 allTitles: Object;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getTitles().subscribe(data=>{
      this.allTitles = JSON.stringify(data);
    },
    err=>{
      console.log(err);
      return false;
    })
  }

}
