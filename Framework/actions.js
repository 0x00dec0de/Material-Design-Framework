/* 
 * 
 */

function init(){
    setTheme ("Blue");
    setAccentColor("Pink");
    
    //Intialising textfields
    var textFields = document.getElementsByClassName('mtextfield');
    for (var i = 0; i< textFields.length; i++){
        textFields[i].setAttribute("contenteditable", "true");
    }
    
    
    //Initialising context menu
    document.body.oncontextmenu = function (){
        return false;
    };
    
    document.body.onclick = function () {
        var contextmenus = document.getElementsByClassName('contextmenu');
        for (var i = 0; i < contextmenus.length; i++){
            this.removeChild (contextmenus[i]);
        }
    };
    
    
    //Setting backdrop
    var backDrop = document.createElement('div');
    backDrop.className = "backdrop";
    backDrop.style.backgroundColor = "rgba(0, 0, 0, 0);";
    backDrop.style.visibility = "hidden";
    backDrop.id="backDrop";
    document.body.appendChild (backDrop);
    
    
    //Allow user make document initialisation
    if (window["main"] !== undefined) window["main"]();
}




/**
 * 
 * @param {object} element Dom element which you are creating context menu for
 * @param {string[]} items Names of context menu's items
 * @param {function[]} functions Names of functions, which calling on clicking on context menus's items 
 */
function createContextMenu (element, items, functions){
    alert (typeof functions[0]);
    element.oncontextmenu = function (){
        //if (document.getElementById('contextMenu') !== null) this.removeChild (document.getElementById('contextMenu'));
        if (document.getElementsByClassName('contextmenu')[0] !== undefined){
            document.body.removeChild(document.getElementsByClassName('contextmenu')[0]);
        }
        
        var contextMenu = document.createElement ('div');
        contextMenu.className = 'menu contextmenu';
        contextMenu.Caller = element;
        contextMenu.id = "contextMenu_"+element.id;
        
        for (var i = 0; i < items.length; i++){
            
            var contextMenuItem = document.createElement ('div');
            contextMenuItem.className = 'menu-item';
            contextMenuItem.innerHTML = items[i];
            contextMenuItem.function = functions[i]; 
            
            
            contextMenuItem.onclick = function () {
                this.function(this.parentElement.Caller);
            };
        
            contextMenu.appendChild (contextMenuItem);  
        }   
        
        contextMenu.style.left = parseInt(event.clientX-7)+'px';
        contextMenu.style.top = parseInt(event.clientY+2)+'px';
        document.body.appendChild (contextMenu);
        return false;
    };
    
}

/**
 * Sets color theme to webpage
 *  @see <a href="https://material.io/guidelines/style/color.html#color-color-palettetext">Material Colors</a>  for available themes
 *
 * @param {string} name name of the theme
 */
