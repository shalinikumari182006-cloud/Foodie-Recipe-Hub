function searchRecipe() {

    let search = document.getElementById("searchInput").value;

    if (search.trim() === "") {
        alert("Please enter a recipe name.");
    } 
    else {
        alert("Searching for: " + search);
    }
}


function showRecipe(recipeName) {

    alert(
        "🍴 " + recipeName +
        "\n\nRecipe details will be available soon!"
    );

}