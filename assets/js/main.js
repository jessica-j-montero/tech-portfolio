//  Menu: Desde HTML copiamos las class:
// nav-toggle
// navbar--list
// navbar--visible

const navToggle = document.querySelector(".nav-toggle");
const navBarList = document.querySelector(".navbar--list");

navToggle.addEventListener("click", () => {
  navBarList.classList.toggle("navbar--visible");

  if (navBarList.classList.contains("navbar--visible")) {
    navToggle.setAttribute("arial-label", "Close Sidebar");
  } else {
    navToggle.setAttribute("arial-label", "Open Sidebar");
  }
});

// Typing

class typing{
  constructor(element,words,time=2000){
    this.element=element;
    this.words=words;
    this.txt= '';
    this.wordsIndex=0;
    this.time=parseInt(time,10)
    this.write();
    this.delete = false;
  }
  write(){
    const actual = this.wordsIndex % this.words.length;
    const sentencesComplete = this.words[actual];

    if(this.delete){
      this.txt=sentencesComplete.substring(0,this.txt.length-1);
    }else{
      this.txt = sentencesComplete.substring(0,this.txt.length + 1);
    }
    this.element.innerHTML= `<span class="skills"> ${this.txt} </span>`; 

    let writingSpeed = 200;
    if(this.delete){
      writingSpeed/=2;
    }
    if(!this.delete && this.txt === sentencesComplete){
      writingSpeed = this.waiting;
      this.delete = true;
    } else if (this.delete && this.txt===''){
      this.delete = false;
      this.wordsIndex++;
      writingSpeed = 200;
    }
    setTimeout(()=>this.write(),writingSpeed)
  }
}
document.addEventListener('DOMContentLoaded',init);

function init() {
  const element = document.querySelector('.skills');
  const words = JSON.parse(element.getAttribute('data-words'));
  const waiting = element.getAttribute('data-time');
  new typing(element,words,waiting);
}

