import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-test-process',
  templateUrl: './test-process.page.html',
  styleUrls: ['./test-process.page.scss'],
})
export class TestProcessPage implements OnInit {

  @ViewChild('signaturePad') signaturePad: SignaturePad;
  @ViewChild('workspace') workspace: HTMLElement;
  counter = 1;
  img = '';

  testImg = [
    'http://drive.google.com/uc?export=view&id=1sT2wt3KA4MPatlfezc00ZzMeZBo1SB1T',
    'http://drive.google.com/uc?export=view&id=1-6WK3hXTCRCd6MuxYxG5T8jOZBbqh2e2',
    'http://drive.google.com/uc?export=view&id=1JXNI6C67oOMU01c34HiTt8VBnAjet9DG',
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter = () => this.counter = 1;
  onIncrement = () => this.counter++;
  onSubmit = () => this.router.navigate(['/test-ticket']);
  onClickClean = () => this.signaturePad.clear();
  onCounterEmmit = (value: number) => this.counter = value;

}
