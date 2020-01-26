# Treinaweb-nodejs

Executar arquivo com nodejs, no terminal:

    node nomeArquivo.js

Instalar o nodemon:

    npm install -g nodemon

Executar arquivo com nodemon:

    nodemon nomeArquivo.js

Diferentemente do nodejs, ele fica "escutando" as mudanças.

Para iniciar um package.json

    npm init
   
E sair respondendo as perguntas... ( nome do projeto, versão, descrição, arquivo de entrada, comando de teste, repositório do git e palavras chaves, nome do autor e licença )   


Após isso, caso compartilhe o projeto e outro desenvolvedor(es/as) quiserem utilizar o projeto, só precisão executar:

    npm install

E todas depedências e configurações serão baixadas.

Algumas dos pacotes instalados:

    npm install promise
    npm install jasmine --save-dev

Ao inserir a flag **--save-dev**, a depência é adicionada no **devDependencies**, enquanto para inserir nas depedências comum **--save**

Podemos diminuir a escrita do comando:

    npm i nomePacote -S
    npm i nomePacote -D

**-S** equivalente ao **--save**, enquanto **-D** ao **--save-dev**

Outra flag muito utilizada é **-g** que indica o módulo a ser instalado será **GLOBALMENTE** (disponível em toda máquina), enquanto sem essa flag é instalado apenas na **NODE_MODULES** 

### Falando sobre número de versões das depedências (MAJOR.MINOR.PATCH)

Temos ^ ~ 
Outros sinais <= >= < >

1. **"^7.x.x"** - Pode ser alterado o Minor e Patch / Ficar atento, quando o MINOR é trocado, algumas funcionalidades ficam obsoletas, podem continuar existindo / ou alguma funcionalidade mudou um pouco. ( Podendo quebrar a app )
2.**"~7.2.x"** - Vai alterar apenas o PATCH, que normalmente é apenas correção de pequenos BUGS ou problemas solucionados.

Podemos ainda deixar sem sinal, ou adicionar uma versão fixa **"8.0.1"** ( Jeito mais seguro, sempre baixa mesma função )
