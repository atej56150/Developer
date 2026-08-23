# Use Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Serve the built React app
CMD ["serve", "-s", "build"]
