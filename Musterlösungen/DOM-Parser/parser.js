var result = "";

function parseNode(startNode) {
    
    for (var i = 0; i < startNode.childNodes.length; i++) {

        var nd =  startNode.childNodes[i];
       
        result += "<tr>"; 
        result += "<td>" + nd.nodeType + "</td>"; 
        result += "<td>" + (nd.nodeName != null ? nd.nodeName : "") + "</td>"; 
        result += "<td>" + (nd.nodeValue != null ? nd.nodeValue.replace("\n", "\\n")  : "") + "</td>"; 
        result += "<td>" + (nd.textContent != null ? nd.textContent.replace("\n", "\\n") : "")  + "</td>";
        result += "</tr>"; 
        // rekursiver Aufruf dieser Funktion
        parseNode(nd)
    }

    return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";
}

function parseNode_Variante_2(startNode) {
  
    var nd = startNode.firstChild;
    
    while (nd) {	
        result += "<tr>"; 
        result += "<td>" + nd.nodeType + "</td>"; 
        
        if (nd.nodeName) {
            result += "<td>" + nd.nodeName + "</td>"; 
        } else { 
            result += "<td>&nbsp;</td>"; 
        }
        
        if (nd.nodeValue) {
            result += "<td>" + nd.nodeValue.replace("\n", "\\n") + "</td>"; 
        } else {
            result += "<td>&nbsp;</td>"; 
        }

        if (nd.textContent) {
            result += "<td>" + nd.textContent.replace("\n", "\\n") + "</td>";
        } else { 
            result += "<td>&nbsp;</td>"; 
        }
        
        result += "</tr>"; 

        if (nd.hasChildNodes()) {	
            // rekursiver Aufruf dieser Funktion
            parseNode(nd);
        }

        nd = nd.nextSibling;
    }

    return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";
}