axios = require('axios');
GOOGLE_API_KEY = 'AIzaSyCdIsJEHTZpGkb258u5ADXOehDejDu5hPE';
module.exports = findBook = async function (query) {
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&startIndex=0&maxResults=5&key=${GOOGLE_API_KEY}`
  );
  count = 1;
  bookResults = data.items.map((book) => {
    return {
      number: count++,
      title: book.volumeInfo.title,
      Authors: book.volumeInfo.authors,
      publisher: book.volumeInfo.publisher,
    };
  });
  return bookResults;
};
