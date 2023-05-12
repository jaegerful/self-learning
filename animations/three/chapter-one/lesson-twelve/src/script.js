import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

const gui = new dat.GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/** 
 * Objects
 */

// Textures

const textureLoader = new THREE.TextureLoader()

const textures = {
    doorColor: textureLoader.load('/textures/door/color.jpg'),
    doorAlpha: textureLoader.load('/textures/door/alpha.jpg'),
    doorAmbientOcclusion: textureLoader.load('/textures/door/ambientOcclusion.jpg'),
    doorHeight: textureLoader.load('/textures/door/height.jpg'),
    doorNormal: textureLoader.load('/textures/door/normal.jpg'),
    doorMetalness: textureLoader.load('/textures/door/metalness.jpg'),
    doorRoughness: textureLoader.load('/textures/door/roughness.jpg'),
    matcap: textureLoader.load('/textures/matcaps/1.png'),
    gradient: textureLoader.load('/textures/gradients/5.jpg'),
}

const cubeTextureLoader = new THREE.CubeTextureLoader()
const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/3/px.jpg',
    '/textures/environmentMaps/3/nx.jpg',
    '/textures/environmentMaps/3/py.jpg',
    '/textures/environmentMaps/3/ny.jpg',
    '/textures/environmentMaps/3/pz.jpg',
    '/textures/environmentMaps/3/nz.jpg'
])

// Lights
const ambientLight = new THREE.AmbientLight('white', 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight('white', 0.5)
pointLight.position.set(2, 3, 4)

scene.add(pointLight)

// Material
const material = new THREE.MeshStandardMaterial() // LambertMaterial only renders objects when there is light
material.envMap = environmentMapTexture

material.metalness = 0.7
material.roughness = 0.2

// MeshStandardMaterial implements PBR.

// material.map = textures.doorColor
// material.aoMap = textures.doorAmbientOcclusion
// material.aoMapIntensity = 2
// material.displacementMap = textures.doorHeight
// material.displacementScale = 0.05
// material.metalnessMap = textures.doorMetalness
// material.roughnessMap = textures.doorRoughness
// material.normalMap = textures.doorNormal
// material.alphaMap = textures.doorAlpha
// material.transparent = true

// gui.add(material, 'aoMapIntensity').min(0).max(10).step(0.001)
// gui.add(material, 'displacementScale').min(0).max(10).step(0.001)
// gui.add(material.normalScale, 'x').min(0).max(10).step(0.001)
// gui.add(material.normalScale, 'y').min(0).max(10).step(0.001)

// material.gradientMap = textures.gradient
// textures.gradient.magFilter = THREE.NearestFilter

// material.shininess = 1000
// material.specular = new THREE.Color(0xFF0000)

// material.wireframe = true
// material.color.set(0xFF0000)
// material.opacity = 0.5
// material.transparent = true
// material.flatShading = true // flat surface for faces

// maps are only compatible with mesh basic material.

// material.map = textures.doorColor
// material.alphaMap = textures.doorAlpha

material.side = THREE.DoubleSide

// Meshes
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16, 64, 64),
    material
)

sphere.geometry.setAttribute(
    'uv2', 
    new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
)

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 100, 100),
    material
)

plane.position.x = 1.5

plane.geometry.setAttribute(
    'uv2', 
    new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 16, 128),
    material
)

torus.position.x = -1.5

torus.geometry.setAttribute(
    'uv2', 
    new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
)

scene.add(sphere, plane, torus)

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

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()