let post_model = document.getElementById("myModal");
let close_model = document.getElementsByClassName("close")[0]
let model_btn = document.getElementById("post-btn")
let mobile_view_account_options = document.getElementsByClassName("left")[0]
// let home_btn_post = documment.getElementById("post-btn-1")

function openmodel() {
    post_model.style.display="block";
    // post_model.style.zIndex=3;
    console.log("hello"); 
}
// console.log(home_btn_post);

// home_btn_post.onclick = function(){
//     post_model.style.display="block";
// }

close_model.onclick = function() {
    post_model.style.display="none";
}

// window.onclick = function(event){
//     if (event.target == post_model) {
//         post_model.style.display="none";   
//     }
// }
let click_counnt = 0
let account_manage = document.getElementById("account_manage");
mobile_view_account_options.onclick = function(){
    if (click_counnt == 0) {
        account_manage.style.left="0px";
        account_manage.style.boxShadow = "-10px 2px 138px 336px #000000b0";
        click_counnt = 1;
    }
    else{
        account_manage.style.boxShadow = "none";
        account_manage.style.left="-225px";
        click_counnt = 0;
    }
}