function  tocaSom (idE LementoAudio{
} 
const listaDeTeclas = document.querySelectorAll(". tecla") ;

for(let contador = 0; contador < listaDeteclas . length; contador ++){
      const tecla = listaDeteclas [ contador ];
      const efeito = tecla.classList[1];
    const idAudio = `#som_${esfeito}`;
      tecla.onclik = function (){ 
        tocaSom idAudio);
        }
}