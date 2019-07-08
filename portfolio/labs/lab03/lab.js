/*
	https://www.html5rocks.com/en/tutorials/file/dndfiles/
*/
function readfiles(files){

    var output = [];
    for(var i = 0 , f ; f = files[i] ; i++){
        output.push('<li><strong>', escape(f.name), '</strong>(',f.type||'n/a', ')',
                    f.size, ' bytes, last modified : ',
                    f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                    '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('')+ '</ul>';

    document.getElementById('content').innerHTML = '';
    document.getElementById('svgimage').innerHTML = '';


    for (var i = 0 , f; f = files[i]; i++){
        var reader =  new FileReader();
        reader.readAsText(files[i], 'UTF-8');

        reader.onload = function(evt) {
            var span = document.createElement('span');
            span.setAttribute("class","svgshow");
            span.innerHTML = evt.target.result;
            document.getElementById('svgimage').insertBefore(span,null);

            var span = document.createElement('span');
            span.setAttribute("class","svgtext");
            span.textContent = evt.target.result;
            document.getElementById('content').insertBefore(span,null);
        }
    }
}


function handleFileSelect(evt){
    var files = evt.target.files;

    readfiles(files);
}    

function handleFileSelect_drag(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files;

    readfiles(files);
}

function handleDragOver(evt){
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
}



function start(e) {
    document.getElementById('files').addEventListener('change' , handleFileSelect, false);

    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover',handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect_drag, false);
}

window.addEventListener( "load", start, false );
