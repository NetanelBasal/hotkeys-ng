import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Hotkeys } from './hotkeys.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  constructor(private hotkeys: Hotkeys) {
    hotkeys.addShortcut({ keys: 'meta.z', description: 'Add Widget' }).pipe(take(2)).subscribe(console.log);

    hotkeys.addShortcut({ keys: 'meta.j', description: 'Open Settings' }).subscribe(console.log);
  }

  log($event) {
    console.log($event)
  }
}
