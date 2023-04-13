// import * as THREE from '../node_modules/three/build/three.module.js';
// import { GLTFLoader } from "/../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

// // console.log(THREE);
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('#bonefire'),
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild( renderer.domElement );

// // const geometry = new THREE.TorusGeometry( 10, 3, 20, 50);
// // const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
// // const tarus = new THREE.Mesh( geometry, material );
// // scene.add( tarus );

// const loader = new GLTFLoader();

// loader.load( 'project_models/small_fire_place/scene.gltf', function (gltf) {
//     // gltf.scene.scale.set(.3,.3,.3);
//     console.log(gltf)
//     // gltf.scene.position.set(10,10,10);
//     scene.add(gltf.scene);
// }, undefined, function (error){
//     console.error(error);
// });

// const Dlight = new THREE.DirectionalLight(0xffffff);
// Dlight.position.set(0,10,10);
// scene.add(Dlight);

// camera.position.z = 1;

// function animate() {
// 	requestAnimationFrame( animate );
//     // tarus.rotation.x += 0.01;
//     // tarus.rotation.y += 0.01;
//     // tarus.rotation.z += 0.01;
// 	renderer.render( scene, camera );
// };

// animate();

// renderer.render( scene, camera );

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    effect: 'coverflow',
    grabCursor: true,
    spaceBetween: 200,
    loop: true,
    loopedSlides: 2,
    // allowTouchMove: false,
    // slideToClickedSlide: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 30,
        depth: 80,
        modifier: 2,
        scale: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
});

// function up_scale() {
//     document.getElementsByClassName('swiper-slide-active')[0].style.transform = 'scale(1.1)';
// };

// function down_scale() {
//     document.getElementsByClassName('swiper-slide-active')[0].style.transform = 'scale(1)';
// };

// var active_slide = document.getElementsByClassName('swiper-slide-active')[0];
// // console.log(active_slide);

// active_slide.addEventListener("mouseover", up_scale);

// active_slide.addEventListener("mouseout", down_scale);

// swiper.on('realIndexChange', function () {
//     active_slide.removeEventListener("mouseover", up_scale);

//     active_slide.removeEventListener("mouseout", down_scale);

//     active_slide = document.getElementsByClassName('swiper-slide-active')[0];

//     active_slide.addEventListener("mouseover", up_scale);

//     active_slide.addEventListener("mouseout", down_scale);
// });

var slide_forward = document.getElementsByClassName('slider_color_forward')[0];
var slide_backward = document.getElementsByClassName('slider_color_backward')[0];

swiper.on('realIndexChange', function () {

    var insert_to_container = document.getElementsByClassName('container')[0];
    insert_to_container.appendChild(slide_forward);
    insert_to_container.appendChild(slide_backward);
});
