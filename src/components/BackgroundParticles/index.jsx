import  { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuração da cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x00000, 0 ); // Fundo azul escuro (#16235a)

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Criar partículas (diminuir o tamanho das esferas e aumentar a quantidade)
    const particlesCount = 30; // Aumentar a quantidade de partículas
    const geometry = new THREE.SphereGeometry(0.17, 14, 14, ); // Diminuir o tamanho das esferas

    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(`hsl(353, 100%, 65%)`), 
      transparent: true,
      opacity: 0.8,
    });

    const particles = [];
    const particlesData = [];

    for (let i = 0; i < particlesCount; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 40, // Dispersão nas coordenadas
        (Math.random() - 0.5) * 40, // Dispersão nas coordenadas
        (Math.random() - 0.5) * 40  // Dispersão nas coordenadas
      );
      scene.add(particle);
      particles.push(particle);

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.1, // Velocidade ajustada
          (Math.random() - 0.5) * 0.1, // Velocidade ajustada
          (Math.random() - 0.5) * 0.1  // Velocidade ajustada
        ),
      });
    }

    // Criar linhas entre partículas
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(`hsl(353, 100%, 65%)`), 
      opacity: 0.3,
      transparent: true
    });

    const lineGeometry = new THREE.BufferGeometry();
    const maxConnections = particlesCount * particlesCount; // Máximo de conexões
    const linePositions = new Float32Array(maxConnections * 3 * 2); // Max connections

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // Função de animação
    const animate = () => {
      particles.forEach((particle, index) => {
        const data = particlesData[index];
        
        // Atualizar a posição da partícula
        particle.position.add(data.velocity);

        // Reposicionar partículas se saírem do limite
        if (particle.position.x < -40 || particle.position.x > 40) data.velocity.x = -data.velocity.x;
        if (particle.position.y < -40 || particle.position.y > 40) data.velocity.y = -data.velocity.y;
        if (particle.position.z < -40 || particle.position.z > 40) data.velocity.z = -data.velocity.z;
      });

      // Atualizar linhas entre partículas
      const positions = lineGeometry.attributes.position.array;
      let index = 0;
      let lineCount = 0;

      particles.forEach((particleA, i) => {
        particles.forEach((particleB, j) => {
          if (i < j) {
            const distance = particleA.position.distanceTo(particleB.position);
            if (distance < 10) { // Ajuste a distância para conectar
              positions[lineCount * 6] = particleA.position.x;
              positions[lineCount * 6 + 1] = particleA.position.y;
              positions[lineCount * 6 + 2] = particleA.position.z;
              positions[lineCount * 6 + 3] = particleB.position.x;
              positions[lineCount * 6 + 4] = particleB.position.y;
              positions[lineCount * 6 + 5] = particleB.position.z;
              lineCount++;
            }
          }
        });
      });

      lineGeometry.setDrawRange(0, lineCount * 2); // Ajustar o número de linhas visíveis
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Atualizar a cena quando a janela for redimensionada (metade da tela)
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    // Detectar movimento do mouse e dispersar partículas
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2(mouseX, mouseY);

      raycaster.setFromCamera(mouse, camera);

      particles.forEach((particle, index) => {
        const distance = particle.position.distanceTo(new THREE.Vector3(mouseX * 10, mouseY * 10, 0));
        if (distance < 1) {
          particlesData[index].velocity.add(
            new THREE.Vector3(
              (Math.random() - 0.5) * 0.2,
              (Math.random() - 0.5) * 0.2,
              (Math.random() - 0.5) * 0.2
            )
          );
        }
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '99%', height: '99%', zIndex: 0 }} />;
};

export default BackgroundParticles;