// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence.
// };

// // Start Here: Create a reference to the ".menu" class
// const toggleMenuItems = document.querySelectorAll('.menu ul');

// // create a reference to the ".menu-button" class
// const menuButton = document.querySelectorAll('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu

// -------------------------------------------------------
// MY NOTES
// select the thing were it starts repeating
// create a const variable that references what I want to select out of the html
// set the const variable to hold the value of document.querySelectorAll('');
// remember that querySelectorAll gives me back a node list, and thats super useful because I can use the .forEach() method on it to iterate thru (sift thru/pick out/identify/find/separate/go thru) all the items in the node list
// so go ahead and do:
// const variable.forEach(const variable => console.log(thing));
// In this case use:
// toggleMenu.forEach(menu => console.log(menu));
// next console.log the new const variable to see what it returns
// -------------------------------------------------------

// -------------------------------------------------------
// // creating a class and chaining methods way
// class Menu {
//   constructor(menu) {
//     console.log(menu);
//   }
// }
// // ----------------------------------
// const toggleMenuItems = document
//   .querySelectorAll('.menu ul')
//   .forEach(menu => new Menu(menu));
// --------------------------------------------------------

// --------------------------------------------------------
// creating a class and keeping steps separated way
// class Menu {
//   constructor(menu) {
//     console.log(menu);
//   }
// }
// ----------------------------------
// const toggleMenuItems = document.querySelectorAll('.menu ul');
// toggleMenuItems.forEach(menu => new Menu(menu));
// ---------------------------------------------------

// ---------------------------------------------------
// creating a class and chaining methods way
class Menu {
  constructor(menu) {
    // console.log(menu);
    this.headerEl = menu.querySelector('header');
    this.menuButtonEl = menu.querySelector('.menu-button');
    this.unorderedListEl = menu.querySelector('ul');
    this.listItemsEl = menu.querySelectorAll('li');
    // console.log(this);
  }
  toggleMenuButton
}
// ----------------------------------
const toggleMenuItems = document
  .querySelectorAll('.menu ul')
  .forEach(menu => new Menu(menu));
// ------------------------------------------------

// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence.
// };

// // Start Here: Create a reference to the ".menu" class
// const toggleMenuItems = document.querySelectorAll('.menu ul');

// // create a reference to the ".menu-button" class
// const menuButton = document.querySelectorAll('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu
