    //Declaração de Variaveis e Busca de Botões
    // let pixels = document.querySelectorAll('.pixel') 
    const btnCores = document.getElementById('button-random-color')
    let classes = document.querySelectorAll('.color');
    const btnColor1 = document.getElementById('black');
    const btnColor2 = document.getElementById('color2');
    const btnColor3 = document.getElementById('color3');
    const btnColor4 = document.getElementById('color4');
    let btnClear = document.getElementById('clear-board');
    let numberQuantity = document.getElementById('board-size');
    let btnNumber = document.getElementById('generate-board');
    let pixelsDiv = document.getElementById('pixel-board');
    let pixels = document.querySelectorAll('.pixel');
    let pickColor = document.getElementById('pickColor');
    let gridButton = document.getElementById('remove-grid');

    // LocalStorage
    if(localStorage.getItem('colorPalette') !== null){
        color2.style.backgroundColor = localStorage.getItem('colorPalette').split('-')[0];
        color3.style.backgroundColor = localStorage.getItem('colorPalette').split('-')[1];
        color4.style.backgroundColor = localStorage.getItem('colorPalette').split('-')[2];
        color5.style.backgroundColor = localStorage.getItem('pickColor');
        pickColor.value = localStorage.getItem('pickColor')
    }

    
    
    // Funções
    function removeClass(){
        for(let c = 0; c < classes.length; c += 1){
            if(classes[c].classList[1] == 'selected'){
                classes[c].classList.remove('selected');
            }
        }
    }

    function gerarCor() {
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);
        let rgb = 'rgb('+r+','+g+','+b+')';
        return rgb;
    }

    function pegarCor(){ 
        for(let c = 0; c < classes.length; c += 1){
            
            if(classes[c].classList[1] == 'selected'){
                let cssObj = window.getComputedStyle(classes[c], null)
                let corSelecionada = cssObj.getPropertyValue("background-color");
                return corSelecionada;
            }
        }
    }

    function savePixel(){
        for (let index = 0; index < pixels.length; index += 1){ 
            pixels[index].addEventListener('click', function(event){
                let pixel0 = localStorage.setItem('pixel0', pixels[0].style.backgroundColor)
            })
        }
    }
    function pintar(){
        for (let index = 0; index < pixels.length; index += 1){ 
            pixels[index].addEventListener('click', function(event){
                event.target.style.backgroundColor = pegarCor();          
            })
        }
    }

    // Funções com Clicks 
    
    gridButton.addEventListener('click', function(event){
        event.preventDefault(); 
        let gridPixel = document.getElementsByClassName('pixel')
        if(gridPixel[0].style.border == '0px solid white'){
            for(let i = 0; i < gridPixel.length; i += 1){
                gridPixel[i].style.border = '1px solid black'
            }
        }else{
            for(let i = 0; i < gridPixel.length; i += 1){
                gridPixel[i].style.border = '0px solid white'
            }
        }
        
        
    })
    pickColor.addEventListener('input', function(){
        console.log(pickColor.value)
        let color5 = document.getElementById('color5')
        let novaCor5 = pickColor.value;
        color5.style.backgroundColor = novaCor5;
        color5.style.backgroundColor = novaCor5;
        removeClass()
        color5.classList.add('selected')
        localStorage.setItem('pickColor', novaCor5)
    })
    btnCores.addEventListener('click', function(){
        const color2 = document.getElementById('color2');
        
        let novaCor2 = gerarCor();
        color2.style.backgroundColor = novaCor2;

        const color3 = document.getElementById('color3');
        let novaCor3 = gerarCor();
        color3.style.backgroundColor = novaCor3;

        const color4 = document.getElementById('color4');
        let novaCor4 = gerarCor()
        color4.style.backgroundColor = novaCor4;


        let colorPalette = novaCor2 +'-'+ novaCor3 +'-'+ novaCor4;  
        
        localStorage.setItem('colorPalette',colorPalette)
    })
    btnColor1.addEventListener('click', function(event){  
            removeClass();
            event.target.classList.add('selected');
        }
    )
    btnColor2.addEventListener('click', function(event){  
            removeClass();
            event.target.classList.add('selected');
        }
    )  
    btnColor3.addEventListener('click', function(event){  
            removeClass();
            event.target.classList.add('selected');
        }
    )
    btnColor4.addEventListener('click', function(event){  
            removeClass();
            event.target.classList.add('selected');
        }
    )
    color5.addEventListener('click', function(event){
        removeClass();
        event.target.classList.add('selected');
    })
    btnClear.addEventListener('click', function(){
        for(let i = 0; i < pixels.length ; i += 1){
            pixels[i].style.backgroundColor = 'white';
        }
    });

    btnNumber.addEventListener('click', function(event){
        event.preventDefault();
        let n1 = numberQuantity.value;

        if (n1 == ''){
            alert('Board inválido!')
        }else{

            let quantDivs = numberQuantity.value * numberQuantity.value;

            pixelsDiv.innerHTML='';

            if (n1 < 5){
                n1 = 5;
                quantDivs = 25;
            }
            if (n1 > 50){
                n1 = 50;
                quantDivs = 2500;
            }
    
    
            for (let index = 0; index < quantDivs; index++){
                let newDiv = document.createElement('div')
                newDiv.classList.add('pixel')
                pixelsDiv.appendChild(newDiv);
            }

            pixelsDiv.style.gridTemplateColumns = "repeat("+n1+", 35px)"
    
            let pixel = document.getElementsByClassName('pixel')
            for (let index = 0; index < pixel.length; index += 1){ 
                pixel[index].addEventListener('click', function(event){
                    event.target.style.backgroundColor = pegarCor();          
                })
            }
            btnClear.addEventListener('click', function(){
                for(let i = 0; i < pixel.length ; i += 1){
                    pixel[i].style.backgroundColor = 'white';
                }
            });
        }
       
    })

    pintar()
    
