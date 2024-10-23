"use strict";

// //  Song data
// const songsList = [
//     {
//         title: "Amor narcotico",
//         file: "Amor_narcotico.mp3",
//         cover: "amor-narcotico.png"
//     },
//     {
//         title: "La Ciguapa",
//         file: "Ciguapa.mp3",
//         cover: "siguapa.png"
//     },
//     {
//         title: "Procura enamorarme",
//         file: "procura.mp3",
//         cover: "procura.png"
//     },
// ];
// //  Cancion actual
// let actualSong = null;
// //  Capturar elementos del DOM para  trabajar con JS
// const play = document.querySelector('#play');
// const prev = document.querySelector('#prev');
// const next = document.querySelector('#next');
// const songs = document.querySelector('.songs');
// const audio = document.querySelector('.audio');
// const cover = document.querySelector('.cover');
// const title = document.querySelector('.title');
// const progress = document.querySelector('.progress');
// const progressContainer = document.querySelector('.progress-container')
// progressContainer.addEventListener('click', setProgress)
// //  Escuchar el elemento audio
// audio.addEventListener('timeupdate', updateProgreso)
// //  Escuchar click en los controles
// play.addEventListener('click', () => {
//     if (audio.paused) {
//         playSong()
//     } else {
//         pauseSong()
//     }
// })
// //
// next.addEventListener('click', () => nextSong())
// prev.addEventListener('click', () => prevSong())
// //  Cargar canciones y mostrar el listado de canciones
// loadSongs = () => {
//     //  Crear un Elemento list
//     songsList.forEach((song, index) => {
//         //  Crear li
//         const li = document.createElement('li')
//         //  crear a
//         const link = document.createElement('a')
//         //  Hidratar a
//         link.textContent = song.title
//         link.href = '#'
//         //  Escuchar click
//         link.addEventListener('click', () => loadSong(index))
//         //  Añadir li
//         li.appendChild(link)
//         //  Añadir li a ul
//         songs.appendChild(li)
//     });
// };
// //
// //  Cargar cancion seleccionada
// loadSong = (songIndex) => {
//     if (songIndex !== actualSong) {
//         changeActiveClass(actualSong, songIndex)
//         actualSong = songIndex
//         audio.src = `./audio/${songsList[songIndex].file}`
//         playSong()
//         changeCover(songIndex)
//     };
//     changeSongTitle(songIndex) // esto esta pendiente
// };
// //
// //  Actualizar barra de Progreso de la cancion
// function updateProgreso(evt) {
//     //  Total y el Actual
//     const { duration, currentTime } = evt.srcElement
//     const percent = (currentTime / duration) * 100
//     progress.style.width = percent + '%'
// }
// //
// // Hacer la barra de progreso clicable
// function setProgress(event) {
//     const totalWidth = this.offsetWidth;
//     const progressWidth = event.offsetX
//     const current = (progressWidth / totalWidth) * audio.duration
//     audio.currentTime = current
// }
// //
// //  Cambiar o Actualizar controles
// updateControls = () => {
//     if (audio.paused) {
//         play.classList.remove('fa-pause')
//         play.classList.add('fa-play')
//     } else {
//         play.classList.add('fa-pause')
//         play.classList.remove('fa-play')
//     }
// }
// // 
// //  Reproducir Cancion
// playSong = () => {
//     if (actualSong !== null) {
//         audio.play()
//         updateControls()
//     }
// }
// //
// //  Pausar Cancion
// pauseSong = () => {
//     audio.pause()
//     updateControls()
// }
// //
// //  Cambiar clase Activa
// changeActiveClass = (lastIndex, newIndex) => {
//     const links = document.querySelectorAll('a')
//     if (lastIndex !== null) {
//         links[lastIndex].classList.remove('active')
//     }
//     links[newIndex].classList.add('active')
// }
// //
// //  Cambiar el cover de la cancion
// changeCover = (songIndex) => {
//     cover.src = `./img/${songsList[songIndex].cover}`
// }
// //
// //  Cambiar el titulo de la cancion
// changeSongTitle = (songIndex) => {
//     title.innerText = `${songsList[songIndex].title}`
// }
// //
// //  Anterior cancion
// prevSong = () => {
//     if (actualSong > 0) {
//         loadSong(actualSong - 1)
//     } else {
//         loadSong(songsList.length - 1)
//     }
// }
// //
// //  Siguiente cancion
// nextSong = () => {
//     if (actualSong < songsList.length - 1) {
//         loadSong(actualSong + 1)
//     } else {
//         loadSong(0)
//     }
// }
// //
// //  Lanzar siguiente cancion cuando se acaba la musica
// audio.addEventListener('ended', () => { nextSong() })
// //
// //  GO!
// loadSongs();
var songsList = [{
	title: "(Chichi Peralta) Amor narcotico",
	file: "Amor_narcotico.mp3",
	cover: "amor-narcotico.png"
}, {
	title: "La Ciguapa",
	file: "Ciguapa.mp3",
	cover: "siguapa.png"
}, {
	title: "Procura enamorarme",
	file: "procura.mp3",
	cover: "procura.png"
}];
var actualSong = null;
var play = document.querySelector("#play"),
	prev = document.querySelector("#prev"),
	next = document.querySelector("#next"),
	songs = document.querySelector(".songs"),
	audio = document.querySelector(".audio"),
	cover = document.querySelector(".cover"),
	title = document.querySelector(".title"),
	progress = document.querySelector(".progress"),
	progressContainer = document.querySelector(".progress-container");

