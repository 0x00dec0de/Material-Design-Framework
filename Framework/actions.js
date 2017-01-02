/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init(){
    setTheme ("Teal");
    var height = document.getElementById ('height');
    height.onmousedown = function(){
        this.onmousemove = function () {changeHeight (this);};
        this.onmouseup = function () {this.onmousemove = function () {};};
    };
    
    //Intialising textfields
    var textFields = document.getElementsByClassName('mtextfield');
    for (var i = 0; i< textFields.length; i++){
        textFields[i].setAttribute("contenteditable", "true");
    }
    
    
    //Getting sliders
    var inputs = document.getElementsByTagName('input');
    var sliders = [];
    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].type == 'range') sliders.push(inputs[i]);
    }
    
    
    
    createContextMenu (document.getElementById("pressButton"), ["Remove"], [Remove]);
    
    //Initialising context menu
    document.body.oncontextmenu = function (){
        return false;
    };    
    document.body.onclick = function () {
        var contextmenus = document.getElementsByClassName('contextmenu');
        for (var i = 0; i < contextmenus.length; i++){
            this.removeChild (contextmenus[i]);
        }
        //if (document.getElementById('contextMenu') !== null) this.removeChild (document.getElementById('contextMenu'));
    };
    
    
    //Allow user make document initialisation
    if (window["main"] !== undefined) window["main"]();
}



function createContextMenu (element, items, functions){
    
    
    element.oncontextmenu = function (){
        if (document.getElementById('contextMenu') !== null) this.removeChild (document.getElementById('contextMenu'));
        
        var contextMenu = document.createElement ('div');
        contextMenu.className = 'menu contextmenu';
        for (var i = 0; i < items.length; i++){
        var contextMenuItem = document.createElement ('div');
            contextMenuItem.className = 'menu-item';
            contextMenuItem.innerHTML = items[i];
            contextMenuItem.function = functions[i]; 
            contextMenu.Caller = element;
            
            contextMenuItem.onclick = function () {
                this.function(this.parentElement.Caller);
            };
        
            contextMenu.appendChild (contextMenuItem);
            
        }   
        
        
        contextMenu.style.left = parseInt(event.clientX-7)+'px';
        contextMenu.style.top = parseInt(event.clientY+2)+'px';
        contextMenu.id = "contextMenu_"+element.id;
        document.body.appendChild (contextMenu);
        
        return false;
    };
    
}

function Remove (element){
    element.parentNode.removeChild (element);
}

function changeHeight(regul) {
    var card = document.getElementById ('card');
    //var cardStyle = getComputedStyle(card);
    //
    //alert (regul.value);
    var str = (regul.value-1)/2+'px '+regul.value+'px '+(regul.value/2+2)+'px rgb(160, 160, 160)';
    //alert (str);
    card.style.boxShadow = str;
}


function setTheme (name){
    var bodyStyle = document.body.style;
    switch (name){
        case "Pink":
            bodyStyle.setProperty("--primary-color","#E91E63");
            bodyStyle.setProperty("--ripple-color","#EC407A");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
        case "Red":
            bodyStyle.setProperty("--primary-color","#F44336");
            bodyStyle.setProperty("--ripple-color","#EF5350");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
        case "Purple":
            bodyStyle.setProperty("--primary-color","#9C27B0");
            bodyStyle.setProperty("--ripple-color","#AB47BC");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
        case "Deep Purple":
            bodyStyle.setProperty("--primary-color","#673AB7");
            bodyStyle.setProperty("--ripple-color","#7E57C2");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
        case "Teal":
            bodyStyle.setProperty("--primary-color","#009688");
            bodyStyle.setProperty("--ripple-color","#26A69A");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
    }
}

//This function is just an animation test, dont use it in real projects
function hideFAB (elem){
    //alert(elem.id);
    var elemStyle = elem.style;
    elemStyle.setProperty ("transform", "scale(0.1)");
    elemStyle.setProperty ("visibility", "hidden");
    //alert(elem.style.tranform);
    
}










window.onload = init;
