# ShopHub - E-Commerce Website

A fully functional e-commerce website built with React, Vite, and React Router. This project includes product listings, shopping cart functionality, user authentication, and responsive design.

## Features

✅ **Product Catalog** - Browse all products with filtering and sorting
✅ **Product Details** - View detailed information about each product
✅ **Shopping Cart** - Add/remove items, adjust quantities with persistent storage
✅ **User Authentication** - Login and signup functionality
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
✅ **Modern UI** - Beautiful gradient design with smooth animations
✅ **State Management** - Context API for cart and user state
✅ **Local Storage** - Cart and user data persists across sessions

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with cart count
│   ├── Navbar.css
│   ├── ProductCard.jsx     # Product display card component
│   ├── ProductCard.css
│   ├── CartItem.jsx        # Individual cart item component
│   ├── CartItem.css
│   ├── Hero.jsx            # Hero section for home page
│   └── Hero.css
├── pages/
│   ├── Home.jsx            # Home page with featured products
│   ├── Home.css
│   ├── Products.jsx        # Products catalog with filters
│   ├── Products.css
│   ├── ProductDetails.jsx  # Individual product details
│   ├── ProductDetails.css
│   ├── Cart.jsx            # Shopping cart page
│   ├── Cart.css
│   ├── Login.jsx           # Login page
│   ├── Signup.jsx          # Signup page
│   └── Auth.css            # Authentication pages styling
├── context/
│   └── CartContext.jsx     # Cart and user state management
├── utils/
│   └── products.js         # Product data and utilities
├── App.jsx                 # Main app component
├── App.css                 # App styling
├── main.jsx                # React app entry point
├── index.css               # Global styles
└── index.jsx               # React DOM root
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd e-commerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot module reloading
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Features in Detail

### 🛍️ Product Browsing
- View all 8 sample products
- See product ratings and reviews
- Filter by category (Electronics, Accessories)
- Sort by name, price, or rating
- Search products by name or description

### 🛒 Shopping Cart
- Add products to cart with real-time updates
- Adjust product quantities
- Remove items from cart
- View order summary with subtotal, shipping, and tax
- Cart persists using localStorage

### 👤 User Authentication
- User login with email and password validation
- User signup with password confirmation
- Welcome message for logged-in users
- Logout functionality
- User data persists using localStorage

### 📱 Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Adaptive navigation and layout
- Touch-friendly interface

### 🎨 Modern UI/UX
- Gradient color scheme (Purple to Blue)
- Smooth animations and transitions
- Card-based design
- Intuitive navigation
- Professional typography

## Product Data

The application comes with 8 pre-loaded sample products:
1. Wireless Headphones - $99.99
2. Smart Watch - $199.99
3. USB-C Cable - $14.99
4. Phone Case - $24.99
5. 4K Webcam - $149.99
6. Mechanical Keyboard - $129.99
7. Laptop Stand - $34.99
8. Wireless Mouse - $49.99

## Technologies Used

- **React 19** - UI library
- **React Router v7** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **Context API** - State management
- **localStorage** - Data persistence

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Payment gateway integration
- Product image uploads
- User profile management
- Order history
- Product reviews and ratings system
- Wishlist feature
- Email notifications
- Admin dashboard
- Database integration

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the project repository.

---

**Happy Shopping!** 🎉
