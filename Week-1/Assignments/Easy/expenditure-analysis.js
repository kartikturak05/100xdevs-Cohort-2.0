/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  counter = 0;
  let result = []
  for(i=0;i<transactions.length;i++){
    for(let j=0;j<result.length;j++){
      if(result[i][category] == transactions[i][category]){
        result[i][price] = result[i][price]+transactions[i][price];
        continue;
      }
    }
        let obj = {
          category : transactions[i][category],
           totalSpent : transactions[i][price],
          }
          result.push(obj);
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
