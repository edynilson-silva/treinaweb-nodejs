var Cachorro = {
  nome: 'Rex',
  idade: 3,
  latir: () => {
    console.log('Au au!');
  }
};

/* Para puder utilizar esse arquivo em outro lugar, é necessário EXPORTAR o módulo */
module.exports = Cachorro;