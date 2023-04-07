import * as THREE from '../node_modules/three/build/three.module.js';
import { GLTFLoader } from "/../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

// console.log(THREE);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bonefire'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

// const geometry = new THREE.TorusGeometry( 10, 3, 20, 50);
// const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
// const tarus = new THREE.Mesh( geometry, material );
// scene.add( tarus );

const loader = new GLTFLoader();

loader.load( 'project_models/small_fire_place/scene.gltf', function (gltf) {
    // gltf.scene.scale.set(.3,.3,.3);
    console.log(gltf)
    // gltf.scene.position.set(10,10,10);
    scene.add(gltf.scene);
}, undefined, function (error){
    console.error(error);
});

const Dlight = new THREE.DirectionalLight(0xffffff);
Dlight.position.set(0,10,10);
scene.add(Dlight);

camera.position.z = 1;

function animate() {
	requestAnimationFrame( animate );
    // tarus.rotation.x += 0.01;
    // tarus.rotation.y += 0.01;
    // tarus.rotation.z += 0.01;
	renderer.render( scene, camera );
};

animate();

renderer.render( scene, camera );