import React, { useState, useRef } from 'react';
import { Upload, Volume2, VolumeX } from 'lucide-react';

export const UIOverlay = () => {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
      setMuted(!muted);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100 }}>
      <audio ref={audioRef} src="/audio.mp3" loop />
      <div style={{ position: 'absolute', top: '24px', right: '24px', pointerEvents: 'auto' }}>
        <button 
          type="button" 
          onClick={toggleAudio} 
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '50%', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>
      <div style={{ position: 'absolute', bottom: '48px', width: '100%', display: 'flex', justifyContent: 'center', pointerEvents: 'auto' }}>
        <label style={{ background: '#BAE6FD', color: '#020617', padding: '12px 24px', borderRadius: '999px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Upload size={20} />
          <span>Upload Image</span>
          <input type="file" style={{ display: 'none' }} accept="image/*" />
        </label>
      </div>
    </div>
  );
};
