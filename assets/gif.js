var movies = ["Pineapple Express", "Half Baked", "Seven Psychopaths", "The 40-Year-Old Virgin", "WALL-E"];

//function for displaying movie data
function renderButtons(){

    //deleting the movies prior to adding new movies, so we dont have repeat buttons
    $("giphy-view").empty

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
   
//event where a movie button is clicked
$("#add-giphy").on("click", function(event) {
    event.preventDefault();
    //grabs the input from the textbox
    var movie = $("#giphy-input").val().trim();
    //adding movie from the textbox to our array
    movies.push(movie);
    //processing of our movie array
    renderButtons();
});

renderButtons();