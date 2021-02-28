//  scroll placements
const serviceBtn = document.querySelector('.servicesBtn')
const productsBtn = document.querySelector('.productsBtn')
const gamesBtn = document.querySelector('.gamesBtn')
const serviceSection = document.querySelector('.service')
const productsSection = document.querySelector('.products-section')
const gameSection = document.querySelector('.game')
const homeBtn = document.querySelector('.homeBtn')
const home = document.querySelector('.main-section')
serviceBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    serviceSection.scrollIntoView({behavior: "smooth"})
})
productsBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    productsSection.scrollIntoView({behavior: "smooth"})
})
gamesBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    gameSection.scrollIntoView({behavior: "smooth"})
})
homeBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    home.scrollIntoView({behavior: "smooth"})
})

// service section beginning
const servicePrevBtn = document.getElementById('prev')
const serviceNextBtn = document.getElementById('next')
const slider = document.querySelector('.image-slider')
const images = document.querySelectorAll('.image-slider img')

let counter = 1;
slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'

serviceNextBtn.addEventListener('click', ()=>{
    if(counter >= images.length -1) return;
    slider.style.transition= 'transform .5s ease-in-out'
    counter++
    slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'
})
servicePrevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    slider.style.transition= 'transform .5s ease-in-out'
    counter--
    slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'
})

slider.addEventListener('transitionend', ()=>{
    if(images[counter].id === 'cloneStart'){
        slider.style.transition = 'none'
        counter = images.length -2
        slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'
    }
    if(images[counter].id === 'cloneEnd'){
        slider.style.transition = 'none'
        counter = images.length - counter
        slider.style.transform= 'translateX(' + (-200 * counter) + 'px)'
    }
})

// main-functionality
const budgetBtn = document.querySelector('.btn1')
const performanceBtn = document.querySelector('.btn2')
const enthusiastBtn = document.querySelector('.btn3')
const productInfo = document.querySelector('.product-info')
const productCpu = document.querySelector('.product-cpu')
const productGpu = document.querySelector('.product-gpu')
const buildTitle = document.querySelector('.title')
const buildCenter = document.querySelector('.build')
const buildOverlay = document.querySelector('.build-overlay')
const buildIcon = document.querySelector('.fa-ethereum')
const closeBuild = document.querySelector('.closeBuild')
const buildDom = document.querySelector('.products-container')
const clearBuild = document.querySelector('.clear-build')
const comLogo = document.querySelector('.components-logo')
const comModel = document.querySelector('.components-model')
const comCenter = document.querySelector('.com-model-center')
const comPrice = document.querySelector('.components-price')
const buildTotal = document.querySelector('.inBuild-total')
const gamesLogo = document.querySelector('.game-logo')
const gameModel = document.querySelector('.games-model')
const gamesDom = document.querySelector('.games-model-center')
const apexlegends = document.querySelector('.first')
const csgo = document.querySelector('.second')
const cyberpunk = document.querySelector('.third')
const fortnite = document.querySelector('.forth')
const rocketleage = document.querySelector('.fifth')
const theWitcher = document.querySelector('.sixth')


class ProductBtn {
    getPathBtn(){
       budgetBtn.addEventListener('click', ()=>{
        Storage.clearPath()
           fetch('products.json')
           .then(response => response.json())
           .then(data => data.Basic)
           .then(basic => Storage.savePath(basic))
           .catch(err => console.log(err))
           productInfo.innerHTML = 
           `<img src="/Custom-Pc/images/budget.png" alt="">
           <p class="product-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
           Fugit dignissimos nulla nam architecto asperiores unde exercitationem minus, iure animi illum sint incidunt ea omnis odit id? 
           Libero mollitia dolorem rem!</p>`;
           productInfo.style.opacity = 1
           buildTitle.innerHTML = '<h2>Budget</h2>'
           Storage.info(productInfo.innerHTML)
           Storage.title(buildTitle.innerHTML)
           location.reload();
       }) 
       performanceBtn.addEventListener('click', ()=>{
        Storage.clearPath()
           fetch('products.json')
           .then(response => response.json())
           .then(data => data.Performance)
           .then(performance => Storage.savePath(performance))
           .catch(err => console.log(err))
           productInfo.innerHTML = 
           `<p class="product-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
           Fugit dignissimos nulla nam architecto asperiores unde exercitationem minus, iure animi illum sint incidunt ea omnis odit id? 
           Libero mollitia dolorem rem!</p>
           <img src="/Custom-Pc/images/Performance.png" alt="">`;
           productInfo.style.opacity = 1
           buildTitle.innerHTML = `<h2>PerFormance</h2>`
           Storage.info(productInfo.innerHTML)
           Storage.title(buildTitle.innerHTML)
           location.reload();
       }) 
       enthusiastBtn.addEventListener('click', ()=>{
        Storage.clearPath()
           fetch('products.json')
           .then(response => response.json())
           .then(data => data.Enthusiast)
           .then(enthusiast => Storage.savePath(enthusiast))
           .catch(err => console.log(err))
           productInfo.innerHTML = 
           `<img src="/Custom-Pc/images/enthusiast.png" alt="">
           <p class="product-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
           Fugit dignissimos nulla nam architecto asperiores unde exercitationem minus, iure animi illum sint incidunt ea omnis odit id? 
           Libero mollitia dolorem rem!</p>`;
           productInfo.style.opacity = 1
           buildTitle.innerHTML = `<h2>Enthusiast</h2>`
           Storage.info(productInfo.innerHTML)
           Storage.title(buildTitle.innerHTML)
           location.reload();
       }) 
    }
}

