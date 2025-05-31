{
  "name": "tensor-visualizer",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://danishcorder.github.io/tensor-visualizer",
  "dependencies": {
    "katex": "^0.16.9",
    "plotly.js-dist-min": "^2.31.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-katex": "^3.1.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}