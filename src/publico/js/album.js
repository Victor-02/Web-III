$('#data').on('blur',function () {
    let d = new Date();
    let nA = $('#dataNascimento').val().split("-");
    let n = new Date(nA[1] + '-' + nA[2] + '-' + nA[0]);
    let ano = d.getFullYear() - n.getFullYear();
    let m = d.getMonth() - n.getMonth();
    if (m < 0 || (m === 0 && d.getDate() < n.getDate())) {
        ano--;
    }
});

$('#form').submit(function () {
    var nome = $('#nome');
    var email = $('#email');
    var data = $('#data');
    var cpf = $('#cpf');
    var titulo = $('#titulo');
    var nomef = $('#nomef')
    var erro = $('.alert');
    var erroE = $('.alertE');
    var campo = $('#campo-erro');

    erro.addClass('d-none');
    $('is-invalid').removeClass('is-invalid');

    

    if (nome.val() == '') {
        erro.removeClass('d-none');
        campo.html('Nome');
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    if (email.val() == '') {
        erro.removeClass('d-none');
        campo.html('Email');
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    if (cpf.val() == '') {
        erro.removeClass('d-none');
        campo.html('CPF');
        cpf.focus();
        cpf.addClass('is-invalid');
        return false;
    }

    if (data.val() == '') {
        erro.removeClass('d-none');
        campo.html('Data de Nascimento');
        data.focus();
        data.addClass('is-invalid');
        return false;
    }    
    
    if (titulo.val() == '') {
        erro.removeClass('d-none');
        campo.html('Titulo da Foto');
        titulo.focus();
        titulo.addClass('is-invalid');
        return false;
    }

    if (nomef.val() == '') {
        erro.removeClass('d-none');
        campo.html('Nome do(a) Fotógrado(a)');
        nomef.focus();
        nomef.addClass('is-invalid');
        return false;
    }

    if (ano < 18) {
        if (nome_resp.val() == '') {
            erro.removeClass('d-none');
            campo.html('Nome do Responsável');
            nome.focus();
            nome.addClass('is-invalid');
            return false;
        }
        if (cpf_resp.val() == '') {
            erro.removeClass('d-none');
            campo.html('CPF do Responsável');
            nome.focus();
            nome.addClass('is-invalid');
            return false;
        }
    }
})