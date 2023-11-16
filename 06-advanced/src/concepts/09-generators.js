import { heroes } from "../data/hero"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const generetaionFunctionComponent = (element) =>{

    console.log('generetaionFunctionComponent') 

    // promesas 
    const genId = idGenerator()


    const button = document.createElement('button')
    button.innerText = 'Click me'
    element.append(button)


    const renderButton = () => {

        const { value } = genId.next()
        button.innerText = ` Value: ${value}`
    }


    button.addEventListener('click', (event)=> {
        renderButton()
    })


}



function* idGenerator(  ) {

    let currentId  = 0

    while(true){
        yield ++currentId
    }


}

function* MyfirstGenratorFunction() {

    yield(' uno ')
    yield(' dos ')
    yield(' tres ')


    return'fin'
}
 

