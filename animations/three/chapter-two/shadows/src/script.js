import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
 */

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

/* real-time shadows allow us to move objects and still have their shadows matching. */

/* only three kinds of lights support real-time shadows in three.js: */
/* 1. directional light */
/* 2. spotlight */
/* 3. point light */

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3)
directionalLight.position.set(2, 2, - 1)
directionalLight.castShadow = true
scene.add(directionalLight)

gui.add(directionalLight, 'intensity').min(0).max(1).step(0.001)
gui.add(directionalLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(directionalLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(directionalLight.position, 'z').min(- 5).max(5).step(0.001)

/* access shadow maps. */
directionalLight.shadow.mapSize.set(2**11, 2**11) /* must be multiple of 2 for mipmaps. */

directionalLight.shadow.camera.far = 6 /* how far our shadow map camera sees. */
/* our directionalLight still illuminates everything miles and miles away. */
/* however, shadows are limited to the first 6 units. */

/* adjust dimensions of shadow map camera. */
directionalLight.shadow.camera.top = 2
directionalLight.shadow.camera.right = 2
directionalLight.shadow.camera.bottom = -2
directionalLight.shadow.camera.left = -2

/* increase blur radius (only compatible with some shadow map algorithms). */
/* directionalLight.shadow.radius = 50 */

const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
directionalLightCameraHelper.visible = false
scene.add(directionalLightCameraHelper)

/* do not need to alert renderer of change, because */
/* by default, every render, uses a brand new shadow map. */

// Spotlight
const spotlight = new THREE.SpotLight('white', 0.3, 10, Math.PI * 0.3)
spotlight.castShadow = true

spotlight.position.set(0, 2, 2)
scene.add(spotlight, spotlight.target)

spotlight.shadow.mapSize.set(2**11, 2**11)
spotlight.shadow.camera.fov = 30
spotlight.shadow.camera.near = 1
spotlight.shadow.camera.far = 6

const spotlightCameraHelper = new THREE.CameraHelper(spotlight.shadow.camera)
spotlightCameraHelper.visible = false
scene.add(spotlightCameraHelper)

// Pointlight
const pointLight = new THREE.PointLight('white', 0.3) 

pointLight.castShadow = true

pointLight.position.set(-1, 1, 0)
scene.add(pointLight)

/* helper for light. */
const pointLightHelper = new THREE.PointLightHelper(pointLight)
pointLightHelper.visible = false

scene.add(pointLightHelper)

/* helper for shadow map camera. */
const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera)
pointLightCameraHelper.visible = false
scene.add(pointLightCameraHelper)

/* 6 different shadow maps are rendered per frame for pointlights. */
/* this results in a shadow map cube. */

pointLight.shadow.mapSize.set(2**10, 2**10)
pointLight.shadow.camera.near = 0.1
pointLight.shadow.camera.far = 5

/* 'fov' is determined by three.js. do not modify it in */
/* a pointlight's shadow map camera. */

/**
 * Textures
 */

const textureLoader = new THREE.TextureLoader()
const bakedShadow = textureLoader.load('/textures/bakedShadow.jpg')
const simpleShadow = textureLoader.load('/textures/simpleShadow.jpg')

/**
 * Materials
 */
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.7
gui.add(material, 'metalness').min(0).max(1).step(0.001)
gui.add(material, 'roughness').min(0).max(1).step(0.001)

/**
 * Objects
 */
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)

sphere.castShadow = true

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.5
plane.receiveShadow = true

/* make a shadow that follows. */

const sphereShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 1.5),
    new THREE.MeshBasicMaterial({
        color: 'black',
        transparent: true,
        alphaMap: simpleShadow
    })
)

sphereShadow.rotation.x = -Math.PI / 2
sphereShadow.position.y = plane.position.y + 0.01

scene.add(sphereShadow)

const group = new THREE.Group()

const copySphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)

copySphere.castShadow = true

const copyPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)

copyPlane.rotation.x = - Math.PI * 0.5
copyPlane.position.y = - 0.5
copyPlane.receiveShadow = true

group.add(copySphere, copyPlane)

group.position.set(-3, -5, 0)

const axes = new THREE.AxesHelper()
axes.visible = false

scene.add(sphere, plane, group, axes)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/* activate use of shadow maps. */
renderer.shadowMap.enabled = false

/* specify shadow map algorithm. */
renderer.shadowMap.type = THREE.PCFSoftShadowMap

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // update sphere.
    sphere.position.x = Math.cos(elapsedTime) * 1.5
    sphere.position.z = Math.sin(elapsedTime) * 1.5
    sphere.position.y = Math.abs(Math.sin(elapsedTime * 3))

    // update sphere shadow.
    sphereShadow.position.x = sphere.position.x
    sphereShadow.position.z = sphere.position.z
    sphereShadow.material.opacity = (1 - sphere.position.y) * 0.3

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()