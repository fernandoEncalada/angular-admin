import { Component } from '@angular/core';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component {

  public labels1: string[] = [ 'Food', 'Clothes', 'Things' ];

  public data1 = [
    [ 70, 10, 20 ] ,
];

}
