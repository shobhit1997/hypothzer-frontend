import { Component, OnInit , Input } from '@angular/core';
import { Data } from '../data';
import { PopulationService } from '../population.service';
@Component({
  selector: 'app-population-data-detail',
  templateUrl: './population-data-detail.component.html',
  styleUrls: ['./population-data-detail.component.css']
})
export class PopulationDataDetailComponent implements OnInit {

@Input() data: Data;
  constructor(private populationService: PopulationService) { }
save(data:Data):void{
	this.populationService.updateData(data).subscribe(function(data1){
		data = null;
	});
}
  ngOnInit() {
  }

}
