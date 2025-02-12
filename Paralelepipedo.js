export default class Paralelepipedo{
    constructor(compriemto, altura, largura){
        this.compriemto = compriemto
        this.altura = altura
        this.largura = largura
    }

    calcularVolume(){
        return this.compriemto * this.largura * this.altura
    }

    calcularAreaTotal(){
        return ((2 * this.compriemto * this.largura) + (2 * this.compriemto * this.altura) + (2 * this.largura * this.altura))
    }

    
}