FROM node:13.8.0 as react-build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:13.8.0
RUN yarn global add serve
WORKDIR /app
COPY --from=react-build /app/build ./build
CMD ["serve", "-s", "build", "-p", "3000"]

