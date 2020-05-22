
const xhr= new XMLHttpRequest();

 const apiEndPoint= "https://api.themoviedb.org/3/movie/now_playing?api_key=a09bebfecf2762c7578fb3b006a1cedf&language=en-US&page=1";

  xhr.open("GET",apiEndPoint);
  xhr.send();
  xhr.addEventListener("readystatechange",movieInfo)


function movieInfo(){

  let basePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

  if(xhr.readyState === 4 && xhr.status === 200)
  {

    let obj = JSON.parse(xhr.responseText);

    sessionStorage.setItem("item",JSON.stringify(obj.results));

    for(let i=0; i<obj.results.length; i++)
      {
      let movieDiv1 = document.createElement("div");
      container.appendChild(movieDiv1);

      let img= document.createElement("img");


      img.setAttribute("src",basePath + obj.results[i].poster_path);
      movieDiv1.appendChild(img);
      //////////////////////////////////////////Div2

      let movieDiv2 = document.createElement("div");
      container.appendChild(movieDiv2);

      let title= document.createElement("h2");
      title.setAttribute("src",obj.results[i].title);
      movieDiv2.appendChild(title);
      title.innerHTML=obj.results[i].title ;

      let overview= document.createElement("p");
      overview.setAttribute("src",obj.results[i].overview);
      movieDiv2.appendChild(overview);
      overview.innerHTML=obj.results[i].overview ;

      let vote_average= document.createElement("p");
      vote_average.setAttribute("src",obj.results[i].vote_average);
      movieDiv2.appendChild(vote_average);
      vote_average.innerHTML=obj.results[i].vote_average;

      let release_date= document.createElement("p");
      release_date.setAttribute("src",obj.results[i].release_date);
      movieDiv2.appendChild(release_date);
      release_date.innerHTML=obj.results[i].release_date;

       let button= document.createElement("input");
       button.setAttribute("type","button");
       movieDiv2.appendChild(button);
       button.setAttribute("value","info");
       button.setAttribute("id",obj.results[i].id);
       button.addEventListener("click",detailPage);
      }
    }
  };




function detailPage(e){


let id= e.target.id;
sessionStorage.setItem("movieId",id);


window.open("detailPage/detailPage.html");
/*
    Create a localStorage of object storing the id value

    sessionStorage.setItem("movieId",id);
    /Then you direct the user to the detailsPage.

    Pull value from details Page using another Javascript file

    sessionStorage.getItem("movieId")


*/
window.open("detailPage/detailPage.html");


}
