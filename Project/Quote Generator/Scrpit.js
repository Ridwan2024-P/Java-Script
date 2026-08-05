const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quotes From API
let apiQuotes = [];
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // authorText.textContent = quote.author;
    //check if Author field is blank and replace it with
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = quote.author;
    //check if Author field is blank and replac
    }
    if(quote.quote.length > 50){
        quoteText.classList.add('long-quote');
    }
    else{
        quote.text.classList.remove('long-quote')
    }
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
// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes();