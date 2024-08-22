// src/components/AudioSpectrum.js
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import music from './intro.mp3';

function AudioSpectrum() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(width, height);
    camera.position.z = 5;

    // Create an audio listener and an audio analyzer
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const audio = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(music, (buffer) => {
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.setVolume(0.5);
      audio.play();
    });

    const analyser = new THREE.AudioAnalyser(audio, 32);

    // Create spectrum bars
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const bars = [];
    
    for (let i = 0; i < 32; i++) {
      const bar = new THREE.Mesh(geometry, material);
      bar.position.x = (i - 16) * 0.5;
      scene.add(bar);
      bars.push(bar);
    }

    function animate() {
      requestAnimationFrame(animate);

      // Update the bars with the frequency data
      const data = analyser.getFrequencyData();
      bars.forEach((bar, i) => {
        const scaleY = data[i] / 256;
        bar.scale.y = scaleY;
        bar.position.y = scaleY / 2;
      });

      renderer.render(scene, camera);
    }

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      scene.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default AudioSpectrum;
