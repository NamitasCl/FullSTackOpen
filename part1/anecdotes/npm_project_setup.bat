
@echo off
echo Iniciando proyecto NPM...
echo
call npm init -y
echo Instalando Babel y sus dependencias...
call npm install --save-dev @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react
echo Instalando Webpack, Webpack Dev Server y HTML Plugin...
call npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
echo Instalando React y React-DOM...
call npm install react react-dom
echo Creando carpeta...
mkdir public
echo Creando archivo index.html con contenido especificado...
echo ^<!DOCTYPE html^> > public\index.html
echo ^<html lang="en"^> >> public\index.html
echo ^<head^> >> public\index.html
echo ^<meta charset="UTF-8"^> >> public\index.html
echo ^<meta http-equiv="X-UA-Compatible" content="IE=edge"^> >> public\index.html
echo ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> public\index.html
echo ^<title^>Aplicacion React^</title^> >> public\index.html
echo ^</head^> >> public\index.html
echo ^<body^> >> public\index.html
echo ^<div id="root"^>^</div^> >> public\index.html
echo ^</body^> >> public\index.html
echo ^</html^> >> public\index.html
echo Archivo index.html creado exitosamente en la carpeta public.
echo Creando carpeta src...
mkdir src
echo Creando archivo index.js con contenido especificado...
echo import React from 'react' > src\index.js
echo import { createRoot } from 'react-dom/client'; >> src\index.js
echo. >> src\index.js
echo const App = () =^> { >> src\index.js
echo     return ( >> src\index.js
echo         ^<h1^> >> src\index.js
echo             Hello world! I am using React >> src\index.js
echo         ^</h1^> >> src\index.js
echo     ) >> src\index.js
echo } >> src\index.js
echo. >> src\index.js
echo const container = document.getElementById('root'); >> src\index.js
echo const root = createRoot(container); >> src\index.js
echo root.render(^<App/^>); >> src\index.js
echo Archivo index.js creado exitosamente en la carpeta src.
echo Creando archivo .babelrc ...
echo Creando archivo .babelrc con contenido especificado...
(echo { && echo    ^"presets^": [^"@babel/preset-env^",^"@babel/preset-react^"] && echo }) > .babelrc
echo Archivo .babelrc creado exitosamente.
echo Creando archivo webpack.config.js...
echo const HtmlWebpackPlugin = require('html-webpack-plugin'); > webpack.config.js
echo const path = require('path'); >> webpack.config.js
echo. >> webpack.config.js
echo module.exports = { >> webpack.config.js
echo   entry: './src/index.js', >> webpack.config.js
echo   mode: 'development', >> webpack.config.js
echo   output: { >> webpack.config.js
echo     path: path.resolve(__dirname, './dist'), >> webpack.config.js
echo     filename: 'index_bundle.js', >> webpack.config.js
echo   }, >> webpack.config.js
echo   target: 'web', >> webpack.config.js
echo   devServer: { >> webpack.config.js
echo     port: '5000', >> webpack.config.js
echo     static: { >> webpack.config.js
echo       directory: path.join(__dirname, 'public') >> webpack.config.js
echo     }, >> webpack.config.js
echo     open: true, >> webpack.config.js
echo     hot: true, >> webpack.config.js
echo     liveReload: true, >> webpack.config.js
echo   }, >> webpack.config.js
echo   resolve: { >> webpack.config.js
echo     extensions: ['.js', '.jsx', '.json'], >> webpack.config.js
echo   }, >> webpack.config.js
echo   module: { >> webpack.config.js
echo     rules: [ >> webpack.config.js
echo       { >> webpack.config.js
echo         test: /\.(js^|jsx)$/,  >> webpack.config.js
echo         exclude: /node_modules/,  >> webpack.config.js
echo         use: 'babel-loader',  >> webpack.config.js
echo       }, >> webpack.config.js
echo     ], >> webpack.config.js
echo   }, >> webpack.config.js
echo   plugins: [ >> webpack.config.js
echo     new HtmlWebpackPlugin({ >> webpack.config.js
echo       template: path.join(__dirname, 'public', 'index.html') >> webpack.config.js
echo     }) >> webpack.config.js
echo   ] >> webpack.config.js
echo }; >> webpack.config.js
echo Archivo webpack.config.js creado exitosamente.
echo Recuerda agregar lo siguiente a tu archivo package.json
echo "scripts": {
echo    "start": "webpack-dev-server .",
echo    "build": "webpack ."
echo  }
echo Configuracion completa.