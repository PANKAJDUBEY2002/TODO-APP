(function() {
    var inputItem=document.getElementById("item");
    inputItem.onkeyup=function(e) {
        if(e.keyCode==13)
        addItem(inputItem);
        
    }
    function addItem(inputItem) {
        var item=inputItem.value;
        if(!item)
        return;

        var ul=document.querySelector("#list");
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
        inputItem.value="";
        li.onclick=removeItem;
    }
    function removeItem(e) {
        var ul=document.querySelector("#list");
        ul.removeChild(e.target);
    }

})();