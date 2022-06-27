function next(count,m){
  let next = document.querySelector(".right");
  next.addEventListener("click" , function(){
    console.log(count);
    count++;
    if(count>m.items.length-1){
      count = 0;
    }
    let title = document.querySelector("#title");
    title.innerHTML = m.items[count].snippet.title;
    console.log(m.items[count].snippet.resourceId.videoId);
    youtubeId = m.items[count].snippet.resourceId.videoId;
    player.destroy();
    doplayBtn.classList.add("playback");
    onYouTubeIframeAPIReady();
  })
}

function prev(count,m){
  let prev = document.querySelector(".left")
  prev.addEventListener("click",function(){
    console.log(count);
    if(count <= 0){
      count = m.items.length;
    }
    count--;
    let title = document.querySelector("#title");
    title.innerHTML = m.items[count].snippet.title;
    // console.log(music.items[c].snippet.resourceId.videoId);
    youtubeId = m.items[count].snippet.resourceId.videoId;
    player.destroy();
    doplayBtn.classList.add("playback");
    onYouTubeIframeAPIReady();
  })
}


// 配列
const musicID = {
    cloudy:"PL536JkiWS8TkDMFEx93YPZcl1OygrYei0",
    rain:"PL536JkiWS8TkQVOfT8ElJr-PhseQVTcAh",
    sunny:"PL536JkiWS8TkB2FylJFzCynnE4yulXhcw"
}
// 天気API
const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json`

fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(weather){
            let record = document.querySelector(".record");
            const we = weather[0].timeSeries[0].areas[0].weathers[0];
            console.log(we);
            if(we.startsWith("晴れ")){
              let music = musicID.sunny;
              let secondurl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${music}&key=AIzaSyAwVnKz7L1sRgukz6PEmS4FdyW1TekXIk8`;
              console.log(secondurl);
              fetch(secondurl)
              .then(function(response){
                return response.json();
              })
              .then(function(music){
                let record_img = document.querySelector(".record_img");
                  console.log(record_img);
                  record_img.src = "./img/record_sunny.png";
                  console.log(music);
                  // 背景
                  let back = document.querySelector(".main");
                  console.log(back);
                  back.classList.add("sunny");
                  // メインタイトル
                  let main_title = document.querySelector(".main-title")
                  console.log(main_title);
                  main_title.classList.add("sunny-title");
                  window.addEventListener("load",function(){
                    let c = Math.floor(Math.random()*(music.items.length));
                    console.log(c);
                    console.log(music.items[c].snippet.title);
                    let title = document.querySelector("#title");
                    title.innerHTML = music.items[c].snippet.title;
                    title.style.color = "#f2112f"
                      console.log(music.items[c].snippet.resourceId.videoId);
                      youtubeId = music.items[c].snippet.resourceId.videoId;
                      player.destroy();
                      // onYouTubeIframeAPIReady();
                      // 次の曲
                      next(c,music);
                      // 前の曲
                      prev(c,music);
                    })
                })
              console.log("晴れ");
            }else if(we.startsWith("くもり")){
              let music = musicID.cloudy;
              let secondurl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${music}&key=AIzaSyAwVnKz7L1sRgukz6PEmS4FdyW1TekXIk8`;
              console.log(secondurl);
  
              fetch(secondurl)
                .then(function(response){
                    return response.json();
                })
                .then(function(music){
                  let record_img = document.querySelector(".record_img");
                  console.log(record_img);
                  record_img.src = "./img/record_cloudy.png";
                  // 背景
                  let back = document.querySelector(".main");
                  console.log(back);
                  back.classList.add("cloudy");
                  // メインタイトル
                  let main_title = document.querySelector(".main-title")
                  console.log(main_title);
                  main_title.classList.add("cloudy-title");
                    console.log(music);
                    window.addEventListener("load",function(){
                      let c = Math.floor(Math.random()*(music.items.length));
                      console.log(c);
                      console.log(music.items[c].snippet.title);
                      let title = document.querySelector("#title");
                      title.innerHTML = music.items[c].snippet.title;
                      title.style.color = "#ddff00"
                      console.log(music.items[c].snippet.resourceId.videoId);
                      youtubeId = music.items[c].snippet.resourceId.videoId;
                      console.log(youtubeId);
                      player.destroy();
                      onYouTubeIframeAPIReady();
                      // 次の曲
                      next(c,music);
                      // 前の曲
                      prev(c,music);
                    })

                })
              console.log("くもり")
            }else if(we.startsWith("雨")){
              let music = musicID.rain;
              let secondurl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${music}&key=AIzaSyAwVnKz7L1sRgukz6PEmS4FdyW1TekXIk8`;
              console.log(secondurl);
  
              fetch(secondurl)
                .then(function(response){
                    return response.json();
                })
                .then(function(music){
                  let record_img = document.querySelector(".record_img");
                  console.log(record_img);
                  record_img.src = "./img/record_rain.png";
                  // 背景
                  let back = document.querySelector(".main");
                  console.log(back);
                  back.classList.add("rain");
                  // メインタイトル
                  let main_title = document.querySelector(".main-title")
                  console.log(main_title);
                  main_title.classList.add("rain-title");
                    console.log(music);
                    window.addEventListener("load",function(){
                      let c = Math.floor(Math.random()*(music.items.length));
                      console.log(c);
                      console.log(music.items[c].snippet.title);
                      let title = document.querySelector("#title");
                      title.innerHTML = music.items[c].snippet.title;
                      title.style.color = "#00c8ff"
                      console.log(music.items[c].snippet.resourceId.videoId);
                      youtubeId = music.items[c].snippet.resourceId.videoId;
                      player.destroy();
                      onYouTubeIframeAPIReady();
                      console.log(c);
                      // 次の曲
                      next(c,music);
                      // 前の曲
                      prev(c,music);
                    })
                })
              console.log("雨");
            }
        })

