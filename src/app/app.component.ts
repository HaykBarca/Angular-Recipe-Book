import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC3VxAwOXhbubpl4cnoie_e31c-_D7do6w",
      authDomain: "ng-recipe-book-f7f11.firebaseapp.com"
    })
  }
}
