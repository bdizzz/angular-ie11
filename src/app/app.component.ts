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
      onlyLegacy: false,
      variables: {
        '--the-test': 'red'
      },
      watch: true,
      onComplete: (a, b, variables) => {}
    });

  }
}
