# 🎨 DashMaster - Modern Admin Dashboard

A sleek, modern, and highly interactive Admin Dashboard built with React + Vite and Tailwind CSS. This dashboard provides business insights, sales data, and user analytics with a beautiful and responsive interface.

## 🚀 Features

* 📱 Fully Responsive Design
* 🌓 Dark/Light Mode Support
* 🔐 Complete Authentication System
  * Login with Email/Password
  * User Registration
  * Password Reset Flow
  * Session Management
* 📊 Interactive Charts and Graphs (Coming Soon)
* 👥 User Management (Coming Soon)
* 📦 Product Management (Coming Soon)
* 🛍️ Order Management (Coming Soon)
* 📈 Analytics & Reports (Coming Soon)
* ⚡ Fast Performance with Vite
* 🎨 Modern UI/UX with Tailwind CSS

## 🛠️ Tech Stack

* **Frontend Framework:** React + Vite
* **Styling:** Tailwind CSS
* **State Management:** Zustand
* **Authentication:** Supabase Auth
* **Form Handling:** React Hook Form (Coming Soon)
* **Data Visualization:** Recharts (Coming Soon)
* **Animations:** Framer Motion (Coming Soon)
* **API Client:** Axios (Coming Soon)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alidiamond1/DashMaster.git
   cd DashMaster
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   Create a `.env` file in the root directory with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 🔒 Authentication Features

The project includes a complete authentication system with:

* **Login:** Email and password authentication
* **Registration:** New user signup with email verification
* **Password Reset:** Secure password recovery flow
  1. Request password reset link
  2. Receive email with secure token
  3. Set new password
* **Session Management:** Automatic session handling and persistence

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
│   └── auth/      # Authentication pages
├── layouts/       # Layout components
├── hooks/         # Custom React hooks
├── store/         # Zustand state management
├── services/      # API services (Supabase)
├── utils/         # Utility functions
└── assets/        # Static assets
```

## 🎨 Design System

### Colors
* **Primary:** `#4F46E5` (Indigo)
* **Secondary:** `#22C55E` (Green)
* **Background:**
  * Light: `#F9FAFB`
  * Dark: `#1E1E1E`
* **Text:**
  * Dark: `#374151`
  * Light: `#E5E7EB`

### Components
* Modern card-based design
* Responsive form elements
* Interactive buttons with hover states
* Toast notifications for feedback
* Loading states and animations

## 🔧 Development

### Prerequisites
* Node.js 16+
* npm or yarn
* Supabase account

### Commands
* `npm run dev` - Start development server
* `npm run build` - Build for production
* `npm run preview` - Preview production build
* `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

* [Tailwind CSS](https://tailwindcss.com)
* [Vite](https://vitejs.dev)
* [Supabase](https://supabase.com)
* [React](https://reactjs.org)
* [Zustand](https://github.com/pmndrs/zustand)
