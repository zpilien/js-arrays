
/*
Arrays are a list of items and can hold many values.
Values can be accessed by their index number, which starts at zero (zero based index)
Arrays have build-in methods and properties, which you'll have some practice with through this assignment.

Please console.log each question to check your work.
*/

/* sort() sorts elements of an array
1. Ronald McDonald wants to have all of his employees listed in alphabetical order. Please help this clown. 
*/
const characters = ['Grimmace', 'Birdie', 'Mayor McCheese', 'Hamburglar', 'Officer Big Mac', 'The Professor', 'McNuggest Buddies'];
characters.sort();
console.log(characters)

/*unshift() adds one or more elements to the beginning of an array
2. Big time Hollywood star Jason Bateman wants to be the first in line to get the new iPhone. Make this man's dreams come true.
*/
const iphoneQueue = ['Will Arnett', 'Sean Hayes', 'Justine Bateman', 'Amanda Anka'];
iphoneQueue.unshift('Jason Bateman');
console.log(iphoneQueue)

/*shift() removes the first element from an array
3. Update the play list by removing the first song title. Now, that's what I call music.
*/
const playList = ['All I Want for Christmas', 'Macarena', 'Mambo No. 5', 'All The Stars', 'Sunflower'];
playList.shift();
console.log(playList)

/*splice() removes or replaces existing elements and/or adds new elements
4. The White House called and wants you to update the President's list below. Remove the names that don't belong and replace with the correct Presidents. 
The list below is in chronological order. The country is counting on you.
*/
const presidentsClub = ['John Quincy Adams', 'Andrew Jackson', 'Mario Van Peebles', 'Christopher Wallace', 'John Tyler'];
presidentsClub.splice(2, 2, 'Martin Van Buren', 'William Henry Harrison');
console.log(presidentsClub);

/*push() adds one or more elements at the end of an array
5. The Heisman Trophy is awarded to the nation's most outstanding collegiate football player. Keep the tradition going and add the 2021 recipient to the list below. 
*/
const heisman = ['Mariota', 'Henry', 'Jackson', 'Mayfield', 'Murray', 'Burrow', 'Smith'];
heisman.push('Young');
console.log(heisman);

/*pop() removes the last element from an array
6. Kellogg's Pop-Tarts have been fueling our nation's youth for years. While most of the flavors have been fan favorites, some unfortunately didn't make the cut.
Remove the last failed flavor from the list.
*/
const flavors = ['blueberry', 'chocolate fudge', 'strawberry', 'fruit loops', 'red velvet', 'eggo frosted maple', 'red radish'];
flavors.pop()
console.log(flavors);

/*slice() returns a section in the array as a new array
7. A wealthy investor wants to diversify her portfolio with cryptocurrency. She has given you $1MM to invest in three of cryptocurrencies in the list below.
Choose any three and assign them to a new variable.
*/
const crypto = ['BTC', 'ETH', 'ADA', 'SOL', 'DOT', 'DOGE', 'SHIB', 'CRO', 'NEAR', 'UNI'];
const invest = crypto.slice(0, 3);
console.log(invest);

/*concat() merges two or more arrays
8. Coach Popovich needs your help in fielding a basketball team for the next summer Olympics. 
Combine players from the west and east into one list named the 'dream team'.
*/
const west = ['Lebron', 'Curry', 'Kawhi', 'George', 'Morant'];
const east = ['KD', 'Tatum', 'Young', 'Herro', 'DeRozan'];

const dreamTeam = west.concat(east);
console.log(dreamTeam);

/*join() joins all the elements of an array into a string
9. Convert Dollar Shave's Club slogan into a string.
*/
const dollarShaveClub = ['shave', 'time', 'shave', 'money'];
let slogan = dollarShaveClub.join(' ');
console.log(slogan);

/*toString() converts elements in an array into a string, separately by commas
10. Convert Yoda's inspiring quote into a string, with commas after each word. 
*/
const mindTricks = ['the', 'greatest', 'teacher', 'failure', 'is'];
let lesson = mindTricks.toString();
console.log(lesson);
