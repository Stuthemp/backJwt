import {Component, Input, OnInit} from '@angular/core';
import {AlgType} from "../../app.component";
import { BasicsComponent } from '../../basics/basics.component';
import { NavMenuComponent } from '../../nav-menu/nav-menu.component';

@Component({
  selector: 'app-search-algs',
  templateUrl: './search-algs.component.html',
  styleUrls: ['./search-algs.component.css']
})
export class SearchAlgsComponent implements OnInit {

  @Input()
  searchType: AlgType = new AlgType(["Линейный поиск", "O(n)","../../assets/images/search-algs-ic/linear-search-ic.svg"],
    ["Бинарный поиск", "O(log(2n))", "../../assets/images/search-algs-ic/binary-search-ic.svg"],
    ["Поиск в ширину", "O(2n)","../../assets/images/search-algs-ic/wide-search-ic.svg"],
    ["Поиск в глубину", "O(n^2)", "../../assets/images/search-algs-ic/height-search-ic.svg"],
    "Алгоритмы поиска",
    "Основные алгоритмы поиска, которые должен знать каждый");
  constructor() { }

  ngOnInit(): void {
  }

}
