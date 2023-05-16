window.onload = function() {
    var canvas = document.getElementById("lienzo");
            if (canvas && canvas.getContext) {
            var ctx = canvas.getContext("2d");
                if (ctx) {
                        var img=new Image();
                        img.src = "iconos/fi.jpg";
                        img.onload = function() {
                        ctx.drawImage(this, 0, 0);
                        }
                 }
            }
    
    } //lienzo



//EMPIEZA  
const canvas = document.querySelector("canvas"),

 //tipos
                      toolBtns = document.querySelectorAll(".tool"),
                        //colores
                        colorsBtns = document.querySelectorAll(".colors .option")


ctx = canvas.getContext("2d")

//separar let y ctx y variables default
let isDrawing = false;
selectedColor = "#000";



window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas. offsetHeight; //puntero
});

const startDraw = () => {
    isDrawing = true;
                      ctx.beginPath(); //no seguido el cursor
                      //sin tamaño
}
const drawing = (e) => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
                             ctx.strokeStyle = selectedColor;
                             ctx.fillStyle = selectedColor;
                            
}
                        //tools
                        toolBtns.forEach(btn =>{
                            btn.addEventListener("click", () =>{
                                document.querySelector(".options .active").classList.remove("active");
                                btn.classList.add("active");
                                comsole.log(btn.id)    
                            })
                        } )


                        //colores
                        colorsBtns.forEach(btn =>{
                          btn.addEventListener("click", ()=>{
                            document.querySelector(".options .selected").classList.remove("selected");
                            btn.classList.add("selected");
                            
                            selectedColor = (window.getComputedStyle(btn).getPropertyValue("background-color"));

                          }); 
                        });
                        //colores



canvas.addEventListener("mousedown",startDraw);
canvas.addEventListener("mousemove",drawing);
canvas.addEventListener("mouseup",() => isDrawing = false);
