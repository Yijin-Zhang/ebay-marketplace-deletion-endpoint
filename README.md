# eBay Marketplace Account Deletion Endpoint

A serverless endpoint for handling eBay marketplace account deletion notifications, deployed on Vercel.

## 🚀 Quick Deploy

1. **Upload to GitHub**: Create a new repository and upload all files
2. **Deploy to Vercel**: Import the GitHub repository in Vercel
3. **Submit to eBay**: Use the Vercel URL in eBay Developer Portal

## 📋 eBay Configuration

**Notification Endpoint URL:**
```
https://your-project.vercel.app/api/marketplace-deletion
```

**Verification Token:**
```
ebay_marketplace_deletion_token_2025_secure_32_chars_min
```

## 🔗 Endpoints

- **Homepage**: `/` - Service information and testing links
- **Health Check**: `/api/health` - Service status and configuration
- **Main Endpoint**: `/api/marketplace-deletion` - eBay notifications handler

## ✅ Features

- ✅ SHA-256 challenge verification
- ✅ CORS support for cross-origin requests
- ✅ JSON response format
- ✅ Comprehensive error handling
- ✅ Input validation and security
- ✅ Support for GET and POST methods
- ✅ Production-ready configuration

## 🧪 Testing

Visit your deployed URL to access the homepage with testing links, or test endpoints directly:

```bash
# Health check
curl https://your-project.vercel.app/api/health

# Challenge verification
curl "https://your-project.vercel.app/api/marketplace-deletion?challenge_code=test123"
```

## 📦 Deployment

This project is optimized for Vercel deployment with:
- Node.js 18.x runtime
- ES modules support
- Automatic function detection
- Zero configuration required

Ready for immediate deployment and eBay verification!

