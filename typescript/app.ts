/* npm install typescript -g

Após instalar o módulo, usar tsc nomeArquivo

*/

interface Pessoa {
  nome: string;
}

function Ola(pessoa : Pessoa){
  return "Olá, " + pessoa.nome;
}

Ola({nome: "Silva"});