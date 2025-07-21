# --- Build Stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY .env.example .env
RUN npm ci
COPY . .
RUN npm run build

# --- Production Stage ---
FROM nginx:alpine AS runner
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 