import {Component, Input, OnInit} from '@angular/core';
import {AlgType} from "../../app.component";

@Component({
  selector: 'app-beginer',
  templateUrl: './beginer.component.html',
  styleUrls: ['./beginer.component.css']
})
export class BeginerComponent implements OnInit {

  @Input()
  beginerType: AlgType = new AlgType(["Протейшие операции", "","../../assets/images/beginer-ic/easiest-ic.svg"],
    ["Анализ средний и худших показателей", "", "../../assets/images/beginer-ic/avg-worst.svg"],
    ["Ассимпотитческая нотация", "","../../assets/images/beginer-ic/asymptote-ic.svg"],
    ["ГОСТ  19.701-90", "", "../../assets/images/beginer-ic/gost-ic.svg"],
    "Основы",
    "Базовые знания, необходимые для изучения алгоритмов");
  constructor() { }

  ngOnInit(): void {
  }

}
