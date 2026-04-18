import { useState, useEffect, useRef } from 'react'
import { Room, Track, RoomEvent } from 'livekit-client'
import { Mic, MicOff, Phone, PhoneOff, Sparkles } from 'lucide-react'

export default function VoiceAgent({ isOpen, onClose }) {
  const [room, setRoom] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [audioLevel, setAudioLevel] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const audioLevelInterval = useRef(null)

  const connectToRoom = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach(track => track.stop())

      // Request room from backend
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:5001'
      const response = await fetch(`${backendUrl}/create_room`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identity: 'user-' + Math.random().toString(36).substr(2, 9),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create room')
      }

      const data = await response.json()

      // Connect to LiveKit room
      const newRoom = new Room()
      
      newRoom.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
        if (track.kind === Track.Kind.Audio) {
          track.attach()
        }
      })

      newRoom.on(RoomEvent.TrackUnsubscribed, (track) => {
        track.detach()
      })

      newRoom.on(RoomEvent.ParticipantConnected, () => {
        console.log('Agent connected')
      })

      newRoom.on(RoomEvent.ParticipantDisconnected, () => {
        console.log('Agent disconnected')
        setIsConnected(false)
      })

      await newRoom.connect(data.url, data.token)
      
      // Enable microphone
      await newRoom.localParticipant.setMicrophoneEnabled(true)
      
      setRoom(newRoom)
      setIsConnected(true)

      // Start monitoring audio levels
      startAudioLevelMonitoring(newRoom)

    } catch (err) {
      console.error('Error connecting to room:', err)
      setError(err.message)
      setIsLoading(false)
    }
  }

  const disconnectFromRoom = async () => {
    if (room) {
      await room.disconnect()
      setRoom(null)
      setIsConnected(false)
      stopAudioLevelMonitoring()
    }
  }

  const toggleMute = () => {
    if (room) {
      room.localParticipant.setMicrophoneEnabled(!isMuted)
      setIsMuted(!isMuted)
    }
  }

  const startAudioLevelMonitoring = (currentRoom) => {
    audioLevelInterval.current = setInterval(() => {
      if (currentRoom.localParticipant) {
        const audioTrack = currentRoom.localParticipant.audioTrack
        if (audioTrack && audioTrack.mediaStreamTrack) {
          const settings = audioTrack.mediaStreamTrack.getSettings()
          if (settings) {
            setAudioLevel((settings.volume || 0) * 100)
          }
        }
      }
    }, 100)
  }

  const stopAudioLevelMonitoring = () => {
    if (audioLevelInterval.current) {
      clearInterval(audioLevelInterval.current)
      audioLevelInterval.current = null
    }
    setAudioLevel(0)
  }

  // Connect when component opens
  useEffect(() => {
    if (isOpen) {
      connectToRoom()
    }
    return () => {
      if (room) {
        disconnectFromRoom()
      }
    }
  }, [isOpen])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudioLevelMonitoring()
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Sarah - AI Voice Agent</h2>
          </div>
          
          <p className="text-gray-600 mb-2">
            {isLoading ? 'Connecting...' : isConnected ? 'Connected and listening' : 'Click to connect'}
          </p>
          
          <p className="text-sm text-gray-500 mb-8">
            {isConnected 
              ? 'Sarah is ready to help you with insurance quotes, coverage questions, and more. Just speak naturally!'
              : 'Connect to speak with Sarah, our AI-powered insurance assistant available 24/7.'}
          </p>

          {/* Audio Level Visualizer */}
          <div className="relative w-56 h-56 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] opacity-10" />
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0B1F8F] to-[#2563EB] transition-all duration-100"
              style={{
                transform: `scale(${0.5 + audioLevel / 200})`,
                opacity: 0.2 + audioLevel / 300,
              }}
            />
            <div className="absolute inset-6 rounded-full bg-white flex items-center justify-center shadow-lg">
              {isLoading ? (
                <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-[#0B1F8F]" />
              ) : isConnected ? (
                <div className="text-center">
                  <div className="text-5xl mb-2">🎤</div>
                  <p className="text-xs text-gray-500 font-medium">Listening</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-5xl mb-2">🔇</div>
                  <p className="text-xs text-gray-500 font-medium">Ready to connect</p>
                </div>
              )}
            </div>
          </div>

          {/* Audio Level Bar */}
          {isConnected && (
            <div className="w-full h-3 bg-gray-200 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] transition-all duration-100"
                style={{ width: `${audioLevel}%` }}
              />
            </div>
          )}

          {/* Controls */}
          <div className="flex justify-center gap-4">
            {isConnected ? (
              <>
                <button
                  onClick={toggleMute}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
                    isMuted ? 'bg-gray-200 text-gray-600' : 'bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white'
                  }`}
                >
                  {isMuted ? <MicOff className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
                </button>
                <button
                  onClick={disconnectFromRoom}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <PhoneOff className="w-7 h-7" />
                </button>
              </>
            ) : (
              <button
                onClick={connectToRoom}
                disabled={isLoading}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0B1F8F] to-[#2563EB] text-white flex items-center justify-center hover:from-[#1C2ED6] hover:to-[#3B82F6] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Phone className="w-8 h-8" />
              </button>
            )}
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={onClose}
            className="mt-6 text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
