function setGrid() {
    var geometry = new THREE.BoxGeometry( 300, 50, 2 );
    var material = new THREE.MeshBasicMaterial( {map: THREE.ImageUtils.loadTexture('images/wood-floor.jpg')} );

    var planeUp = new THREE.Mesh(geometry, material);
    planeUp.rotation.x = -0.5 * Math.PI;
    planeUp.position.set(0, 131.5, 0);

    planeUp.material.side = THREE.DoubleSide;
    scene.add(planeUp);

    var planeDown = new THREE.Mesh(geometry, material);
    planeDown.rotation.x = -0.5 * Math.PI;
    planeDown.position.set(0, -166.5, 0);

    planeDown.material.side = THREE.DoubleSide;
    scene.add(planeDown);

    var planeLeft = new THREE.Mesh(geometry, material);
    planeLeft.rotation.x = -0.5 * Math.PI;
    planeLeft.rotation.y = -0.5 * Math.PI;
    planeLeft.position.set(-149, -17.5, 0);

    planeLeft.material.side = THREE.DoubleSide;
    scene.add(planeLeft);

    var planeRight = new THREE.Mesh(geometry, material);
    planeRight.rotation.x = -0.5 * Math.PI;
    planeRight.rotation.y = -0.5 * Math.PI;
    planeRight.position.set(149, -17.5, 0);

    planeRight.material.side = THREE.DoubleSide;
    scene.add(planeRight);

    var r1 = new THREE.Mesh(geometry, material);
    r1.rotation.x = -0.5 * Math.PI;
    r1.rotation.y = -0.5 * Math.PI;
    r1.position.set(-49.67, -17.5, 0);

    r1.material.side = THREE.DoubleSide;
    scene.add(r1);

    var r2 = new THREE.Mesh(geometry, material);
    r2.rotation.x = -0.5 * Math.PI;
    r2.rotation.y = -0.5 * Math.PI;
    r2.position.set(49.67, -17.5, 0);

    r2.material.side = THREE.DoubleSide;
    scene.add(r2);

    var l1 = new THREE.Mesh(geometry, material);
    l1.rotation.x = -0.5 * Math.PI;
    l1.position.set(0, -67.16, 0);

    l1.material.side = THREE.DoubleSide;
    scene.add(l1);

    var l2 = new THREE.Mesh(geometry, material);
    l2.rotation.x = -0.5 * Math.PI;
    l2.position.set(0, 32.12, 0);

    l2.material.side = THREE.DoubleSide;
    scene.add(l2);

}