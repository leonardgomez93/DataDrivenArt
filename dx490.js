window.onload = function() {
  gapi.client.setApiKey('AIzaSyARa9dgyWAPOYJJne3R5Qg1ZnKBHpiPmRw');
  gapi.client.load('youtube', 'v3', function() { 
    makeRequest();
  });
  $('.marquee1').marquee({
    duration: 12500,
    duplicated: true,
    delayBeforeStart: 0,
    direction: 'left'
  });

  $('.marquee3').marquee({
    duration: 12500,
    duplicated: true,
    delayBeforeStart: 0,
    direction: 'right'
    });
}

function makeRequest() {
  var count = 1;
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: 'democrat|republican -democratic',
    part: 'snippet', 
    maxResults: 30
  });
  request.execute(function(response)  {                    
    $('#results1').empty();
    $('#results3').empty();
    
    var srchItems = response.result.items;                  
    $.each(srchItems, function(index, item) {
      vidTitle = item.snippet.title;
      //vidTitle = vidTitle.toLowerCase(); 
      vidTitle2 = vidTitle.replace("democrat", "PARTY");
      vidTitle2 = vidTitle2.replace("republican", "PARTY");
      vidTitle2 = vidTitle2.replace("gop", "PARTY");
      vidTitle2 = vidTitle2.replace("his", "THEIR");
      vidTitle2 = vidTitle2.replace("her", "THEIR");
      vidTitle2 = vidTitle2.replace("clinton", "DOE");
      vidTitle2 = vidTitle2.replace("trump", "DOE");
      vidTitle2 = vidTitle2.replace("donald", "PRESIDENT");
      vidTitle2 = vidTitle2.replace("hillary", "PRESIDENT");
      vidTitle2 = vidTitle.replace("Democrat", "PARTY");
      vidTitle2 = vidTitle2.replace("Republican", "PARTY");
      vidTitle2 = vidTitle2.replace("GOP", "PARTY");
      vidTitle2 = vidTitle2.replace("His", "THEIR");
      vidTitle2 = vidTitle2.replace("Her", "THEIR");
      vidTitle2 = vidTitle2.replace("clinton", "DOE");
      vidTitle2 = vidTitle2.replace("Trump", "DOE");
      vidTitle2 = vidTitle2.replace("Donald", "PRESIDENT");
      vidTitle2 = vidTitle2.replace("Hillary", "PRESIDENT");
      vidId = item.id.videoId; 
      //vidUrl = 'https://www.youtube.com/watch?v='
      //vidThumburl =  item.snippet.thumbnails.default.url;                 
      //vidThumbimg = '<a href="'+vidUrl+vidId+'" target="_blank"><img class="thumb" src="'+vidThumburl+'" alt="No  Image Available." style="width:200px;height:150px"></a>';  
      //vidThumbimg = ''+vidId;    
      if (count % 2 == 1) {
        $('#results1').append(" " + vidTitle2 + " | " + " ");
      } else {        
        $('#results3').append(" " + vidTitle2 + " | " + " ");
      }
      count++;
    })
  })  
}

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  var player1;
  var player2;
  var player3;
  var player4;
  var player5;
  var player6;
  var player7;
  var player8;
  var player9;
  var player10;
  
  function onYouTubeIframeAPIReady() {
    
    player1 = new YT.Player('player1', {
      height: '1',
      width: '1',
      playerVars: {
        autoplay: 1,
        loop: 1,
        disablekb: 1,
        controls: 0,
        showinfo: 0,
        playlist: 'wFEqVARTYkY',
        modestbranding: 1},
        events: {
          'onReady': onPlayerReady,

        },
        videoId: 'wFEqVARTYkY'
      });
    player2 = new YT.Player('player2', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: '7ynq8qrO7Gw',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
          videoId: '7ynq8qrO7Gw'
        });
    player3 = new YT.Player('player3', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: '2O6Nmx_kZMQ',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
          videoId: '2O6Nmx_kZMQ'
        });
    player4 = new YT.Player('player4', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: 'UsESl9kJ2OE',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
        videoId: 'UsESl9kJ2OE'
      });
      player5 = new YT.Player('player5', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: 'mCQ9NM9DS4o',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
        videoId: 'mCQ9NM9DS4o'
      });
    player6 = new YT.Player('player6', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: 'OZHp4JLWjNw',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
        videoId: 'OZHp4JLWjNw'
      });
    player7 = new YT.Player('player7', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: 'fV6I8yenYiM',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
        videoId: 'fV6I8yenYiM'
      });
    player8 = new YT.Player('player8', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: 'ny3bOmey-BE',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
        videoId: 'ny3bOmey-BE'
      });
    player9 = new YT.Player('player9', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: 'xoPLo1Tq9qI',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
        videoId: 'xoPLo1Tq9qI'
      });
    player10 = new YT.Player('player10', {
        height: '1',
        width: '1',
        playerVars: {
          autoplay: 1,
          loop: 1,
          disablekb: 1,
          controls: 0,
          showinfo: 0,
          playlist: 'h6FUt8DVCug',
          modestbranding: 1},
          events: {
            'onReady': onPlayerReady,
          },
        videoId: 'h6FUt8DVCug'
      });
      
                         

  }
  function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(Math.floor(Math.random() * (100)) + 1);
  }

