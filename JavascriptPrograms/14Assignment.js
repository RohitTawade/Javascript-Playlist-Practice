// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Delayed string reversal function
  function reverseStringWithDelay(input) {
    setTimeout(function() {
      var reversedString = reverseString(input);
      console.log(reversedString);
    }, 2000);
  }
  
  // Example usage
  var input = "Hello, world!";
  reverseStringWithDelay(input);




  //  Q. 2. Genrating Random Number 

  // Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Delayed random number generation function with progress indication
  function generateRandomNumberWithDelay(delay) {
    let remainingTime = delay;
    let intervalId = setInterval(function() {
      console.log("Time remaining: " + remainingTime + " seconds");
      remainingTime--;
  
      if (remainingTime === 0) {
        clearInterval(intervalId);
        const randomNum = generateRandomNumber(1, 100);
        console.log("Random number generated: " + randomNum);
      }
    }, 1000);
  }
  
  // Example usage
  const delay = 3; // Delay in seconds
  generateRandomNumberWithDelay(delay);


  // Q. 3 

  // Store's inventory object with item prices in USD
const inventory = {
    item1: 10,
    item2: 20,
    item3: 30,
  };
  
  // Convert prices from USD to INR using exchange rate of 1 USD to 80 INR
  const exchangeRate = 80;
  const convertedInventory = {};
  
  Object.keys(inventory).map(function(item) {
    const priceInRupees = inventory[item] * exchangeRate;
    convertedInventory[item] = priceInRupees;
  });
  
  // Display the converted inventory object
  console.log(convertedInventory);

  
  // Q. 4
  // List of books with authors and publication years
const books = [
    {
      title: "Book 1",
      author: "author 1",
      year: 2008
    },
    {
      title: "Book 2",
      author: "author 2",
      year: 2012
    },
    {
      title: "Book 3",
      author: "author 3",
      year: 2015
    },
    {
      title: "Book 4",
      author: "author 4",
      year: 2005
    }
  ];
  
  // Filter and capitalize book authors
  const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => {
      return {
        title: book.title,
        author: book.author.toUpperCase()
      };
    });
  
  // Display the filtered and capitalized books
  console.log(filteredBooks);

  
  // Q 5.
   // Function to validate URLs using regex
function validateURL(url) {
    const regex = /^(http:\/\/|https:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+(\.[A-Za-z]+)+$/;
    return regex.test(url);
  }
  
  // Example usage
  const inputURL = "https://www.example.com";
  const isValidURL = validateURL(inputURL);
  
  if (isValidURL) {
    console.log("The URL is valid.");
  } else {
    console.log("The URL is invalid.");
  }

  
  // Q 6. 

  // Function to validate LinkedIn profile URLs using regex
function validateLinkedInURL(url) {
    const regex = /^https:\/\/www.linkedin.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;
    return regex.test(url);
  }
  
  // Example usage
  const inputURLs = [
    "https://www.linkedin.com/in/johndoe",
    "https://www.linkedin.com/in/jane_doe123",
    "https://www.linkedin.com/in/mary-smith-123",
    "https://www.linkedin.com/in/abc#123",
    "https://www.linkedin.com/profile/johndoe",
    "https://www.linkedin.com/in/johndoe12345678901234567890"
  ];
  
  inputURLs.forEach(function(url) {
    if (validateLinkedInURL(url)) {
      console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
      console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
  });
  