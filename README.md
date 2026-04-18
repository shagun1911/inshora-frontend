# Inshora Group - AI-Powered Insurance Comparison Platform

A premium SaaS landing page for Inshora Group with an integrated voice agent powered by LiveKit and OpenAI's Realtime API.

## 🏗️ Architecture

The voice agent system uses:
- **LiveKit** for real-time audio communication
- **OpenAI Realtime API** for voice AI (speech-to-text, LLM, text-to-speech in a single WebSocket)
- **Flask** backend for room creation and agent dispatch
- **React + Vite** frontend with Tailwind CSS

## 📁 Project Structure

```
Inshora/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── VoiceAgent.jsx    # Voice agent modal component
│   │   ├── App.jsx               # Main landing page
│   │   └── index.css             # Tailwind styles
│   ├── .env                      # Frontend environment variables
│   └── package.json
└── backend/           # Flask backend
    ├── agent.py                  # OpenAI Realtime agent implementation
    ├── backend.py                # Flask server
    ├── requirements.txt          # Python dependencies
    └── .env                      # Backend environment variables
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- Python (v3.8 or higher)
- LiveKit server (or LiveKit Cloud account)
- OpenAI API key with access to Realtime API

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables:**
   
   Edit `backend/.env` and add your credentials:
   ```env
   LIVEKIT_URL=your-livekit-server-url
   LIVEKIT_API_KEY=your-api-key
   LIVEKIT_API_SECRET=your-api-secret
   OPENAI_API_KEY=your-openai-api-key
   ```

5. **Start the agent worker:**
   ```bash
   python agent.py
   ```

6. **Start the Flask server (in a new terminal):**
   ```bash
   cd backend
   source venv/bin/activate
   python backend.py
   ```

   The Flask server will run on `http://127.0.0.1:5001`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   
   Edit `frontend/.env`:
   ```env
   VITE_BACKEND_URL=http://127.0.0.1:5001
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

## 🎤 Using the Voice Agent

1. Open the landing page at `http://localhost:5173`
2. Click the microphone button in the hero section
3. A modal will appear showing the voice agent interface
4. Click the phone icon to connect to Sarah (the AI agent)
5. Grant microphone permissions when prompted
6. Start speaking with Sarah to get insurance assistance

## 🔧 Configuration

### Agent Personality

The agent's personality and instructions are defined in `backend/agent.py`. You can modify the `instructions` parameter to customize Sarah's behavior.

### Voice Settings

In `backend/agent.py`, you can adjust:
- `voice`: Change the voice (alloy, echo, fable, onyx, nova, shimmer)
- `temperature`: Adjust response creativity (0.0-1.0)
- `threshold`: VAD sensitivity for voice activity detection

## 📝 Environment Variables

### Backend (.env)
- `LIVEKIT_URL`: Your LiveKit server URL
- `LIVEKIT_API_KEY`: LiveKit API key
- `LIVEKIT_API_SECRET`: LiveKit API secret
- `OPENAI_API_KEY`: OpenAI API key

### Frontend (.env)
- `VITE_BACKEND_URL`: Backend server URL (default: http://127.0.0.1:5001)

## 🛠️ Troubleshooting

### Agent not connecting
- Ensure the Flask backend is running on port 5001
- Check that the agent worker is running
- Verify LiveKit credentials in `.env`
- Check browser console for errors

### Audio not working
- Ensure microphone permissions are granted
- Check browser audio settings
- Verify audio track is being subscribed in the room

### CORS errors
- Ensure Flask-CORS is installed and configured in backend.py
- Check that the backend URL in frontend `.env` is correct

## 🎨 Landing Page Sections

The landing page includes:
- Hero section with ZIP code input and insurance type tabs
- Voice agent integration with visual feedback
- Infinite logo scroller with insurance company logos
- Feature cards highlighting key benefits
- Customer testimonials with ratings
- Statistics section showing platform metrics
- How it works section (DIY vs Expert)
- Expert agent profile card
- Call-to-action section with contact info
- FAQ accordion
- Blog grid with latest articles
- Comprehensive footer

## 📱 Mobile Responsiveness

The entire landing page is fully responsive and optimized for mobile devices with:
- Hamburger menu for navigation
- Responsive grid layouts
- Touch-friendly buttons and inputs
- Optimized typography and spacing

## 🚀 Deployment

### Backend Deployment
1. Deploy Flask server to a cloud provider (Heroku, AWS, etc.)
2. Set environment variables in the deployment platform
3. Run the agent worker as a background process

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy to Vercel, Netlify, or any static hosting service
3. Update `VITE_BACKEND_URL` to point to the production backend

## 📄 License

© 2026 Inshora Group. All rights reserved.
