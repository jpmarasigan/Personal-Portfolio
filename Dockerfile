# Stage 1: Build React App
FROM node:20-alpine AS build

# Set working directory in container
WORKDIR /app

# Install dependencies 
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# bUILD THE images
RUN npm run build

# Stage 2: Run with Apache Server
FROM httpd:2.4

# Set ServerName to suppress warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Copy built app to Apache public folder
COPY --from=build /app/build/ /usr/local/apache2/htdocs/

EXPOSE 80







