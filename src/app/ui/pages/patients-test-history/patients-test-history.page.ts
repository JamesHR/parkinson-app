import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patients-test-history',
  templateUrl: './patients-test-history.page.html',
  styleUrls: ['./patients-test-history.page.scss'],
})
export class PatientsTestHistoryPage implements OnInit {

  patient = '';
  gender = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params =>{
      this.patient = params.patient;
      this.gender = params.gender;
    });
  }

  showTest = () => this.router.navigate(['/patients-test-result'], {replaceUrl: true});

}
