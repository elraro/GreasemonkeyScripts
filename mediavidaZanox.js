// ==UserScript==
// @name        zanox tpm
// @namespace   elraro@elraro.eu
// @description Block zanox links in MV
// @include http*://mediavida.com
// @include http*://www.mediavida.com
// @version     1
// @grant       none
// ==/UserScript==
var scriptCode = new Array(); // Vamos a guardar el script aqui
scriptCode.push('function amazon(){}'); // Vamos a reemplazar la función
var script = document.createElement('script'); // Creamos el objeto script
script.innerHTML = scriptCode.join('\n');
scriptCode.length = 0;
document.getElementsByTagName('head') [0].appendChild(script);
// fuk u MV