function setTheme (name){
    var bodyStyle = document.body.style;
    switch (name){
        case "Red":
            bodyStyle.setProperty("--primary-color","#F44336");
            bodyStyle.setProperty("--ripple-color","#EF5350");
            bodyStyle.setProperty("--active-color", "#D32F2F");
            break;
        case "Pink":
            bodyStyle.setProperty("--primary-color","#E91E63");
            bodyStyle.setProperty("--ripple-color","#EC407A");
            bodyStyle.setProperty("--active-color", "#C2185B");
            break;
        case "Purple":
            bodyStyle.setProperty("--primary-color","#9C27B0");
            bodyStyle.setProperty("--ripple-color","#AB47BC");
            bodyStyle.setProperty("--active-color", "#7B1FA2");
            break;
        case "Deep Purple":
            bodyStyle.setProperty("--primary-color","#673AB7");
            bodyStyle.setProperty("--ripple-color","#7E57C2");
            bodyStyle.setProperty("--active-color", "#512DA8");
            break;
        case "Indigo":
            bodyStyle.setProperty("--primary-color","#3F51B5");
            bodyStyle.setProperty("--ripple-color","#5C6BC0");
            bodyStyle.setProperty("--active-color", "#303F9F");
            break;
        case "Blue":
            bodyStyle.setProperty("--primary-color","#2196F3");
            bodyStyle.setProperty("--ripple-color","#42A5F5");
            bodyStyle.setProperty("--active-color", "#1976D2");
            break;
        case "Light Blue":
            bodyStyle.setProperty("--primary-color","#03A9F4");
            bodyStyle.setProperty("--ripple-color","#29B6F6");
            bodyStyle.setProperty("--active-color", "#0288D1");
            break;
        case "Cyan":
            bodyStyle.setProperty("--primary-color","#00BCD4");
            bodyStyle.setProperty("--ripple-color","##26C6DA");
            bodyStyle.setProperty("--active-color", "#0097A7");
            break;
        case "Teal":
            bodyStyle.setProperty("--primary-color","#009688");
            bodyStyle.setProperty("--ripple-color","#26A69A");
            bodyStyle.setProperty("--active-color", "#00796B");
            break;
        case "Green":
            bodyStyle.setProperty("--primary-color","#4CAF50");
            bodyStyle.setProperty("--ripple-color","#66BB6A");
            bodyStyle.setProperty("--active-color", "#388E3C");
            break;
        case "Light Green":
            bodyStyle.setProperty("--primary-color","#8BC34A");
            bodyStyle.setProperty("--ripple-color","#9CCC65");
            bodyStyle.setProperty("--active-color", "#689F38");
            break;
        case "Lime":
            bodyStyle.setProperty("--primary-color","#CDDC39");
            bodyStyle.setProperty("--ripple-color","#D4E157");
            bodyStyle.setProperty("--active-color", "#AFB42B");
            break;
        case "Yellow":
            bodyStyle.setProperty("--primary-color","#FFEB3B");
            bodyStyle.setProperty("--ripple-color","#FFEE58");
            bodyStyle.setProperty("--active-color", "#FBC02D");
            break;
        case "Amber":
            bodyStyle.setProperty("--primary-color","#FFC107");
            bodyStyle.setProperty("--ripple-color","#FFCA28");
            bodyStyle.setProperty("--active-color", "#FFA000");
            break;
        case "Orange":
            bodyStyle.setProperty("--primary-color","#FF9800");
            bodyStyle.setProperty("--ripple-color","#FFA726");
            bodyStyle.setProperty("--active-color", "#F57C00");
            break;
        case "Deep Orange":
            bodyStyle.setProperty("--primary-color","#FF5722");
            bodyStyle.setProperty("--ripple-color","#FF7043");
            bodyStyle.setProperty("--active-color", "#E64A19");
            break;
        default :
            bodyStyle.setProperty("--primary-color","#000000");
            bodyStyle.setProperty("--ripple-color","#FFFFFF");
            break;
    }
}

/**
 * Sets accent color for webpage
 * @param {string} name Color name
 */
