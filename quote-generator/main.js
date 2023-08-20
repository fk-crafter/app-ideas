const nextBtn = document.getElementById('nextQuote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

const quotes = [
    {
        quote: '',
        author: ''

    },
    {
        quote: '',
        author: ''
    },
    {
        quote: '',
        author: ''
    },
    {
        quote: '',
        author: ''
    },
    {
        quote: '',
        author: ''
    },
    {
        quote: '',
        author: ''
    },
    {
        quote: '',
        author: ''
    }
];

let quoteLength = quotes.length;
quote.innerHTML = quotes[0].quote;
author.innerHTML = quotes[0].author;

nextBtn.addEventListener('click', function () {
    let randomQuote = Math.round(Math.random() * quoteLength);
    if (randomQuote == 7) {
        randomQuote = 1;
    }
    
    let todayQuote = quotes[randomQuote].quote;
    let quoteAuthor = quotes[randomQuote].author;

    let quoteHTML = todayQuote;
    quote.innerHTML = quoteHTML;
    author.innerHTML = quoteAuthor;
});
