FROM node:22-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]

# Expose the port that Next.js uses
EXPOSE 3000