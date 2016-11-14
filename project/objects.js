var position;

function loadObjects() {
    fillPosition();
    var loader = new THREE.OBJLoader();

    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            if (grid[i][j] == 0) continue;
            if (grid[i][j] == 1) {
                loader.load{
                    'objects/one.obj',
                    function(object) {

                    }
                }
            }
        }
    }

    /*
    loader.load(
        filePath,
        function (object) {
            obj1 = object;
            object.traverse(
                function (child) {
                    if (child instanceof THREE.Mesh) {
                        child.material.color.setHex(0x99FF66);
                    }
                }
            );
            obj1.applyMatrix(new translation(0, 15, 0).matrix);
            obj1.castShadow = true;
            scene.add(obj1)
              loadCamera(obj1);
        }
    );
    */
}

function fillPosition() {
    var base_position = [-149, 131.5];
    var constant = 16.5555556;
    var varies = 2*constant;
    position = [[[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]];
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            position[i][j][0] = base_position[0] + constant + i*varies;
            position[i][j][1] = base_position[1] - constant - j*varies;
        }
    }
}