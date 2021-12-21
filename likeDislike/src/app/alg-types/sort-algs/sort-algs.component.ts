import {Component, Input, OnInit} from '@angular/core';
import {AlgType} from "../../app.component";

@Component({
  selector: 'app-sort-algs',
  templateUrl: './sort-algs.component.html',
  styleUrls: ['./sort-algs.component.css']
})
export class SortAlgsComponent implements OnInit {

  @Input()
  sortType: AlgType = new AlgType(["Пузырькоовая сортировка", "O(n^2)","../../assets/images/sort-algs-ic/bubble-sort-ic.svg"],
    ["Сортировка вставками", "O(n^2)", "../../assets/images/sort-algs-ic/insertion-sort-ic.svg"],
    ["Сортировка выбором", "O(n^2)","../../assets/images/sort-algs-ic/selection-sort-ic.png"],
    ["Сортировка слиянием", "O(n*log(n))", "../../assets/images/sort-algs-ic/merge-sort-ic.png"],
    "Алгоритмы cортировки",
    "Основные алгоритмы сортировки, которые должен знать каждый");
  constructor() { }

  ngOnInit(): void {
  }

}
