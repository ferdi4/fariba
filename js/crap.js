
var viewer

window.onload = function () {

    viewer = new Viewer('viewer');

    viewer.on('loaded', () => {
        viewer.show(ViewType.DEFAULT);
    });

    viewer.on('fps', fps => {
        var span = document.getElementById('fps');
        if (span) {
            span.innerHTML = fps;
        }
    });

    viewer.on('pick', args => {
        console.log(args)
    })

    viewer.on('loaded', args => {
        console.log('file loaded:', args)
    })


    const fileInput = document.getElementById('file-wexbim');

    fileInput.onchange = () => {
        const selectedFile = fileInput.files[0];
        viewer.load(selectedFile);
        viewer.start();
    }
};

function showSide(side) {
    if (viewer) {
        viewer.show(side);
    } else {
        console.warn('viewer not defined')
    }
}