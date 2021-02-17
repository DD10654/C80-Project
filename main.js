para1 = [];
para2 = [];
function submit1()
{
    var display_array = [];

    for(var i = 1; i <= 4; i++) {
var para1_array = document.getElementById("in"+i+"_1").value;
console.log(para1_array);
para1.push(para1_array);
}

    console.log(para1);
    var length = para1.length;
    console.log(length);
    
    for(var k = 0; k < length; k++) {
display_array.push(para1[k]);
    }



var remove_comma = display_array.join(" ");
document.getElementById("display_without_comma1").innerHTML = remove_comma;
console.log(remove_comma);


  
}

function submit2()
{
    var display_array = [];

    for(var i = 1; i <= 4; i++) {
var para2_array = document.getElementById("in"+i+"_2").value;
console.log(para2_array);
para2.push(para2_array);
}

    console.log(para2);
    var length = para2.length;
    console.log(length);
    
    for(var k = 0; k < length; k++) {
display_array.push(para2[k]);
    }



var remove_comma = display_array.join(" ");
document.getElementById("display_without_comma2").innerHTML = remove_comma;
console.log(remove_comma);


  
}





