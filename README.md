## This is the Marketing Website for Open Eugene, a code for America Brigade
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There are three ways to run this project: 
1. Use the Available Scripts
2. Use Docker
3. Use Kubernetes

Be sure to tear down each instance of the run before trying out a different one.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
- Don't do this

### Stop app

Stop the app using ctl+c.

## Run the App From Docker

### Install the image and container

- Install Docker
- Build the image with `docker build -t openeugene-marketing:0.1.2 .`

### Run the app
- Run the image with `docker run -p 3000:3000 openeugene-marketing:0.1.2`
- Open a browser and go to `localhost:3000`

### Close down the app
 Stop the app using ctl+c.

## Run the App From Kubernetes

### Install Kubernetes
- Look online to find how to install at least a single node k8s cluster.
- There are many ways to run k8s, including KinD, microk8s, and others.

### Install the namespaces, apply the k8s files
```bash
    $ kubectl create namespace openeugene-marketing-stage
    $ kubectl create namespace openeugene-marketing-prod
    $ kubectl apply -f ./kube
```

### Run the app
- Wait for the pod to be deployed. You can see if the pod is running with `kubectl get pods -n openeugene-marketing`
- See which IP address the app is running on with `kubectl get service -n openeugene-marketing`
- Open a browser and point to the IP address. It will automatically be using port 80, so no port need be specified.

### Shut down app
- `kubectl kubectl delete namespace openeugene-marketing-stage`
- `kubectl kubectl delete namespace openeugene-marketing-prod`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
