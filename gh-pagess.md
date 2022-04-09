## Instalar gh-pages

```sh
npm install gh-pages
```

## En archivo package.json | configurar

```json
"homepage": "https://nickname.github.io/name-project
```

Ejecutar el build

```sh
npm run build
```

package.json

```sh
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
}
```

deploy a github pages

```sh
npm run build
```
