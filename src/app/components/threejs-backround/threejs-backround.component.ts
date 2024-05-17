import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-background',
  templateUrl: './threejs-backround.component.html',
  styleUrls: ['./threejs-backround.component.css']
})
export class ThreejsBackgroundComponent implements OnInit {
  darkMode: boolean = false; // Assuming you have a darkMode property

  constructor() { }

  ngOnInit(): void {
    this.initThreeJSBackground();
  }

  initThreeJSBackground() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const element = document.getElementById('threejs-background');
    if (element) { // Check if element is not null
      element.appendChild(renderer.domElement);

      const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
      const material = new THREE.MeshStandardMaterial({ color: this.darkMode ? 0xffffff : 0x00ff00 });
      const torusKnot = new THREE.Mesh(geometry, material);
      scene.add(torusKnot);

      camera.position.z = 30;

      const animate = function () {
        requestAnimationFrame(animate);

        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    }
  }
}
