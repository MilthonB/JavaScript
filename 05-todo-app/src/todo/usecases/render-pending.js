import { Filter } from "../../store/todo.store";
import todoStore from "../../store/todo.store";


let element

export const updatedCountRender = (elementId)=>{

    if( !element ){
    }
    
    element =  document.querySelector(elementId)



        element.innerHTML = todoStore.getTodos( Filter.Pending ).length;


}