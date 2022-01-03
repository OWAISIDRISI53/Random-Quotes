let btn = document.getElementById('btn');
let quote;
let author;

const getQuotes = async () => {
  let r1 = Math.floor(Math.random() * 1644);
  quote = document.getElementById('quotes');
  author = document.getElementById('author');
  let api = "https://type.fit/api/quotes";

  quote.innerHTML = 'Loading ....';
  author.innerHTML = 'loading.....'
  btn.disabled;
  try {
    let data = await fetch(api)
    let rData = await data.json();
    let txt = rData[r1].text;
    let auth = rData[r1].author;
    author.innerHTML = `${auth}`;

    if (author.innerHTML == 'null') {
      quote.innerHTML = `" ${txt}"`;
      author.innerHTML = 'Unknown';

    } else {
      quote.innerHTML = `" ${txt}"`;
      author.innerHTML = `${auth}`;
    }


    console.log(rData[r1].text);
    console.log(rData[r1].author);

  }
  catch (e) {}
}

btn.addEventListener('click', getQuotes);
