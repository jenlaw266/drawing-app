function Canvas(){
  const [tool, setTool] = React.useState('pen');
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  let imgData;
  let context;

  useEffect(() =>{
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context = canvas.getContext("2d")  
      context.scale(2,2);
      context.lineCap = "round";
      context.strokeStyle = "black";
      context.lineWidth = 5;
      contextRef.current = context;    
      imgData = context.getImageData(0, 0, canvas.width, canvas.width)
      console.log("Img data: ", imgData);


      
  },[])

  const handleMouseDown = ({nativeEvent})=>{
      const {offsetX, offsetY} = nativeEvent;

      if(tool === "fill")
      {    //Flood Fill
          
          const floodFill = new FloodFill(imgData);
          console.log(imgData)

          floodFill.fill("#9f3282", offsetX, offsetY, 0)
          context.putImageData(floodFill.imageData, 0, 0)}




var mouse = {x: 0, y: 0};
 
/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.strokeStyle = "red";
function getColor(colour){ctx.strokeStyle = colour;}

function getSize(size){ctx.lineWidth = size;}


//ctx.strokeStyle = 
//ctx.strokeStyle = document.settings.colour[1].value;
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};