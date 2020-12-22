import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IBM';
  constructor(private http: HttpService) {
    this.http.getPublicKey().subscribe((res: any) => {
      environment.publicKey = res.PUBLIC_KEY;
    });
  }
}
