import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, AsyncPipe, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users$: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.users$ = this.getUsers();
  }

  private getUsers() {
    return this.httpClient.get('https://randomuser.me/api?results=10');
  }
}
