/* Ferramenta para automação de testes - npm install jasmine -g 
Para iniciar o jasmine, usar o "jasmine init"

dentro da pasta spec, criar um arquivo nomeArquivo-spec.js

*/

var Elevador = {
  andar: 0,
  subir: function(){
    this.andar++;
  },
  descer: function(){
    this.andar--;
  }
}

module.exports = Elevador;