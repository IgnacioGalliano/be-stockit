# Dockerfile
FROM node:22

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose port (same as used in your app)
EXPOSE 3000

# Start app
CMD ["npm", "start"]
