function addInStyle(prev,curr){
  var promise_style = new Promise(function(resolve,reject){
    let addCode = document.querySelector('pre#language-css');
    let styleTag = document.getElementById('styleTag');
    let n = 0;
    let timerInStyle = setInterval(()=>{
      n += 1;
      addCode.innerHTML = Prism.highlight(prev + curr.substring(0,n),Prism.languages.css);
      styleTag.innerHTML = prev + curr.substring(0,n);
      addCode.scrollTop = addCode.scrollHeight;
      if(n > curr.length - 1){
        window.clearInterval(timerInStyle);
        console.log('clear');
        return resolve();
      }
    },80);
  });
  return promise_style;
}

var basicInfo = `
/* Hi there, I'm Alison Weng.
* I am graduating from University of Auckland this May.
* I major in Information Management and Marketing.
* I'm currently looking for jobs as a Front-End developer.
* Here's how I build my resume.
*/

/* Let's set up some CSS. */

*{
  padding: 0; 
  margin: 0;
  box-sizing: border-box;
}

/* Make a dark backgound */
pre#language-css{
  background:#202020;
}

/* Change font color*/
pre#language-css{
  color: #aaa;
}

/* Change font-size,line-height, and padding to make it look better. */
pre#language-css{
  font-size:14px;
  line-height: 1.8em;
  padding-left: 20px;
}

/* Add some highlight */
.token.selector{
  color: yellow;
}

.token.property{
  color:#0cf;
}


/* Now I need a piece of blank paper. 
* */
`


var makePaper = `
/* make it stuck on the right */
pre#language-css{
  width:50%;
}
#paperBack{
  width:50%;
  height:100%;
  background:white;
}
`;

var decoPaper = `
#paper{
  width:80%;
  height:80%;
  margin: 20px auto;
  background:#f8f2ea;
  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.2);
}

/* Let's add some text on it*/
`

var decoPaperText = `
/* emmm, I don't like this font type, 
nor the squeezing space between each line*/


#paper {
  padding:20px;
}

div#paperBack > div#paper > p#paperPre > *{
  font-family: Arial;
  line-height: 1.8em;
  background:#f8f2ea;
  color:#666;
  white-space:pre-wrap;
}

/* This is my resume.
Feel free to contact me.*/
`

var paperBack = document.createElement('div');
var paper = document.createElement('div');
var paperPre = document.createElement('p');
var wrapper = document.querySelector('.wrapper');
paperBack.id = 'paperBack';
paper.id = 'paper';
paperPre.id = 'paperPre';


addInStyle('',basicInfo)
  .then(function(){
    wrapper.appendChild(paperBack);
    console.log(1);
  })
  .then(function(){
    addInStyle(basicInfo,makePaper)
    .then(function(){
      paperBack.appendChild(paper);
      paper.appendChild(paperPre);
      paperPre.className = 'html markdown-body';
    })
    .then(function(){
      addInStyle(basicInfo+makePaper,decoPaper)
      .then(function (){
        addMarkdown(markdown)
        .then(function(){
          addInStyle(basicInfo+makePaper+decoPaper,decoPaperText);
        })
      })
    })
  })
  .catch(function(err){console.log('there is an error:',err)})


function addMarkdown(curr){
  var promise_markdown = new Promise(function(resolve){
    let n = 0;
    let timerInMarkdown = setInterval(() => {
      n += 1;
      paperPre.innerHTML = marked(curr.substring(0,n));
      if(n > curr.length -1 ){
        window.clearInterval(timerInMarkdown);
        console.log(2);
        return resolve();
      }
    }, 80)
  })
  return promise_markdown;
}

var markdown = `
Name: Alison W.
Mobile: 1363219xxxx
Email: 452592978@qq.com

## Experience
09/2018 - 12/2018 

## Project
[Resume web](https://alisonysy.github.io/practice-project/index.html)
[Personal Navigation](https://alisonysy.github.io/practice-project/nav-demo/index.html)
`
