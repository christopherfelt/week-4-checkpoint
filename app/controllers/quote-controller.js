import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function _drawQuotes() {
  let quote = store.State.quote;
  document.getElementById("quote-text").innerText = quote.text;
  document.getElementById("quote-author").innerText = quote.author;
}

export default class QuoteController {
  getQuote() {
    store.subscribe("quote", _drawQuotes);
    QuoteService.getQuote();
  }

  constructor() {
    this.getQuote();
  }
}
