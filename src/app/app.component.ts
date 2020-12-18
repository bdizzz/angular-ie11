import { Component, OnInit } from '@angular/core';
import cssVars from 'css-vars-ponyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {

    cssVars({
      onlyLegacy: true,
      variables: {
        '--the-test': 'red'
      },
      watch: true
    });

  }

  public blue(): void {
    document.documentElement.style.setProperty('--the-test', 'blue');
  }
}
