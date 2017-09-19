# Composant(s) React ES6 sous forme de `library`
1. git clone git@git-prd.server.lan:barukh/minimal-react-es6-component.git
2. Renommer le nom dans le `package.json`
3. Coder les composants dans le repertoire `lib/components` ou `lib/elements` selon granularité

# Utiliser le(s) composant(s)
1. `npm run pack` va générer un fichier <package.name>-<version>.tgz
2. Dans le projet cible `npm install --save --no-optional ..\chemin vers le projet\<package.name>-<version>.tgz`

----------
# Liens
- [building-a-react-component-library-part-1](https://hackernoon.com/building-a-react-component-library-part-1-d8a1e248fe6c)
- [building-a-react-component-library-part-2](https://hackernoon.com/building-a-react-component-library-part-2-46fd4f77bb5c)
- [building-a-react-component-library-part-3](https://hackernoon.com/building-a-react-component-library-part-3-adb2cd0e021c)

----------
# Autres
**Problèmes installation NPM sous Windows**
- [https://github.com/npm/npm/issues/9204#issuecomment-216853959](https://github.com/npm/npm/issues/9204#issuecomment-216853959)
- Utiliser `npm install --no-optional`
- dans le `package.json` :
`
"optionalDependencies": {
    "fsevents": "*"
  }, 
`
