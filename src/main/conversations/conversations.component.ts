import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../sidenav/header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  imports: [HeaderComponent, BodyComponent, FooterComponent],
})
export class ConversationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