function updateProgreso(e) {
	var _e$srcElement = e.srcElement,
		o = _e$srcElement.duration,
		t = _e$srcElement.currentTime,
		a = t / o * 100;
	progress.style.width = a + "%";
}

function setProgress(e) {
	var o = this.offsetWidth,
		t = e.offsetX / o * audio.duration;
	audio.currentTime = t;
}

progressContainer.addEventListener("click", setProgress), audio.addEventListener("timeupdate", updateProgreso), play.addEventListener("click", function () {
	audio.paused ? playSong() : pauseSong();
}), next.addEventListener("click", function () {
	return nextSong();
}), prev.addEventListener("click", function () {
	return prevSong();
}), loadSongs = function loadSongs() {
	songsList.forEach(function (e, o) {
		var t = document.createElement("li"),
			a = document.createElement("a");
		a.textContent = e.title, a.href = "#", a.addEventListener("click", function () {
			return loadSong(o);
		}), t.appendChild(a), songs.appendChild(t);
	});
}, loadSong = function loadSong(e) {
	e !== actualSong && (changeActiveClass(actualSong, e), actualSong = e, audio.src = "./audio/".concat(songsList[e].file), playSong(), changeCover(e)), changeSongTitle(e);
}, updateControls = function updateControls() {
	audio.paused ? (play.classList.remove("fa-pause"), play.classList.add("fa-play")) : (play.classList.add("fa-pause"), play.classList.remove("fa-play"));
}, playSong = function playSong() {
	null !== actualSong && (audio.play(), updateControls());
}, pauseSong = function pauseSong() {
	audio.pause(), updateControls();
}, changeActiveClass = function changeActiveClass(e, o) {
	var t = document.querySelectorAll("a");
	null !== e && t[e].classList.remove("active"), t[o].classList.add("active");
}, changeCover = function changeCover(e) {
	cover.src = "./img/".concat(songsList[e].cover);
}, changeSongTitle = function changeSongTitle(e) {
	title.innerText = "".concat(songsList[e].title);
}, prevSong = function prevSong() {
	actualSong > 0 ? loadSong(actualSong - 1) : loadSong(songsList.length - 1);
}, nextSong = function nextSong() {
	actualSong < songsList.length - 1 ? loadSong(actualSong + 1) : loadSong(0);
}, audio.addEventListener("ended", function () {
	nextSong();
}), loadSongs();