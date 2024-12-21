import bcrypt from 'bcryptjs'
const mytemplate = {
    users: [
      {
        name: 'ADMIN',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
      },
      {
        name: 'USER_1',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false
      }
    ],
    products: [
      {
       // _id: '1',
        name: 'Laptop',
        category: 'Shirts',
        image: '/images/laptop.jpg',
        price: 28000,
        countInStock: 10,
        brand: 'Lenovo',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        //_id: '2',
        name: 'Cycle',
        category: 'Shirts',
        image: '/images/cycle.webp',
        price: 2500,
        countInStock: 1,
        brand: 'Atlas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        //_id: '2',
        name: 'Advanced Engineering Mathematics By Jain and Iyengar',
        category: 'Books',
        image: '/images/jainmaths.jpg',
        price: 600,
        countInStock: 1,
        brand: 'Maths',
        rating: 4.2,
        numReviews: 10,
        description: 'high quality product',
      },
      {
       // _id: '3',
        name: 'Headphone',
        category: 'Shirts',
        image: '/images/headphone.jpg',
        price: 3000,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        //_id: '2',
        name: 'Solution Manual of Advanced Engineering Mechanics By Beer and Johnston',
        category: 'Books',
        image: '/images/mecsolution.jpg',
        price: 350,
        countInStock: 1,
        brand: 'Mechanics',
        rating: 4.9,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        //_id: '4',
        name: 'Lab Coat',
        category: 'Pants',
        image: '/images/labcoat.jpg',
        price: 150,
        countInStock: 2,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
       // _id: '5',
        name: 'IPhone',
        category: 'Pants',
        image: '/images/mobile.jpg',
        price: 30000,
        countInStock: 10,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
       // _id: '6',
        name: 'Trolley',
        category: 'Pants',
        image: '/images/trolley.jpeg',
        price: 400,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        //_id: '7',
        name: 'Umbrella',
        category: 'Pants',
        image: '/images/umbrella.jpg',
        price: 150,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default mytemplate;