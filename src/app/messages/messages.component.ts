import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // A messageServicepropriedade deve ser pública porque você vai vinculá-la ao modelo.
  // Angular só se liga a propriedades de componentes públicos .
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
