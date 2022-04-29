$(document).ready(() => {
  // console.log("JS loading")

  const quoteBank = () => {
    $.ajax({
      headers: {
        Accept: "application/json",
      },
      url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",

      success: (quotes) => {
        if (typeof quotes === "string") {
          quotesData = JSON.parse(quotes);
        }
        renderQuotes(quotesData.quotes);
      },
      error: (err) => {
        console.log(`there was an error: ${err}`);
      },
    });
  };
  quoteBank();
  let author = "";
  let quoteTitle = "";
  const renderQuotes = (quotes) => {
    let rendomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuoteData = quotes[rendomIndex];

    author = randomQuoteData.author;
    quoteTitle = randomQuoteData.quote;
  };


  const generateRandomQuote = () => {
    $("#new-quote").on("click", function () {
      let tweetQuate = quoteTitle.replace(/ /g, "%20");
      let tweetAuthor = author.replace(/ /g, "%20");
      let tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= ${tweetQuate} + - + ${tweetAuthor} +  `;
      console.log(tweetLink);
      document.getElementById("tweet-quote").href = tweetLink;
      document.getElementById("text").innerText = quoteTitle;
      document.getElementById("author").innerText = author;
    });
  };
  
  generateRandomQuote();
});
