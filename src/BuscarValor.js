function buscarValor(array, valor) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valor) {
        count++;
      }
    }
    return count;
  }
  module.exports = buscarValor;


  
  
  
  
  
  
  