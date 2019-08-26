// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
//    mainNav.classList.toggle('active');
// });

//Custom jQuery
// (document).ready(function () {
//     $('.sidenav').sidenav();
// });


$(document).ready(function () {
        $('.dropdown-button').dropdown({
            constrainWidth: false,
            hover: true,
            belowOrigin: true,
            alignment: 'left'
        });

         $('.button-collapse').sideNav({
             menuWdth: 300,
             edge: 'left',
             closeOnClick: false, //close by default
             draggable: true,
             onOpen: function () {
                 console.log('Menu Open')
             },
             onClose: function () {
                 console.log('Menu Close')
             }
        });
    }); 
// $('.modal').modal({
//     dismissible: true, // Modal can be dismissed by clicking outside of the modal
//     opacity: .5, // Opacity of modal background
//     inDuration: 300, // Transition in duration
//     outDuration: 200, // Transition out duration
//     startingTop: '4%', // Starting top style attribute
//     endingTop: '10%', // Ending top style attribute
// });