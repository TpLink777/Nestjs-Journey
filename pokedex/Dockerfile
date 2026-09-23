
FROM node:24-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile



FROM node:24-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN pnpm build



FROM node:24-alpine AS runner


WORKDIR /usr/src/app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod

COPY --from=builder /app/dist ./dist


CMD [ "pnpm","start:prod" ]