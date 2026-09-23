
FROM node:24 AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM node:24 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN pnpm build



FROM node:24 AS runner


WORKDIR /usr/src/app

COPY package.json pnpm.lock ./

RUN pnpm install --prod

COPY --from=builder /app/dist ./dist


CMD [ "pnpm","start" ]