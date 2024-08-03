# ### Build Step
# # pull the Node.js Docker image
# FROM node:22.2 as builder
# # change working directory
# WORKDIR /usr/src/app
# # copy the package.json files from local machine to the workdir in container
# COPY package*.json ./
# # run npm install in our local machine
# RUN npm ci
# # copy the generated modules and all other files to the container
# COPY . .
# # build the application
# RUN npm run build
# ### Serve Step
# # pull the Node.js Docker image
FROM node:22.4-alpine3.20
# change working directory
WORKDIR /app
# copy files from previous step
COPY ./build/ ./build/
COPY package.json .
COPY ./node_modules/ ./node_modules/
# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000
# the command that starts our app
CMD ["node", "build"]
# ENTRYPOINT /bin/sh