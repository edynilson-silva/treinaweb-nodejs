var fs = require('fs');

/* Escrita do arquivo */

/* 1 - Novo do arquivo que pretendo criar / 2 - O que eu quero escrever / 3 - Por ser assíncrona, é necessário passar função callback */
fs.writeFile('my_file.txt', 'Curso de NodeJS', function (err) {
  if (err) {
    console.error(err);
  }

  console.log('Arquivo Criado!');
});

/* Para fazer LEITURA do arquivo / Arquivo que pretendo ler e uma função de callback */

fs.readFile('my_file.txt', function(err, data){
  if (err) {
    console.error(err);
  }

  console.log(data.toString());
});

/* Temos a appendFile(), enquanto a writeFile() sempre vai escrever um arquivo novo / enquanto a primeira, 
vai sempre o conteúdo no final do arquivo  */

fs.appendFile('my_file.txt', 'Curso de NodeJS', function (err) {
  if (err) {
    console.error(err);
  }

  console.log('Arquivo Criado!');
});

/* Essas funções possuem uma versão SÍNCRONA, adicionar ao nome da função Sync

Quando usamos assíncrona, precisamos passar uma função de CALLBACK
Enquanto na síncrona, não há necessidade 

*/

var data = fs.readFileSync('my_file.txt');
console.log(data.toString());