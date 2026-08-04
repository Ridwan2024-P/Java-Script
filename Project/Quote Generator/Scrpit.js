const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quotes From API
let apiQuotes = [];
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.quote;
}

async function getQuotes() {
    const apiUrl = "https://dummyjson.com/quotes";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        apiQuotes = data.quotes;
        newQuote();
    } catch (error) {
        console.error(error);
    }
}
getQuotes();