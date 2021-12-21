import { Component, OnInit } from '@angular/core';
import {AppUser} from "./AppUser";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {TokenStorageService} from "./services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {

  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }



  title = 'likeDislike';
  sortAlgs: AlgType = new AlgType(["Пузырькоовая сортировка", "O(n^2)","../../assets/images/buble-sort-ic.png"],
    ["Сортировка вставками", "O(n^2)", "../../assets/images/insertion-sort-ic.png"],
    ["Сортировка выбором", "O(n^2)","../../assets/images/selection-sort-ic.png"],
    ["Сортировка слиянием", "O(n*log(n))", "../../assets/images/merge-sort-ic.png"],
    "Алгоритмы cортировки",
    "Основные алгоритмы сортировки, которые должен знать каждый");
}

export class AlgType {

  constructor(firstAlg: string[], secondAlg: string[], thirdAlg: string[] , forthAlg: string[],
              sectionName: string, sectionDescription: string) {
    this.firstAlg = firstAlg;
    this.secondAlg = secondAlg;
    this.thirdAlg = thirdAlg;
    this.fourthAlg = forthAlg;
    this.sectionName = sectionName;
    this.sectionDescription = sectionDescription;

  }

  firstAlg: string[] = [];
  secondAlg: string[] = [];
  thirdAlg: string[] = [];
  fourthAlg: string[] = [];

  sectionName: string = "";
  sectionDescription: string = "";
}

export class AlgDescription {
  algName: string = "";
  algType: string = "";
  imageUrl: string = "";
  description: string = "";

  constructor(algName: string, algType: string, imageUrl: string, description: string) {
    this.algName = algName;
    this.algType = algType;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
