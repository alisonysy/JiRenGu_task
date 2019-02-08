var writeCSS = function(prefix, code1){
  const promise = new Promise(function(resolve,reject){
    let domCode = document.querySelector('#code');
    let styleTag = document.getElementById('styleTag');
    domCode.innerHTML = prefix || '';
    let code = code1;
    let n = 0;
    let id = setInterval(()=>{
      n += 1;
      domCode.innerHTML =
        Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
      styleTag.innerHTML = prefix + code.substring(0,n);
      domCode.scrollTop = domCode.scrollHeight;
      if(n > code.length -1){
        window.clearInterval(id);
        return resolve();
      }
    },70);

  })
  return promise;
}

var result = `/*
* Hi, I'm Alison.
* This page is for self-introduction.
* To make it more exciting,
* I'm gonna show the codes here.
*/
*{transition:all 0.5s;}
html{
  background:linear-gradient(to right,#0F2027,#203A43);
  font-size:12px;
}
#code{
  border: 1px solid silver;
  padding:16px;
}

/* I need some highlight for codes. */

.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #DD4A68;
}

/* How about some 3D animation? */

#code{
  transform: rotate(360deg);
}

/* Before introduction, I need a piece of paper. */

#code{
  position:fixed;
  left:0;
  width:50%;
  height:100%;
}

#paper{
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  background:#eee;
  display:flex;
  justify-content:center;
  align-item:center;
  padding:10px;
}

#paper > .content{
  background:white;
  width:100%;
  height:100%;
}
`;

writeCSS('',result)
  .then(
    createPaper,
    function(){console.log('error')})


function createPaper(){
  var paper = document.createElement('div');
  paper.id = 'paper';
  var content = document.createElement('pre');
  content.className = 'content';
  paper.appendChild(content);
  document.body.appendChild(paper);
}

/*original writeCSS
function writeCode(prefix,code,fn){
  let domCode = document.querySelector('#code');
  domCode.innerHTML = prefix || '';
  let n = 0;
  let id = setInterval(()=>{
  n += 1;
  domCode.innerHTML = 
    Prism.highlight(prefix + code.substring(0,n),Prism.languages.css);
  styleTag.innerHTML = prefix + code.substring(0,n);
  domCode.scrollTop = domCode.scrollHeight;
  if(n>= code.length){
    window.clearInterval(id);
    fn && fn.call();
  }
},10)
  //fn.call();
}
*/

function writeMarkdown(markdown,fn){
  let domPaper = document.querySelector('#paper > .content');
  let n = 0;
  let id = setInterval(()=>{
  n += 1;
  domPaper.innerHTML = 
    markdown.substring(0,n);
  domPaper.scrollTop = domPaper.scrollHeight;
  if(n>= markdown.length){
    window.clearInterval(id);
    fn && fn.call();
  }
},10)
}



var result2 = `

/* Let's try changing Markdown into HTML */

/* Add some CSS to HTML */

/* This is my resume. */
`;

var md = `
# Self-intro

My name is Alison.
Born in 1995
Graduated from UoA
`;
/*
writeCode('',result,()=>{
  createPaper(()=>{
    writeCode(result,result2,()=>{
      writeMarkdown(md);
    });
  });
});
*/