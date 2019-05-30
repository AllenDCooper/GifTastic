// Create an array (var searchWords) of search words
 var searchWords = ["anger", "annoyance", "sadness", "jealousy", "joy", "confusion", "kindness", "love", "hope", "eagerness"]

// Create a function (printSearchWords) that takes an array as a assignment

function printSearchWords (arr) {

    // When called, function loops through the array, creating a button for each value in the array
    for (i = 0; i < arr.length; i++) {
        var addButton = $("<button>")
        addButton.text(arr[i]);

        // adds a class "search-button" to each button
        addButton.addClass("search-button");
        // stores the value as a data attribute in the button
        addButton.attr("data", arr[i]);
        // appends the buttons to the #button-display div in the document
        $("#button-display").append(addButton);
    }
}

var apiKey = "59kZCC8G5bl8MHavpRjygnwpzG1ssGC4"

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