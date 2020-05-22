export default class Quote {
  constructor(data) {
    console.log("Quote Model Online");
    this.author = data.author;
    this.text = data.body;
    this.url = data.url;
  }
}
