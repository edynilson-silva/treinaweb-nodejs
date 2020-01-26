// event emitter
var EventEmitter = require('events');

/*

var emitter = new EventEmitter();

emitter.on('meu_evento', function (numero) {
  console.log('meu evento', numero);
});

emitter.emit('meu_evento', 123);
*/

/* No emissor de eventos, podemos passar parametros (quantos eu quiser) */

class Cao extends EventEmitter {
  latir() {
    console.log('Au au!');
  }
}

/* Podemos criar diversos listeners do mesmo evento */
var Rex = new Cao();
Rex.on('pessoa_no_portao', Rex.latir);

Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');
Rex.removeListener('pessoa_no_portao', Rex.latir);
Rex.emit('pessoa_no_portao');

/* Temos a função .once() similar ao .on() mas executa a função apenas UMA VEZ */