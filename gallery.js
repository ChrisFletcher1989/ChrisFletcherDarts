
const googleSheetsJsonUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRv6HDyAaq89ZF_lQ-7SojetksN4j2Sl0cPRgSiYH6-Gw8PzlxyvaET-tfbs7Favo-hpUQYbf7kDbb1/pub?gid=0&single=true&output=csv';

// Fetch the JSON data from the Google Sheets document
fetch(googleSheetsJsonUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Process the JSON data here
    console.log(data);
    // You can now use the data in your website
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
