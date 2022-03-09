import './style.css'

import * as THREE from 'three'

/* Scena light, camera */
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(3)

const geometry = new THREE.TorusKnotGeometry(12, 2, 300, 20, 3, 7)
const material = new THREE.MeshBasicMaterial({
  color: 0x262626,
  wireframe: true,
})
const torusKnot = new THREE.Mesh(geometry, material)
scene.add(torusKnot)

torusKnot.position.z = -10

function moveCamera() {
  const t = document.body.getBoundingClientRect().top
  torusKnot.rotation.z += 0.03
  torusKnot.rotation.x += 0.002
  torusKnot.rotation.y += 0.002

  torusKnot.position.y = t * -0.002

  camera.position.z = t * -0.006
}

document.body.onscroll = moveCamera

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()

// Hamburger menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})
