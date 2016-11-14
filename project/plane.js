var mirrorPlaneCamera, floorPlane;

function setGrid() {
    var geometry = new THREE.BoxGeometry( 300, 50, 2 );
    var material = new THREE.MeshBasicMaterial( {
        map: THREE.ImageUtils.loadTexture('images/wood-floor.jpg')
    } );
    var auxGeometry = new THREE.BoxGeometry( 299, 20, 2 );
    var auxMaterial = new THREE.MeshBasicMaterial( {
        map: THREE.ImageUtils.loadTexture('images/stone-wall.jpg')
    } );

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

    // Planes from the inner grids (verticals)
    var rr1 = new THREE.Mesh(auxGeometry, auxMaterial);
    var rr2 = new THREE.Mesh(auxGeometry, auxMaterial);
    var rr3 = new THREE.Mesh(auxGeometry, auxMaterial);
    var rr4 = new THREE.Mesh(auxGeometry, auxMaterial);
    var rr5 = new THREE.Mesh(auxGeometry, auxMaterial);
    var rr6 = new THREE.Mesh(auxGeometry, auxMaterial);

    rr1.rotation.x = -0.5 * Math.PI;
    rr1.rotation.y = -0.5 * Math.PI;
    rr1.position.set(-115.89, -17.5, 0);

    rr1.material.side = THREE.DoubleSide;
    scene.add(rr1);

    rr2.rotation.x = -0.5 * Math.PI;
    rr2.rotation.y = -0.5 * Math.PI;
    rr2.position.set(-82.78, -17.5, 0);

    rr2.material.side = THREE.DoubleSide;
    scene.add(rr2);

    rr3.rotation.x = -0.5 * Math.PI;
    rr3.rotation.y = -0.5 * Math.PI;
    rr3.position.set(-16.56, -17.5, 0);

    rr3.material.side = THREE.DoubleSide;
    scene.add(rr3);

    rr4.rotation.x = -0.5 * Math.PI;
    rr4.rotation.y = -0.5 * Math.PI;
    rr4.position.set(16.56, -17.5, 0);

    rr4.material.side = THREE.DoubleSide;
    scene.add(rr4);

    rr5.rotation.x = -0.5 * Math.PI;
    rr5.rotation.y = -0.5 * Math.PI;
    rr5.position.set(82.78, -17.5, 0);

    rr5.material.side = THREE.DoubleSide;
    scene.add(rr5);

    rr6.rotation.x = -0.5 * Math.PI;
    rr6.rotation.y = -0.5 * Math.PI;
    rr6.position.set(115.89, -17.5, 0);

    rr6.material.side = THREE.DoubleSide;
    scene.add(rr6);

     // Planes from the inner grids (horizontals)
    var ll1 = new THREE.Mesh(auxGeometry, auxMaterial);
    var ll2 = new THREE.Mesh(auxGeometry, auxMaterial);
    var ll3 = new THREE.Mesh(auxGeometry, auxMaterial);
    var ll4 = new THREE.Mesh(auxGeometry, auxMaterial);
    var ll5 = new THREE.Mesh(auxGeometry, auxMaterial);
    var ll6 = new THREE.Mesh(auxGeometry, auxMaterial);

    ll1.rotation.x = -0.5 * Math.PI;
    ll1.position.set(0, 98.39, 0);

    ll1 .material.side = THREE.DoubleSide;
    scene.add(ll1);

    ll2.rotation.x = -0.5 * Math.PI;
    ll2.position.set(0, 65.28, 0);

    ll2.material.side = THREE.DoubleSide;
    scene.add(ll2);

    ll3.rotation.x = -0.5 * Math.PI;
    ll3.position.set(0, -0.94, 0);

    ll3.material.side = THREE.DoubleSide;
    scene.add(ll3);

    ll4.rotation.x = -0.5 * Math.PI;
    ll4.position.set(0, -34.05, 0);

    ll4.material.side = THREE.DoubleSide;
    scene.add(ll4);

    ll5.rotation.x = -0.5 * Math.PI;
    ll5.position.set(0, -100.28, 0);

    ll5.material.side = THREE.DoubleSide;
    scene.add(ll5);

    ll6.rotation.x = -0.5 * Math.PI;
    ll6.position.set(0, -133.39, 0);

    ll6.material.side = THREE.DoubleSide;
    scene.add(ll6);

    var mirrorPlaneGeometry = new THREE.CubeGeometry(400, 400, 10, 1, 1, 1);
    mirrorPlaneCamera = new THREE.CubeCamera(0.1, 5000, 512);
    scene.add(mirrorPlaneCamera);

    var mirrorPlaneMaterial  = new THREE.MeshBasicMaterial( {
        envMap: mirrorPlaneCamera.renderTarget
    } );

    floorPlane = new THREE.Mesh(mirrorPlaneGeometry, mirrorPlaneMaterial);
    floorPlane.rotation.x = -0.5 * Math.PI;
    floorPlane.position.set(0, -200, 0);
    mirrorPlaneCamera.position = floorPlane.position;

    //scene.add(floorPlane);
}