import $ from 'jquery';
/** */
import { DOMAIN_IMG_DEFAULT } from '../../link_config';

export default function urlImg(input, idimg) {

    let img = $(`#${idimg}`);

    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {

            img.attr("src", e.target.result);

        };
        reader.readAsDataURL(input.files[0]);

        return input.files[0].name;

    } else {
        img.attr("src", input.files[0].name || DOMAIN_IMG_DEFAULT);

    }
}

export function editProd(produto) {

    const url = "http://127.1.1.0:3333/updateProd";

    $.ajax({
        url: url,
        type: "patch",
        data: JSON.stringify(produto),
        header: "x-access-token",
        dataType: "json",
        contentType: "application/json",
        success: (result) => {
            console.log(' Produto ' + result.nome_prod + ' atualizado com sucesso! ');
        }
    })
}

export function insertProd(produto) {

    console.log(produto)

    const url = "http://127.1.1.0:3333/addProd";

    $.ajax({
        url: url,
        type: "post",
        data: JSON.stringify( produto ),
        header: "x-access-token",
        dataType: "json",
        contentType: "application/json",
        success: (result) => {
            console.log(' Produto ' + result.nome_prod + ' inserido com sucesso! ');

        },
        error: (status) => {

            console.log(' Erro ao inserir produto ');
            console.log(status);
            console.error(status);

        }
    })
}