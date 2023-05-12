import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

/* Object3D instance. */
// const mesh = new THREE.Mesh(geometry, material)

/* mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1 */

/* Vector3 instances */
// mesh.position.set(0.7, -0.6, 1)
// mesh.scale.set(1, 1, 1)

/* Euler instances */
// mesh.rotation.reorder('XYZ') // from outer to inner.

// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// scene.add(mesh)

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(geometry, material)
const cube2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x00FF00 }))
const cube3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x0000FF }))

group.add(cube1)

group.add(cube2)
cube2.position.x = 2

group.add(cube3)
cube3.position.x = -2


group.position.set(0, 1, 0)
group.scale.x = 1

const axesHelper = new THREE.AxesHelper(3)
/* axesHelper.rotation.y = 2 * Math.PI / 4
axesHelper.rotation.z = 2 * Math.PI / 4 */

scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 0, 2)
/* camera.lookAt(mesh.position) // face straight at but away from mesh. */

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(devicePixelRatio)

renderer.render(scene, camera)