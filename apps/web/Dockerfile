FROM node:20-alpine AS runtime
WORKDIR /app

COPY . .

RUN npm i -g pnpm
RUN pnpm install
RUN pnpm run build:image

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD node ./dist/server/entry.mjs