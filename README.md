# Next.js Starter Template

A minimal, modern Next.js starter with TypeScript, Tailwind CSS, and ESLint. Perfect for creative solo projects, quick prototypes, and evolving into full-featured apps.

---

## 🚀 Getting Started

1. **Duplicate this folder**
   - Copy the entire `nextjs-starter` folder and rename it for your new project.
   - Example:
     ```sh
     cp -R nextjs-starter my-new-project
     cd my-new-project
     ```

2. **Install dependencies**
   - Run this command in your new project folder:
     ```sh
     npm install
     ```

3. **Start the development server**
   - Run:
     ```sh
     npm run dev
     ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Features
- [x] Next.js (with `/src` structure)
- [x] TypeScript (for safety, but you can use JS too)
- [x] Tailwind CSS (for easy, beautiful styling)
- [x] ESLint (for code quality)

---

## 🌱 Evolving Your Project

- **Authentication:**
  - Add [Clerk](https://clerk.com/) for user auth:
    ```sh
    npm install @clerk/nextjs
    # Follow Clerk docs for setup
    ```
- **Payments:**
  - Add [Stripe](https://stripe.com/docs/stripe-js/react) for payments:
    ```sh
    npm install @stripe/stripe-js @stripe/react-stripe-js
    # Follow Stripe docs for setup
    ```
- **Database:**
  - Add [Postgres](https://www.prisma.io/) (with Prisma):
    ```sh
    npm install @prisma/client
    npm install prisma --save-dev
    npx prisma init
    # Follow Prisma docs for setup
    ```
- **Deploy:**
  - Deploy to [Vercel](https://vercel.com/) for free, instant hosting.

---

## 📦 Environment Variables
- Copy `.env.example` to `.env.local` and add your secrets as needed.

---

## 💡 Tips
- You can use both `.ts` and `.js` files.
- Edit `tailwind.config.js` to customize your design.
- Add new pages in `src/pages/`.
- Use `public/` for images and static files.

---

**Happy coding!**

---

*This template was created with help from AI and is designed for solo creative projects. Evolve it as you grow!*
