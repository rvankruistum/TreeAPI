# Tree API

This is a example application for a very simple API that returns a json file containing my favourite tree.

## Installation

To run locally simple run:

```
npm install
npm start
```

To deploy to a kubernets cluster use helm:

```
helm install --set image.id=sha256:7fb043ef1e95376a73e00fa437b60d3e423d6a6fdeaed5e646357cc68ff88236 tree-api ./helm
```

## CI/CD

The application will automatically build, test and deploy to a temporary cluster using Github Actions on every push, and PR to the main branch.

To run tests locally:
```
npm test
```

## Usage

Use curl (or any other way to send a GET request) to the service url:

```
curl localhost:8080/tree
```