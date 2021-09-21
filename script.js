// /* eslint-disable no-alert */
// /* eslint-disable no-undef */
// const newQuoteBtn = document.getElementById('newQuoteBtn');
// const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// // modify the inner text of quote
// const displayQuote = (quote) => {
//     const quoteText = document.getElementById('js-quote-text');
//     quoteText.textContent = quote;
// };

// // fetch quote from api and handle error!
// const getQuote = async () => {
//     try {
//         const response = await fetch(endpoint);
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         const json = await response.json();
//         displayQuote(json.message);
//     } catch (err) {
//         console.log(err);
//         alert('Failed to fetch new quote!');
//     }
// };

// // changing quote on click of newQuoteBtn
// newQuoteBtn.addEventListener('click', getQuote);
const newQuoteButton = document.querySelector('#js-new-quote');
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.message);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}
newQuoteButton.addEventListener('click', getQuote);
