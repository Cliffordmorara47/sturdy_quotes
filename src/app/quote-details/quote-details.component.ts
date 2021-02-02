// import { Quote } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  // @Input()
  // Quote?: Quote;
  // @Output()
  // isExpired = new EventEmitter<boolean>();

  // QuoteDelete(complete: boolean) {
  //   this.isExpired.emit(complete);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
