// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */

const setTitle = (string) => {
  const userEl = document.querySelector("h1");

  userEl.innerText = string;
};

/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */
const appendToTitle = (string) => {
  const userAppendedEl = document.querySelector("h1");

  userAppendedEl.append = string;
};

/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */

const prependToTitle = (string) => {
  const userPrependedEl = document.querySelector("h1");

  userPrependedEl.prepend = string;
};

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to replace the element inside the div, and the
 * text is displayed inside that element. The element should be the tag name
 * passed into the function
 */

const setInnerHTMLForDiv = (tagName, text) => {
  const replacedDiv = document.querySelector("div");

  replacedDiv.innerHTML = `<${tagName}>${text}</${tagName}>`;
};

/**
 * Exercise 5
 * create a function {pushPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */

const pushPtoDivWithText = (string) => {
    const pToDiv = document.querySelector("div");
    const ptag = document.createElement("p");
    ptag.innerHTML = string;
    pToDiv.appendChild(ptag);
}

/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */

/**1. function created
 * 2. url and img description as arguments
 * 3. select existing img
 * 4. set the src and alt attributes
 */

const setSrcToImage = (url, imageDescription) => {

    const changedImgAttributes = document.querySelector("img");
    changedImgAttributes.src = url;
    changedImgAttributes.alt = imageDescription;

}


/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */


/** 1. create function
 * 2. two parameters, Url and some text
 * 3. find the a(link) tag in the page
 * 4. set the href to the url
 * 5. display the text
 * 6. add attribute to open new page in new tab
 * 
 */

const setCodersInHoodsLink = (linkUrl,linkText) => {
    const changedLinkAttributes = document.querySelector("a");
    changedLinkAttributes.href = linkUrl;
    changedLinkAttributes.innerText = linkText;
    changedLinkAttributes.target = "_blank"; 
}



/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */


/**1. create function
 * 2. find and select the button with class of reset
 * 3. disable 
 * 4.
 */

const disableResetBtn = () => {
    const changeButton = document.querySelector(".reset");
    changeButton.disabled = true;
}



/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */

/**1. create function called disableBtns
 * 2.takes a class name as an argument
 * 3.select all buttons with the passed argument
 * 4. disbale these buttons
 */

const disableBtns = (buttons) => {
    const disableAllButtons = document.querySelector(button.buttons);
        disableAllButtons.disabled = true; 
}

/**disableAllButtons.forEach(element => (element.disabled = true)); */




/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */
