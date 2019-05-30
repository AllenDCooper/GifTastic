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
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 

// Create a function (returnGifs) that takes a string as an assignment, and that uses Ajax get method to return ten gifs and their ratings for the search term, and then prints them to the page.

function returnGifs(string) {
    // clear out gif display
    $("#gif-display").text("")
    // Creates a queryURL for Ajax method that includes the GIPHY API url + "q=" + stringparameter + "&api_key=" + APIkey + "&limit=10"
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + string + "&api_key=" + apiKey + "&limit=11",
        method: "GET",
    }).then(function(response){
        // When called, function loops through the returned data array, creating an img element for each object
        for (i = 0; i < 9; i++) {
            // function stores the still url as the data-still attribute for the image
            var gifImage = $("<img>");
            gifImage.attr("id", "gif-image");
            var gifURLString = response.data[i].images.fixed_height_small_still.url; 
            gifImage.attr('data-still', gifURLString);

            // function stores the gif url as data-gif attribute for the image
            gifImage.attr('data-gif', response.data[i].images.fixed_height_small.url)

            // function prints data-still attribute to the src attribute
            var dataStill = gifImage.attr('data-still');
            gifImage.attr('src', dataStill);

            // function creates a label element for each object.rating
            var gifRating = $("<h4>");
            var gifRatingString = "rating: " + response.data[i].rating;
            
            // function appends both the img and label element to the #gif-display div in the document
            gifRating.text(gifRatingString);
            $("#gif-display").append(gifImage, gifRating);
        }
    })
}
$(document).ready(function() {
    printSearchWords(searchWords);
    // returnGifs(searchWords[5]);
})

// Create a click handler that calls the returnGifs function when an element with class "search-button" is clicked
$("body").on("click", ".search-button", function(event) {
    var keyWord = $(this).attr("data");
    returnGifs(keyWord);
})

// Create a click handler that changes img src from still to gif or vice-versa when clicked
$("body").on("click", "img", function(event) {
    if ($(this).attr("src") === ($(this).attr("data-still"))) {
    var dataGif = $(this).attr("data-gif");
    $(this).attr('src', $(this).attr("data-gif"));
    } else {
        $(this).attr('src', $(this).attr("data-still"));
    }
})
// Create a function (addButton) that gets value from a user input form

    // When called, function creates a button with the text of the value

    // Adds data-value attribute to the button equal to the input value

    // Appends button to the #button-display div in the document

// Create a click handler to call addButton function when submit button is clicked.