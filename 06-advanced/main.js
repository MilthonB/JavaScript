import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { callbackCompoenent } from './src/concepts/02-callbacks.js'
import { promisesComponent } from './src/concepts/03-primise'
import { promiseRaceComponent } from './src/concepts/04-pomise-race'
import { asyncComponent } from './src/concepts/05-async.'
import { asyncAwaitComponent } from './src/concepts/06-async-await'
import { asyncwWAIT2cOMPONENT } from './src/concepts/07-asyn-await'
import { forAwaitComponent } from './src/concepts/08-for-await'
import { generetaionFunctionComponent } from './src/concepts/09-generators'
import { generatorAsyncComponent } from './src/concepts/10-generator-async'
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
   
  </div>
`

const elementohtml = document.querySelector('.card')

generatorAsyncComponent( elementohtml )