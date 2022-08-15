import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-test-history',
  templateUrl: './patients-test-history.page.html',
  styleUrls: ['./patients-test-history.page.scss'],
})
export class PatientsTestHistoryPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showTest = () => this.router.navigate(['/patients-test-result'], {replaceUrl: true});

}
