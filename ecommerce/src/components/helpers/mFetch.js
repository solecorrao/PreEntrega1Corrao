 export const products = [
    { id: '1', name: 'COMBO 1' , category: 'combos', price: 1400, stock: 30, description: 'Burger con doble cheddar, lechuga y papas fritas.', imgUrl: 'https://solecorrao.github.io/proyectoFinalSoledadCorrao/img/platillo1.jpg' },
    { id: '2', name: 'COMBO 2' , category: 'combos', price: 1450, stock: 25, description: 'Burger con muuuucho tomate y, por supuesto, unas ricas papas.', imgUrl: 'https://solecorrao.github.io/proyectoFinalSoledadCorrao/img/platillo2.jpg' },
    { id: '3', name: 'COMBO 3' , category: 'combos', price: 1500, stock: 20, description: 'Nuestra burger con pan caserito hecho por el maestro de la cocina, Mark Sloan!', imgUrl: 'https://solecorrao.github.io/proyectoFinalSoledadCorrao/img/platillo3.jpg' },
    { id: '4', name: 'COMBO 4' , category: 'hamburguesas', price: 2000, stock: 15, description: 'La super obra maestra: Burger con cheddar, panceta y nuestra salsita secreta.', imgUrl: 'https://solecorrao.github.io/proyectoFinalSoledadCorrao/img/platillo4.jpg' },
    { id: '5', name: 'COMBO 5' , category: 'combos', price: 2500, stock: 20, description: 'Nuestra burger especial: Huevo, lechuga, tomate, cebolla y mucho queso.', imgUrl: 'https://solecorrao.github.io/proyectoFinalSoledadCorrao/img/platillo5.jpg' },
    { id: '6', name: 'COMBO 6' , category: 'hamburguesas', price: 3000, stock: 15, description: 'Burger doble carne doble queso, cebolla, tomate, lechuga y salsita.', imgUrl: 'https://solecorrao.github.io/proyectoFinalSoledadCorrao/img/platillo6.jpg' },
    { id: '7', name: 'COMBO 7' , category: 'combos', price: 3500, stock: 10, description: 'Para compartir. Dos mega burgers completas.', imgUrl: 'https://solecorrao.github.io/proyectoFinalSoledadCorrao/img/platillo2.jpg' },
    { id: '8', name: 'COMBO 8' , category: 'combos', price: 4000, stock: 10, description: 'Burger Vegana completa. Porque tenemos para todos los gustos!', imgUrl: 'https://solecorrao.github.io/proyectoFinalSoledadCorrao/img/platillo3.jpg' }
]

export const mFetch = (id) => new Promise((res, rej) => {
        setTimeout(() => {
            res( id ? products.find (product => product.id === id) : products)
        }, 1000);
    })