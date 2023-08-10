cd server

npm init -y  *instala o package.json*

package.json -> muda o "main": **"index.js"** para **"server.js"** 

touch server.js *cria um arquivo server.js*

npm i express *cria express*

npm i nodemon -D *toda mudança atualiza o servidor*


package.json ->     "start": "node server",
                    "dev": "nodemon server"
                    

npm run dev

cd ..


cd client

npx create-react-app .

package.json -> "proxy": "http://localhost:5000", 



