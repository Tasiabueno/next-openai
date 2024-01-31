# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Specify the command to run on container startup
CMD ["npm", "start"]
