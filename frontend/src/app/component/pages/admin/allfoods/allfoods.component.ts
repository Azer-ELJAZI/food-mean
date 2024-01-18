import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-allfoods',
  templateUrl: './allfoods.component.html',
  styleUrls: ['./allfoods.component.css']
})
export class AllfoodsComponent implements OnInit{

  constructor(private http:HttpClient ) { 
    this.http.get('localhost:4200/admin/allfoods').subscribe(data => console.log(data))
  }

  ngOnInit(): void {
      
  }

}
