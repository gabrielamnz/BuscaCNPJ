$(document).ready(function () {
    function limpa_formulario() {
        //Limpa valores do formulário
        $("#razaosocial").val("");
        $("#fantasia").val("");
    }

    //Quando o campo CNPJ perde o foco
    $("#select-cnpj").blur(function () {
        //Variável cnpj apenas com dígitos
        var cnpj = $(this).val().replace(/\D/g, '');
        alert(cnpj);
        //Verifica se o campo CNPJ possui valor informado
        if (cnpj != null) {

            //$.ajax(
            //    {
            //        url = "https://www.receitaws.com.br/v1/cnpj/" + cnpj,
            //        method = get,
            //        dataType = JSON,

            //        complete: function (dados)
            //        {
            //            response = dados.responseJSON;
            //            alert(response.status);
            //            if (response.status == 'OK') {
            //                $("#razaosocial").val(response.nome);
            //                $("#fantasia").val(response.fantasia);
            //            }
            //            else
            //            {
            //                limpa_formulario();
            //                alert(response.message);
            //            }
            //        }
            //    });
            //Expressão regular para validar o CEP.
            //var validacnpj = /^[0-9]{8}$/;

            //if (validacnpj.test(cnpj)) {
                //Preenche os campos com ... enquanto consulta o webservice
            //$("#razaosocial").val("...");
            //$("#fantasia").val("...");

            //Consulta o webservice
            //$.getJSON("https://www.receitaws.com.br/v1/cnpj/" + cnpj, function (dados) {          

                    //if (!("erro" in dados)) {
                        //$("#razaosocial").val(dados.nome);
                        //$("#fantasia").val(dados.fantasia);
                    //}
                    //else {
                    //    //Cnpj pesquisado nao foi encontrado
                    //    limpa_formulario();
                    //    alert("CNPJ não encontrado.");
                    //}

                //});
            //}
            //else {
            //    //Cnpj pesquisado nao foi encontrado
            //    limpa_formulario();
            //    alert("CNPJ não encontrado.");
            //}
        }
        else {
            //Cnpj pesquisado nao foi encontrado
            limpa_formulario();
            alert("CNPJ não encontrado.");
        }
    });
});