// eBay Marketplace Account Deletion Notification Endpoint
// Vercel Serverless Function

import crypto from 'crypto';

// Configuration
const VERIFICATION_TOKEN = 'ebay_marketplace_deletion_token_2025_secure_32_chars_min';

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Ebay-Signature');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // GET request: Challenge verification
    if (req.method === 'GET') {
      const { challenge_code } = req.query;

      if (!challenge_code) {
        res.status(400).json({
          error: 'challenge_code parameter is required',
          usage: 'GET /api/marketplace-deletion?challenge_code=YOUR_CODE'
        });
        return;
      }

      // Compute challenge response using SHA-256
      const endpointUrl = `https://${req.headers.host}/api/marketplace-deletion`;
      const hashInput = challenge_code + VERIFICATION_TOKEN + endpointUrl;
      const challengeResponse = crypto.createHash('sha256').update(hashInput).digest('hex');

      res.status(200).json({
        challengeResponse: challengeResponse
      });
      return;
    }

    // POST request: Account deletion notification
    if (req.method === 'POST') {
      // Log the notification (in production, process according to your needs)
      console.log('eBay account deletion notification received:', {
        timestamp: new Date().toISOString(),
        headers: req.headers,
        body: req.body
      });

      res.status(200).json({
        status: 'received',
        message: 'Account deletion notification processed successfully',
        timestamp: new Date().toISOString()
      });
      return;
    }

    // Unsupported method
    res.status(405).json({
      error: 'Method not allowed',
      allowed: ['GET', 'POST', 'OPTIONS']
    });

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({
      error: 'Internal server error',
      timestamp: new Date().toISOString()
    });
  }
}

