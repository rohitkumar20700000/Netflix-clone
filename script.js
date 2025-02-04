let movies=[
    {
        name:"Amaran",
        poster:"https://static.moviecrow.com/gallery/20240216/226298-Amaran%20Sivakarthikeyan%20Birthday.jpg",
        rating:8.2,
        trailer:"https://www.youtube.com/embed/hylIXfZeB4c?si=hX9zVVITRaWSXXbo",
        cast:"Sivakarthikeyan,Sai pallavi,Rajkumar periasamy"
    },
    {
        name:"Leo",
        poster:"https://images.indianexpress.com/2023/09/leo3.jpg",
        rating:8,
        trailer:"https://www.youtube.com/embed/Po3jStA673E?si=CuHfmycgEAKV1sKU" ,
        cast:"Vijay,Trisha,Lokesh Kanagaraj"
    },
    {
        name:"Aladdin",
        poster:"https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg",
        trailer:"https://www.youtube.com/embed/-G5XI61Y9ms?si=Pes44yst98efr-6e",
        rating:8.4,
        cast:"Will Smith,Mena massoud,Naomi scott"
    },
    {
        name:"Maaveeran",
        poster:"https://m.media-amazon.com/images/M/MV5BM2NkMDFhMzktNmU2Ny00MzMzLWIxY2MtNjg3OWQ0MzRkZTc5XkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg",
        rating:8.6,
        trailer:"https://www.youtube.com/embed/EcNACt-LOi0?si=DXbedFXi-5agUvEa",
        cast:"Sivakarthikeyan,Aditi Shankar,Madonne Ashwin"
    },
    {
        name:"Megan",
        poster:"https://images6.fanpop.com/image/photos/44700000/M3GAN-2023-Poster-horror-movies-44715448-900-1425.jpg",
        rating:7.2,
        trailer:"https://www.youtube.com/embed/BRb4U99OU80?si=ZAEBv2HbnrII8J2M",
        cast:"Jenna Davis,Allison Williams,Gerard Johnstone"
    },
    {
        name:"Batman Begins",
        poster:"https://picfiles.alphacoders.com/127/thumb-1920-127262.jpg",
        rating:9.2,
        trailer:"https://www.youtube.com/embed/FiL1_5DWV7Y?si=GLONLNXpjcPSCKYm",
        cast:"christopher Nolan"
    },
    {
        name:"Moon Knight",
        poster:"https://cdn.shopify.com/s/files/1/0747/3829/products/mL6114_1024x1024.jpg?v=1652719611",
        rating:8.8,
        trailer:"https://www.youtube.com/embed/x7Krla_UxRg?si=3Hwbm_FBwMnZBrd-",
        cast:"Oscar Issac,May Calamawy"
    },
    {
        name:"petta",
        poster:"https://i.pinimg.com/originals/c4/9d/25/c49d253a1aaab1973641081d35d741e4.jpg",
        rating:8.6,
        trailer:"https://www.youtube.com/embed/FCB0ZfQ9Rzs?si=WfIbNJQo28NLKvc4",
        cast:"rajinikhanth,Trisha"
    },
    {
        name:"Viswasam",
        poster:"https://2.bp.blogspot.com/-ahiETDC4Jx0/XHpmqsUzzGI/AAAAAAAAABw/GeXaWGtzuT8NPiMS5eP3JhXCc6sDSKoUACK4BGAYYCw/s1600/141531.jpg",
        rating:7.4,
        trailer:"https://www.youtube.com/embed/TiDyv53adt0?si=iYx_0iroRjPrwmg8",
        cast:"Ajithkumar,Nayanthara,Karthik subburaj"
    },
    {
        name:"Lubber Pandhu",
        poster:"https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/db124b182854515.65356352509ab.jpg",
        rating:7.6,
        trailer:"https://www.youtube.com/embed/oP88LHBukW8?si=hY4Rcdvgl4yfR4re",
        cast:"Harish kalyan,Sanjana,Tamizharasan"
    },
    {
        name:"Fir",
        poster:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ecef6882970867.5d2dfc06d0bc0.jpg",
        rating:8.3,
        trailer:"https://www.youtube.com/embed/eVKIjoK7FnM?si=rlXINemAI9mXM0Ge",
        cast:"Vishnu Vishal,Reba John,Manu Anand"
    },
    {
        name:"Vidaamuyarchi",
        poster:"https://www.wallsnapy.com/img_gallery/vidamuyarchi-ajith-third-look-poster-4k-wallpaper-3079295.jpg",
        rating:8.7,
        trailer:"https://www.youtube.com/embed/hsoGpoDxyKg?si=fqXkfZtP9UBRWM8M",
        cast:"Ajith Kumar,Trisha,Magizh Thirumani"
    }

];
function searchmovie(){
    let moviename=document.getElementById('search').value;
    console.log(moviename);
    if (moviename!==""){
        let result=movies.filter(function(movie){
            return movie.name.toUpperCase().includes(moviename.toUpperCase())       

        })
        displayMovies(result)    

    }
    else {
        displayMovies(movies)

    }
}
function displayMovies(data){
    document.getElementById("movies").innerHTML=""
    // let movieDiv = document.createElement("div");
    // movieDiv.classList.add("movie");
    // let overlayDiv =document.createElement("div");
    // overlayDiv.classList.add("overlay");
    // console.log(movieDiv,overlayDiv)
    let htmlstring=``
    for(let i=0;i<data.length;i++){
        htmlstring=htmlstring+`
        <div class="movie" id="click">
            <div class="overlay">
                <div class="video"><iframe src="${data[i].trailer}" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>
                <div onclick="displayclick()" class="details">
                    <h1>${data[i].name}</h1>
                    <p>IMDB: ${data[i].rating}<p>
                    <p>${data[i].cast}</p>
                </div>
            </div>
            <img class="poster" src="${data[i].poster}" alt="poster">
        </div>`

    }
    console.log(htmlstring)
    document.getElementById("movies").innerHTML=htmlstring
     
}
displayMovies(movies)

function displayclick(){
    document.getElementById("movies").innerHTML=`
    <iframe width="1400" height="600" src="https://www.youtube.com/embed/GV3HUDMQ-F8?si=ZE3PGW1-K4W71EEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
}
