/* Precisamos mudar a porta, para que está no ambiente

process.env.PORT
Criar o package.json

Precisamos transformar em repo git, com git init 

heroku.toolbelt (instalar a ferramenta) / heroku login e se logar... Na pasta da aplicação, dar 'heroku create'

Para trabalhar com o mongodb, criar uma conta no mongoLab (mLab)
Após passo a passo, de criar usuário/banco

Então conectar usando o driver(uri) e substituir na chamada do MongoCliente.connect()
Commitar as mudanças no git, e push com (git push heroku master)

Para verificar se a instância tah funcionando: heroku ps:scale web=1

Verificar a app rodando: heroku open
*/