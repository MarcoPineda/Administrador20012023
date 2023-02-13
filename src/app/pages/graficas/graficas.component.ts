import { Component,Input} from '@angular/core';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: [ ]
})

export class GraficasComponent  
{
 public labelDat: string[]=['defecto1','defecto2','defecto3'];
 @Input('labelDat22') doughnutChartLabels2: string[] = [ 'labelspppppp 1', 'labelppppp 2', 'labelpppppik 3' ];

  

}


