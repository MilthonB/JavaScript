import { User } from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';
import './render-modal.css' 
import modalHtml from './render-modal.html?raw'


let modal;
let form;
let loasUser = {}

/**
 * 
 * @param {Number | Number} id identificado de usuario 
 */
export const showModal = async( id ) =>{
    loasUser = {}

    modal?.classList.remove('hide-modal')

    const user =  await getUserById( id )

    setFormValue(user)

}


export const hideModal = ()=>{
    modal?.classList.add('hide-modal')
    form?.reset()
}

/**
 * 
 * @param {User} user 
 */
const setFormValue = ( user ) =>{

    form.querySelector('[name="firstName"]').value = user.firstName
    form.querySelector('[name="lastName"]').value = user.lastName
    form.querySelector('[name="balance"]').value = user.balance
    form.querySelector('[name="isActive"]').checked = user.isActive

    loasUser = user

}




/**
 * 
 * @param {HTMLDivElement} element 
 * @param{ (userLike) => Promise<void> } callback
 */
export const renderModal = (element, callback )=>{

    if( modal ) return
    
    
    modal = document.createElement('div')
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form= modal.querySelector('form');

    form.addEventListener('submit',async(event) => {
        event.preventDefault()  

        const formDat = new FormData( form );
        const userLike = {...loasUser}


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

        }   

        //TODO: guardar usuario
        
        await callback(userLike)

        hideModal();

        
    })

    modal.addEventListener('click', (event) =>{

        if( event.target.className === 'modal-container' ) {
            hideModal()
        }
    })

    element.append(modal)

}