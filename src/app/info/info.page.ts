import { Component, OnInit } from '@angular/core';
import { WebscraperService } from '../Services/webscraper.service'

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  CoronaData:any=[];
  constructor(private webScraper:WebscraperService) { }

  ngOnInit() {
    this.webScraper.GetIrishData().subscribe(
      (data)=>{
        this.CoronaData = data.countrydata;
      }
    );
  }

}
