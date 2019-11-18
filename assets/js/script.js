$(function() {
    navLogo
    let offset = $(".navBar").offset();
    console.log(offset.top)
        // Changement des propritié de la Nav bar au scroll
    $(document).scroll(function() {
        let offset = $(".navBar").offset();
        if (offset.top >= 10) {
            $(".navBar").css("position", 'fixed')
            $(".navBar").css("z-index", '10')
            $(".navBar").removeClass("justify-content-center")
            $(".navBar").css("margin-top", '-6rem')
            $("#navLogo").css("width", '5%')

        } else if (offset.top <= 0) {
            $(".navBar").css("position", 'initial')
            $(".navBar").css("z-index", '0')
            $(".navBar").addClass("justify-content-center")
            $("#navLogo").css("width", '30%')
            $(".navBar").css("margin-top", '0rem')

        }
    });

    // animation automatique  des image de la page d'acceuil et changement du bg-color
    let bg1 = function() {
        $('.body').css('background-color', '#1D1A21');
        $('#headerImg').attr("src", "assets/img/10325_b.jpg");
    }
    let bg2 = function() {
        $('.body').css('background-color', '#031306');
        $('#headerImg').attr("src", "assets/img/10400_b.jpg");
    }
    let bg3 = function() {
        $('.body').css('background-color', '#DBB61D');
        $('#headerImg').attr("src", "assets/img/10507_b.jpg");
    }

    function repeat() {
        setTimeout(bg2, 6000);
        setTimeout(bg3, 12000);
        setTimeout(bg1, 1800);
    }
    setInterval(repeat, 18000);

    // animation au click  des image de la page d'acceuil et changement du bg-color
    $('#bg1').click(function() {
        $('.body').css('background-color', '#1D1A21');
        $('#headerImg').attr("src", "assets/img/10325_b.jpg");
    })
    $('#bg2').click(function() {
        $('.body').css('background-color', '#031306');
        $('#headerImg').attr("src", "assets/img/10400_b.jpg");
    })
    $('#bg3').click(function() {
            $('.body').css('background-color', '#DBB61D');
            $('#headerImg').attr("src", "assets/img/10507_b.jpg");
        })
        // ----- Robin -----

    // déclaration des variables
    // varibales pour mon form connexion
    let regexMail = /[A-Z0-9a-z\._\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,8}/;
    let email;
    //variables pour mon forme Inscription
    let password1, password2;
    // fonction de vérification de l'e-mail
    function verifyMail(email) {
        if (regexMail.test(email)) {
            return true;
        }
        return false;
    }
    // page Connexion - validation de l'email et retour visuel à l'utilisateur
    $('.containerConnexion #inputEmail').focusout(function() {
        email = $('.containerConnexion #inputEmail').val();
        if (verifyMail(email)) {
            $('.containerConnexion .inputEmail').removeClass('is-invalid').addClass('is-valid');
        } else {
            $('.containerConnexion .inputEmail').removeClass('is-valid').addClass('is-invalid');
        }
    });
    // Page Inscription - validation de l'email et retour visuel à l'utilisateur
    $('.containerInscription #inputEmail').focusout(function() {
        email = $('.containerInscription #inputEmail').val();
        if (verifyMail(email)) {
            $('.containerInscription .inputEmail').removeClass('is-invalid').addClass('is-valid');
        } else {
            $('.containerInscription .inputEmail').removeClass('is-valid').addClass('is-invalid');
        }
    });
    // fonction qui connecte l'utilisateur à son compte lors du click du button
    $('.containerConnexion .connexionButton').click(function() {});
    // animation de la sytaxe du boutton inscription dans le modal Connexion
    $('.containerConnexion.modal-content').mouseover(function() {
        $('.containerConnexion .inscriptionButton').html('S\'inscrire ');
    });
    $('.containerConnexion.modal-content').mouseout(function() {
        $('.containerConnexion .inscriptionButton').html('Pas encore inscrit ?');
    });
    // animation de la sytaxe du boutton connexion dans le modal Inscription
    $('.containerInscription.modal-content').mouseover(function() {
        $('.containerInscription .connexionButton').html('Se connecter');
    });
    $('.containerInscription.modal-content').mouseout(function() {
        $('.containerInscription .connexionButton').html('Déjà incrit ?');
    });
    // animation de la page de connexion vers la page d'inscription
    $('.containerConnexion .inscriptionButton').click(function() {
        $('.containerConnexion').css({ 'display': 'none' });
        $('.containerInscription').css({ 'display': 'block' });
    });
    // animation de la page d'inscription vers la page de connexion
    $('.containerInscription .connexionButton').click(function() {
        $('.containerInscription').css({ 'display': 'none' });
        $('.containerConnexion').css({ 'display': 'block' });
    });
    // validation de la confirmation du mot de passe
    $('.containerInscription #inputPassword2').focusout(function() {
            password1 = $('.containerInscription #inputPassword1').val();
            password2 = $('.containerInscription #inputPassword2').val();
            if (password1 === password2) {
                $('.containerInscription .inputPassword2').removeClass('is-invalid').addClass('is-valid');
            } else {
                $('.containerInscription .inputPassword2').removeClass('is-valid').addClass('is-invalid');
            }
        })
        // fonction qui ancre vers la catégorie composant
    $('#navLinkComposant').click(function() {
        $('html, body').animate({
            'scrollTop': $('#sectionComposant').offset().top - 50
        }, 'slow');
    });
    // fonction qui ancre vers la catégorie Ordinateur gamer
    $('#navLinkOrdinateur').click(function() {
        $('html, body').animate({
            'scrollTop': $('#sectionOrdinateur').offset().top - 50
        }, 'slow');
    });
    // fonction qui ancre vers la catégorie Périphérique
    $('#navLinkPeripherique').click(function() {
        // remplacer '#navLinkPeripherique' par votre objet cliqué
        // créer l'animation vers l'ancre
        // 'html, body' = pour toute la page
        // 'animate' = permet d'animer un caractere css
        // 'offset.top' = la position height du pixel haut-gauche de l'objet
        // 'slow' rend l'animation fluid
        $('html, body').animate({
            // remplacer '#sectionPeripherique' par l'endroit de scroll
            'scrollTop': $('#sectionPeripherique').offset().top - 50
        }, 'slow');
    });
    // afficher un tooltip avec la phrase voulue
    $('.card').mouseover(function() {
        $('.card').prop('title', 'Afficher la fiche technique du produit');
    });
    // affiche la fiche technique du produit sous la ligne
    // avec un défilement dessus
    $('.card').click(function() {
        $('.ficheProduit').remove();
        $(this).append("<iframe src='parts/fiche-produit.html' class='ficheProduit'></iframe> ");
        //  $("#ficheProduit").load("parts/fiche-produit.html");
    });
    // Fin Robin

    // momo panier 
    let total = 0;
    let item = $(this).attr('data-name');
    let price = $(this).attr('data-price');
    let qty = 0;
    $('.total-count').html(qty)
    $('.add-to-cart').click(function() {
        item = $(this).attr('data-name');
        price = $(this).attr('data-price');
        total = total + parseInt(price);
        $('.show-cart').prepend('<tr><td>' + item +
            '</td><td class="price">' + price + '€</td><td> <button type="button" id="remove" class=" delete btn btn-danger">X</button></td></tr>');

        $('#remove').click(function test() {
            totalprice = $(this).parents('tr').find('.price').html();
            $(this).parents('tr').remove();
            totalprice = totalprice.substring(0, totalprice.length - 1);
            total = total - parseInt(totalprice);
            $('.total-cart').html(total)
            qty = qty - 1;
            $('.total-count').html(qty)

        });
        qty++
        $('.total-count').html(qty)
        $('.total-cart').html(total)
    });


})