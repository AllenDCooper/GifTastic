// Create an array (var searchWords) of search words

// Create a function (printSearchWords) that takes an array as a assignment

    // When called, function loops through the array, creating a button for each value in the array

        // adds a class "search-button" to each button

        // stores the value as a data attribute in the button

        // appends the buttons to the #button-display div in the document

// Create a function (returnGifs) that takes a string as an assignment, and that uses Ajax get method to return ten gifs and their ratings for the search term, and then prints them to the page.

    // Creates a queryURL for Ajax method that includes the GIPHY API url + "q=" + stringparameter + "&api_key=" + APIkey + "&limit=10"

    // When called, function loops through the returned data array, creating an img element for each object

        // function stores the object.url as the src attribute for the image

        // function creates a label element for each object.rating

        // function appends both the img and label element to the #gif-display div in the document

// Create a click handler that calls the returnGifs function when an element with class "search-button" is clicked

// Create a function (addButton) that gets value from a user input form

    // When called, function creates a button with the text of the value

    // Adds data-value attribute to the button equal to the input value

    // Appends button to the #button-display div in the document

// Create a click handler to call addButton function when submit button is clicked.