const products = {
  prod1: { id: 1, nombre: 'Mouse', precio: 30000 },
  prod2: { id: 2, nombre: 'Teclado', precio: 50000 },
  prod3: { id: 3, nombre: 'Pantalla', precio: 400000 }
};

// Shows in the DOM
const ulObject = document.getElementById('productos_objeto');

for (let key in products) {

  const li = document.createElement('li');
  const p = products[key];
  li.textContent = `ID: ${p.id}, Nombre: ${p.nombre}, Precio: $${p.precio}`;
  ulObject.appendChild(li);

}

const setProductos = new Set();

for (let key in products) {

  const producto = products[key];
  setProductos.add(JSON.stringify(producto)); // avoiding duplicate elements

}

// Shows Set in the DOM 
const ulSet = document.getElementById('productos_set');

for (let item of setProductos) {

  const li = document.createElement('li');
  const obj = JSON.parse(item);
  li.textContent = `ID: ${obj.id}, Nombre: ${obj.nombre}, Precio: $${obj.precio}`;
  ulSet.appendChild(li);

}
const categorias = new Map();
categorias.set('Electronica', 'Laptop');
categorias.set('Periféricos', 'Mouse'); // over write the previous value
categorias.set('Perifericos', 'Teclado');

// Shows map in the DOM
const ulMap = document.getElementById('productos_map');
categorias.forEach((producto, categoria) => {
  const li = document.createElement('li');
  li.textContent = `Categoría: ${categoria} → Producto: ${producto}`;
  ulMap.appendChild(li);
});
function validarDuplicados(set) {
  return set.size < Object.keys(products).length;
}