// Variables
// 1. Create a Categories Array
const categories = ['All', 'T-Shirts', 'Hoodies', 'Notebooks'];

//Displays the list of categories as HTML list items on the page.

//2. Display Categories Dynamically
// Create a function to display the categories | function
function displayCategories(){
    // Retrieve the HTML element where the categories will be displayed | getElementById
    const $categories = document.getElementById('categories');
    // Create an empty list (array) to store the category elements | const, array
    const htmlTemplate = [];
    // Loop through each item in the categories array | forEach
    // Create an HTML list item for each category | template literal, push
    categories.forEach( category => {htmlTemplate.push(`
        <li class="nav-item">
              <a href="#" class="nav-link btn
              btn-light btn-sm rounded-0 mx-1">
              ${category}</a>
              </li>`
        )});
    // Combine the list of category elements into a single string | join
    $categories.innerHTML = htmlTemplate.join('');
    // Insert the HTML into the categories element | innerHTML
};


//3. Refactor with map()
function displayCategories() {
    // Retrieve the HTML element where the categories will be displayed
    const $categories = document.getElementById('categories');
    
    // Map over each category to create HTML list items
    const htmlTemplate = categories.map(category => `<li
        class="nav-item">
        <a href="#" class="nav-link btn
        btn-light btn-sm rounded-0 mx-1">
        ${category}</a>
        </li>`).join('');
    
    // Insert the combined HTML into the category container element
    $categories.innerHTML = htmlTemplate;
}

/** 
 * Adds a product to the cart and updates the cart display.
 * @param {string} product - The name of the product to be added.
*/

// 4. Add Products to the Cart
// Initialize an empty cart array | let
let cart = [];
// Create a function to add a product to the cart. Receive the product as a parameter | function
function addToCart(product){
    // Add the product to the cart array | push
    cart.push(product);
    // Display the product
        // Create an array by mapping over each item in the cart | map
            // Create an HTML list item for each product | template literal
            cart.map(item => `<li>${item}</li>`);
        // Combine the mapped list of HTML items into a single string | join
        
// 5. Refactor with map()
    // Insert the combined HTML into the element with the ID 'cart' | getElementById, innerHTML
    document.getElementById('cart').innerHTML = cart.map(item => `<li>${item}</li>`).join('');
}

// 6. Refactor Using JavaScript Methods to Create HTML Elements
// Display the product
function displayCart(){
    // Retrieve the cart element from the DOM | getElementById
    const $cart = document.getElementById('cart');
    // Clear the existing cart items | innerHTML = ''
    $cart.innerHTML = '';
    // Loop through each item in the cart array | forEach
    cart.forEach(product => {
        // Create a new list item element | createElement('li')
        const liElement = document.createElement('li');
        // Set the text content of the <li> with the item | textContent
        liElement.textContent= product;

        const liAnchor = document.createElement('a');
        liAnchor.className = 'blue';

        // Append the text node to the list item | appendChild
        $cart.appendChild(liElement);
        // Append the list item to the cart element | appendChild
        
    })}
/**
 * Updates the cart display on the webpage by generating a list of
 * the products currently in the cart.
 */
// 7. Create the function to display the cart


/**
 * Removes a product from the cart by filtering out the selected product,
 * and updates the cart display.
 * @param {string} product - The name of the product to be removed.
 */
// 8. Remove a Product from the Cart
function removeFromCart(index){
    cart.splice(index, 1 )
    
}

// 9. Refactor Using filter()