console.log('foo');

// const xmlhttp=new XMLHttpRequest();
// const file = 'You-Boy.mp3';
// // xmlhttp.open("GET",file,false);
// // xmlhttp.setRequestHeader("Range", "bytes=100-200");
// // xmlhttp.send();
// // console.info(xmlhttp); //--> returns only the partial content
//
//
function reqListener () {
  console.log(this.responseText);
}

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", 'music');
// oReq.setRequestHeader("Range", "bytes=0-10000");
// oReq.send();



function loadAudio (playerId, source) {
    var player = document.getElementById(playerId);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log('readyState: ' + request.readyState + ', status: ' + request.status)
        if (this.readyState == 4 && this.status >= 200) {
            var url = URL.createObjectURL(request.response);
            player.src = url;
            player.addEventListener('loaded', function(e) {
                URL.revokeObjectURL(player.src);
            });
            // player.play();
            console.log('should be able to play...');
            console.log(url);
        // Typical action to be performed when the document is ready:
        }
    };
    request.open("GET", source, true);
    // request.setRequestHeader("Range", "bytes=0-10000");
    request.responseType = 'blob';
    request.send();
}

loadAudio('player', 'music');
