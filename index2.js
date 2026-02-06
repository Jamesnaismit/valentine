document.querySelector('video').onclick=function(){
    document.getElementById('body').innerHTML=`
    <video autoplay muted playsinline loop id="myVideo" class="video2" id="bear">
        <source src="ant.webm" type="video/mp4">
      </video>
    `
}