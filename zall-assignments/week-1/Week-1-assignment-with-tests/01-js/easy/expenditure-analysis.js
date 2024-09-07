/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  // console.log(transactions[0].category);

  const outputArr = [];



  return [];
}


transactions = [
  {
    "itemName": "Laptop",
    "category": "Electronics",
    "price": 999.99,
    "timestamp": "2024-09-02T10:30:00Z",
  },
  {
    "itemName": "Coffee Maker",
    "category": "Home Appliances",
    "price": 49.99,
    "timestamp": "2024-09-02T08:15:00Z",
  },
  {
    "itemName": "Juce Maker",
    "category": "Home Appliances",
    "price": 71.99,
    "timestamp": "2024-09-02T08:15:00Z",
  },
  {
    "itemName": "Running Shoes",
    "category": "Footwear",
    "price": 89.99,
    "timestamp": "2024-09-01T14:45:00Z",
  },
  {
    "itemName": "Bluetooth Headphones",
    "category": "Electronics",
    "price": 129.99,
    "timestamp": "2024-09-01T18:30:00Z",
  },
  {
    "itemName": "Book: 'The Great Gatsby'",
    "category": "Books",
    "price": 14.99,
    "timestamp": "2024-09-02T12:00:00Z",
  }
]

calculateTotalSpentByCategory(transactions);

transactions = [
  {
    "itemName": "Laptop",
    "category": "Electronics",
    "price": 999.99,
    "timestamp": "2024-09-02T10:30:00Z",
  },
  {
    "itemName": "Coffee Maker",
    "category": "Home Appliances",
    "price": 49.99,
    "timestamp": "2024-09-02T08:15:00Z",
  },
  {
    "itemName": "Juce Maker",
    "category": "Home Appliances",
    "price": 71.99,
    "timestamp": "2024-09-02T08:15:00Z",
  },

  {
    "itemName": "Running Shoes",
    "category": "Footwear",
    "price": 89.99,
    "timestamp": "2024-09-01T14:45:00Z",
  },
  {
    "itemName": "Bluetooth Headphones",
    "category": "Electronics",
    "price": 129.99,
    "timestamp": "2024-09-01T18:30:00Z",
  },
  {
    "itemName": "Book: 'The Great Gatsby'",
    "category": "Books",
    "price": 14.99,
    "timestamp": "2024-09-02T12:00:00Z",
  }
]


/*
function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;
*/