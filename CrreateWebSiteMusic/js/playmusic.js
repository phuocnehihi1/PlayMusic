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

const app = {
    
    caruentIndex:0,
    isPlayTF:false,
    isRanDom:false,
    song: [
        {   
           id:1, 
            name:'On My Quay',
            singer:'Alan walker',
            path:'./music/audio/1.mp3',
            image:'./img/img/1.jpg'
        },
        {   
            id:2,
            name:'Fade',
            singer:'Alan walker',
            path:'./music/audio/2.mp3',
            image:'./img/img/2.jpg'
        },
        {   
            id:3,
            name:'Cartoon',
            singer:'Daniel live',
            path:'./music/audio/3.mp3',
            image:'./img/img/3.jpg'
        },
        {   
            id:4,
            name:'Warrio Mortals',
            singer:'Mortals',
            path:'./music/audio/4.mp3',
            image:'./img/img/4.jpg'
        },
        {   
            id:5,
            name:'Ertugrul Gazi',
            singer:'Ertugrul',
            path:'./music/audio/5.mp3',
            image:'./img/img/5.jpg'
        },
        {   
            id:6,
            name:'Electronic Music',
            singer:'Electtonic ',
            path:'./music/audio/6.mp3',
            image:'./img/img/6.jpg'
        },
        {   
            id:7,
            name:'Agar Tum Sath Ho',
            singer:'Tamashaa',
            path:'./music/audio/7.mp3',
            image:'./img/img/7.jpg'
        },
        {   
            id:8,
            name:'Suna Hai',
            singer:'NeHa kakker',
            path:'./music/audio/8.mp3',
            image:'./img/img/8.jpg'
        },
        {   
            id:9,
            name:'Diler',
            singer:'Saytynameva Jayate',
            path:'./music/audio/9.mp3',
            image:'./img/img/9.jpg'
        },
        {   
            id:10,
            name:'Duniya',
            singer:'Luka Chuppi',
            path:'./music/audio/10.mp3',
            image:'./img/img/10.jpg'
        },
        
        // Nhạc Việt
        {   
            id:11, 
            name:'Gánh Mẹ',
            singer:'Quách Beem',
            path:'./music/Ganh-Me-Luu-Minh-Tuan-Quach-Beem.mp3',
            image:'./img/GanhMe-QuachTuanBeen.jpeg'
        },
        {
            id:12,
            name:'Hà Giang Ơi',
            singer:'Quách Beem',
            path:'./music/Ha-Giang-Oi-Quach-Beem.mp3',
            image:'./img/HaGianOi-QuachBeem.jpeg'
        },
      
        {
            id:13,
            name:'Đi Về Đâu',
            singer:'Tiên Tiên',
            path:'./music/Di-Ve-Dau-BeeBB-x-CM1X-Remix-CM1X-Tien-Tien-BeeBB.mp3',
            image:'./img/divedau-tientien.jpeg'
        },
        {
            id:14,
            name:'LalaLove',
            singer:'BMG',
            path:'./music/LaLaLove-BGM-9835734.mp3',
            image:'./img/LalaLove-BMG.jpeg'
        },
        {
            id:15,
            name:'Nam Quốc Sơn Hà',
            singer:'Phương Mỹ Chi',
            path:'./music/Nam-Quoc-Son-Ha-DTAP-ERIK-NinjaZ-Rtee-Phuong-My-Chi.mp3',
            image:'./img/NamQuoc-PhuongMiChi.jpeg'
        },
        {
            id:16,
            name:'Rượu Mừng Hoá Người Dân',
            singer:'T Long',
            path:'./music/RuouMungHoaNguoiDung-TLong-9499024.mp3',
            image:'./img/RuouMung-NguoiDung-TLong.jpeg'
        },
        {
            id:17,
            name:'Huyền Thoaị',
            singer:'Phan Mạnh Quỳnh',
            path:'./music/Huyen-Thoai-Phan-Manh-Quynh.mp3',
            image:'./img/ThanThoai-PMQuynh.jpeg'
        },
        {
            id:18,
            name:'Ta Còn Đây',
            singer:'Justatee & Rhymastic',
            path:'./music/Ta-Con-Day-JustaTee-Rhymastic-SlimV.mp3',
            image:'./img/TaConDay.jpeg'
        },
        {
            id:19,
            name:'Tát Nước Đầu Đình',
            singer:'Binz & Lynklee',
            path:'./music/Tat-Nuoc-Dau-Dinh-Lynk-Lee-Binz.mp3',
            image:'./img/TatNuocDauDinh-Binz-Lynklee.jpeg'
        },
        {
            id:20,
            name:'Tình Anh Em',
            singer:'Lâm Chấn huy',
            path:'./music/Tinh-Anh-Em-Lam-Chan-Huy-Lam-Chan-Hai.mp3',
            image:'./img/tinhanhem-lamchanhuy.jpeg'
        },
        {
            id:21,
            name:'Tuý Âm',
            singer:'Xesi & Masew Nhật Nguyễn',
            path:'./music/Tuy-Am-Xesi-Masew-Nhat-Nguyen.mp3',
            image:'./img/divedau-tientien.jpeg'
        },
    
    ],
    DefineProperties:function(){
        Object.defineProperty(this,'currentSong',{
            get:function(){
               return this.song[this.caruentIndex];

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
        const htmls  = this.song.map((song,index) =>{
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
        const htmlsongs = this.song.map((song,index )=>{
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
    //     //  Render Pupolar ARtists

        const htlmartists = this.song.map(song =>{
             return `<li>
             <img src="${song.image}" alt="">
          </li>`
        })
        const htmlplsyartist = $('header .menu_song .pupolar_artists .pop-artists');
        pop_artists.innerHTML = htlmartists.join('');
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
            this.caruentIndex = this.song.length -1;
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
        if(this.caruentIndex >= this.song.length){
            this.caruentIndex = 0;
        }
        this.loadCurrentSong();


    },

    // Function Random Play music 
    RandomPlayList:function(){
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.song.length);
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
        this.makeAllBackground();   
         this.RepeactPlayList();
        
        
    }
}
app.start();