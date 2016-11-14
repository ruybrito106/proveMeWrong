var renderer;
var scene;
var camera;
var cube;

//animate();

function animate() {
    requestAnimationFrame(animate);
    render();
}

function setLights() {
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 20, 20);
    spotLight.shadow.camera.near = 20;
    spotLight.shadow.camera.far = 50;
    spotLight.castShadow = true;
    //scene.add(spotLight);

    var light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
    scene.add(light);
}

function render() {
    controls.update();

    floorPlane.visible = false;
    mirrorPlaneCamera.updateCubeMap(renderer, scene);
    floorPlane.visible = true;

    renderer.render(scene, camera);
}

function setRenderer() {
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
}

function setCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(5, 60, 600);
    camera.lookAt(new THREE.Vector3(0, -200, 0));
    //camera.up(new THREE.Vector2(1, 0, 0));
}

function initScenario() {
    setLights();
    setGrid();
}

function init() {
    scene = new THREE.Scene();
    setRenderer();
    setCamera();
    controls = new THREE.OrbitControls(camera);

    initScenario();
    populateGrid();

    document.body.appendChild(renderer.domElement);
    animate();
}

window.onload = init;