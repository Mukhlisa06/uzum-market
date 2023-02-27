var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });




  let body = document.body


    let container = document.createElement('div')
    let smth = document.createElement('div')
    let content = document.createElement('div')
    let img = document.createElement('img')
    let letter = document.createElement('letter')
    let h5 = document.createElement('h5')
    let h6 = document.createElement('h6')
    let p = document.createElement('p')
    let price = document.createElement('h5')
  
    container.classList.add('container')
    content.classList.add('content')
    letter.classList.add('letter')
    smth.classList.add('smth')
    img.src = "./img/product.jpg"
    img.alt = 'product'
  
    h5.innerHTML = "Подсолнечное масло Щедрое лето, рафинированное, 900 мл"
    h6.innerHTML = '5.0    (259 оценок)'
    p.innerHTML = '2 080 сум/мес'
    price.innerHTML = '16 000 сум'
  
  
    container.append(smth)
    smth.append(content)
    content.append(img, letter)
    letter.append(h5, h6, p, price)
  
    body.append(container)






  
  