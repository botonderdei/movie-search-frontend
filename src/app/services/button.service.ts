import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private buttonPressedSource = new Subject<boolean>();
  buttonPressed$ = this.buttonPressedSource.asObservable();

  buttonPressed(pressed: boolean) {
    this.buttonPressedSource.next(pressed);
  }
}
