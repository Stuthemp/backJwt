import {Component, Input, OnInit} from '@angular/core';
import {AlgType} from "../../app.component";

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {

  @Input()
  hashType: AlgType = new AlgType(["Таблицы с прямой адресацией", "O(n^2)","../../assets/images/hash-ic/direct-adress-ic.svg"],
    ["Хеш-таблицы", "O(n^2)", "../../assets/images/hash-ic/hash-table-ic.svg"],
    ["Хеш-функции", "O(n^2)","../../assets/images/hash-ic/hash-func-ic.svg"],
    ["Методы разрешения коллизий", "O(n*log(n))", "../../assets/images/hash-ic/collision-handle-ic.svg"],
    "Хэширование",
    "Основы хэширования");
  constructor() { }

  ngOnInit(): void {
  }

}
