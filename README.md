# StockTracker - Portfolio Management Application

A modern stock portfolio tracking application built with React, TypeScript, and Tailwind CSS. Track your investments, monitor performance, and manage your stock portfolio with real-time updates.


## Live Demo

🚀 [View Live Demo]https://bright-sprinkles-7b1c19.netlify.app/portfolio

## Features

- 📈 Real-time stock price updates
- 💼 Portfolio management and tracking
- 📊 Performance analytics and metrics
- 🔔 Price alerts and notifications
- 🌓 Dark/Light mode support
- 📱 Responsive design for all devices

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 
- npm (v9 or higher)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Git

## Running Locally

1. Clone the repository:
```bash
git clone https://github.com/Sandeepchinnaboina0208/Portfolio-Tracker

cd project
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_FINNHUB_API_KEY=your_finnhub_api_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

### Development Environment Setup

For the best development experience:

1. Install recommended VS Code extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense

2. Enable format on save in VS Code:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

3. Install React Developer Tools browser extension

## Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/          # React context providers
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── utils/             # Utility functions and helpers
```

## Assumptions and Limitations

### Technical Limitations
- Requires modern browser support for ES6+ features
- API rate limits: 60 requests per minute per IP
- Real-time updates are simulated with polling (1-minute intervals)
- Local storage is used for persistence (no backend database)

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Known Issues
- Stock price updates may be delayed due to API limitations
- Dark mode preferences don't persist after page reload
- Limited to 5 stock symbols per user due to API constraints

## API Documentation

### Finnhub API Integration
- Base URL: `https://finnhub.io/api/v1`
- [API Documentation](https://finnhub.io/docs/api)
- Endpoints used:
  - `/quote` - Get real-time quote data
  - `/stock/symbol` - Search stock symbols
  - `/company` - Get company information

### Rate Limits
- Free tier: 60 API calls/minute
- Upgrade to premium for higher limits

## Deployment

The application is deployed on Netlify. To deploy your own instance:

1. Fork this repository
2. Sign up for [Netlify](https://www.netlify.com/)
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables in Netlify dashboard:
   ```
   VITE_FINNHUB_API_KEY=your_api_key
   ```

### Deployment URLs
-Deployment : https://bright-sprinkles-7b1c19.netlify.app/portfolio


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Write clean, maintainable code
- Follow the existing code style
- Add appropriate comments and documentation
- Write unit tests for new features
- Update README.md with any new features or changes


## Acknowledgments

- [Finnhub](https://finnhub.io/) for stock market data
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Netlify](https://www.netlify.com/) for hosting
