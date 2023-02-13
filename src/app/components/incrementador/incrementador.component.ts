import { Component,EventEmitter,Input, Output,OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit
{
  ngOnInit()
  {
    this.btnClass=`btn ${ this.btnClass}`;
  }

  @Input ('valor') progreso: number = 10;
  @Input () btnClass: string ='btn-primary';






  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  
  cambiarValor(valor: number)
  {
    if(this.progreso >= 100 && valor >= 0)
    {
       this.valorSalida.emit(100);
       this.progreso =100;
    } 
    else
    {
    if(this.progreso <= 0 && valor < 0)
    {
      this.valorSalida.emit(0);
       this.progreso =0;
    }
    else{
      
    this.progreso = this.progreso+valor;
    this.valorSalida.emit(this.progreso);
        }
    }
  
  }
  onChange( nuevovalor :number)
  {
    if(nuevovalor >= 100)
    {
      this.progreso=100;
    }
    else if(nuevovalor<=0)
    {
      this.progreso=0;
    }
    else
    {
      this.progreso=nuevovalor;
    }

    this.valorSalida.emit(this.progreso);
  }

}
