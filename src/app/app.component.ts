import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-text-skeleton';

  snippets = {
    default: '<app-skeleton></app-skeleton>',
    width100: '<app-skeleton [width]="\'100%\'"></app-skeleton>',
    customHeight: '<app-skeleton [height]="\'100px\'"></app-skeleton>',
    customWidth: '<app-skeleton [height]="\'500px\'"></app-skeleton>'
  };
}
