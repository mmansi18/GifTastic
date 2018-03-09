var movies = ["Pineapple Express", "Half Baked", "Seven Psychopaths", "40 Year-old Virgin", "Wall-e"];
function renderButtons(){
    $("giphy-view").html("")
    for (i=0; i < movies.length; i++){
        $("#giphy-view").append('<button class="btn btn-outline-light giphy-info" value="${movies[i]}">${movies[i]}</button>')
    }
}