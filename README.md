# Ecom

![image](https://github.com/olee2/portfolio2/blob/master/src/assets/ecom.png)

JavaScript Frameworks Course Assignment

## Description

For this project, I leveraged React's functionality to develop a responsive e-commerce store, using the API provided. The store includes several pages: a homepage, individual product pages, a cart page, a checkout success page, and a contact page.

The homepage features a list of all products and a look-ahead search bar that filters products by name. Clicking a product redirects to the product's individual page.

The individual product pages display the product's title, description, image, and any available reviews. If a product is discounted, the amount of discount is calculated and displayed. These pages also contain an "Add to Cart" button that adds the product to the shopping cart.

The website header, incorporated into all pages through a <Layout> component, features a navigation bar and a cart icon component. This icon acts as a button, displaying the current number of items in the cart and leading to the cart page when clicked.

The cart page lists all chosen products and the total cost, with a checkout button that leads to the checkout success page. Once a user reaches this page, their shopping cart is cleared, and a success message is displayed, along with a link back to the store.

The contact page includes a validated form for the user's full name, subject, email, and a message body. Each field requires a minimum of 3 characters, and the email field requires a valid email address.

The website uses React Router for page switching and either styled-components or CSS Modules for styling. The design was created from scratch for a unique look and feel. While TypeScript was not required, the code was formatted neatly and efficiently for readability and maintenance.

## Built With

- HTML
- TypeScript
- React.js
- SCSS

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone https://github.com/olee2/ecom.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contact

[LinkedIn](https://www.linkedin.com/in/ole-andr%C3%A9-eikrem-1b0752202/)
[GitHub](https://github.com/olee2)
