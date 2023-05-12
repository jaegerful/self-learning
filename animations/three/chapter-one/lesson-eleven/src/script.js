import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Textures
 */

/* const image = new Image() // image html element.
image.src = 'textures/door/color.jpg'

let texture = new THREE.Texture(image)

image.onload = () => {
    texture.needsUpdate = true
} */
const loadingManager = new THREE.LoadingManager() // to track different kinds of loaders.

/* loadingManager.onStart = () => console.time(`delta`)
loadingManager.onLoad = () => console.timeEnd(`delta`) */

const textureLoader = new THREE.TextureLoader(loadingManager) // can load many textures!

const colorTexture = textureLoader.load('textures/checkerboard-8x8.png')
/* const alphaTexture = textureLoader.load('textures/door/alpha.jpg')
const heightTexture = textureLoader.load('textures/door/height.jpg')
const normalTexture = textureLoader.load('textures/door/normal.jpg')
const ambientOcclusionTexture = textureLoader.load('textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('textures/door/roughness.jpg') */

/* colorTexture.repeat.x = 2
colorTexture.repeat.y = 2

colorTexture.wrapS = THREE.MirroredRepeatWrapping // for 'x'.
colorTexture.wrapT = THREE.MirroredRepeatWrapping // for 'y'.
*/

// offset for each instance of a texture (like a camera position). range is [0, 1]:
/* colorTexture.offset.x = -0.2 
colorTexture.offset.y = 0

colorTexture.center.set(0.5, 0.5) // independent of geometry dimensions. range is [0, 1]
colorTexture.rotation = Math.PI * 0.1 // number radians to rotate 2D texture. applies to each texture. */

colorTexture.generateMipmaps = false /* for minification (half of halves). */
colorTexture.minFilter = THREE.NearestFilter
colorTexture.magFilter = THREE.NearestFilter /* returns value of nearest texel. LinearFilter uses averages of surrounding texels. */

/* 
things to remember with textures:
    1. weight
    2. resolution (should be a power of 2 for mipmapping)
 */

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
console.log(geometry.attributes.uv)
const material = new THREE.MeshBasicMaterial({ map: colorTexture })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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
camera.position.z = 1
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
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // does not affect textures.

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