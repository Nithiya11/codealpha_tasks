// =========================================
// MUSIC DATA
// =========================================


const songs = [

{
    title:"Pavalamalli",
    artist:"Sai Abhyankkar",
    src:"song/song1.mp3",
    cover:"images/song1.jpg"
},

{
    title:"Pattampoochi",
    artist:"Sublahshini",
    src:"song/song2.mp3",
    cover:"images/song2.jpg"
},

{
    title:"Mutta Kalakki",
    artist:"Ken Karunaas",
    src:"song/song3.mp3",
    cover:"images/song3.jpg"
},

{
    title:"Nallaru Po",
    artist:"Sai Abhyankka",
    src:"song/song4.mp3",
    cover:"images/song4.jpg"
}

];


// =========================================
// SELECT ELEMENTS
// =========================================


const audio = document.getElementById("audio");

const cover = document.getElementById("cover");

const title = document.getElementById("title");

const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");

const currentTime = document.getElementById("current");

const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

const playlist = document.querySelectorAll("#playlist li");



let songIndex = 0;

let isPlaying = false;


// =========================================
// LOAD SONG
// =========================================


function loadSong(index){


let song = songs[index];


title.innerHTML = song.title;

artist.innerHTML = song.artist;

audio.src = song.src;

cover.src = song.cover;


playlist.forEach(item=>{

item.classList.remove("active");

});


playlist[index].classList.add("active");


}



// Initial Song

loadSong(songIndex);



// =========================================
// PLAY SONG
// =========================================


function playSong(){


isPlaying=true;


audio.play();


playBtn.innerHTML =
'<i class="fa-solid fa-pause"></i>';

cover.classList.add("playing");


}



// =========================================
// PAUSE SONG
// =========================================


function pauseSong(){


isPlaying=false;


audio.pause();


playBtn.innerHTML =
'<i class="fa-solid fa-play"></i>';


cover.classList.remove("playing");


}



// Play Button

playBtn.addEventListener("click",()=>{


if(isPlaying){

pauseSong();

}

else{

playSong();

}


});



// =========================================
// NEXT SONG
// =========================================


function nextSong(){


songIndex++;


if(songIndex >= songs.length){

songIndex=0;

}


loadSong(songIndex);


playSong();


}



// =========================================
// PREVIOUS SONG
// =========================================


function previousSong(){


songIndex--;


if(songIndex < 0){

songIndex=songs.length-1;

}


loadSong(songIndex);


playSong();


}



nextBtn.addEventListener(
"click",
nextSong
);



prevBtn.addEventListener(
"click",
previousSong
);



// =========================================
// PLAYLIST CLICK
// =========================================


playlist.forEach(item=>{


item.addEventListener("click",()=>{


songIndex =
item.dataset.index;


loadSong(songIndex);


playSong();


});


});



// =========================================
// UPDATE PROGRESS BAR
// =========================================


audio.addEventListener(
"timeupdate",
()=>{


let percent =
(audio.currentTime /
audio.duration)*100;


progress.value =
percent || 0;



currentTime.innerHTML =
formatTime(audio.currentTime);



duration.innerHTML =
formatTime(audio.duration);



});



// =========================================
// SEEK SONG
// =========================================


progress.addEventListener(
"input",
()=>{


audio.currentTime =
(progress.value/100)
*
audio.duration;


});



// =========================================
// FORMAT TIME
// =========================================


function formatTime(time){


if(isNaN(time)){

return "0:00";

}


let minutes =
Math.floor(time/60);


let seconds =
Math.floor(time%60);



if(seconds<10){

seconds="0"+seconds;

}


return minutes+":"+seconds;


}



// =========================================
// VOLUME CONTROL
// =========================================


volume.addEventListener(
"input",
()=>{


audio.volume =
volume.value;


});



// =========================================
// AUTO PLAY NEXT SONG
// =========================================


audio.addEventListener(
"ended",
()=>{


nextSong();


});



// =========================================
// KEYBOARD SHORTCUTS
// =========================================


document.addEventListener(
"keydown",
(e)=>{


// SPACE = PLAY PAUSE

if(e.code==="Space"){


e.preventDefault();


if(isPlaying){

pauseSong();

}

else{

playSong();

}


}



// RIGHT ARROW = NEXT

if(e.code==="ArrowRight"){

nextSong();

}



// LEFT ARROW = PREVIOUS

if(e.code==="ArrowLeft"){

previousSong();

}



});



// =========================================
// INITIAL VOLUME
// =========================================


audio.volume =
volume.value;