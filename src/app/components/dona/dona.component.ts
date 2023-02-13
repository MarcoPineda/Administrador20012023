import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType,Color} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent 
{

  @Input() titulo: string ='Sin titulo Asignado';
  

 // Doughnut
 @Input('labels') doughnutChartLabels: string[] = [ 'labelsssss 1', 'label 2', 'label 3' ];
 @Input('dataIn') doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
      datasets: 
   [
     { data: [ 899, 450, 100 ] }
       
   ]
 };

 
   public doughnutChartType: ChartType = 'doughnut';
   // events
   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }
 
   public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }

}
