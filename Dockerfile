FROM node
# Diretório dentro do container
WORKDIR /usr/app
# Copiando o package.json para o container
COPY package.json .
# Instalando as dependências do package copiado, dentro do container
RUN npm install --quiet
# Copia todos os arquivos para o container
COPY . .