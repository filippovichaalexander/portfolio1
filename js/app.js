$(function() {
    
    
    
    
    const workSlider = $('[data-slider="slick"]');
    
    
    
    
    
    
    /*filter*/
    
    
    let filter = $("[data-filter]");
    
    filter.on("click", function(event) {
        event.preventDefault();
        
        let cat = $(this).data('filter');
        
        if(cat =='all') {
            $("[data-cat]").removeClass('show');
        } else {
                $("[data-cat]").each(function() {

               let workCat = $(this).data ('cat');


                /*console.log(workCat);*/
                if(workCat != cat) {
                    $(this).addClass('show');
                } else {
                    $(this).removeClass('show');
                }
            });
        }
        
        
        
    });
    
    
    /*Modal*/
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on('click',function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
         $(modalId).addClass('show_m');
        
         /*cancel body scroll*/
        $("body").addClass('no-scroll');
        /*cancel body scroll*/
        
        setTimeout(function() {
            
            $(modalId).find('.modal__dialog').css({
            transform:"rotateX(0)"
        });
            
        }, 200); 
        
        workSlider.slick('setPosition');
        
        
    });
    
    
    
    modalClose.on('click',function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        
         modalParent.find('.modal__dialog').css({
            transform:"rotateX(90deg)"
        });
        
        setTimeout(function() {
            
            modalParent.removeClass('show_m'); 
        
        /*bodyscroll*/
        $("body").removeClass('no-scroll');
        
        }, 200);
    });
    
    
     $('.modal').on('click',function(event) {
         let $this=$(this);
        
        $this.find('.modal__dialog').css({
            transform:"rotateX(90deg)"
        });
        
         $this.removeClass('show_m');
         
         setTimeout(function() {
            
            $(this).removeClass('show_m');
    
        
        /*bodyscroll*/
        $("body").removeClass('no-scroll');
        
        }, 200);
         
        
        
        
    });
    
    
    /*Cancel .modal click if we click .model__dialog*/
    
    $('.modal__dialog').on('click',function(event) {
        
        
        
        event.stopPropagation();        
        
    });
    
    
    
    
    /*Slider             http://kenwheeler.github.io/slick/ */

    
    
    
    
    workSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slick-prev").on("click", function(event){
        event.preventDefault();
        
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
        currentSlider.slick("slickPrev");
        
    });
    $('.slick-next').on("click",function(event){
        event.preventDefault();
        
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
        currentSlider.slick("slickNext");
        
    });
    
    
    
    /*BurgerMenu*/

    var navToggle = $("#navToggle");
    var nav = $("#nav");
    
    navToggle.on("click",function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
    });
    
    
    
    
});