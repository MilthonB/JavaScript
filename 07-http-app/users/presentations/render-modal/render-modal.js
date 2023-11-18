import './render-modal.css' 
import modalHtml from './render-modal.html?raw'


let modal;
let form;

export const showModal = () =>{

    modal?.classList.remove('hide-modal')


}


export const hideModal = ()=>{
    modal?.classList.add('hide-modal')
    form?.reset()
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element)=>{

    if( modal ) return
    
    
    modal = document.createElement('div')
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form= modal.querySelector('form');

    form.addEventListener('submit',(event) => {
        event.preventDefault()  

        const formDat = new FormData( form );
        const userLike = {}
        for (const [key, value] of formDat) {
            if( key === 'balance' ){
                userLike[key] = +value;
                continue
            }

            if( key === 'isActive' ){
                userLike[key] = (value === 'on')?true:false
                continue
            }
            userLike[key] = value

            console.log(userLike)
        }   

        //TODO: guardar usuario

        hideModal();

        
    })

    modal.addEventListener('click', (event) =>{

        if( event.target.className === 'modal-container' ) {
            hideModal()
        }
    })

    element.append(modal)

}