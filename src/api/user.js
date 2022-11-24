import {EMAIL, NOMBRE, APELLIDO, IMAGEN} from '../utils/constants';
export function setData(data){
    localStorage.setItem(EMAIL, data.email);
    localStorage.setItem(NOMBRE, data.givenName);
    localStorage.setItem(APELLIDO, data.familyName);
    localStorage.setItem(IMAGEN, data.imageUrl);

}

export function getData(){
    const data = {
       email: localStorage.getItem(EMAIL),
       nombre: localStorage.getItem(NOMBRE),
        apellido: localStorage.getItem(APELLIDO),
        imageUrl: localStorage.getItem(IMAGEN),
    }
    return data;
}

export function removeData(){
    localStorage.removeItem(EMAIL);
    localStorage.removeItem(NOMBRE);
    localStorage.removeItem(APELLIDO);
    localStorage.removeItem(IMAGEN);
}