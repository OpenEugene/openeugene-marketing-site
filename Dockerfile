FROM mvpstudio/node:10 as react-build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM mvpstudio/node:10
WORKDIR /home/mvp/app
COPY --from=react-build /app/build ./build
RUN yarn global add serve
USER mvp

CMD ["-p", "3000"]
ENTRYPOINT ["serve", "-s", "build"]
