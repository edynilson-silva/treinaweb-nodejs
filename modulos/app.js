/* E importamos o módulo com require() */

var ModuloCachorro = require('./cachorro');
/* Não é obrigatório, jogar o módulo dentro de uma variável  */

console.log(ModuloCachorro.nome);
ModuloCachorro.latir();

/* Posso chamar direto... */
require('./cachorro').latir();