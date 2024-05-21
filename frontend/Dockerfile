# Get the container image
FROM node:22-alpine3.18

# Update and Upgrade the list of packages
RUN apk -U upgrade

# Install new minor version of npm
RUN npm install -g npm@10

# Create the frontend directory
WORKDIR /app

# Install the app dependencies
COPY srcs/package.json .
COPY srcs/package-lock.json .
RUN npm install

# Run the app in development mode
ENTRYPOINT ["npm", "run", "dev"]