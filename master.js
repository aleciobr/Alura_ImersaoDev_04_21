var listaGames = [
    "https://cdn.staticneo.com/boxshots/MjAxNS8=/the-legend-of-zelda-breath-of-the-wild_frontcover_large_M0c2RbZqNN05L3E.jpg",
    "https://www.mobygames.com/images/covers/l/56859-pokemon-blue-version-game-boy-front-cover.jpg",
    "https://www.mobygames.com/images/covers/l/364131-killer-instinct-definitive-edition-xbox-one-front-cover.png",
    "https://coverproject.sfo2.cdn.digitaloceanspaces.com/nintendo_64/n64_conkersbfd_au_label_thumb.jpg"];

function adicionar(){
    var novoGame = document.getElementById("link").value;
    var elementoGames = "<img src="+ novoGame + ">";
    var listaGame = document.getElementById("listaGame");
    listaGame.innerHTML = listaGame.innerHTML + elementoGames;
}

for(var i = 0; i < listaGames.length; i++){
    document.write("<img src="+ listaGames[i] +">");
}


//https://e.snmc.io/lk/o/x/e04470ea5d9798cdf355151a0b023418/6877919