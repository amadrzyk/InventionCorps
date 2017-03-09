/**
 * Created by alexmadrzyk on 3/8/17.
 */

function baseName(str) {
    var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if(base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}

var pageName = baseName(document.location.pathname);
var newTitle = "";

switch(pageName) {

    case "index":
        newTitle += "Home | ";
        break;
    case "work":
        newTitle += "Work | ";
        break;
    case "about":
        newTitle += "About | ";
        break;
    case "thecorps":
        newTitle += "The Corps | ";
        break;
    case "founders":
        newTitle += "Founders | ";
        break;
    case "contact":
        newTitle += "Contact | ";
        break;
}

newTitle += "Invention Corps";
$("title").html(newTitle);
