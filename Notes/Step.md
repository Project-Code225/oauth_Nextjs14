# How To Login With Google sign next auth 

## Step 1: Project Setup
- 1.1 Create a Next.js Project

- If you haven't already created a Next.js project, do so:

- npx create-next-app@latest

- cd nextjs-oauth


## 1.2 Install Required Packages

- npm install next-auth


## Step 2: NextAuth.js Setup
- 2.1 Folder Structure


```bash
nextjs-oauth/
├── components/
│   └── Navbar.js
├── pages/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth].js
│   ├── _app.js
│   ├── index.js
│   └── profile.js
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── next.config.js
└── package.json
```

# How to Get google client key and secret key follow this link 

- https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id

# Adding URL in google console 

## URL 1

- http://localhost:3000

## Authorized redirect URIs

- http://localhost:3000/api/auth/callback/google


# Reference Link 

- https://www.youtube.com/watch?v=NcuNVFLlU7Q

