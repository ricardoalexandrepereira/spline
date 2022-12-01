          //initializing loader 
         const loader = document.getElementById('pre-loader');

         window.addEventListener('load',()=>{
          loader.style.display = 'none';
         })
          
         //initializing loader 

         const nav = document.querySelector('nav')
        const headLine = new SplitType('h1')
        const myText2 = new SplitType('#p',{charClass:'char'})
       
        var tl = gsap.timeline({defaults:{ease:"Expo.easeInOut"}})
         
        tl.from('.char',{y: -100, stagger:0.05, delay:1})
        .from('char',{y: -100, stagger:0.05, duration:0.6}, "-=1.2")
        .to('h1,#p', {y:80, delay: 3, duration:1})
        .from('nav',{y:-.9,opacity:0, stagger:2,duration:1})
         
    

        //menu
       
       

       const links = document.querySelectorAll('.nav-item a');
       const activeNav = document.querySelector('.active-nav');

       links.forEach((link)=>{
          link.addEventListener('click', ()=>{

               //turn navs blue
               gsap.to(links, {color:"#467FA3"})
               if(document.activeElement === link){
                    gsap.to(link, {color:"#000"})
               }

               //move the line
               const state = Flip.getState(activeNav);
               link.appendChild(activeNav);
               Flip.from(state,{
                    duration:1.25,
                    absolute:true,
                    ease:'elastic.out(1,0.5)',
               })
          })

          
       })

       //cards

      const cards = document.querySelectorAll('.card');

      cards.forEach((card, index)=>{
          card.addEventListener('click', ()=>{
               const state = Flip.getState(cards);

               //add active class to the clicked one and add inactive to others

               const isCardActive = card.classList.contains('active');

               cards.forEach((otherCard, otherIndex)=>{
                    otherCard.classList.remove('active');
                    otherCard.classList.remove('is-inactive');
                    if(!isCardActive && index !== otherIndex){
                         otherCard.classList.add('is-inactive')
                    }
               });
               if (!isCardActive) card.classList.add('active')

               Flip.from(state, {
                    duration:1,
                    ease:"expo.out",
                    absolute:true,
                    onComplete:()=>{
                         gsap.to('.card p',{color:"#fca626"})
                    }

               })
          })
      })