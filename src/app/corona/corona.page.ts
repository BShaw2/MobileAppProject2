import { Component, OnInit } from '@angular/core';
import { WebscraperService } from '../Services/webscraper.service'

@Component({
  selector: 'app-corona',
  templateUrl: './corona.page.html',
  styleUrls: ['./corona.page.scss'],
})
export class CoronaPage implements OnInit {
  CoronaData:any=[];
  constructor(private webScraper:WebscraperService) { }

  
  ngOnInit() {
    this.webScraper.GetData().subscribe(
      (data)=>{
        this.CoronaData = data.results;
      }
    );
  }

}
