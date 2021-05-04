var wallpapers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var galeria = document.getElementById('galeria');



for (imagen of wallpapers) {
    galeria.innerHTML += `
                <div class="card">
                <a href="#" data-toggle="modal" data-target="#id` + imagen + `">
                    <img src="../img/wallpaperforo/` + imagen + `.png" alt="" class="card-img-top">
                </a>

            </div>
        </div>
        <!-- Modal, funcion para hacer click sobre la imagen-->
        <div class="modal fade" id="id` + imagen + `" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

            <button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>

            <!-- modal-lg para que sea mas grande y modal dialog-centered para posicionar imagen en el centro de la pantalla verticalmente-->
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <!-- Fluid para que sea responsiva y rounded para que tenga bordes redondeados-->
                <img src="../img/wallpaperforo/` + imagen + `.png" alt="" class="img-fluid rounded">

            </div>
        </div>
        `
}