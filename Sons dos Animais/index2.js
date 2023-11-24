function tocarSom(animal) {
  document.getElementById(`${animal}_som`).play(5);

  var audioElement = document.getElementById(`${animal}_som`);
  audioElement.play();
  audioElement.addEventListener('timeupdate', function() {
    if (audioElement.currentTime >= 5) {
      audioElement.pause(1);
      audioElement.currentTime = 0;
    }
  });
}

function atribuirEvento(animal, classe) {
  document.querySelector(`.${classe}`).onclick = () => tocarSom(animal);
}

atribuirEvento("cachorro", "som_cachorro");
atribuirEvento("chimpanze", "som_chimpanze");
atribuirEvento("elefante", "som_elefante");
atribuirEvento("gato", "som_gato");
atribuirEvento("gorilla", "som_gorilla");
atribuirEvento("jacare", "som_jacare");
atribuirEvento("leopardo", "som_leopardo");
atribuirEvento("lobo", "som_lobo");
atribuirEvento("tigre", "som_tigre");

document.getElementById('parar').onclick = function() {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
};

