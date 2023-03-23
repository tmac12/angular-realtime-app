import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Feed } from '../models';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent {
  feeds$ = new Observable<Feed[]>();
}
