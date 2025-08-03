# API Configuration Setup

This document explains how to configure the API URLs for both development and production environments.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Development API URL (localhost)
NEXT_PUBLIC_API_URL=http://localhost:3001

# Production API URL (your deployed API)
NEXT_PUBLIC_PROD_API_URL=https://your-production-api-url.com
```

## API Configuration

The application uses a centralized API configuration system located in `lib/api-config.js`:

### Environment Detection

- **Development**: Uses `NEXT_PUBLIC_API_URL` or defaults to `http://localhost:3001`
- **Production**: Uses `NEXT_PUBLIC_PROD_API_URL` or defaults to `https://your-production-api-url.com`

### API Endpoints

The following endpoints are configured:

#### Authentication
- `SEND_OTP`: `/auth/send-otp`
- `VERIFY_OTP`: `/auth/verify-otp`
- `VERIFY_SESSION`: `/auth/verify-session`
- `LOGOUT`: `/auth/logout`

#### Favorites
- `GET_FAVORITES`: `/favorites`
- `ADD_FAVORITE`: `/favorites`
- `REMOVE_FAVORITE`: `/favorites`
- `TOGGLE_FAVORITE`: `/favorites/toggle`

#### Fonts
- `GET_FONTS`: `/fonts`
- `SEARCH_FONTS`: `/fonts/search`

## Usage

### In Components

```javascript
import { getApiUrl, buildApiUrl, API_ENDPOINTS } from '../lib/api-config'

// Get the base API URL
const apiUrl = getApiUrl()

// Build a full URL for an endpoint
const sendOtpUrl = buildApiUrl(API_ENDPOINTS.SEND_OTP)
```

### Making API Requests

```javascript
// Example: Send OTP
const response = await fetch(buildApiUrl(API_ENDPOINTS.SEND_OTP), {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email: 'user@example.com' })
})
```

## Development vs Production

### Development Mode
- Uses demo OTP (`123456`) for authentication
- Stores data in localStorage/sessionStorage
- Logs detailed debugging information

### Production Mode
- Uses actual API endpoints
- Requires valid API server
- Minimal logging for performance

## Troubleshooting

### Common Issues

1. **API not responding**: Check if your API server is running
2. **CORS errors**: Ensure your API allows requests from your frontend domain
3. **Environment variables not loading**: Restart your development server after adding `.env.local`

### Debugging

Enable debugging by checking the browser console for:
- API configuration logs
- Request/response details
- Error messages

## Deployment

When deploying to production:

1. Set the `NEXT_PUBLIC_PROD_API_URL` environment variable
2. Ensure your API server is accessible from the production domain
3. Test authentication flow in production environment 