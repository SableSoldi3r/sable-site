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
    <img class="badge" src="img/badge/homebrew.gif"/>
    <img class="badge" src="img/badge/cli.gif"/>
    <img class="badge" src="img/badge/aim.gif"/>
    <img class="badge" src="img/badge/msn.gif"/>
    <img class="badge" src="img/badge/trillian.gif"/>
    <img class="badge" src="img/badge/teamspeak.gif"/>
    <img class="badge" src="img/badge/firefox.gif"/>
    <img class="badge" src="img/badge/thunderbird.gif"/>
    <img class="badge" src="img/badge/cheevos.gif"/>
    <img class="badge" src="img/badge/metroid.gif"/>
    <img class="badge" src="img/badge/gamecube.gif"/>
    <img class="badge" src="img/badge/dreamcast.gif"/>
    <img class="badge" src="img/badge/snes.gif"/>
    <img class="badge" src="img/badge/psp.gif"/>
    <img class="badge" src="img/badge/newgrounds.gif"/>
    <img class="badge" src="img/badge/icytower.gif"/>
    <img class="badge" src="img/badge/warcraft.gif"/>
    <img class="badge" src="img/badge/steam.gif"/>
    <img class="badge" src="img/badge/neopets.gif"/>
    <img class="badge" src="img/badge/pogo.gif"/>
    <img class="badge" src="img/badge/winamp.gif"/>
    <img class="badge" src="img/badge/piracy.gif"/>
    <img class="badge" src="img/badge/limewire.gif"/>
    <img class="badge" src="img/badge/kazaa.gif"/>
    <img class="badge" src="img/badge/musicbrainz.gif"/>
    <img class="badge" src="img/badge/audacity.gif"/>
    <img class="badge" src="img/badge/gimp.gif"/>
    <img class="badge" src="img/badge/flash.gif"/>
    <img class="badge" src="img/badge/dreamweaver.gif"/>
    <img class="badge" src="img/badge/shockwave.gif"/>
    <img class="badge" src="img/badge/tamagotchi.gif"/>
    <img class="badge" src="img/badge/ytjunkie.gif"/>
    <img class="badge" src="img/badge/coke.gif"/>
    <img class="badge" src="img/badge/bawls.gif"/>
    <img class="badge" src="img/badge/allyourbase.gif"/>`;
});
