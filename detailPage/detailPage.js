const xhr= new XMLHttpRequest();
const apiEndPoint= "https://api.themoviedb.org/3/movie/now_playing?api_key=a09bebfecf2762c7578fb3b006a1cedf&language=en-US&page=1";
xhr.open("GET",apiEndPoint);
xhr.send();
xhr.addEventListener("readystatechange",movieInfo)

const movieId =JSON.parse(sessionStorage.getItem("movieId"));

let basePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
function movieInfo(){


  if(xhr.readyState === 4 && xhr.status === 200)
  {
    let obj = JSON.parse(xhr.responseText);
    for(let i=0; i<obj.results.length; i++)
      {
          if(movieId==obj.results[i].id)
          {
          foundMovie=obj.results[i];
          break;
          }
      }

      let movieDiv1 = document.createElement("div");
      container.appendChild(movieDiv1);

      let img= document.createElement("img");
      img.setAttribute("src",basePath + foundMovie.poster_path);
      img.setAttribute("width","250");
      img.setAttribute("height","400");
      movieDiv1.appendChild(img);
      //////////////////////////////////////////Div2

      let movieDiv2 = document.createElement("div");
      container.appendChild(movieDiv2);

      let title= document.createElement("h2");
      title.setAttribute("src",foundMovie.title);
      movieDiv2.appendChild(title);
      title.innerHTML=foundMovie.title ;

      let overview= document.createElement("p");
      overview.setAttribute("src",foundMovie.overview);
      movieDiv2.appendChild(overview);
      overview.innerHTML=foundMovie.overview ;

      let vote_average= document.createElement("p");
      vote_average.setAttribute("src",foundMovie.vote_average);
      movieDiv2.appendChild(vote_average);
      vote_average.innerHTML=foundMovie.vote_average;

      let release_date= document.createElement("p");
      release_date.setAttribute("src",foundMovie.release_date);
      movieDiv2.appendChild(release_date);
      release_date.innerHTML=foundMovie.release_date;

    }
  };

const xhr2 = new XMLHttpRequest();
const trailerEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=a09bebfecf2762c7578fb3b006a1cedf&language=en-US`;
let trailerLink = `https://www.youtube.com/embed/`;
let trailerSettings = `?autoplay=0&controls=0&showinfo=0&autohide=1`;
const trailerDiv=document.querySelector("#trailerDiv");

xhr2.open("GET", trailerEndpoint);
xhr2.send();
xhr2.addEventListener("readystatechange",GetTrailer);


let trailerBtn = document.createElement("a");
trailerBtn.className = "btn";
let apiResponse;

function GetTrailer()
{
  if(xhr2.readyState == 4)
  {
    apiResponse = JSON.parse(xhr2.responseText);
    console.log(apiResponse.id);

    const frame = document.createElement("iframe");
    frame.setAttribute("frameBorder","0");
    frame.setAttribute("width","90%");
    frame.setAttribute("height","560");
    frame.setAttribute("src",`${trailerLink}${apiResponse.results[0].key}${trailerSettings}`);

    trailerBtn.setAttribute("href","#trailerDiv");

    trailerBtn.innerHTML = "Trailer";

    trailerDiv.appendChild(frame);
  }
}
