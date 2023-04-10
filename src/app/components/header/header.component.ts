import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isTransparent = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const top =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (top === 0) {
      this.isTransparent = true;
    } else {
      this.isTransparent = false;
    }
  }
}
