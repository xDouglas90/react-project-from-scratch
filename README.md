<h1 align="center">Projeto React do Zero</h1>
<img src="https://i.ibb.co/q0VvtmY/cover-reactjs.png" alt="Imagem cover do curso Ignite trilha ReactJS da Rocketseat">

> Projeto básico que apenas pega os repositórios do GitHub da Rocketseat e renderiza o nome, descrição e link para acessá-los.

### Realizações do Projeto

Projeto de estudos em React pelo curso Ignite da Rocketseat, com foco nos fundamentos básicos e nas configurações necessárias para utilizar a Lib sem utilizar comandos de criação automática, onde foi realizado:

- Configuração da estrutura de um projeto *ReactJS* do zero;
<!---<div align="center"><img src="https://i.ibb.co/5RN9mFk/Screenshot-from-2021-12-04-11-27-03.png" alt="Screenshot da estrutura de projeto ReactJS"></div>--->
- Configurações de dependências e plugins necessários, como:
    - Babel, Webpack, CSS/SASS loaders, Webpack DevServer, Source Maps, ambiente Dev e Prod;
> babel.config.js
```javascript
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
```
> webpack.config.js
```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

```

- Componentização:
    - Estado, Efeitos Colaterais, Imutabilidade;
- TypeScript em projetos ReactJS:
    - Configurações necessárias;
    
> tsconfig.json
```json
{
  "compilerOptions": {
    //"target": "es2016",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "react-jsx",
    //"module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "noEmit": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}

```

- Utilizaçao de extensão .tsx;
- Tipagem das props dos componentes;
> RepositoryList.tsx    
```typescript
interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}
``` 
- Tipagem do estado;
> RepositoryList.tsx      
```typescript
const [repositories, setRepositories] = useState<Repository[]>([]);
``` 
- Básico de React DevTools.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente de `node`
* Você instalou a versão mais recente de `yarn`

## 🚀 Instalando

Para instalar, após o clone do repositório, siga estas etapas:

- Entre na pasta do repositório clonado e no terminal:
```
yarn install
yarn dev
```


## ☕ Usando 

Agora basta abrir em um navegador: <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a>
