import * as THREE from 'three'

const scence = new THREE.Scene();
scence.background = new THREE.Color('#eee');


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });

const cube = new THREE.Mesh(geometry, material);
scence.add(cube);

const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);

scence.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);