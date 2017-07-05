import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ChangeTab(idToAdd, idToRemove) {
    document.getElementById(idToAdd).classList.add('active');
    document.getElementById(idToRemove).classList.remove('active');
  }
}
