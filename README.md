# Classtr
Lightweight function to generate React className string

## Install
yarn
```bash
yarn add classtr
```
npm
```bash
npm install classtr --save
```

## Usage
```jsx
import cs from 'classtr';

cs([
  'button',
  true ? 'border' : null,
  false ? 'shadow': null,
]);
// output: 'button border'
```
