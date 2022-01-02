FROM node:16 AS test

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV CI=true

RUN npm test

FROM node:16 AS build

COPY --from=test /usr/src/app .

ENV REACT_APP_BACKEND_URL=http://localhost:3001

CMD ["npm", "start"]
