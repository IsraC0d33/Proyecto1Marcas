
//No evaluable -> intensidad:Poca

let container = document.querySelector('.change-language');
let countries = container.querySelectorAll('div');

//REVIEW - Creando un objeto para poder añadir los siguientes paises. 

const _rugged = {
    esp: () => {
        for (let i = 1; i < countries.length; i++) {
            if (countries[i].style.display == 'none') {
                countries[i].style.display = 'block'
            } else {
                countries[i].style.display = 'none'
            }
        }
    },
    uk: {},
    pt: {},
    it: {},
    de: {}
};


//REVIEW -  Prueba superada - {Cambio a un codigo mas flexible}

/************************************************
 *             FUNCTION ESPAÑA() {              *
 * FOR (LET I = 1; I < COUNTRIES.LENGTH; I++) { *
 * IF (COUNTRIES[I].STYLE.DISPLAY == 'NONE') {  *
 *     COUNTRIES[I].STYLE.DISPLAY = 'BLOCK'     *
 *                   } ELSE {                   *
 *     COUNTRIES[I].STYLE.DISPLAY = 'NONE'      *
 *                      }                       *
 *                      }                       *
 *                      };                      *
 ************************************************/