// youtubeAPI
        
        // 2. This code loads the IFrame Player API code asynchronously.
      // 2. 変数tagにscriptタグを作って入れる。Element=要素、Attrubute=属性
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      // 3. APIのコードを読み込んでから、この関数を<iframe>内に影響させる。
      let player;
      let youtubeId = ''
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: youtubeId,
          playerVars: {
			      //③パラメータの設定
			      playsinline: 1,
			      controls: 1,
		      },
          events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      // 4. このAPIは、video playderが準備できたら、この関数を呼び出します。
      function onPlayerReady(event) {
        event.target.playVideo();
        let currentVol = 50; //②最初のボリュームを設定（0〜100）
        event.target.setVolume(currentVol); //③Playerのボリュームに設定
        document.querySelector('#volume').value = currentVol; //④rangeFormに音量を設定
        // document.querySelector('#volumeNum').textContent = currentVol; //⑤テキストにも音量を数値で表示
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      /* 5. video playerのステート（状態）が変更されたら、この関数を呼び出す。
          動画を再生するときの設定は、state=1にしておきます。
          プレイヤーは、6000ミリ秒後に終了します。 */
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      //停止関数
      function stopVideo() {
        player.stopVideo();
      }

      //再生関数
      function playTheVideo() {
        player.playVideo();
      }

      //一時停止関数
      function pauseTheVideo() {
        player.pauseVideo();
      }

      //ミュート関数
      function onMute() {
        //ミュートの時、trueを返すのでミュートを解除します。
        if (player.isMuted()) {
          player.unMute();
        } else {
          //ミュートが解除されている時はfalseなので、ミュートにします。
          player.mute();
        }
      }

      //10秒前にの関数
      function onePrev() {
        let currentTime = player.getCurrentTime();
        player.seekTo(currentTime - 10);
      }
      
      //10秒後にの関数
      function oneNext() {
        let currentTime = player.getCurrentTime();
        player.seekTo(currentTime + 10);
      }

      //ボリューム関数
      function volumeFn(vol) {
        let currentVol = player.getVolume();
        player.setVolume(vol);
      }

      //再生スピード関数
      function playSpeed(num) {
        //setPlaybackRateが再生スピードをセットするメソッド
        console.log(num);
        player.setPlaybackRate(num);
        player.playVideo();
      }

      //再生イベント
      let doplayBtn = document.querySelector('#doplay');
      doplayBtn.addEventListener('click', function () {
        let record_img = document.querySelector(".record_img");
        console.log(record_img);
        if(doplayBtn.className === "playback"){
          record_img.classList.remove("rotate");
          pauseTheVideo();
          doplayBtn.classList.remove("playback");
        }else{
          playTheVideo();
          record_img.classList.add("rotate");
          doplayBtn.classList.add("playback");
        }
        console.log(doplayBtn.className);
      });

      // //停止イベント
      // let dostopBtn = document.querySelector('#dostop');
      // dostopBtn.addEventListener('click', function () {
      //   stopVideo();
      // });

      // //一時停止イベント
      // let dopauseBtn = document.querySelector('#dopause');
      // dopauseBtn.addEventListener('click', function () {
      //   pauseTheVideo();
      // });

      //ボリュームイベント
      let volumeBtn = document.querySelector('#volume');
      // let volumeTxt = document.querySelector('#volumeNum');
      volumeBtn.addEventListener('change', function () {
        volumeFn(this.value);
        // volumeTxt.textContent = this.value;
      });