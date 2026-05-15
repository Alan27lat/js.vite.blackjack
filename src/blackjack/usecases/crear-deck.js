import _ from 'underscore';


/**
 * 
 * @param {array} tiposDeCarta 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
if (!tiposDeCarta) throw new error ('tiposdecartas es obligatorio')
    let deck = [];

    // Cartas numéricas
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    // Cartas especiales
    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);
}