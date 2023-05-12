import * as Three from 'three'

const scene = new Three.Scene()

/* make red cube. */
const geometry = new Three.BoxGeometry(1, 1, 1)
const material = new Three.MeshBasicMaterial({
    color: 0xFF0000
})

const mesh = new Three.Mesh(geometry, material)

scene.add(mesh)

/* dimensions for camera and renderer. */
const dimensions = {
    width: innerWidth,
    height: innerHeight
}

/* setup camera. */
const camera = new Three.PerspectiveCamera(75, dimensions.width / dimensions.height)

camera.position.x = 1
camera.position.z = 1

scene.add(camera)

/* add scene to document. */
const canvas = document.querySelector('#app')

const renderer = new Three.WebGLRenderer({
    canvas
})

renderer.setSize(dimensions.width, dimensions.height)
renderer.render(scene, camera)