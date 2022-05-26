class Contenedor {
    constructor() {
      this.productos = [];
    }
    save(objeto) {
      if (this.productos.length === 0) {
        objeto = {
          id: 1,
          title: objeto.title,
          price: objeto.price,
          thumbnail: objeto.thumbnail,
        };
        this.productos.push(objeto);
        return objeto;
      } else {
        let idUltimo = this.productos.map((producto) => producto.id);
        let idAsignado = Math.max(...idUltimo);
        idAsignado++;
        objeto = {
          id: idAsignado,
          title: objeto.title,
          price: objeto.price,
          thumbnail: objeto.thumbnail,
        };
        this.productos.push(objeto);
        return objeto;
      }
    }
    getAll() {
      return this.productos;
    }
    getById(idBuscado) {
      let productoId = this.productos.find(
        (producto) => producto.id == idBuscado
      );
      if (productoId === undefined) {
        console.log(productoId);
  
        return "Producto No encontrado";
      } else {
        return productoId;
      }
    }
  
    deleteById(idBuscado) {
      const productoEncontrado = this.productos.find(
        (producto) => producto.id == idBuscado
      );
  
      if (productoEncontrado) {
        const nuevoConjunto = this.productos.filter(
          (producto) => producto.id !== idBuscado
        );
        this.productos = nuevoConjunto;
  
        return `el producto fue eliminado existosamente`;
      } else {
        return `no habia producto para eliminar`;
      }
    }
  }
  
  module.exports = Contenedor;
  