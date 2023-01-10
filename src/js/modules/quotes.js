
const enterQuotes = document.querySelector('.change-quote');
const quotation = document.querySelector('.quote');
const author = document.querySelector('.author');



async function getQuotes(lang) {  
  if (lang === 'EN') {
    //let quotes = './assets/quotes/en-quotes.json'; 
    const res = await fetch('./assets/en-quotes.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    try {
      const data = await res.json(); 
      let random = data[Math.floor(Math.random() * data.length)];
      quotation.innerText = `“${random.text}.”`;
      author.innerText = random.author;
      console.log('response data?', data);
    } catch(error) {
      console.log('Error happened here!')
      console.error(error)
    };

  } else {
    //let quotes = './assets/quotes/Ru-quotes.json';
    const res = await fetch('./assets/Ru-quotes.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    try {
    const data = await res.json(); 
    let random = data[Math.floor(Math.random() * data.length)];
    quotation.innerText = `“${random.text}.”`;
    author.innerText = random.author;
    console.log('response data?', data);
  } catch(error) {
    console.log('Error happened here!')
    console.error(error)
  };
  };
}

export {enterQuotes, getQuotes}