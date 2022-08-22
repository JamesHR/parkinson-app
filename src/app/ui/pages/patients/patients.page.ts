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

  showPatient = (data: string[]) => {
    this.router.navigate(['/patients-test-history'], {
      replaceUrl: true,
      queryParams: {patient: data[0], gender: data[2]}
    });
  };

}
