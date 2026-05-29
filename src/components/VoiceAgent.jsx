import { useState, useEffect, useRef } from 'react'
import { Room, Track, RoomEvent } from 'livekit-client'
import { Mic, MicOff, PhoneOff, Loader2 } from 'lucide-react'

function Waveform({ muted, light }) {
  if (muted) return null
  const barClass = light ? 'bg-emerald-500/80' : 'bg-emerald-400/90'
  return (
    <div className="flex items-end gap-[2px] h-3.5" aria-hidden>
      {[6, 10, 7, 11].map((h, i) => (
        <span
          key={i}
          className={`w-[2.5px] rounded-full origin-bottom animate-pulse ${barClass}`}
          style={{ height: `${h}px`, animationDelay: `${i * 100}ms`, animationDuration: '0.7s' }}
        />
      ))}
    </div>
  )
}

const VARIANTS = {
  fab: {
    surface: 'dark',
    idle:
      'group flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#FF6B35] text-white font-semibold text-sm shadow-lg shadow-orange-900/25 hover:shadow-orange-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300',
    active:
      'bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/20 text-white',
    hint: 'text-[11px] text-white/50 font-medium tracking-wide',
    error: 'text-red-200',
  },
  cta: {
    surface: 'dark',
    idle:
      'group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/95 text-gray-900 font-semibold text-base shadow-lg shadow-black/10 hover:bg-white hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300',
    active:
      'bg-white/15 backdrop-blur-2xl border border-white/25 shadow-xl text-white',
    hint: null,
    error: 'text-red-200',
  },
  primary: {
    surface: 'light',
    idle:
      'group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0B1F8F] text-white font-semibold hover:bg-[#1C2ED6] active:scale-[0.98] transition-all duration-200',
    active:
      'bg-white border border-gray-200 shadow-lg text-gray-900',
    hint: null,
    error: 'text-red-600',
  },
}

export default function VoiceAgent({ variant = 'cta', className = '', label = 'Talk to Sarah' }) {
  const [room, setRoom] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const remoteAudioContainerRef = useRef(null)

  const v = VARIANTS[variant] || VARIANTS.cta
  const isLight = v.surface === 'light'

  const connectToRoom = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach((track) => track.stop())

      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:5001'
      const response = await fetch(`${backendUrl}/create_room`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identity: 'user-' + Math.random().toString(36).substr(2, 9),
        }),
      })

      if (!response.ok) throw new Error('Failed to connect. Please try again.')

      const data = await response.json()
      const newRoom = new Room()

      newRoom.on(RoomEvent.TrackSubscribed, (track) => {
        if (track.kind === Track.Kind.Audio) {
          const element = track.attach()
          element.autoplay = true
          element.style.display = 'none'
          remoteAudioContainerRef.current?.appendChild(element)
        }
      })

      newRoom.on(RoomEvent.TrackUnsubscribed, (track) => {
        track.detach().forEach((element) => element.remove())
      })

      newRoom.on(RoomEvent.ParticipantDisconnected, () => {
        setIsConnected(false)
      })

      await newRoom.connect(data.url, data.token)
      await newRoom.localParticipant.setMicrophoneEnabled(true)

      setRoom(newRoom)
      setIsConnected(true)
      setIsLoading(false)
    } catch (err) {
      console.error('Error connecting to room:', err)
      if (err?.name === 'NotAllowedError') {
        setError('Allow microphone access to talk to Sarah.')
      } else if (err?.name === 'NotFoundError') {
        setError('No microphone found.')
      } else {
        setError(err.message || 'Could not connect to Sarah.')
      }
      setIsLoading(false)
    }
  }

  const disconnectFromRoom = async () => {
    if (room) {
      await room.disconnect()
      if (remoteAudioContainerRef.current) {
        remoteAudioContainerRef.current.innerHTML = ''
      }
      setRoom(null)
      setIsConnected(false)
      setIsMuted(false)
      setIsLoading(false)
    }
  }

  const toggleMute = () => {
    if (room) {
      room.localParticipant.setMicrophoneEnabled(isMuted)
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    return () => {
      if (room) room.disconnect()
    }
  }, [room])

  const sessionLabel = isLoading
    ? 'Connecting…'
    : isMuted
      ? 'Mic muted'
      : 'Listening'

  const iconWrap =
    variant === 'fab'
      ? 'w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors'
      : variant === 'cta'
        ? 'w-9 h-9 rounded-full bg-gradient-to-br from-[#FF5A1F] to-[#FF6B35] flex items-center justify-center text-white shadow-md'
        : ''

  const showSession = isLoading || isConnected

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      {!showSession ? (
        <button type="button" onClick={connectToRoom} className={v.idle} aria-label={label}>
          {(variant === 'fab' || variant === 'cta') && (
            <span className={iconWrap}>
              <Mic className="w-4 h-4" />
            </span>
          )}
          {variant === 'primary' && <Mic className="w-4 h-4" />}
          <span>{label}</span>
        </button>
      ) : (
        <div
          className={`
            flex items-center gap-3 rounded-full transition-all duration-500 ease-out
            px-4 py-2.5 sm:px-5 min-w-[200px] sm:min-w-[240px]
            ${v.active}
          `}
          role="status"
          aria-live="polite"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2.5 w-full py-0.5">
              <Loader2 className={`w-4 h-4 animate-spin ${isLight ? 'text-[#0B1F8F]' : 'text-white'}`} />
              <span className={`text-sm font-medium ${isLight ? 'text-gray-700' : 'text-white/95'}`}>
                Connecting to Sarah…
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  {!isMuted && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  )}
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${isMuted ? 'bg-amber-400' : 'bg-emerald-400'}`}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-semibold leading-none truncate ${isLight ? 'text-gray-900' : 'text-white'}`}>
                    Sarah
                  </p>
                  <p className={`text-[11px] mt-0.5 truncate ${isLight ? 'text-gray-500' : 'text-white/65'}`}>
                    {sessionLabel}
                  </p>
                </div>
                {!isMuted && <Waveform muted={isMuted} light={isLight} />}
              </div>

              <div className={`flex items-center flex-shrink-0 rounded-full p-0.5 ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className={`p-2 rounded-full transition-colors ${
                    isLight
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-white'
                      : 'text-white/80 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {isMuted ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={disconnectFromRoom}
                  aria-label="End conversation"
                  className={`p-2 rounded-full transition-colors ${
                    isLight
                      ? 'text-red-500 hover:bg-red-50'
                      : 'text-red-300 hover:bg-red-500/25 hover:text-red-200'
                  }`}
                >
                  <PhoneOff className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {error && !showSession && (
        <p className={`text-xs text-center max-w-[200px] leading-snug ${v.error}`} role="alert">
          {error}
        </p>
      )}

      {v.hint && !showSession && !error && <p className={v.hint}>AI voice assistant</p>}

      <div ref={remoteAudioContainerRef} className="sr-only" aria-hidden />
    </div>
  )
}
