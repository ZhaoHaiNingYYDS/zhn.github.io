export default {
    mounted(el, binding, vnode) {
        let dragImg = el; // 当前元素
        let pDiv= document.getElementById('beijing');
        // let pDiv = el.parentNode; //父元素
       
        let rangWidth = pDiv.clientWidth; //父元素宽度，即 移动范围
        let rangHeight = pDiv.clientHeight; //父元素高度
        console.log(pDiv.rangHeight)
        // 禁止选择网页上的文字
        document.onselectstart = function () {
            return false;
        };
        dragImg.onmousedown = function (e) {
            // 鼠标按下，计算当前元素距离可视区的距离
            let disX = e.clientX - dragImg.offsetLeft;
            let disY = e.clientY - dragImg.offsetTop;
            const dWdith = dragImg.clientWidth;
            const dHeight = dragImg.clientHeight;
            const dMoveLeft = rangWidth - dWdith;
            const dMoveTop = rangHeight - dHeight;
          
            document.onmousemove = function (e) {
                // 通过事件委托，计算移动的距离
                let left = e.clientX - disX;
                let top = e.clientY - disY;
                dragImg.style.top = `${top}px`;
                dragImg.style.left = `${left}px`;
                // 移动当前元素
                console.log(rangHeight,dMoveTop)
                if (left > dMoveLeft) {
                    dragImg.style.left = `${dMoveLeft}px`;
                } else {
                    dragImg.style.left = `${left}px`;
                }
                if (left < 0) {
                    dragImg.style.left = `0px`;
                }
                if (top > dMoveTop) {
                    dragImg.style.top = `${dMoveTop}px`;
                } else {
                    dragImg.style.top = `${top}px`;
                }
                if (top < 0) {
                    dragImg.style.top = `0px`;

                }

            };
            document.onmouseup = function (e) {
                document.onmousemove = null;
                document.onmouseup = null;
                let eqid = dragImg.dataset["id"];
                for (let index = 0; index < binding.value.eqs.length; index++) {
                    const element = binding.value.eqs[index];
                    if (eqid == element.eqId) {
                        // console.log(eqid)
                        binding.value.eqs[index].eqLeft = dragImg.offsetLeft;
                        binding.value.eqs[index].eqTop = dragImg.offsetTop;
                    }
                }
            };
            // return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
            return false;

        }
    }
}