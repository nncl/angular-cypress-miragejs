import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, JsonPipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user$: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.user$ = this.getUser();
  }

  private getUser() {
    return this.httpClient.get('https://randomuser.me/api/');
  }
}
