const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function () {
    header.innerHTML = `
    <span style="font-size:3em">Sable's Site</span><br/>
    <img src="img/sable.gif"/>
    <hr/>
    <a href="index.html">About Me</a> -
    <a href="cheevos.html">Achievements</a> -
    <a href="links.html">Links</a>`;

    footer.innerHTML = `
    <img src="img/badge/developed.gif"/>
    <img src="img/badge/handcoded.gif"/>
    <img src="img/badge/fuckai.gif"/>
    <img src="img/badge/linux.gif"/>
    <img src="img/badge/cheevos.gif"/>
    <img src="img/badge/firefox.gif"/>
    <img src="img/badge/metroid.gif"/>
    <img src="img/badge/icytower.gif"/>
    <img src="img/badge/winamp.gif"/>
    <img src="img/badge/piracy.gif"/>
    <img src="img/badge/limewire.gif"/>
    <img src="img/badge/kazaa.gif"/>
    <img src="img/badge/flash.gif"/>
    <img src="img/badge/shockwave.gif"/>
    <img src="img/badge/tamagotchi.gif"/>
    <img src="img/badge/ytjunkie.gif"/>
    <img src="img/badge/allyourbase.gif"/>`;
});
