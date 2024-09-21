# NIYISTORES🛒
### _A simple e-commerce project built with React, NextJs, Tailwind css, MongoDB, NodeJS and Stripe._
-----

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a [Next.js] project bootstrapped with [create-next-app].



## Getting Started


First, clone the repository:
```bash
git clone https://github.com/Elmoustafi-22/niyistores-admin

# cd into the repository

cd niyistores-admin

# install dependencies

npm i

# run the development server

npm run dev

```




npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev




Open [http://localhost:3000] with your browser to see the result.



You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.



Installation


npm install


Create an .env file adn add the following.



// Google OAuth2 Client ID for authentication
GOOGLE_ID = "YOUR_GOOGLE_OAUTH2_CLIENT_ID";


// Google OAuth2 Client Secret for authentication
GOOGLE_SECRET ="YOUR_GOOGLE_OAUTH2_CLIENT_SECRET";


// NextAuth.js secret for secure sessions
NEXTAUTH_SECRET = "YOUR_NEXTAUTH_SECRET";


// Stripe Secret Key for API transactions (Test mode)
STRIPE_KEY = "YOUR_STRIPE_SECRET_KEY";


// Stripe Publishable Key for client-side usage (Test mode)
STRIPE_PKEY = "YOUR_STRIPE_PUBLISHABLE_KEY";


// URL to redirect after successful payment
SUCCESS_URL = "https://your-success-url.com";





1. Google OAuth2 Client ID and Client Secret:
How to Obtain:
Go to the Google API Console.
Create a new project or select an existing one.
Navigate to "Credentials" in the sidebar.
Create credentials and select "OAuth client ID" for web application or other relevant application type.
Follow the instructions to obtain your Client ID and Client Secret.
Useful Links:
Google API Console
Google OAuth2 Documentation


2. NextAuth.js Secret:


How to Obtain:
Generate a secure random string or use a tool to create a secret key.
It's used for securing sessions and tokens in NextAuth.js.
Useful Links:
NextAuth.js Documentation


3. Stripe Secret Key and Publishable Key:
How to Obtain:
Sign up for a Stripe account if you haven't already.
Once logged in, navigate to the Dashboard.
Go to "Developers" -> "API keys" to access your Secret and Publishable keys.
Useful Links:
Stripe Dashboard
Stripe Documentation


4. Success URL:
How to Define:
This is the URL where users will be redirected after a successful payment or action.
Set it to a specific page on your website or an external URL.
Useful Links:
None specific. It's the URL you want your users to land on after a successful action.


Check your browsers console for any errors and fix them.