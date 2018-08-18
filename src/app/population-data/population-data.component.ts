import { Component, OnInit } from '@angular/core';
import {Data} from '../data';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-population-data',
  templateUrl: './population-data.component.html',
  styleUrls: ['./population-data.component.css']
})
export class PopulationDataComponent implements OnInit {

  dataSource :Data[];
  constructor(private populationService: PopulationService) { }

  getData(): void {
  this.populationService.getData()
      .subscribe(dataSource => this.dataSource = dataSource);
}

delete(data: Data): void {
  this.dataSource = this.dataSource.filter(d => d !== data);
  this.populationService.deleteData(data).subscribe();
}
import(): void {
  this.populationService.importCSV().subscribe();
}

add(year: number,population: number,growth_rate : string,growth : number): void {

  growth_rate=growth_rate.trim();
  
  this.populationService.addData({ year,population,growth_rate,growth } as Data)
    .subscribe(data => {
      this.dataSource.push(data);
    });
}
selectedData: Data;
edit(data:Data):void{
	this.selectedData=data;
}

  ngOnInit() {
  	this.getData();
  }

}
