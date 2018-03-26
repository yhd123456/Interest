        var bili = 1/window.devicePixelRatio;
        document.write('<meta name="viewport" content="width=device-width,initial-scale='+ bili +',user-scalable=no,minimum-scale='+ bili +',maximum-scale='+ bili +'">');
        var devwidth = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = devwidth/25 + 'px';//手机端