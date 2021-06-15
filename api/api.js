function getInputValue(){
    var enterButton = document.getElementById("venues").value;

let newsdata = {};

var api = "http://api.mediastack.com/v1/news?access_key=7c52f91ccd56d1c5475c2aeb86847dee&keywords="
var api2 = "&countries=us"
var url = api+enterButton+api2



fetch(url)
.then(response=>response.json())
.then(data=>{
    // console.log(data.data.length);
    // console.log("apidata", data);
    // console.log("it is working >>", data.data[0].title);
    return displayLoop(data.data);

    
   


})
.catch(error => {
    document.getElementById("error").innerHTML = "Keyword not found. Please try again!";
    console.log(" error! try again")
})
}

function displayArticle(article){
  
let location = document.getElementById("test")

let innerHtmlString = "";

article.forEach(event => {
innerHtmlString += `
            <div class="card border-2 cardshadow" style="width: 18rem; margin: 0.3em;">
           <img class="card-img-top" height=150px width=200px src="${event.image}" alt="Card image cap">
            <div class="card-body">
           <h5 class="card-title">${event.title}</h5>
           <p class="card-text">${event.description}</p>
             </div>
           <div class="card-footer bg-dark border-success"><a href="${event.url}" class="btn btn-dark">Save Article</a></div>
           </div> `

})

location.innerHTML = innerHtmlString;

}



function displayLoop(data){
   
    var arr = []
    let article = {};
    for(let i=0; i < data.length; i++){
        article.title = data[i].title;
            if image =null {

            }else
            article.image = data[i].image

        article.description = data[i].description
        article.url = data[i].url;
        console.log(article);
        arr.push(article);
        article = {};
    

        
    }
    displayArticle(arr)
}
