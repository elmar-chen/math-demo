// class Layout {
//     rows:any[] = [];
//     constructor(){

//     }
// }
// var layout = new Layout();
// var context : any = {};
// context.x = context.y = 0;
// layout.rows.forEach(r=>{
//     context.x += r.getMarginAbove();
// });

import chroma from "chroma-js"

var str =`${chroma.hsv(212,0.1,0.84).hex()}`+("<table style='border-spacing:0;border:1px' with='100%' height=100%>")
// for(var i=0;i<360;i+=1){
    for(var s=0;s<25;s+=1){
    str +=("<tr>")
        for(var r=60;r<90;r+=1){
        str +=(`<td style="width:50px;height:40px;background-color:${chroma.hsv(0,s/100,r/100).hex()}">${chroma.hsv(0,s/100,r/100).hex()}<br>${0},${s/100},${r/100}</td>`);
            }
    }
    str +=("</tr>")

// }
str +=("</table>")
document.body.innerHTML = str