import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showPatient = () => this.router.navigate(['/patients-test-history'], {replaceUrl: true});

}
