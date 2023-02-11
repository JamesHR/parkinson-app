import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-drawing-canvas',
  templateUrl: './drawing-canvas.component.html',
  styleUrls: ['./drawing-canvas.component.scss'],
})
export class DrawingCanvasComponent implements OnInit, AfterViewInit {

  @Input() label: string;
  @Input() signature: string;
  @Input() height = 200;
  @Input() width = 200;
  @Input() counter = 1;
  @Output() signatureEmitted: EventEmitter<string>;
  @Output() refCanvas: EventEmitter<SignaturePad>;
  @Output() refCounter: EventEmitter<number>;
  @ViewChild('signaturePad') signaturePad: SignaturePad;
  signaturePadOptions: object;

  constructor(
    private router: Router
  ) {
    this.signatureEmitted = new EventEmitter<string>();
    this.refCounter = new EventEmitter<number>();
  }


  ngOnInit() { this.setSignatureOptions(); }

  ngAfterViewInit() {
    console.log('REF', this.signaturePad);
    this.signaturePad.clear();
  }

  drawComplete = () => this.signature = this.signaturePad.toDataURL('image/jpeg');


  onClickClean = () => this.signaturePad.clear();
  onClickSuccess = () => this.signatureEmitted.emit(this.signature);

  onIncrement() {
    this.signaturePad.clear();
    this.refCounter.emit(this.counter+1);
  }

  onSubmit(){
    this.signaturePad.clear();
    this.router.navigate(['/test-ticket']);
  }


  private setSignatureOptions() {
    this.signaturePadOptions = {
      backgroundColor: 'rgb(255,255, 255, 0)',
      penColor: 'rgb(0, 0, 255)',
      canvasWidth: this.width,
      canvasHeight: this.height,
    };
  }

}
