import { Component } from '@angular/core';
import { TransitionHookScope } from '@uirouter/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = TransitionHookScope.STATE;
}
