
class Procesador {
    arrayTarget = new Array();
    
    mostrarTexto() {
      let parrafo1 = new Parrafo('Tres tigres blancos', 'izquierda');
      this.arrayTarget[0] = parrafo1.parrafoJustificado();
      let parrafo2 = new Parrafo('Comian', 'centro');
      this.arrayTarget[1] = parrafo2.parrafoJustificado();
      let parrafo3 = new Parrafo('El trigal', 'derecha');
      this.arrayTarget[2] = parrafo3.parrafoJustificado();
      return this.arrayTarget;
    }

  }

  class Parrafo {
    
    #ancho = 15;
    arrayComprobacion = new Array();

  constructor(linea, justificado) {
    this.linea = linea;
    this.justificado = justificado;
  }

  comprobacionLinea() {
    let arraySolucion = new Array();
      let firstLine = this.linea.substring(0, this.#ancho);
      let secondLine = this.linea.substring(this.#ancho);
      this.arrayComprobacion[0] = firstLine;
      this.arrayComprobacion[1] = secondLine;
      this.linea = this.arrayComprobacion[0]
      arraySolucion[0] = this.parrafoJustificado();
      this.linea = this.arrayComprobacion[1]
      arraySolucion[1] = this.parrafoJustificado();
      return arraySolucion;
  }
 

  parrafoJustificado() {
    if (this.#ancho < this.linea.length) {
      return this.comprobacionLinea();
    } else {

    
    switch (this.justificado) {
      case 'izquierda':        
        return this.linea.padEnd(this.#ancho, '·');
        break;

      case 'derecha':        
        return this.linea.padStart(this.#ancho, '·');
        break;
      
      case 'centro':
        let half = this.linea.length + (Math.ceil((this.#ancho - this.linea.length)/2))
        let halfilledCharacters = this.linea.padStart(half, '·');
        this.filledCharacters = halfilledCharacters.padEnd(this.#ancho, '·');
        return this.filledCharacters;
        break;
    
      default:
        break;
    }
 
  }
}
}

let procesador = new Procesador();
console.log(procesador.mostrarTexto());