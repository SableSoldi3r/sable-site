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
    <img class="badge" src="img/badge/developed.gif"/>
    <img class="badge" src="img/badge/handcoded.gif"/>
    <img class="badge" src="img/badge/fuckai.gif"/>
    <img class="badge" src="img/badge/linux.gif"/>
    <img class="badge" src="img/badge/cheevos.gif"/>
    <img class="badge" src="img/badge/firefox.gif"/>
    <img class="badge" src="img/badge/metroid.gif"/>
    <img class="badge" src="img/badge/icytower.gif"/>
    <img class="badge" src="img/badge/winamp.gif"/>
    <img class="badge" src="img/badge/piracy.gif"/>
    <img class="badge" src="img/badge/limewire.gif"/>
    <img class="badge" src="img/badge/kazaa.gif"/>
    <img class="badge" src="img/badge/flash.gif"/>
    <img class="badge" src="img/badge/shockwave.gif"/>
    <img class="badge" src="img/badge/tamagotchi.gif"/>
    <img class="badge" src="img/badge/ytjunkie.gif"/>
    <img class="badge" src="img/badge/allyourbase.gif"/>`;
});
