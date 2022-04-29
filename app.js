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
    let randomcolor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                        $('body').css('background-color', randomcolor);
    
    quoteTitle = randomQuoteData.quote;
    author = randomQuoteData.author;
    // let textQuote = document.getElementById("text").innerText = quoteTitle;
    //  let authorQuote= document.getElementById("author").innerText = author;
      
     $("#text").html(quoteTitle).css("color", randomcolor);
     $("#author").html(randomQuoteData.author).css("color", randomcolor);
     $("#new-quote").css("background-color", randomcolor);
     $("#tweet-quote").css("color", randomcolor);
     $("#tumbler-quote").css("color", randomcolor);
     $("#quote-text").css("color", randomcolor);
     

  };



  // const generateRandomQuote = () => {
    $('#new-quote').click(function () {

      renderQuotes(quotesData.quotes);
  
      let tweetQuate = quoteTitle.replace(/ /g, "%20");
      let tweetAuthor = author.replace(/ /g, "%20");
      let tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= ${tweetQuate} + - + ${tweetAuthor} +  `;
      console.log(tweetLink);
     
      document.getElementById("tweet-quote").href = tweetLink;
    });
  
});
