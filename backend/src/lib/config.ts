import corsMiddleware from "cors";

const ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:8080',
    // Add production origins here
];

export const CORS_CONFIG: corsMiddleware.CorsOptions = {
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) {
            return callback(null, true);
        }
        
        if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    allowedHeaders: [
        'Content-Type',
        'Origin',
        'Accept'
    ]
};