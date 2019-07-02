(function(){
    var li=document.getElementsByTagName('li');

    var anchors= document.querySelectorAll('li a');
    
    for(let i=0;i<li.length;i++){
        
        li[i].addEventListener('mouseover',function(){
            li[i].style.backgroundColor="rgba(240, 248, 255, 0.815)";
           
            anchors[i].classList.remove('hide');
            
        });
        li[i].addEventListener('mouseout',function(){
            li[i].style.backgroundColor="rgba(240, 248, 255, 0.415)";
            anchors[i].classList.add('hide');
            
        });
        
    }
})();
