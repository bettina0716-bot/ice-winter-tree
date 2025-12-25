import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const UIOverlay = () => {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (muted) { audioRef.current.play().catch(() => {}); } 
      else { audioRef.current.pause(); }
      setMuted(!muted);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100 }}>
      <audio ref={audioRef} src="/audio.mp3" loop />
      <div style={{ position: 'absolute', top: '24px', right: '24px', pointerEvents: 'auto' }}>
        <button onClick={toggleAudio} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', padding: '10px', borderRadius: '50%', color: 'white', cursor: 'pointer' }}>
          <span>{muted ? <VolumeX size={24} /> : <Volume2 size={24} />}</span>
        </button>
      </div>
      <div style={{ position: 'absolute', bottom: '48px', width: '100%', textAlign: 'center', pointerEvents: 'auto' }}>
        <label style={{ background: '#BAE6FD', padding: '12px 24px', borderRadius: '99px', cursor: 'pointer', fontWeight: 'bold' }}>
          Upload Image
          <input type="file" style={{ display: 'none' }} accept="image/*" />
        </label>
      </div>
    </div>
  );
};
