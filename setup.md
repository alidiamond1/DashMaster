## **🎨 Prompt: DashMaster – Admin Dashboard UI/UX Design**

**Project Goal:**  
Design a sleek, modern, and highly interactive **Admin Dashboard** that provides business insights, sales data, and user analytics. The interface should be **visually appealing**, **intuitive**, and **responsive**, optimized for both **light and dark mode**.

---

### **🔹 Overall Dashboard Theme & Style**
- **Modern, sleek, and professional** admin UI.  
- Use **Tailwind CSS** for a clean, responsive layout.  
- Smooth **framer-motion** animations for transitions and interactions.  
- Support for **dark/light mode** with a toggle switch.  
- **Minimalist card-based design** with clear data visualization.  
- **Sidebars and widgets should be collapsible** to maximize screen space.  

---

## **📌 Pages & Sections Breakdown**

### **1️⃣ Authentication Pages**
#### **1.1 Login Page**
- **Centered login form** with company branding.  
- Fields: **Email, Password, "Remember Me" toggle, Forgot Password link**.  
- **Social login options** (Google, GitHub).  
- **CTA Button:** "Sign in" with hover animation.  
- Dark mode support.

#### **1.2 Register Page**
- Similar to the login page with an additional **Full Name** and **Confirm Password** field.  
- "Already have an account? Sign in" link.  
- Password strength indicator.

#### **1.3 Forgot Password Page**
- Simple **email input field** with a "Send Reset Link" button.  
- Confirmation message displayed upon successful submission.

---

### **2️⃣ Dashboard Home (Main Page)**
- **Sidebar (Collapsible)** for navigation.  
- **Top Navbar** with a search bar, notifications, and user profile.  
- **Key Metrics Overview** in **4 interactive cards**:  
  - 💰 **Total Revenue**  
  - 📊 **New Users**  
  - 🛍️ **Total Sales**  
  - 📈 **Growth Rate**  
- **Graphs and Charts Section** (Using Recharts.js or Chart.js).  
  - Sales performance over time (line chart).  
  - Active users (bar chart).  
  - Product sales breakdown (pie chart).  
- **Recent Transactions Table** with sorting & filtering.  
- **Quick Actions Panel** (e.g., Add Product, Generate Report).  

---

### **3️⃣ Sidebar Navigation (Collapsible)**
**Structure:**  
- 📊 Dashboard  
- 👥 Users Management  
- 📦 Products Management  
- 🛍️ Orders & Sales  
- 📈 Analytics & Reports  
- ⚙️ Settings  
- 🚪 Logout  

**Design Features:**  
- **Icons + Labels** for easy identification.  
- **Hover effects & active states** for navigation.  
- **Collapsible sidebar** (mini icons when collapsed).  

---

### **4️⃣ User Management Page**
- **User List Table** with columns:  
  - **Avatar, Name, Email, Role (Admin/User), Status (Active/Inactive), Actions (Edit/Delete)**.  
- **Filters & Search Bar** to find users quickly.  
- **Role-based access control** (Admin can change roles).  
- **Add New User Modal** with a form.

---

### **5️⃣ Product Management Page**
- **Table layout for product inventory.**  
- Columns:  
  - 🏷️ **Product Name**  
  - 📦 **Stock Quantity**  
  - 💲 **Price**  
  - ⭐ **Ratings**  
  - 🔧 **Actions (Edit/Delete)**  
- **Search, filter, and category selection**.  
- **Bulk upload feature** (CSV import).  
- **Image previews for each product**.  
- **Add/Edit Product Form** in a modal.

---

### **6️⃣ Orders & Sales Page**
- **List of recent orders** in a table format.  
- Columns:  
  - 🆔 **Order ID**  
  - 👤 **Customer Name**  
  - 🛍️ **Items Ordered**  
  - 💰 **Total Amount**  
  - 📆 **Date**  
  - ✅ **Status (Pending, Completed, Canceled)**  
- **Filter by order status**.  
- **Order details view** in a slide-out panel.  

---

### **7️⃣ Analytics & Reports**
- **Dashboard-like page with advanced analytics.**  
- **Key Metrics Section**:  
  - **Revenue Trends** (Line Chart).  
  - **Most Sold Products** (Pie Chart).  
  - **User Growth Rate** (Bar Chart).  
- **Export to PDF/Excel** functionality.  

---

### **8️⃣ Settings Page**
- **Profile Settings:** Change name, email, password, profile picture.  
- **Security Settings:** Enable **2FA, change password, activity logs**.  
- **Notification Preferences:** Email alerts, push notifications.  
- **Theme Preferences:** Light/Dark mode toggle.  

---

## **🖌️ UI/UX Design Elements**
- **🎨 Color Palette:**  
  - **Primary:** `#4F46E5` (Indigo)  
  - **Secondary:** `#22C55E` (Green)  
  - **Background:** `#F9FAFB` (Light) | `#1E1E1E` (Dark)  
  - **Text:** `#374151` (Dark Gray) | `#E5E7EB` (Light Gray)  

- **🖍️ Typography:**  
  - Headings: `font-extrabold`  
  - Body text: `font-medium`  
  - Use **Inter or Poppins** font.  

- **⚡ Animations & Transitions:**  
  - Use **framer-motion** for smooth animations.  
  - Fade-in effects for loading pages.  
  - Hover animations for buttons and cards.  

- **🛠️ Reusable Components:**  
  - Sidebar Navigation Component.  
  - Card Component for Key Metrics.  
  - Table Component with sorting & filtering.  
  - Modal Component for forms.  
  - Chart Components for analytics.  

---

### **🚀 Tech Stack & Integrations**
✅ **Frontend:** Vite + React.js + Tailwind CSS  
✅ **Charts & Graphs:** Recharts.js or Chart.js  
✅ **Forms & Validation:** React Hook Form + Zod  
✅ **State Management:** Zustand or Redux Toolkit  
✅ **Authentication:** Supabase, Firebase, or NextAuth.js  
✅ **Database:** PostgreSQL or MongoDB  
✅ **API Handling:** Axios  

---

### **🔥 Final Touches**
- Fully **responsive** (mobile-friendly UI).  
- **Dark/Light Mode** toggle.  
- **Custom Scrollbars** for better UX.  
- **Tooltips & Interactive Hover Effects**.  
- **Drag & Drop support** for certain sections.  

