// api key from TMDB
const api ="api_key=b43799a93309755a9dc0069d69a4a080";
// base url of the site 
const base_url="https://api.themoviedb.org/3";
const banner_url="https://image.tmdb.org/t/p/original";
const img_url="https://image.tmdb.org/t/p/w500";
//you can change "w185"to your preface
// request for movies data
const requests ={
    fetchTrending: `${base_url}/treanding/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_network=213`,
    fetchActionMOvies:`${base_url}/discover/movie?${api}&with_genress=28`,
    fetchComedyMovies: `${base_url}/discover//movie?${api}&with_genress=35`,
    fetchHorrorMovies:`${base_url}/discover//movie?${api}&with_genress=27`,
    fetchRomanceMovie: `${base_url}/discover//movie?${api}&with_genress=107`,
   fetchDocumentaries:`${base_url}/discover//movie?${api}&with_genress=99`,
};
// used to truncate the string 
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"....":str;

}
//banner
fetch(requests.fetchNetflixOrignals)
.then((res)=>res.json())
.then((data)=>{
    console.log(data.results);
    //every refresh the movie will be change 
    const setMovie=
    data.requests[Math.floor(Math.random()*data.result.length-1)];


    var banner = document.getElementById("banner");
    var banner_title=document.getElementById("banner_title");
    var banner_desc = document.getElementById("banner_description");


    banner.style.backgroundImage=
    "url("+banner_url+setMovie.backdrop_path +")";
    banner_desc.innerText = truncate(setMovie.overview,150);
    banner_title.innerText= setMovie;

    });
    // movies rows
    fetch(requests.fetchNetflixOrignals)
    .then((res)=> res.json())
    
    .then((data)=>
    { 
        const headrow=document.getElementById("headrow");
        const row = document.creatElemen("div");
        row.className="row";
        row.classlist.add("netflixrow");
        headrow.appendChild(row);
        const title= document.createElement("h2");

        title.className="row_title";
        title.innerText="NETFLIX ORIGINALS";


        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);


        data.results.forEach((movie) => 
        {
        const poster =document.createElement("img") ;
        var s=movie.name.replace( /\ s+/g,"");
        poster .id =s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster);


        });


    });
    // trending
    // top reted
    fetch(requests.fetchTrending)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");
        row.className="row";
        headrow.appendChild(row);
        const title=document.creatElemen("h2");
        title.className="row_title";
        title.innerText="top Reted";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);
        
        data.result.forEach((movie)=>{
            console.log(movie);
            const poster=document.createElement("img");
          poster.className="row_posterLarge";
          var s2=movie.id;
          poster.id=s2;
          poster.src=img_url+movie.poster_path;
          row_posters.appendChild(poster)  ;
        });

    } );
    //action
    fetch(requests.fetchActionMOvies)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");
        row.className="row";
        headrow.appendChild(row);
        const title =document.createElement("h2");
        title.className="row_title";
        title.innerText="Action Movie";
        row.appendChild(title);
        const row_posters=document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);
        data.result.forEatch((movie)=>
        {  console.log(movie);
            const poster=document.createElement("img")
            poster.className="row_poster";
            var s2 =movie.id;
            poster.id=s2;
            poster.src=img_url+movie.backdrop_path;
            row_posters.appendChild(poster);



        });
    });
    // comedy
    fetch(requests.fetchComedyMovies)
    .then((res)=>res.json())
    .then((data)=>{
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");
        row.className="row";
        headrow.appendChild(row);
       
        const title =document.createElement("h2");
        title.className="row_title";
        title.innerText="Comedy Movie";
        const row_posters=document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);
        data.result.forEatch((movie)=>{console.log(movie);
            const poster=document.createElement("img")
            poster.className="row_poster";
            var s2 =movie.id;
            poster.id=s2;
            poster.src=img_url+movie.backdrop_path;
            row_posters.appendChild(poster);

        });
        

    });
    // Horror
    fetch(requests.fetchComedyMovies)
    .then((res)=>res.json())
    .then((data)=>{
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");
        row.className="row";
        headrow.appendChild(row);
       
        const title =document.createElement("h2");
        title.className="row_title";
        title.innerText="Horror Movie";
        const row_posters=document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);
        data.result.forEatch((movie)=>{console.log(movie);
            const poster=document.createElement("img")
            poster.className="row_poster";
            var s2 =movie.id;
            poster.id=s2;
            poster.src=img_url+movie.backdrop_path;
            row_posters.appendChild(poster);
          
        });
        

    });
   // Romance
   fetch(requests.fetchComedyMovies)
   .then((res)=>res.json())
   .then((data)=>{
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");
       row.className="row";
       headrow.appendChild(row);
    
       const title =document.createElement("h2");
       title.className="row_title";
       title.innerText="Romance Movie";
       const row_posters=document.createElement("div");
       row_posters.className="row_posters";
       row.appendChild(row_posters);
       data.result.forEatch((movie)=>{console.log(movie);
           const poster=document.createElement("img")
           poster.className="row_poster";
           var s2 =movie.id;
           poster.id=s2;
           poster.src=img_url+movie.backdrop_path;
           row_posters.appendChild(poster);
        

       });
       

   });
   // Documentry
   fetch(requests.fetchComedyMovies)
   .then((res)=>res.json())
   .then((data)=>{
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");
       row.className="row";
       headrow.appendChild(row);
    
       const title =document.createElement("h2");
       title.className="row_title";
       title.innerText="documentries";
       
       const row_posters=document.createElement("div");
       row_posters.className="row_posters";
       row.appendChild(row_posters);
       data.result.forEatch((movie)=>{console.log(movie);
           const poster=document.createElement("img")
           poster.className="row_poster";
           var s2 =movie.id;
           poster.id=s2;
           poster.src=img_url+movie.backdrop_path;
           row_posters.appendChild(poster);
        

       });
       

   });
   