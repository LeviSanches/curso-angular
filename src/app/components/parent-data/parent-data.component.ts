import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {

@Input() name = ""; //posso iniciar com uma string vazia
@Input() userData!: {email:string,role:string} //ou posso iniciar com a exclamação no final

}
