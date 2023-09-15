export const navigation = {
    categories: [
      {
        id: 'makeup',
        name: 'Makeup',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://img.freepik.com/premium-vector/new-cosmetics-beauty-products-facebook-instagram-post-template-ad_521579-84.jpg?w=2000',
            imageAlt: 'Image of new arrival',
          },
          {
            name: 'Best Seller',
            href: '/',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMZ7sCc5QTBcWfWoSgVHgZvoV7Kg1VIeA4w&usqp=CAU',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'face',
            name: 'Face',
            items: [             
             { name: 'Primer', id:"primer"},          
             { name: 'Foundation', id:"foundation"},
              { name: 'Concealer', id: 'concealer' },
              { name: 'Blush', id: 'blush' },
              { name: 'BB Cream', id: 'BB cream' },
              { name: 'CC cream', id: 'CC cream' },
              { name: 'Highlighter', id: 'Highlighter' },
              { name: 'Makeup remover', id: 'makeup remover' },
             
            ],
          },
          {
            id: 'Lips',
            name: 'Lips',
            items: [
              { name: 'Lipstick', id: 'Lipstick' },
              { name: 'Lipbalm', id: 'Lipbalm' },
              { name: 'Lipliner', id: 'Lipliner' },
              { name: 'crayon', id: 'crayon' },
              { name: 'LiquidLipstick', id: 'LiquidLipstick' },
            //  { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Maybelline', id: '#' },
              { name: 'Lakme', id: '#' },
              { name: 'Loreal paris', id: '#' },
              { name: 'Nyka', id: '#' },
              { name: 'M.A.c', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'Skincare',
        name: 'Skincare',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/71eGPJQryIL._SL1500_.jpg',
            imageAlt: 'moisturizer',
          },
          {
            name: 'Best seller',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61jYaY2ek4L._SL1500_.jpg',
            imageAlt:
              'best seller',
          },
        ],
        sections: [
          {
            id: 'skin',
            name: 'Skin',
            items: [
              { name: 'moisturizer', id: 'moisturizer' },
              { name: 'sunprotection', id: 'sunprotection' },
              { name: 'serun', id: 'serum' },
             // { name: 'facewash', id: '#' },
              { name: 'facewash', id: 'facewash' },
             // { name: 'mask', id: '#' },
              { name: 'mask', id: 'mask' },
              
            ],
          },
          {
            id: 'eyes',
            name: 'eyes',
            items: [
              { name: 'kajal', id: 'kajal' },
              { name: 'eyeliner', id: 'eyeliner' },
              { name: 'mascara', id: 'mascara' },
              { name: 'contact lens', id: 'contact lens' },
              
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Maybelline', id: '#' },
              { name: 'Lakme', id: '#' },
              { name: 'Nyka', id: '#' },
              { name: 'Loreal paris', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }