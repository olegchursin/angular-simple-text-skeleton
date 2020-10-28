import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;

  @HostBinding('style.--skeleton-width')
  skeletonWidth: string = '150px';

  @HostBinding('style.--skeleton-height')
  skeletonHeight: string = '16px';

  ngOnInit(): void {
    if (this.width) {
      this.skeletonWidth = this.width;
    }
    if (this.height) {
      this.skeletonHeight = this.height;
    }
  }
}
