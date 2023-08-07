
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// Button of pupolar song, left, right and pop_song
const songleft =$('#po_song_left');
const songright =$('#po_song_right');
const pop_song = $('.pop_song');
const shuffle = $('.shuffle');
// Button of popolar artists left, rigt and pop_artists
const artistsleft =$('#pop_artists_left');
const artistright =$('#pop_artists_right');
const pop_artists =$('.pop-artists');
const icon_master = $('.mater_play .icon');
// Button of PlayList



// const playlist = $('header .menu_side .menu-song')

const playlist = $('.menu-song');



//
//Button and Handle control play music
const master_play = $('#master_play');
const audio = $('#audio');
const playing =$('header .mater_play .icon .i-play');
const waveIng = $('header .mater_play .wave');
const btnNextSong = $('#master_nextplay');
const btnBackSong =$('#master_back');
const active3 =$('header .menu_side .menu-song .subItem.active3');
const makeAllBackground = $('header .menu_side .menu-song .subItem');
const dowload_Music = $('#dowload-music');

// Event Button bar Music
const seek = $('#seek');
const bar2 = $('#bar2');
const dot = $('.dot');
// Event Button Bar vol;
const vol_icon = $('#vol-icon');
let vol_seek =$('#vol-seek');
const vol_bar =$('.vol-bar');
const vol_dot = $('.vol-dot');

