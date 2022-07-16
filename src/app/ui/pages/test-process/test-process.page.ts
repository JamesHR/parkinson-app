import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-process',
  templateUrl: './test-process.page.html',
  styleUrls: ['./test-process.page.scss'],
})
export class TestProcessPage implements OnInit {

  counter = 1;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter = () => this.counter = 1;
  onIncrement = () => this.counter++;
  onSubmit = () => this.router.navigate(['/test-ticket']);

}
