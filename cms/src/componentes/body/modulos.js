import $ from 'jquery';
/** */
import { DOMAIN_IMG_DEFAULT } from '../../link_config';

export default function urlImg(input, idimg) {

    let img = document.getElementById(idimg);

    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;

        };
        reader.readAsDataURL(input.files[0]);

        return input.files[0].name;

    } else {
        img.src = input.files[0].name || DOMAIN_IMG_DEFAULT;

    }
}

export const editProd = (produto) => {

    const url = "http://127.1.1.0:3333/updateProd";

    $.ajax({
        url: url,
        type: "patch",
        data: JSON.stringify(produto),
        header: "x-access-token",
        dataType: "json",
        contentType: "application/json"
    })
}

export const insertProd = (produto) => {

    const url = "http://127.1.1.0:3333/addProd";

    $.ajax({
        url: url,
        type: "post",
        data: JSON.stringify(produto),
        header: "x-access-token",
        dataType: "json",
        contentType: "application/json",
        error: (status) => {

            console.log(' Erro ao inserir produto ');
            console.log(status);
            console.error(status);

        }
    })
}

export const deleteProd = (id) => {

    const url = "http://127.1.1.0:3333/delProd";

    $.ajax({
        url: url,
        type: "delete",
        data: { "cod_prod": id },
        header: "x-access-token",
        dataType: "json",
        contentType: "application/json",
        error: (status) => {

            console.log(' Erro ao deletar produto ');
            console.log(status);
            console.error(status);

        }
    })

}


/** FUNÇÃO PARA LIMPAR CAMPOS */

export const clearInput = (produto) => {

    for (let i in produto) {

        let type = typeof (produto[i]);

        if (type === 'string') {
            produto[i] = "";

        } else
            if (type === 'number') {
                produto[i] = 0;

            } else
                if (type === 'boolean') {
                    produto[i] = false;

                }
    }

    $('#imgprod').attr("src", DOMAIN_IMG_DEFAULT);

    return produto
}

