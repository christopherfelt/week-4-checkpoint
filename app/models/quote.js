export default class Quote {
  constructor(data) {
    this.author = data.author;
    this.text = data.body;
    this.url = data.url;
  }
}
