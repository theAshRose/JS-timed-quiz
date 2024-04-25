# Use nginx stable Alpine image
FROM nginx:stable-alpine

# Copy static files to nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 (default for HTTP)
EXPOSE 80

# No CMD needed, using default CMD of nginx image
