
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
6. Kellogg's Pop-Tarts have been fueling our nations youth for years. While most of the flavors have been fan favorites, some unfortunately didn't make the cut.
Remove the last failed flavor from the list.
*/
const flavors = ['blueberry', 'chocolate fudge', 'strawberry', 'fruit loops', 'red velvet', 'eggo frosted maple', 'red radish'];
flavors.pop()
console.log(flavors);



/*=============================================================*/

/*Accessor Methods do not modify the array and returns some representation of the array.*/

/*The array.concat() returns a new array comprised of this array joined with other array(s) and/or values(s).*/

/*7. Increase the peace! Your job is quash the bitter rivalry and unite both the westSide and eastSide rappers into a new array called `oneLove`. Console.log this new array.*/

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];

var oneLove = westSide.concat(eastSide);
console.log(oneLove);

/*The array.join() joins all the elements of an array into a string.*/

/*8. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.*/

var shoe = ["just", "do", "it"];

var shoeString = shoe.join();
console.log(shoeString);

/*The array.slice() extracts a section of an array and returns a new array.
array.slice(index start, index end)*/

/*9. Some drama between you and the Kardashian's went down during last Saturday's potluck party. You are no longer on speaking terms and need to unfriend the following from your facebook:
"Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful people and assign them to a new variable named `unFriend`. Console.log this new variable.*/

var fbFriends = ["Khalid", "Yeezy", "Kimmy K", "Lamar Odom", "Lebron", "Warren Buffet"];

var unFriend = fbFriends.slice(1, 4);
console.log(unFriend);



