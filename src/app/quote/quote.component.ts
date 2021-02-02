// import { Quote } from '@angular/compiler';
// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  Quotes: Quote[] = [
    new Quote(0, "Tough Moments", "Don't worry about the things or people that you have lost in your life, things and people who are meant to be with you are with you", "Clifford Morara", 0, 0, new Date(2019,3,4)),
    new Quote(1, "Tough Moments", "When you are broken, its very hard to feel special", "Martin Garrix", 0, 0, new Date(2018,6,7)),
    new Quote(2, "Encouragement", "I would rather die on my feet than live on my knees", "Nelson Mandela", 0, 0, new Date(2020,7,7)),
    new Quote(3, "Heed", "The world is a place that has a great risks and fairly great opportunities", "George Bush", 0, 0, new Date(2017,4,23)) 
  ]
  upvotes = 0;
  downVotes = 0;

  upVote(quote:any) {
    quote.upVotes = quote.upVotes + 1;

  }
  downVote(quote:any) {
    quote.downVotes = quote.downVotes + 1;

  }
  deleteQuote(isComplete: any, index:any) {
    if (isComplete) {
      let toDelete = confirm(`Confirm deletion of quote by ${this.Quotes[index].author}!!`)

      if (toDelete) {
        this.Quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
