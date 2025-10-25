# Multi-stage Dockerfile for development and production

# Base image
FROM node:20-alpine AS base
WORKDIR /app

# --- Development image -----------------------------------------------------
FROM base AS dev
ENV NODE_ENV=development
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install || true
COPY . .
# Vite dev server on 0.0.0.0 for container access
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# --- Build image -----------------------------------------------------------
FROM base AS build
ENV NODE_ENV=production
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

# --- Production runtime (Nginx) -------------------------------------------
FROM nginx:alpine AS prod
ENV NODE_ENV=production
COPY --from=build /app/dist /usr/share/nginx/html
# Minimal security headers (can be expanded as needed)
RUN printf '\nadd_header X-Content-Type-Options "nosniff" always;\nadd_header X-Frame-Options "SAMEORIGIN" always;\nadd_header Referrer-Policy "strict-origin-when-cross-origin" always;\n' \
  >> /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

