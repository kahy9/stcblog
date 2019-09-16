$(document).ready(function(){

    searchForm();
});

function searchForm(){

    $('#input_searchSubmit').on('click', function(){
        $('#input_search').submit();
    });

    $('#input_search').on({

        mouseenter: () => {
            $('#input_searchInput').addClass('active');
            $('#section_header').addClass('hidden');
        },

        focuson: () => {
            $('#input_searchInput').addClass('active');
            $('#section_header').addClass('hidden');
        },

        mouseleave: () => {

            if(!$('#input_searchInput').val() && !$('#input_searchInput').is(':focus')){
                $('#input_searchInput').removeClass('active');
                $('#section_header').removeClass('hidden');
            } 
        },

        focusout: () => {

            if(!$('#input_searchInput').val()){
                $('#input_searchInput').removeClass('active');
                $('#section_header').removeClass('hidden');
            } 
        }
    });
}