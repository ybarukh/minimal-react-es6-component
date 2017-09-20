# Composant(s) React ES6 sous forme de `library`
1. git clone git@git-prd.server.lan:barukh/minimal-react-es6-component.git
2. *Débrancher* *(supprimer)* le `.git` et *brancher* vers le Repo GIT du projet
3. Renommer le nom dans le `package.json`
4. Coder les composants dans le repertoire `lib/components` ou `lib/elements` selon granularité

---

## Developper en Live
1. Créer le(s) composant(s) dans `lib/components/` ou `lib/elements`.   
Par Exemple : `lib/components/AwesomeComponent.js` 

2. Utiliser `sample/app/index.js`   
Par exemple:

```react

import React from 'react';
import { render } from 'react-dom';
import AwesomeComponent from '../../lib/components/AwesomeComponent.js';

class App extends React.Component {
 render() {
  return (
   <div>
    <p> Hello React!</p>
    <AwesomeComponent />
   </div>
  );
 }
}
```

3. Démarrer le serveur de DEV   
`npm run dev`

---

## Construire le(s) composant(s)

`npm run pack`   
Génére un fichier `<package.name>`-`<version>.tgz`

## Utiliser le(s) composant(s)

Dans le projet cible `npm install --save --no-optional ..\chemin vers le projet\<package.name>-<version>.tgz`

## Local publish

`npm run localpublish`   
Copie le `package.tgz` dans le répertoire réseau `Q:\AAG\javascript-npm-packages` 

----------
## Liens

- [building-a-react-component-library-part-1](https://hackernoon.com/building-a-react-component-library-part-1-d8a1e248fe6c)
- [building-a-react-component-library-part-2](https://hackernoon.com/building-a-react-component-library-part-2-46fd4f77bb5c)
- [building-a-react-component-library-part-3](https://hackernoon.com/building-a-react-component-library-part-3-adb2cd0e021c)

----------

## Autres

**Problèmes installation NPM sous Windows**
- [https://github.com/npm/npm/issues/9204#issuecomment-216853959](https://github.com/npm/npm/issues/9204#issuecomment-216853959)
- Utiliser `npm install --no-optional`
- dans le `package.json` :

```json
"optionalDependencies": {
    "fsevents": "*"
  }, 
```