class UI {
    uiInfo(){
        let info = localStorage.getItem('info')
        productInfo.innerHTML= info
        productInfo.style.opacity = 1
        
    }
    displayPath(){
        let item = JSON.parse(localStorage.getItem('path'))
        const cpu = item[0]
        const gpu = item[1]
        productCpu.innerHTML = `
        <h2 class="cpu-title">Recomended Cpu</h2>
        <article class="cpu">
            <div class="cpu-container">
                <img src='${cpu.image}' alt="">
                <h2 class="cpu-hover-name info">${cpu.title}<br> <hr> <span>$${cpu.price}</span></h2>
                <button class="cpu-btn" data-id${cpu.id}><i class="fas fa-toolbox"></i>Add to Buld</button>
            </div>
        </article>
        `
        productGpu.innerHTML =`
        <h2 class="gpu-title">Recomended Gpu</h2>
        <article class="gpu">
            <div class="gpu-container">
                <img src="${gpu.image}" alt="">
                <h2 class="gpu-hover-name info">${gpu.title} <br> <hr> <span>$${gpu.price}</span></h2>
                <button class="gpu-btn" data-id${gpu.id}><i class="fas fa-toolbox"></i>Add to Buld</button>
            </div>
        </article>
        `
    }
    displayBuild(){
        buildIcon.addEventListener('click', this.openBuild)
        closeBuild.addEventListener('click',  this.closeBuild)
    }
    openBuild(){
        buildCenter.classList.add('showBuild')
        buildOverlay.classList.add('showOverlay')
    }
    closeBuild(){
        buildCenter.classList.remove('showBuild')
        buildOverlay.classList.remove('showOverlay')
    }
    addToBuild(){
        const item = JSON.parse(localStorage.getItem('path'))
        this.buildDom(item)
    }
    buildDom(build){
        const cpuBtn = document.querySelector('.cpu-btn')
        const gpuBtn = document.querySelector('.gpu-btn')
        cpuBtn.addEventListener('click', ()=>{
            const cpu = build[0]
            const div= document.createElement('div')
            div.classList.add('build-cpu')
            div.innerHTML=  `
            <img src="${cpu.image}" alt="">
            <div class="build-info">
            <h2>${cpu.title}</h2>
            <h3>$${cpu.price}</h3>`
            buildDom.appendChild(div)
            cpuBtn.disabled = true
            cpuBtn.innerText = 'Added to build'
            // buildTotal.innerText = Number(comPrice.innerText) =+ cpu.price
            this.calcTotal(cpu.price)
        })
        gpuBtn.addEventListener('click', ()=>{
           
            const gpu = build[1]
            const div= document.createElement('div')
            div.classList.add('build-gpu')
            div.innerHTML=  `
            <img src="${gpu.image}" alt="">
            <div class="build-info">
            <h2>${gpu.title}</h2>
            <h3>$${gpu.price}</h3>`
            buildDom.appendChild(div)
            gpuBtn.disabled = true
            gpuBtn.innerText= 'Added To Build'
            // buildTotal.innerText = Number(comPrice.innerText) =+ gpu.price
            this.calcTotal(gpu.price)
        })
    }
    calcTotal(number){
        let temp = +(buildTotal.innerText)
        let total = (temp += number)
        buildTotal.innerText= parseFloat(total.toFixed(2)) 
    }
    buildLogic(){
        clearBuild.addEventListener('click', ()=>{
            while(buildDom.children.length > 1){
                buildDom.removeChild(buildDom.children[1])
            }
            this.closeBuild()
            location.reload()
        })
        buildCenter.addEventListener('click', (e)=>{
            if(e.target.classList.contains('remove')){
                let remove = e.target
                buildDom.removeChild(remove.parentElement.parentElement)

            }
        })
    }
    comUI(){
        comLogo.addEventListener('click', ()=> {
            comModel.classList.toggle('showCom')
            gameModel.classList.remove('showGame')
    })
    }
    showGamesSelected(){
        gamesLogo.addEventListener('click', ()=> {
            gameModel.classList.toggle('showGame')
            comLogo.classList.remove('showCom')
        })
    }
    comInfo(){
        let item = JSON.parse(localStorage.getItem('path'))
        item = item.map(item => item.id)
        const val = parseFloat(item)
        if(val === 1){
            comCenter.innerHTML = `
            <div class="com">
                <img src="${"/Custom-Pc/images/components/A520-Aorus(amd).png"}" alt="">
                <h2>A520-Aorus <br><span class="com-price">$199.99</span></h2>
            </div>
            <div class="com">
                <img src=${"/Custom-Pc/images/components/8gb-ram.png"} alt="">
                <h2>8gb Ram <br><span class="com-price">$79.99</span></h2>
            </div>
            <div class="com">
                <img src=${"/Custom-Pc/images/components/1tb-hdd.png"} alt="">
                <h2>1tb-hdd <br><span class="com-price">$59.99</span></h2>
            </div>
            <div class="com">
                <img src="${"/Custom-Pc/images/components/Corsair-Tx650.png"}" alt="">
                <h2>Corsair Tx650 <br><span class="com-price">$109.99</span></h2>
            </div>`
            comPrice.innerText = `449.96`
            buildTotal.innerHTML = `449.96`
            apexlegends.innerHTML = 'Average Fps: <br> 81'
            csgo.innerHTML = 'Average Fps: <br> 220'
            cyberpunk.innerHTML = 'Average Fps: <br> 43'
            fortnite.innerHTML = 'Average Fps: <br> 192'
            rocketleage.innerHTML = 'Average Fps: <br> 180'
            theWitcher.innerHTML = 'Average Fps: <br> 76'
        }else if(val === 3){
            comCenter.innerHTML = `
            <div class="com">
                <img src="${"/Custom-Pc/images/components/A520-Aorus(amd).png"}" alt="">
                <h2>Title <br><span class="com-price">$199.99</span></h2>
            </div>
            <div class="com">
                <img src=${"/Custom-Pc/images/components/8gb-ram.png"} alt="">
                <h2>8gb Ram <br><span class="com-price">$79.99</span></h2>
            </div>
            <div class="com">
                <img src=${"/Custom-Pc/images/components/1tb-hdd.png"} alt="">
                <h2>1tb-hdd<br><span class="com-price">$59.99</span></h2>
            </div>
            <div class="com">
                <img src="${"/Custom-Pc/images/components/Corsair-Tx650.png"}" alt="">
                <h2>Corsair Tx650  <br><span class="com-price">$109.99</span></h2>
            </div>`
            comPrice.innerText = `449.96`
            buildTotal.innerHTML = `449.96`
            apexlegends.innerHTML = 'Average Fps: <br> 138'
            csgo.innerHTML = 'Average Fps: <br> 260'
            cyberpunk.innerHTML = 'Average Fps: <br> 68'
            fortnite.innerHTML = 'Average Fps: <br> 250'
            rocketleage.innerHTML = 'Average Fps: <br> 238'
            theWitcher.innerHTML = 'Average Fps: <br> 98'
        }else if(val === 5){
            comCenter.innerHTML = `
            <div class="com">
                <img src="${"/Custom-Pc/images/components/Z490-Aorus.png"}" alt="">
                <h2>Z490-Aorus <br><span class="com-price">$399.99</span></h2>
            </div>
            <div class="com">
                <img src=${"/Custom-Pc/images/components/8gb-ram.png"} alt="">
                <h2>16gb Ram <br><span class="com-price">$109.99</span></h2>
            </div>
            <div class="com">
                <img src=${"/Custom-Pc/images/components/SanDisk-ssd.png"} alt="">
                <h2>SanDisk-ssd 1TB<br><span class="com-price">$89.99</span></h2>
            </div>
            <div class="com">
                <img src="${"/Custom-Pc/images/components/Corsair-Tx650.png"}" alt="">
                <h2>Corsair Tx650  <br><span class="com-price">$109.99</span></h2>
            </div>`
            comPrice.innerText = `709.99`
            buildTotal.innerHTML = `709.99`
            apexlegends.innerHTML = 'Average Fps: <br> 264'
            csgo.innerHTML = 'Average Fps: <br> 681'
            cyberpunk.innerHTML = 'Average Fps: <br> 145'
            fortnite.innerHTML = 'Average Fps: <br> 360'
            rocketleage.innerHTML = 'Average Fps: <br> 908'
            theWitcher.innerHTML = 'Average Fps: <br> 178'
        }
    }
    
    
}

class Storage{
    static clearPath(){
        localStorage.removeItem('path')
    }
    static savePath(path){
        localStorage.setItem('path', JSON.stringify(path))
    }
    static info(html){
        localStorage.setItem('info', html)
        // productInfo.style.opacity = 0
    }
    static title(title){
        localStorage.setItem('title', title)
    }
    
}

const path = new ProductBtn()
const ui = new UI()
ui.uiInfo()
path.getPathBtn()
ui.displayPath()
ui.displayBuild()
ui.addToBuild()
ui.buildLogic()
ui.comUI()
ui.comInfo()
ui.showGamesSelected()
ui.getGameSelected()
ui.calcGameFps()
