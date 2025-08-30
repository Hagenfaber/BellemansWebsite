# Bun-based build and run for SSR app
FROM oven/bun:1-alpine

WORKDIR /app

# Copy manifest files first for better caching
COPY package.json .
# If bun.lockb exists in the repo, copy it for deterministic installs
# We'll copy both common lockfiles; Bun will use bun.lockb if present
COPY bun.lockb* package-lock.json* ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Build-time environment for Vite
ARG VITE_STRAPI_URL
ENV VITE_STRAPI_URL=${VITE_STRAPI_URL}

# Build client and server bundles via package.json scripts
RUN bun run build

# The app's server reads PORT (defaults to 5173); we'll expose 3000 to align with previous image
ENV PORT=3000
EXPOSE 3000

# Start the production server (Express + sirv)
CMD ["bun", "run", "preview"]