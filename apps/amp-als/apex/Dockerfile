FROM mirror.gcr.io/caddy:2.9.1

RUN apk add --no-cache curl jq

HEALTHCHECK --interval=2s --timeout=3s --retries=20 --start-period=5s \
  CMD curl --fail --silent "localhost:8400/health" | jq '.status' | grep healthy || exit 1

COPY Caddyfile /etc/caddy/