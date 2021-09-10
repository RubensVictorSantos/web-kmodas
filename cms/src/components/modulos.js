import $ from 'jquery';
/** */
import { DOMAIN_IMG_DEFAULT, DOMAIN_API } from '../link_config';

export function urlImg(input, idimg) {

    let img = document.getElementById(idimg);

    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {

            img.src = e.target.result;

        };

        reader.readAsDataURL(input.files[0]);

        return input.files[0];

    } else {
        img.src = input.files[0].name || DOMAIN_IMG_DEFAULT;

    }
}

export async function postData(url = '', data = {}) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

export async function putFile(url = '', data = {}) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

export const editProd = (produto) => {

    const url = `${DOMAIN_API}/products`;

    $.ajax({
        url: url,
        type: "patch",
        data: JSON.stringify(produto),
        header: "x-access-token",
        dataType: "json",
        contentType: "application/json",
        success(result) {
            console.log(result)
        }

    })
}

export const insertProd = (produto) => {

    const url = `${DOMAIN_API}/products`;

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

    const url = `${DOMAIN_API}/products`;

    $.ajax({
        url: url,
        type: "delete",
        data: { "cod_produto": id },
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

export function autoKey() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

