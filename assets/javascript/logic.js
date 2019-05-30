// Create an array (var searchWords) of search words
 var topics = ["anger", "annoyance", "sadness", "jealousy", "joy", "confusion", "kindness", "love", "hope", "eagerness"]

// Create a function (printTopics) that takes an array as a assignment

function printTopics (arr) {

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
    // clears out gif display
    $("#gif-display").text("")

    // Creates a queryURL for Ajax method that includes the GIPHY API url + "q=" + stringparameter + "&api_key=" + APIkey + "&limit=10"
    $.ajax({
        url: queryURL + string + "&api_key=" + apiKey + "&limit=10",
        method: "GET",
    }).then(function(response){
        // When called, function loops through the returned data array, creating an img element for each object
        for (i = 0; i < 10; i++) {
            // function stores the still url as the data-still attribute for the image
            var gifImage = $("<img>");
            gifImage.attr("class", "gif-image");
            var gifURLString = response.data[i].images.fixed_height_small_still.url; 
            gifImage.attr('data-still', gifURLString);

            // function stores the gif url as data-gif attribute for the image
            gifImage.attr('data-gif', response.data[i].images.fixed_height_small.url)

            // function prints data-still attribute to the src attribute
            var dataStill = gifImage.attr('data-still');
            gifImage.attr('src', dataStill);

            // function creates a heading element for each object.rating
            var gifRating = $("<p>");
            var gifRatingString = "rating: " + response.data[i].rating;

            // function creates a div tag to store the img and heading
            var gifDiv = $("<div>");
            gifDiv.addClass("gif-div");
            gifDiv.append(gifImage, gifRating);
            
            // function appends both the img and label element to the #gif-display div in the document
            gifRating.text(gifRatingString);
            $("#gif-display").append(gifDiv);
        }
    })
}
$(document).ready(function() {
    printTopics(topics);
})

// Create a click handler that calls the returnGifs function when an element with class "search-button" is clicked
$("body").on("click", ".search-button", function() {
    $(".search-button").css('background-color', "#DDDDDD");
    $(".search-button").css('color', "#000000");
    var keyWord = $(this).attr("data");
    returnGifs(keyWord);
    $(this).css('background-color', "#003366");
    $(this).css('color', "white");
})

// Create a click handler that changes img src from still to gif or vice-versa when clicked
$("body").on("click", "img", function() {
    if ($(this).attr("src") === ($(this).attr("data-still"))) {
    var dataGif = $(this).attr("data-gif");
    $(this).attr('src', $(this).attr("data-gif"));
    } else {
        $(this).attr('src', $(this).attr("data-still"));
    }
})

// Create an event listener that gets value from a user input form and renders it as a search button, added to the existing search buttons
$("#submit-button").on("click", function(event) {
    event.preventDefault();
    var newVal = []
    newVal.push($("#add-emotion").val().trim())
    printTopics(newVal);
    $("form").trigger("reset");
})
