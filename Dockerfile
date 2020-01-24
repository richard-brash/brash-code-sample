FROM node:10.13.0-alpine

WORKDIR /source/brash-code-challenge-api

COPY package.json /source/brash-code-challenge-api

RUN cd /source/brash-code-challenge-api && npm i --only=production

# Copy all other source code to work directory
ADD . /source/brash-code-challenge-api

# TypeScript
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]