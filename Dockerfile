FROM node:21.5.0-alpine3.19

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lickfile

COPY . .

CMD ["yarn", "dev"]
