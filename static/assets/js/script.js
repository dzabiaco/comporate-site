'use strict';

$(function() {
    // Initialize Navbar
    function initNavbar() {
        $(document).on("click", ".navbar-toggler", function() {
            navbarToggle();
        });

        $(document).on("click", ".backdrop-navbar", function() {
            navbarClose();
        });

        $(document).on("click", ".navbar-open .nav-navbar > .nav-item > .nav-link", function() {
            $(this).closest(".nav-item").siblings(".nav-item").find("> .nav:visible").slideUp(333, "linear");
            $(this).next(".nav").slideToggle(333, "linear");
            navbarClose(); // Close the navbar after clicking a nav-link
        });
    }

    // Function to toggle navbar
    function navbarToggle() {
        var $body = $('body'),
            $navbar = $('.navbar');

        $body.toggleClass("navbar-open");
        
        if ($body.hasClass("navbar-open")) {
            $navbar.prepend('<div class="backdrop backdrop-navbar"></div>');
        }
    }

    // Function to close navbar
    function navbarClose() {
        $('body').removeClass("navbar-open");
        $('.backdrop-navbar').remove();
    }

    // Initializing the navbar
    initNavbar();
    $(".nav-link").click(()=> {
        navbarClose();
    });


    $(document).on("click", ".video-wrapper .btn", function () {
        var $e = $(this).closest(".video-wrapper");
        $e.addClass("reveal");
        if ($e.find("video").length) {
            $e.find("video").get(0).play();
        }
        if ($e.find("iframe").length) {
            var $t = $e.find("iframe");
            if ($t.attr("src").indexOf("?") !== -1) {
                $t.get(0).src += "&autoplay=1";
            } else {
                $t.get(0).src += "?autoplay=1";
            }
        }
    });


    // function showSuccessAlert(){
    //     $(".alert-success").removeClass("alertInitial");
    // }

    // function hideSuccessAlert(){
    //     $(".alert-success").addClass("alertInitial");
    // }

    // $(".alert-success").click(()=>{
    //     $(".alert-success").addClass("alertInitial");
    // });


   
    // function showErrorAlert(){
    //     $(".alert-danger").removeClass("alertInitial");
    // }

    // function hideErrorAlert(){
    //     $(".alert-danger").addClass("alertInitial");
    // }

    // $(".alert-danger").click(()=>{
    //     $(".alert-danger").addClass("alertInitial");
    // });

    
    // $("#contactForm").submit(function(event) {
    //     event.preventDefault();
    //     const name = $('#name').val();
    //     const email = $('#email').val();
    //     const message = $('#message').val();

    //     // if (name.trim() == '') {
    //     //     $(".alert-danger").removeClass("alertInitial");
    //     //     $(".error-message").text("Please fill name.");
    //     //     return;
    //     //   }

    //     $.ajax({
    //         url: 'your_server_endpoint',
    //         method: 'POST',
    //         data: {
    //           name: name,
    //           email: email,
    //           message: message
    //         },
    //         success: function(response) {
    //             showSuccessAlert();
    //         },
    //         error: function(xhr, status, error) {
    //             showErrorAlert();
    //         }
    //       });

    //       $('#contactForm')[0].reset();

    //     // showSuccessAlert();

    // });
});
