var fs = require('fs'),
    Promise = require('promise');

function read(file) {
  return new Promise(function(fulfill, reject) {
    fs.readFile(file, function(err, data){
      if (err) {
        reject();
      } else {
        fulfill(data.toString());
      }
    });
  });
}

// read('my_file.txt').then((data) => {
//   console.log(data);
// });

/* Podemos encadear vários THEN */

read('my_file.txt')
.then((data) => {
  return '111111';
})
.then((data) => {
  return '222222';
})
.then((data) => {
  return '333333';
})
.done((data) => {
  console.log(data);
});

/* Promisses são promessas, funções que serão executadas em algum futuro, que nós não sabemos quando é.
Principal funcionalidade é evitar o callback hell
*/