function pesquisaCNPJ() {
    var cnpj = $("#cnpj").val().replace(/\D/g, '');

    if (cnpj != null) {
        $.ajax(
            {
                url: 'https://www.receitaws.com.br/v1/cnpj/' + cnpj,
                method: 'GET',
                dataType: 'jsonp',

                complete: function (dados) {
                    response = dados.responseJSON;
                    if (response.status == 'OK') {
                        $('#razaosocial').val(response.nome);
                        $('#fantasia').val(response.fantasia);
                    }
                    else {
                        //limpa_formulario();
                        alert(response.message);
                    }
                }
            });
    }
    else {
        //Cnpj pesquisado nao foi encontrado
        //limpa_formulario();
        alert("CNPJ não encontrado.");
    }
};