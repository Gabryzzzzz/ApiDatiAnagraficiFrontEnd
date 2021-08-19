import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ResponseData } from '../interfaces/dati-anagrafici';
import { HttpService } from '../services/http.services';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {


  data: ResponseData | undefined;
  constructor(private httpService: HttpService, ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.httpService.get('Dati/GetAllDati').subscribe(res => {
      this.data = res;
      console.log(this.data)
    })
  }

}
