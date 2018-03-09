var movies = ["Pineapple Express", "Half Baked", "Seven Psychopaths", "The 40-Year-Old Virgin", "WALL-E"];

//function for displaying movie data
function renderButtons(){
    
    //deleting the movies prior to adding new movies, so we dont have repeat buttons
    $("giphy-view").empty()
    
    //looping through array of movies
    for (var i=0; i < movies.length; i++){
        
        //generating buttons
        var a = $("<button>");
        //add class
        a.addClass("movie-btn");
        //adding data attribute
        a.attr("data-name", movies[i]);
        //button text
        a.text(movies[i]);
        //adding button to div
        $("#giphy-view").append(a);
    }
}
renderButtons();


//event where a movie button is clicked
$("#add-giphy").on("click", function(event) {
event.preventDefault();
//grabs the input from the textbox
var newMovie = $("#giphy-input").val().trim();
//adding movie from the textbox to our array
movies.push(newMovie);
//processing of our movie array
renderButtons();
});



//constructing a URL to search giphy with movie title
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movies + "&api_key=dc6zaTOxFJmzC&limit=10";

//Ajax GET request
$.ajax({
    url: queryURL,
    method: "GET"
})

//after data comes back from API
.then(function(response){
    //storing an array of results in the results variable
    var results = response.data;
    
    //Looping over every result item
    for (var i = 0; i < results.length; i++) {
        
        if (results[i].rating !== "r") {
            //create div class for item
            var gifDiv = $("<div class='item'>");
            
            //storing results
            var rating = results[i].rating;
            
            //create paragraph tag with result of rating
            var p = $("<p>").text("Rating:" + rating);
            
            //create image tag
            var movieImage = $("<img>");
            
            //give image tag src attr of property pulled off the result item
            movieImage.attr("src", results[i].images.fixed_height.url);
            
            //append the paragraph and movieImage to gifDiv
            gifDiv.append(p);
            gifDiv.append(movieImage);
            
            //prepend the gifDiv to "#giphy-container" div in HTML
            $("#giphy-container").prepend(gifDiv);
        }
    }
});

