$('#login-sec').css({display:'block'});
$('#home-sec').css({display:'none'});
$('#customer-sec').css({display:'none'});
$('#store-sec').css({display:'none'});
$('#order-sec').css({display:'none'});

/*home-sec*/
$('#nav-home').on('click',()=>{
    $('#login-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#home-sec').css({display:'block'});
})
$('#btnSign').on('click',()=>{
    $('#login-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#home-sec').css({display:'block'});
})

/*logoutBtn-login-sec*/
$('#nav-login').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#login-sec').css({display:'block'});
})

/*customer-sec*/
$('#nav-customer').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#customer-sec').css({display:'block'});
})
/*store-sec*/
$('#nav-store').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#store-sec').css({display:'block'});
})
/*order-sec*/
$('#nav-order').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#order-sec').css({display:'block'});
})

/*--home section-side btn*/

/*btn- customer*/
$('#nav-btn-customer').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#customer-sec').css({display:'block'});
})
/*btn-store*/
$('#nav-btn-store').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-sec').css({display:'none'});
    $('#order-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#store-sec').css({display:'block'});
})
/*btn-orders*/
$('#nav-btn-order').on('click',()=>{
    $('#home-sec').css({display:'none'});
    $('#login-sec').css({display:'none'});
    $('#customer-sec').css({display:'none'});
    $('#store-sec').css({display:'none'});
    $('#order-sec').css({display:'block'});
})


/*------------------------------------------*/
var headerNav=document.getElementById('nav-element');
headerNav.style.display='none';

function showHeaderElement(){
    headerNav.style.display="";
}
function hideHeaderElement(){
    headerNav.style.display='none';
}