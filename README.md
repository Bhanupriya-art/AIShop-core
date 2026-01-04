# 3D AI Shirt Customizer 

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r168-orange)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-brightgreen)](https://vitejs.dev/)

An immersive 3D apparel customization platform inspired by Nike, featuring AI-powered design generation and real-time visualization.

<img width="1440" alt="Screenshot 2025-06-23 at 5 13 43 PM" src="https://github.com/user-attachments/assets/c6f582ca-82e0-4c81-ba1c-6e7195fc3657" /> 

---

## Features

- **3D Product Visualization** – Real-time rendering with React Three Fiber
- **AI Design Generator** – Create unique patterns with AI (DALL·E integration)
- **Customization Tools** – Color picker, texture upload, and design tweaking
- **Smooth Animations** – Powered by Framer Motion
- **Responsive UI** – Clean interface built with TailwindCSS

---

## Important Note About AI Feature

> **SPECIAL NOTICE**  
> The AI design generation feature *might work or might not work* depending on:
> - Whether your OpenAI API key is active and has enough credits  
> - Your subscription tier with OpenAI (DALL·E API access may be limited)  
> - Proper backend configuration with valid CORS and environment setup  
>
> Ensure you’ve followed the setup correctly and have access to DALL·E models. This feature is optional and may require a paid plan.

---

## Tech Stack

| Frontend              | Backend       | 3D Ecosystem        |
|-----------------------|---------------|---------------------|
| React 18              | Node.js       | Three.js            |
| Vite                  | Express       | @react-three/fiber  |
| TailwindCSS           |               | @react-three/drei   |
| Framer Motion         |               | @react-spring/three |

---

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/project-name.git
   ```
2. **Install dependencies**
   ```bash
   cd project-name
   npm install
   ```
3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your OpenAI API key in the .env file if using AI features
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```

## Project Structure
  ```bash
  bhanupriya-art-aishop-core/
  ├── client/               # Frontend application
  │   ├── src/
  │   │   ├── canvas/       # 3D scene components
  │   │   ├── components/   # UI components
  │   │   └── store/        # State management
  └── server/               # Backend server
      └── routes/           # API endpoints
  ```

## Contributing
Contributions are welcome! Please open an issue or submit a PR to help improve the project.

<p align="center">Made with ❤️ by Bhanu Priya</p> 


Let me know if you want to center the badges or add a live demo link too!













