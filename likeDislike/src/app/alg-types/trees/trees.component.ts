import {Component, Input, OnInit} from '@angular/core';
import {AlgType} from "../../app.component";

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.css']
})
export class TreesComponent implements OnInit {

  @Input()
  treesType: AlgType = new AlgType(["Поиск зааданного ключа", "O(n)","../../assets/images/trees-ic/key-search-ic.svg"],
    ["Поиск максимума и минимума", "O(log(2n))", "../../assets/images/trees-ic/min-max-search-ic.svg"],
    ["Предшествующий и последущий элементы", "O(2n)","../../assets/images/trees-ic/next-prev-ic.svg"],
    ["Вставка и удаление", "O(n^2)", "../../assets/images/trees-ic/insert-delete-ic.svg"],
    "Деревья",
    "Информация а структуре данных: 'Дерево'");
  constructor() { }

  ngOnInit(): void {
  }

}
