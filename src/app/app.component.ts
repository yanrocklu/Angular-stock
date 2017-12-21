import * as firebase from "firebase";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      // apiKey: "AIzaSyAzujwNNGXQdWALsR98farye3RslDTkImU",
      // authDomain: "ngstock-rock.firebaseapp.com",
      apiKey: "AIzaSyAzujwNNGXQdWALsR98farye3RslDTkImU",
      authDomain: "ngstock-rock.firebaseapp.com"
    })
  }
}