const app ={
    songaftit:[
        {
            id:1, 
            name:'Load Control',
            singer:'Alan walker',
            path:'./music/audioartis/Alan-Walker-Sorana-Lost-Control.mp3',
            image:'./img/img/imgartist/lost-control-alant-wallker.jpeg'
        },
        {
            id:2, 
            name:'The Nights',
            singer:'Avicii',
            path:'./music/audioartis/Avicii_-_The_Nights.mp3',
            image:'./img/img/imgartist/the-nights-ceeNaija.jpeg'
        },
        {
            id:3, 
            name:'Tones And I Dance Monkey',
            singer:'Dance Monkey',
            path:'./music/audioartis/Dance-Monkey---Tones-And-I-320(PagalWorld).mp3',
            image:'./img/img/imgartist/Tones-and-i-monkey.jpeg'
        },
        {
            id:4, 
            name:'Diamo Heart',
            singer:'Alan walker',
            path:'./music/audioartis/Diamond-Heart(PaglaSongs).mp3',
            image:'./img/img/imgartist/Diamon-heart-alant-wallkes.jpeg'
        },
        {
            id:5, 
            name:' No Secret',
            singer:'Dj Khaled',
            path:'./music/audioartis/DJ_Khaled_-_No_Secret_Ft_Drake_CeeNaija.com_.mp3',
            image:'./img/img/imgartist/Dj-Mara.jpeg'
        },
        {
            id:6, 
            name:'The Monter',
            singer:'Eminem And Ft Rihanna',
            path:'./music/audioartis/Eminem-Ft-Rihanna-The-Monster-Nghype.Com_.mp3',
            image:'./img/img/imgartist/Eminem-TheMonster-Rihanna.jpeg'
        },
        {
            id:7, 
            name:'Before You Go',
            singer:'Lewis',
            path:'./music/audioartis/Lewis_Capaldi_-_Before_You_Go_CeeNaija.com_.mp3',
            image:'./img/img/imgartist/beforeyougo-lewis-capaldi.jpeg'
        },
        {
            id:8, 
            name:'Let her go',
            singer:'Passenger',
            path:'./music/audioartis/Passenger_-_Let_Her_Go_Naijamusics.com.mp3',
            image:'./img/img/imgartist/lethergo_passenger.jpeg'
        },
        {
            id:9, 
            name:'What are words',
            singer:'Chris Madia',
            path:'./music/audioartis/What-Are-Words-Chris-Medina-Chris-Medina-Chris-Medina.mp3',
            image:'./img/img/imgartist/Chris-Medina -What-Are-Words.jpeg'
        },
        {
            id:10, 
            name:'White Wall',
            singer:'Hollis',
            path:'./music/audioartis/savfk-white-walls.mp3',
            image:'./img/img/imgartist/while-wakks-hollis.jpeg'
        },
    ],
    caruentIndex:0,
    isPlayTF:false,
    isRanDom:false,
    DefineProperties:function(){
        Object.defineProperty(this,'currentSong',{
            get:function(){
               return this.songaftit[this.caruentIndex];

            }

        })
    },


    loadCurrentSong:function(){
        const master_title = $('header .mater_play h5 ');
     
        master_title.innerHTML = this.currentSong.name +`<div class="subtitle">${this.currentSong.singer}</div>`
        audio.src = this.currentSong.path;
        dowload_Music.href= `${this.currentSong.path}`
        dowload_Music.download = this.currentSong.name
       
       
    },

    // Render Show 
    Render:function(){


        //  Render Play List
        const htmls  = this.songaftit.map((song,index) =>{
            return`<li class="subItem ${index === this.caruentIndex ?'active3':''} " id="${index}"}">
            <span>${song.id}</span>
            <img src="${song.image}" alt="">
              <h5>${song.name}<br> 
                <div class="sub-Item">${song.singer}</div>
            </h5>
            <i class="fa-solid fa-play playmusic" id="${song.id}"></i>
            <i class="fa-solid fa-pause"></i>
          </li>`
        });
      
      playlist.innerHTML = htmls.join('');
    //     // Render Pupolar Song
        const htmlsongs = this.songaftit.map((song,index )=>{
            return `<li class="songItem ${index === this.caruentIndex? 'active':''} "id="${index}"}">
              <div class="img_play">
                <img src="${song.image}" alt="">
                <i class="fa-solid fa-play"></i>
                <i class="fa-solid fa-pause"></i>
              </div>
              <h5>${song.name} <br>
                <div class="subtitle">${song.singer}</div>
              </h5>`
        })
         pop_song.innerHTML = htmlsongs.join('');
  
     },

    // Xử Lý Sự Kiện
    handleEvent:function(){
       const _this = this;
        // envent Button RIGHT of  pupolar Song
        songright.onclick = function(){
            pop_song.scrollLeft +=330;
        }
        // Envent Button LEFT of pupolar Song
        songleft.onclick = function(){
            pop_song.scrollLeft -=330;
        }
        // envent Button RIGHT of pupolar Artists
        artistright.onclick = function(){
            pop_artists.scrollLeft +=330;
        }
        artistsleft.onclick = function(){
            pop_artists.scrollLeft -=330;
        }
        // Button Back Play List
        btnBackSong.onclick = function(){
            let iConRandom = shuffle.getAttribute("data-index")
            if(iConRandom === "2"){
                 _this.RandomPlayList();
            }
            else{
                _this.BackSong();
            }
           
            _this.Render();
            audio.play();
        }
        // Button Next Play List
        btnNextSong.onclick = function(){
            let iConRandom = shuffle.getAttribute("data-index")
            if(iConRandom === "2"){
                 _this.RandomPlayList();
            }
            else{
                _this.NextSong();
            }
              _this.Render();
              audio.play();

        }
        // Event Next Song when  end time
        const nextSongendtime = function(){
            _this.NextSong();
            _this.Render();
            audio.play();
        }

        // Button Play Music
        master_play.onclick = function(){
            if(_this.isPlayTF){
                audio.pause();  
            }
            else{
               audio.play();
            }
        }
        // Xử Lý xự kiện Play
        audio.onplay = function(){
            _this.isPlayTF = true;
            playing.classList.remove("active");
            waveIng.classList.add("active1");
          
        }
        // Xử lý sự kiênj pause
        audio.onpause = function(){
            _this.isPlayTF = false;
            playing.classList.add("active");
            waveIng.classList.remove("active1")
        }
        // Lấy Giá trị Thời Gian Tong css
        audio.ontimeupdate = function(){
            if(audio.duration){
                //  song start time
                const seconds = Math.round(audio.duration)
                let minutes = Math.floor(seconds / 60);
                let remainingSeconds = seconds % 60;
                var formatremainSenconds = remainingSeconds.toString().padStart(2,'0')
                $('#currentStart').innerHTML = minutes + ":" +formatremainSenconds;
                // song end time
                const runseconds = audio.currentTime;
                const endSeconds = seconds - Math.round(runseconds);
                const endminutes = Math.floor(endSeconds / 60);
                let endremainingSeconds = (endSeconds % 60);
                var formattedSeconds = endremainingSeconds.toString().padStart(2, '0');
              
                 $('#currentEnd').innerHTML = endminutes+':'+formattedSeconds;  
                 let propress = parseInt((runseconds / seconds)* 100)
                
                 seek.value = propress;
                let seekBar = seek.value
                // Thay Đổi kích thước with trong bar 2
                bar2.style.width = `${seekBar}%`
                dot.style.left = `${seekBar}%`
            } 
        }

        // Set Onended
        audio.onended = function(){
            let isRepeact = shuffle.getAttribute("data-index")
            if(isRepeact == "1"){
                audio.play();
            }else{
                btnNextSong.click();
            }
           
        }
        //  SET MUSIC
        seek.onchange = function(){
            audio.currentTime = seek.value * audio.duration /100;
          
        }
        //  SET VOLUME
        vol_seek.addEventListener('change', function() {
            if (vol_seek.value == 0) {
              vol_icon.classList.remove('fa-volume-high', 'fa-volume-low');
              vol_icon.classList.add('fa-volume-xmark');
            } else if (vol_seek.value <= 50) {
              vol_icon.classList.remove('fa-volume-high', 'fa-volume-xmark');
              vol_icon.classList.add('fa-volume-low');
            } else {
              vol_icon.classList.remove('fa-volume-low', 'fa-volume-xmark');
              vol_icon.classList.add('fa-volume-high');
            }
            let processVol = vol_seek.value;
            vol_bar.style.width = `${processVol}%`
            vol_dot.style.left = `${processVol}%`
            audio.volume = processVol / 100;
        
          });
        
        // Envent Button Playlist
        playlist.onclick = function(e){
            const nodeSong = e.target.closest('.subItem:not(.active3)')
            if(nodeSong){
                const nodeSongId = Number(nodeSong.getAttribute("id"));
                _this.caruentIndex = nodeSongId;
                _this.loadCurrentSong();
                _this.Render();
                audio.play();
            }   
          
        }

        // Button Event Popolar Song
        pop_song.onclick = function(e){
            const po_nodeSong = e.target.closest('.songItem:not(.active)')
           
            if(po_nodeSong){
              const po_nodeSongid = Number(po_nodeSong.getAttribute("id"));
              _this.caruentIndex = po_nodeSongid;
              _this.Render();
              _this.loadCurrentSong();
              audio.play(); 
                
            }
        }

        shuffle.onclick = function(e){
            let a = shuffle.innerHTML;
            switch (a) {
                case "next":
                   
                    shuffle.classList.add("fa-repeat");
                    shuffle.classList.remove("fa-music");
                    shuffle.classList.remove("fa-shuffle");
                    shuffle.innerHTML = "repeat";
                    shuffle.setAttribute("data-index",1);
                    

                    break;
                    case "repeat":
                        shuffle.classList.remove("fa-repeat");
                        shuffle.classList.remove("fa-music");
                        shuffle.classList.add("fa-shuffle");
                        shuffle.innerHTML = "random";
                        shuffle.setAttribute("data-index",2);
                        
                        break;
                        case "random":
                           
                            shuffle.classList.remove("fa-repeat");
                            shuffle.classList.add("fa-music");
                            shuffle.classList.remove("fa-shuffle");
                            shuffle.innerHTML ="next";
                            icon_master.setAttribute("data-index",3);
                            shuffle.setAttribute("data-index",3);
                           
                            break;                                               
            
                default:
                    break;
            }
        }    
 
    },
   
   
    ScrollView:function(){
        active3.scrollIntoView({
            behavior: "smooth", block: "nearest",
        });
    },
    // Even Back Song
    BackSong:function(){
        this.caruentIndex--
        if(this.caruentIndex < 0){
            this.caruentIndex = this.songaftit.length -1;
        }
        this.loadCurrentSong();
    },
     // Background Play list Music
    makeAllBackground:function(){

        Array.from($('.sub-Item')).forEach((el)=>{
            el.style.background = 'rgb(105, 105, 105, .0)';
        })
    },
    // Event Next Song
    NextSong:function(){
        this.caruentIndex++
        if(this.caruentIndex >= this.songaftit.length){
            this.caruentIndex = 0;
        }
        this.loadCurrentSong();


    },

    // Function Random Play music 
    RandomPlayList:function(){
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songaftit.length);
        } while (newIndex === this.caruentIndex);
        this.caruentIndex = newIndex;
        this.loadCurrentSong();

    },


    // Button Even RanDom Song
    RepeactPlayList:function(){
        this.loadCurrentSong();

    },
    start:function(){
        
    this.DefineProperties();           
    // Hàm Render playList
        this.Render();
             // Hàm  xử lý sự kiện
        this.handleEvent();
    // Định nghĩa các thuộc tính cho object
        this.loadCurrentSong();
        //this.makeAllBackground();   
    }

}
app.start();