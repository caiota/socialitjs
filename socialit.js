if(document.getElementById('socialitcss')==undefined||document.getElementById('socialitcss')==null){
   let versao="v0.49";
var startSocialit=false;
var socialitcss=null;

function socialit(caiota){
    if(startSocialit===false&&document.getElementsByClassName('socialit')[0].children[0].hasAttribute('onclick')===false){
        
    startSocialit=true;
              console.log('Socialit iniciado!');
               var head  = document.getElementsByTagName('head')[0];
              var count1=-1;
              var count2=-1;
              var count3=-1;
              socialitMain=document.getElementsByClassName('socialit')[0];
              socialitMain.style.display="none";
              sociais=socialitMain.childElementCount;
              configParameter= socialitMain.getAttribute('config').toLowerCase();
    if(socialitcss===null){
    socialitcss  = document.createElement('link');
    socialitcss.rel  = 'stylesheet';
    socialitcss.id = 'socialitcss';
    socialitcss.type = 'text/css';
    socialitcss.href = 'https://cdn.jsdelivr.net/gh/caiota/socialitjs/socialit.css';
    socialitcss.media = 'all';
    head.appendChild(socialitcss);
    }
    
      
    if(configParameter.indexOf('nocreds')==-1){
                 a=document.createElement('a');
                 a.href="https://caiota.heroesevolved.tk/plugins/socialit/";
                 a.target="blank_";
                 a.style="text-decoration: none;font-size: 10px;font-family: monospace;background-color: transparent;";
                 a.id="socialitLink";
                 a.innerHTML="Social it "+ versao +" In Development! Made by <u>Caiota</u>";
                  socialitMain.appendChild(a);
              }
    
              if(configParameter.indexOf('fade')!=-1){
                  do{
                      if(socialitMain.children[count1]!==undefined&&socialitMain.children[count1].nodeName!="A"){
                     socialitMain.children[count1].classList.add("fade");
                      }
                     count1++;
                  }while(sociais>count1);
                  count1=-1;
                  
              }
              
              
              
                  do{
                      if(socialitMain.children[count1]!==undefined&&socialitMain.children[count1].nodeName!="A"){
                          if(socialitMain.children[count1].getAttribute('text')!==null){
                          insideText=document.createElement('A');
                          insideText.className="text";
                          insideText.innerHTML=socialitMain.children[count1].getAttribute('text');
                    socialitMain.children[count1].appendChild(insideText);
                     
                          }
                      }
                     count1++;
                  }while(sociais>count1);
                  count1=-1;
                  
              
    
    
              if(configParameter.indexOf('simple')!=-1){
                  do{
                      if(socialitMain.children[count1]!==undefined&&socialitMain.children[count1].nodeName!="A"){
                     socialitMain.children[count1].classList.add("simples");
                      }
                     count1++;
                  }while(sociais>count1);
                  count1=-1;
                  
              }
    
    
    
              if(configParameter.indexOf('blank')!=-1){
                  do{
                      
                     count2++;
                      if(socialitMain.children[count2]!==undefined&&socialitMain.children[count2].hasAttribute('onclick')==false&&socialitMain.children[count2].nodeName!="A"){
                          
                     socialitMain.children[count2].setAttribute('onclick','openMainUrl(this.nodeName.toLowerCase(),true)');
                      }
                  }while(sociais>count2);
                  count2=-1;
                  
              }else{
                   do{
                       
                     count2++;
                      if(socialitMain.children[count2]!==undefined&&socialitMain.children[count2].hasAttribute('onclick')==false&&socialitMain.children[count2].nodeName!="A"){
                     socialitMain.children[count2].setAttribute('onclick','openMainUrl(this.nodeName.toLowerCase(),false)');
                      }
                  }while(sociais>count2);
                  count2=-1;
                  
                  
              }
              
              
              
              
             if(configParameter.indexOf('vertical')!=-1){
        socialitMain.style.removeProperty('display');
      socialitMain.classList.add('vertical');  
        
    }else{
    socialitMain.style.display='block';   
    }
    startSocialit=true;
          }
}
         
          function openMainUrl(item,tab){
              itemName=item.toUpperCase();
             socialitMain=document.getElementsByClassName('socialit')[0];
             if(socialitMain.getAttribute('url')){
              url= socialitMain.getAttribute('url').toLowerCase();
              }else{
               console.log('SOCIALIT: Parameter "URL" is missing!');
               return;
              }
              if(socialitMain.getAttribute('fid')){
              fid= socialitMain.getAttribute('fid').toLowerCase();
              }
              if(socialitMain.getAttribute('innerText')){
              titulo= socialitMain.getAttribute('innerText');
              }else{
                  titulo="";
              }
            switch(item){
                
                
                case "whatsapp":
                    disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    if(disabled===false){
                    if(tab===true){
                      window.open('https://api.whatsapp.com/send?text='+url, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                     
                    }else{
                        window.location.href='https://api.whatsapp.com/send?text='+url;
                    }
                    }else{
                      console.log('SOCIALIT: Whatsapp Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                    
                     case "messenger":
                          disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    if(disabled===false){
                         if(fid){
                    if(tab===true){
                        window.open('https://www.facebook.com/dialog/send?app_id='+fid+'&link='+url+'&redirect_uri='+url, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                    }else{
                        window.location.href='https://api.whatsapp.com/send?text='+url;
                    }
                     }else{
                          console.log("SOCIALIT: fid attribute is missing!");
                          return;
                         }
                    }else{
                      console.log('SOCIALIT: Messenger Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                    
                    case "facebook":
                    disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    if(disabled===false){
                    if(tab===true){
                        window.open('https://www.facebook.com/sharer/sharer.php?u='+url, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                    }else{
                        window.location.href='https://www.facebook.com/sharer/sharer.php?u='+url;
                    }
                    }else{
                      console.log('SOCIALIT: Facebook Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                    
                    case "vkontakte":
                     disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    if(disabled===false){
                    if(tab===true){
                        window.open('https://vk.com/share.php?url='+url+'&title='+titulo, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                    
                    }else{
                        window.location.href='https://vk.com/share.php?url='+url+'&title='+titulo;
                    }
                    }else{
                      console.log('SOCIALIT: VKontakte Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                    
                    case "twitter":
                    disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    if(document.getElementsByTagName(itemName)[0].getAttribute('via')){
                    via=document.getElementsByTagName(itemName)[0].getAttribute('via');
                    via=via.replace('@','');
                    }else{
                        via="";
                    }
                    if(titulo==""){
                     titulo=document.getElementsByTagName(itemName)[0].getAttribute('innerText');   
                    }
                     if(titulo==null){
                        titulo="";
                    }
                    if(disabled===false){
                    if(tab===true){
                        window.open('https://twitter.com/intent/tweet?url='+url+'&text='+titulo+"&via="+via, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                    
                    }else{
                        window.location.href='https://twitter.com/intent/tweet?url='+url+'&text='+titulo+"&via="+via;
                    }
                    }else{
                      console.log('SOCIALIT: Twitter Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                    
                    
                    case "viber":
                    disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    if(disabled===false){
                    if(tab===true){ 
                        window.open('viber://forward?text='+url, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                    
                    }else{
                        window.location.href='viber://forward?text='+url;
                    }
                        
                    }else{
                      console.log('SOCIALIT: Viber Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                    
                    
                    case "telegram":
                    disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    innerText=document.getElementsByTagName(itemName)[0].getAttribute('innerText');
                    if(innerText==null){
                        innerText="";
                    }
                    if(disabled===false){
                    if(tab===true){
                         window.open('https://telegram.me/share/url?url='+url+"&text="+innerText, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                    
                    }else{
                        window.location.href='https://telegram.me/share/url?url='+url+"&text="+innerText;
                    }
                        
                    }else{
                      console.log('SOCIALIT: Telegram Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                    
                    
                    case "reddit":
                    disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    if(disabled===false){
                    if(tab===true){
                         window.open('https://www.reddit.com/submit?title='+titulo+"&url="+url, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                    
                    }else{
                        window.location.href='https://www.reddit.com/submit?title='+titulo+"&url="+url;
                    }
                        
                    }else{
                      console.log('SOCIALIT: Reddit Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                    
                    
                    case "pocket":
                    disabled=document.getElementsByTagName(itemName)[0].classList.contains('disabled');
                    if(disabled===false){
                    if(tab===true){
                        window.open('https://getpocket.com/edit.php?url='+url, "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=400,width=600,height=800");
                    
                    }else{
                        window.location.href='https://getpocket.com/edit.php?url='+url;
                    }
                    }else{
                      console.log('SOCIALIT: Pocket Sharer is Disabled by Attribute "Disabled" ');
               return;  
                    }
                    break;
                    
                   default:
                   return;
                 }
          }
           socialit();
}