function setAccentColor (name){
    var bodyStyle = document.body.style;
    switch (name){
        case "Red":
            bodyStyle.setProperty("--accent-color","#FF5252");
            bodyStyle.setProperty("--accent-ripple-color","#FF8A80");
            bodyStyle.setProperty("--accent-active-color","#FF1744");
            break;
        case "Pink":
            bodyStyle.setProperty("--accent-color","#FF4081");
            bodyStyle.setProperty("--accent-ripple-color","#FF80AB");
            bodyStyle.setProperty("--accent-active-color","#F50057");
            break;
        case "Purple":
            bodyStyle.setProperty("--accent-color","#E040FB");
            bodyStyle.setProperty("--accent-ripple-color","#EA80FC");
            bodyStyle.setProperty("--accent-active-color","#D500F9");
            break;
        case "Deep Purple":
            bodyStyle.setProperty("--accent-color","#7C4DFF");
            bodyStyle.setProperty("--accent-ripple-color","#B388FF");
            bodyStyle.setProperty("--accent-active-color","#651FFF");
            break;
        case "Indigo":
            bodyStyle.setProperty("--accent-color","#536DFE");
            bodyStyle.setProperty("--accent-ripple-color","#8C9EFF");
            bodyStyle.setProperty("--accent-active-color","#3D5AFE");
            break;
        case "Blue":
            bodyStyle.setProperty("--accent-color","#448AFF");
            bodyStyle.setProperty("--accent-ripple-color","#82B1FF");
            bodyStyle.setProperty("--accent-active-color","#2979FF");
            break;
        case "Light Blue":
            bodyStyle.setProperty("--accent-color","#40C4FF");
            bodyStyle.setProperty("--accent-ripple-color","#80D8FF");
            bodyStyle.setProperty("--accent-active-color","#00B0FF");
            break;
        case "Cyan":
            bodyStyle.setProperty("--accent-color","#18FFFF");
            bodyStyle.setProperty("--accent-ripple-color","#84FFFF");
            bodyStyle.setProperty("--accent-active-color","#00E5FF");
            break;
        case "Teal":
            bodyStyle.setProperty("--accent-color","#64FFDA");
            bodyStyle.setProperty("--accent-ripple-color","#A7FFEB");
            bodyStyle.setProperty("--accent-active-color","#1DE9B6");
            break;
        case "Green":
            bodyStyle.setProperty("--accent-color","#69F0AE");
            bodyStyle.setProperty("--accent-ripple-color","#B9F6CA");
            bodyStyle.setProperty("--accent-active-color","#00E676");
            break;
        case "Light Green":
            bodyStyle.setProperty("--accent-color","#B2FF59");
            bodyStyle.setProperty("--accent-ripple-color","#CCFF90");
            bodyStyle.setProperty("--accent-active-color","#76FF03");
            break;
        case "Lime":
            bodyStyle.setProperty("--accent-color","#EEFF41");
            bodyStyle.setProperty("--accent-ripple-color","#F4FF81");
            bodyStyle.setProperty("--accent-active-color","#C6FF00");
            break;
        case "Yellow":
            bodyStyle.setProperty("--accent-color","#FFFF00");
            bodyStyle.setProperty("--accent-ripple-color","#FFFF8D");
            bodyStyle.setProperty("--accent-active-color","#FFEA00");
            break;
        case "Amber":
            bodyStyle.setProperty("--accent-color","#FFD740");
            bodyStyle.setProperty("--accent-ripple-color","#FFE57F");
            bodyStyle.setProperty("--accent-active-color","#FFC400");
            break;
        case "Orange":
            bodyStyle.setProperty("--accent-color","#FFAB40");
            bodyStyle.setProperty("--accent-ripple-color","#FFD180");
            bodyStyle.setProperty("--accent-active-color","#FF9100");
            break;
        case "Deep Orange":
            bodyStyle.setProperty("--accent-color","#FF6E40");
            bodyStyle.setProperty("--accent-ripple-color","#FF9E80");
            bodyStyle.setProperty("--accent-active-color","#FF3D00");
            break;
    }
}


//This function is just an animation test, don't use it in real projects
function hideFAB (elem){
    //alert(elem.id);
    var elemStyle = elem.style;
    elemStyle.setProperty ("transform", "scale(0.1)");
    elemStyle.setProperty ("visibility", "hidden");
    //alert(elem.style.tranform);
    
}


//Unstable
function transformFab (width, height){
    var FAB = document.getElementById("FAB");
    //alert ("THIS IS FAB!!!! "+FAB+ " "+ "calc(50% + "+parseInt(height/2)+"px)");
    
    document.getElementById("backDrop").style.visibility = "visible";
    document.getElementById("backDrop").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    //alert ("this");
    FAB.className ="FloatingActionButton";
    FAB.style.bottom = "calc(50% - "+parseInt(height/2)+"px)";
    FAB.style.right = "calc(50% - "+parseInt(width/2)+"px)";
    FAB.style.transition = getComputedStyle(FAB).transition+", border-radius 0.5s linear 0s, width 0.5s linear 0s, height 0.5s linear 0s";
    FAB.style.backgroundColor = "white";
    FAB.style.borderRadius = "2px";
    FAB.style.width = width+"px";
    FAB.style.height = height+"px";
}


window.onload = init;










