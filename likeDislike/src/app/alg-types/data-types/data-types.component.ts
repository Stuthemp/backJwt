import {Component, Input, OnInit} from '@angular/core';
import {AlgType} from "../../app.component";

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.css']
})
export class DataTypesComponent implements OnInit {

  @Input()
  dataType: AlgType = new AlgType(["Стек", "","../../assets/images/data-types-ic/stack-ic.svg"],
    ["Очередь", "", "../../assets/images/data-types-ic/queue-ic.svg"],
    ["Деревья", "","../../assets/images/data-types-ic/data-tree-ic.svg"],
    ["Графы", "", "../../assets/images/data-types-ic/graph-ic.svg"],
    "Типы данных",
    "Наиболее популярные типы данных, использующиеся при работе с алгоритмами");
  constructor() { }

  ngOnInit(): void {
  }

}
