# Proyecto final, curso de REACT JS en CODERHOUSE.
## Profe: Fredy Alexander Chaparro Castro
---
## Lovely Home Deco
---
Es un simulador de un Ecommerce de articulos de decoracion de interior y exterior.

La idea general de esta aplicación es crear un Sistema de E-Commerce para compra de productos con filtrado por categorías usando información de un JSON propio llamado asyncMock, el cual contendrá cada producto y así lograr que a partir de esta poder lograr más cosas como:

- Filtrar u ordenar los productos según su categoría

- Interactuar con cada producto y ver los detalles de este

- Agregar la cantidad de productos deseados al carrito de compras

- Ver los productos agregados en la ruta /cart con su respectiva cantidad

- Eliminar los productos del carrito de compras

- Finalizar la compra y obtener el ID de esta



## Que se utilizo hasta el momento para llegar al resultado de la Pre Entrega?
---
- Create-React-App
- React-router-dom
- Vercel
- Firebase
- toastify (Para generar alertas con un mejor estilo)

## Que se construyo?
---
En el proyecto encontraras las categorías de los productos representados en la barra de navegación para así hacer un filtrado propio de los productos según su categoría usando las rutas "/category/:categoria".

Después se encuentra el componente ItemListContainer, donde están guardados las cartas de los productos, creadas de forma dinámica atreves de los componentes ItemList y Item, en estas encontraras el botón de "ver detalles", el cual de dirigirá hacia la ruta "/Products/:id" donde encontraras los detalles del producto seleccionado y cuenta con un componente ItemCount, el cual se encarga de contar la cantidad de elementos que quieres agregar a tu carrito de compras, además de que si el producto no cuenta con stock disponible se mostrara un cartel indicándolo.

Luego de agregar los productos aparecerá el de carrito de compras con la cantidad de productos que este contenga, al darle click a este icono te dirigirá a la ruta "/cart" donde encontraras los elementos de tu lista y la opción de eliminar un producto, eliminar todos o finalizar tu compra.

Al darle al botón de finalizar tu compra, te guiara a la ruta "/orderdata" donde podrás encontrar un formulario donde debes de poner tu nombre, email y teléfono, para así finalmente presionar en el botón "Generar Orden" y enviar la información a la base de datos de Firebase, finalizando con una alerta de Toastify la cual mostrara el ID de tu compra.


# Vistas
---
## Vista del Home
![N|Solid](https://firebasestorage.googleapis.com/v0/b/lovelyhome-ecommerce.appspot.com/o/Home.jpg?alt=media&token=25e14fd3-007c-4287-a377-01211db5464a)
## Vista del item detail
![N|Solid](https://firebasestorage.googleapis.com/v0/b/lovelyhome-ecommerce.appspot.com/o/itemdetail.jpg?alt=media&token=43ffcd87-d82c-4b67-916e-32b8aab79a03)
## Vista del Home filtrado segun la categoria elegida
![N|Solid](https://firebasestorage.googleapis.com/v0/b/lovelyhome-ecommerce.appspot.com/o/filtrado.jpg?alt=media&token=c6fc3b61-4b48-455f-afb8-8a6991d40e7a)
## Vista del carrito de compras
![N|Solid](https://firebasestorage.googleapis.com/v0/b/lovelyhome-ecommerce.appspot.com/o/cart.jpg?alt=media&token=937c7380-f7ee-4f86-baa4-3780ef08ba89)
## Vista del formulario para finalizar tu compra
![N|Solid](https://firebasestorage.googleapis.com/v0/b/lovelyhome-ecommerce.appspot.com/o/order.jpg?alt=media&token=c2fbbb75-5e52-45d1-90ab-f4b3e3ce381c)
## Flow de la App
![](https://firebasestorage.googleapis.com/v0/b/lovelyhome-ecommerce.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo.gif?alt=media&token=f724afa7-9524-4934-b7ae-4b5628de872f)

![Diseño sin título](https://user-images.githubusercontent.com/100039424/193960919-167aac2f-69bc-477a-a3fa-5e2be030a5e8.gif)


---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
