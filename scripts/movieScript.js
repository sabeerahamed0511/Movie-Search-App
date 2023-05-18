function getData() {
    let search = document.getElementById("searchBar").value;
    let content = document.getElementById("content");
    if (!search) {
        return alert("Enter the movie name...");
    }
    content.innerHTML = "";
    let loaderDiv = document.createElement("div");
    loaderDiv.id = "loader";
    content.append(loaderDiv);
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=c7ca5036`)
        .then((res) => res.json())
        .then((result) => {
            if (result.Response !== "True") {
                content.innerHTML = "No such movie exist!";
            }
            else {
                let dataRequired = ["Title", "Year", "Rated", "Director", "Writer", "Actors"];
                let img = document.createElement("img");
                img.src = result.Poster;
                img.alt = "Img not available";
                let div = document.createElement("div");
                let reqContents = "";
                for (let i = 0; i < dataRequired.length; i++) {
                    reqContents += "<b>" + dataRequired[i] + "</b>" + ":" + result[dataRequired[i]] + "<br>";
                }
                content.innerHTML = "";
                div.innerHTML = reqContents;
                content.append(img);
                content.append(div);
            }
        })
}