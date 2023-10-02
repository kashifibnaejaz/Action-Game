score=0;
cross=true;// mis otherwise the score will not xhnage
notgameover=true;
document.onkeydown= function(e){
    console.log("Key Code is:",e.key)
    if(e.key=="ArrowUp"){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        },700); 
    }
    console.log("Key Code is:",e.key)
    if(e.key=="ArrowRight"){
        dino=document.querySelector('.dino')
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+332+"px";
    }
    console.log("Key Code is:",e.key)
    if(e.key=="ArrowLeft"){
        dino=document.querySelector('.dino')
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX-332)+"px";
    }


}
// to check whether the obstacle crashes with the dino
setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    // to detect collison using dx nad dy
    //// conveert the given pixel val into int
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    if(offsetX<73 && offsetY<52){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        notgameover=false;
    }else if(cross && offsetX<145 && notgameover){
        score+=1;
        updateScore(score);
        cross=false;// so that sore does not increase always
        setTimeout(()=>{
            cross=true;

        },1000);
    }
    // to make the obstacle speed faster
    setTimeout(()=>{
        aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        // cange the value here
        newDur=aniDur-0.1;
        obstacle.style.animation=newDur+'a';},500);
}, 10);

function updateScore(score){
    scoreCont.innerHTML="Your Score :"+ score
}