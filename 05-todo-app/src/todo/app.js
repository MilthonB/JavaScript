
import html  from "./app.html?raw";


/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId) => {

    // cuando la funcion app es llamda
    (() =>{

        const app =  document.createElement('div')
        app.innerHTML = html // {{ name }}
        document.querySelector(elementId).append(app);

    })();

}