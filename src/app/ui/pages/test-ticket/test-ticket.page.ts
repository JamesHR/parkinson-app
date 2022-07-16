import { Component, OnInit } from '@angular/core';
import { getRandomID } from '../../../utilities/random-id';

@Component({
  selector: 'app-test-ticket',
  templateUrl: './test-ticket.page.html',
  styleUrls: ['./test-ticket.page.scss'],
})
export class TestTicketPage implements OnInit {

  public folio = getRandomID();

  constructor() { }

  ngOnInit() {
  }

}
