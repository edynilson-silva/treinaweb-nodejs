/* No require quando usamos ./ estamos se referindo ao caminho relativo, 
quando inserimos apenas o nome do pacote, o node buscará dentro da NODE_MODULES
Pacote instalado - npm install promise
*/

var promise = require('promise');

/* A propriedade SCRIPTS do package.json, serve para automatizar comandos
Para executar um script: NPM RUN nomeDoSCRIPT

Exemplo para criar um arquivo a partir do SCRIPT

No objeto SCRIPT
"create file": "touch log.txt"
"ping_log": "ping www.google.com.br > log.txt"

*/