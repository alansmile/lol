//头部背景图
ready(function(){
    var headerBg=document.getElementById('header');
    headerBg.addEventListener('mousewheel',bg,false);//true是捕获，false是冒泡（默认）
    headerBg.addEventListener('DOMMouseScroll',bg,false);//Firefox
    function bg(){
        headerBg.style.cssText='width: 100%;height: 360px;background: url(image/header/header_smallbg.jpg) no-repeat;background-position: 50% 50%;transition: 0.4s;';
    };
    return false;
});

//掌上LOL
ready(function(){
    var phonePhoto=document.getElementById('header').children[0].children[4].children[0];
    var phoneShow=document.getElementById('header').children[0].children[4].children[1];
    phonePhoto.addEventListener('mouseover',phoneOne);
    phoneShow.addEventListener('mouseover',phoneOne);
    phonePhoto.addEventListener('mouseout',phoneTwo);
    phoneShow.addEventListener('mouseout',phoneTwo);
    function phoneOne(){
        var phoneShows=document.getElementById('header').children[0].children[4].children[1];
        phoneShows.style.opacity="1";
        phoneShows.style.visibility="visible";
    };
    function phoneTwo(){
        var phoneShows=document.getElementById('header').children[0].children[4].children[1];
        phoneShows.style.opacity="0";
        phoneShows.style.visibility="hidden";   
    };
    return false; 
});

//个人中心
ready(function(){
    var headerUser=document.getElementById('header').children[0].children[6];
    var message=document.getElementById('header').children[0].children[7];
    headerUser.addEventListener('mouseover',userOne,false);
    message.addEventListener('mouseover',userOne,false);
    headerUser.addEventListener('mouseout',userTwo,false);
    message.addEventListener('mouseout',userTwo,false);
    function userOne(){
        var userShow=document.getElementById('header').children[0].children[7];
        userShow.style.opacity="1";
        userShow.style.visibility="visible";
    };
    function userTwo(){
        var userShow=document.getElementById('header').children[0].children[7];
        userShow.style.opacity="0";
        userShow.style.visibility="hidden";
    };
    return false;
});

//导航
ready(function(){
    var navMain=document.getElementById('header').children[0].children[1];
    var navShow=document.getElementById('header').children[0].children[2];
    navMain.addEventListener('mouseover',navOne,false);
    navShow.addEventListener('mouseover',navOne,false);
    navMain.addEventListener('mouseout',navTwo,false);
    navShow.addEventListener('mouseout',navTwo,false);
    function navOne(){
        var navShow=document.getElementById('header').children[0].children[2];
        navShow.style.cssText='display:block;';
    };
    function navTwo(){
        var navShow=document.getElementById('header').children[0].children[2];
        navShow.style.cssText='display:none;';
    };
    return false;
});

//搜索框
ready(function(){
    var return_main=document.getElementById('header').getElementsByClassName('search_show')[0].getElementsByClassName('searchform')[0].getElementsByClassName('return')[0];
    var search=document.getElementById('header').getElementsByClassName('nav')[0].getElementsByClassName('search')[0];
    return_main.addEventListener('click',function(){
        var navShow=document.getElementById('header').children[0];
        var search_show=document.getElementById('header').children[1];
        search_show.style.cssText='display:none;';
        navShow.style.cssText='display:block;';
    },false);
    search.addEventListener('click',function(){
        var navShow=document.getElementById('header').children[0];
        var search_show=document.getElementById('header').children[1];
        navShow.style.cssText='display:none';
        search_show.style.cssText='display:block;';
    },false);
    return false;
});

//登录弹窗
ready(function(){
    var login=document.getElementById('header').getElementsByClassName('nav')[0].getElementsByClassName('headeruser')[0].getElementsByClassName('login_two')[0];
    var loginShowone=document.getElementById('header').getElementsByClassName('nav')[0].getElementsByClassName('login')[0].getElementsByClassName('login_showone')[0];
    var loginShowtwo=document.getElementById('header').getElementsByClassName('nav')[0].getElementsByClassName('login')[0].getElementsByClassName('login_showtwo')[0];
    var screen=document.getElementById('screen');
    var exitone=document.getElementById('header').getElementsByClassName('nav')[0].getElementsByClassName('login')[0].getElementsByClassName('login_showone')[0].getElementsByClassName('exitone')[0];
    var exittwo=loginShowtwo.getElementsByClassName('exittwo')[0];
    var np=loginShowone.getElementsByClassName('login_showone_main')[0].getElementsByClassName('login_showone_main_other')[0].getElementsByTagName('a')[0];
    var code=loginShowone.getElementsByClassName('login_showone_main')[0].getElementsByClassName('code')[0];
    var codeShow=loginShowone.getElementsByClassName('login_showone_main')[0].getElementsByClassName('codeshow')[0];
    var quick=loginShowtwo.getElementsByClassName('login_showtwo_main')[0].getElementsByTagName('a')[0];
    login.addEventListener('click',function(){
        screen.style.cssText='display:block;';
        loginShowone.style.cssText='display:block;';
    },false);
    code.addEventListener('mouseover',function(){
        codeShow.style.cssText='display:block;';
    },false);
    code.addEventListener('mouseout',function(){
        codeShow.style.cssText='display:none;';
    },false);

    np.addEventListener('click',function(){ 
        loginShowone.style.cssText='display:none;';
        loginShowtwo.style.cssText='display:block;';
    },false);
    quick.addEventListener('click',function(){
        loginShowtwo.style.cssText='display:none;';
        loginShowone.style.cssText='display:block;';
    },false);

    exitone.addEventListener('mouseover',function(){
        exitone.style.cssText='background: url(image/header/exittwo.png);';
    },false);
    exitone.addEventListener('mouseout',function(){
        exitone.style.cssText='background: url(image/header/exitone.png);';
    },false);
    exitone.addEventListener('click',function(){
        loginShowone.style.cssText='display:none;';
        screen.style.cssText='display:none;';      
    },false);


    exittwo.addEventListener('mouseover',function(){
        exittwo.style.cssText='background: url(image/header/exittwo.png);';
    },false);
    exittwo.addEventListener('mouseout',function(){
        exittwo.style.cssText='background: url(image/header/exitone.png);';
    },false);
    exittwo.addEventListener('click',function(){
        loginShowtwo.style.cssText='display:none;';
        screen.style.cssText='display:none;';      
    },false);
    return false;
});

//侧边导航栏(平滑滚动)
ready(function(){
    var nav1=document.getElementById('side_nav').getElementsByTagName('a')[0];
    var nav2=document.getElementById('side_nav').getElementsByTagName('a')[1];
    var nav3=document.getElementById('side_nav').getElementsByTagName('a')[2];
    var nav4=document.getElementById('side_nav').getElementsByTagName('a')[3];
    var nav5=document.getElementById('side_nav').getElementsByTagName('a')[4];
    var nav6=document.getElementById('side_nav').getElementsByTagName('a')[5];
    nav1.addEventListener('click',goTo1);
    nav2.addEventListener('click',goTo2);
    nav3.addEventListener('click',goTo3);
    nav4.addEventListener('click',goTo4);
    nav5.addEventListener('click',goTo5);
    nav6.addEventListener('click',goTo6);
    function goTo1(){
        var scrollT =document.documentElement.scrollTop;
        var target=document.getElementById('main_bigone').offsetTop;
        if (scrollT >target) {
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(-scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT <= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT == 0){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(300/3*1);
                document.documentElement.scrollTop= step + scrollT;
                console.log(scrollT)
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT < target){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(target == scrollT){
            return false;
        }
    };

    function goTo2(){
        var scrollT =document.documentElement.scrollTop;
        var target=document.getElementById('main_bigtwo').offsetTop;
        if (scrollT >target) {
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(-scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT <= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT == 0){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(300/3*1);
                document.documentElement.scrollTop= step + scrollT;
                console.log(scrollT)
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT < target){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(target == scrollT){
            return false;
        }
    };

    function goTo3(){
        var scrollT =document.documentElement.scrollTop;
        var target=document.getElementById('main_bigthree').offsetTop;
        if (scrollT >target) {
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(-scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT <= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT == 0){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(300/3*1);
                document.documentElement.scrollTop= step + scrollT;
                console.log(scrollT)
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT < target){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(target == scrollT){
            return false;
        }
    };

    function goTo4(){
        var scrollT =document.documentElement.scrollTop;
        var target=document.getElementById('main_bigfour').offsetTop;
        if (scrollT >target) {
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(-scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT <= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT == 0){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(300/3*1);
                document.documentElement.scrollTop= step + scrollT;
                console.log(scrollT)
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT < target){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(target == scrollT){
            return false;
        }
    };

    function goTo5(){
        var scrollT =document.documentElement.scrollTop;
        var target=document.getElementById('main_bigfive').offsetTop;
        if (scrollT >target) {
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(-scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT <= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT == 0){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(300/3*1);
                document.documentElement.scrollTop= step + scrollT;
                console.log(scrollT)
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(scrollT < target){
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT >= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        else if(target == scrollT){
            return false;
        }
    };

    function goTo6(){
        var scrollT =document.documentElement.scrollTop;
        var target=document.getElementById('header').offsetTop;
        if (scrollT >target) {
            var timer = setInterval(function(){
                var scrollT =document.documentElement.scrollTop;
                var step = Math.floor(-scrollT/30);
                document.documentElement.scrollTop= step + scrollT;
                if(scrollT <= target){
                    document.documentElement.scrollTop = target;
                    clearTimeout(timer);
                }
            },8)
        }
        //document.getElementById('side_nav').getElementsByTagName('a')[0].getElementsByTagName('img')[0].src="image/side_nav/one_out.png";
    };

    return false;
});

//侧边导航栏(返回顶部图标的显示与隐藏)
ready(function(){
    var sideNav=document.getElementById('side_nav');
    window.onmousewheel=function(){
        var target=document.getElementById('main_bigone').offsetTop;
        var scrollT =document.documentElement.scrollTop;
        if(scrollT>=target){
            sideNav.style.top="34%";
            sideNav.style.height="330px";
            sideNav.style.overflow="visible"; 
        }else{
            sideNav.style.top="40%";
            sideNav.style.height="276px";
            sideNav.style.overflow="hidden"; 
        }
    }
});

//侧边导航栏(图标的显示效果)
ready(function(){
    var sideNav_photo1=document.getElementById('side_nav').getElementsByTagName('a')[0].getElementsByTagName('img')[0];
    sideNav_photo1.addEventListener('mouseover',function(){
        this.src="image/side_nav/one_over.png";
    });
    sideNav_photo1.addEventListener('mouseout',function(){
        this.src="image/side_nav/one_out.png";
    });

    var sideNav_photo2=document.getElementById('side_nav').getElementsByTagName('a')[1].getElementsByTagName('img')[0];
    sideNav_photo2.addEventListener('mouseover',function(){
        this.src="image/side_nav/two_over.png";
    });
    sideNav_photo2.addEventListener('mouseout',function(){
        this.src="image/side_nav/two_out.png";
    });

    var sideNav_photo3=document.getElementById('side_nav').getElementsByTagName('a')[2].getElementsByTagName('img')[0];
    sideNav_photo3.addEventListener('mouseover',function(){
        this.src="image/side_nav/three_over.png";
    });
    sideNav_photo3.addEventListener('mouseout',function(){
        this.src="image/side_nav/three_out.png";
    });

    var sideNav_photo4=document.getElementById('side_nav').getElementsByTagName('a')[3].getElementsByTagName('img')[0];
    sideNav_photo4.addEventListener('mouseover',function(){
        this.src="image/side_nav/four_over.png";
    });
    sideNav_photo4.addEventListener('mouseout',function(){
        this.src="image/side_nav/four_out.png";
    });

    var sideNav_photo5=document.getElementById('side_nav').getElementsByTagName('a')[4].getElementsByTagName('img')[0];
    sideNav_photo5.addEventListener('mouseover',function(){
        this.src="image/side_nav/five_over.png";
    });
    sideNav_photo5.addEventListener('mouseout',function(){
        this.src="image/side_nav/five_out.png";
    });

    var sideNav_photo6=document.getElementById('side_nav').getElementsByTagName('a')[5].getElementsByTagName('img')[0];
    sideNav_photo6.addEventListener('mouseover',function(){
        this.src="image/side_nav/six_over.png";
    });
    sideNav_photo6.addEventListener('mouseout',function(){
        this.src="image/side_nav/six_out.png";
    });
});

//侧边导航栏(图标随滚动条滚动变化显示效果)
ready(function(){
    var sidenavP1=document.getElementById('side_nav').getElementsByTagName('a')[0].getElementsByTagName('img')[0];
    var sidenavP2=document.getElementById('side_nav').getElementsByTagName('a')[1].getElementsByTagName('img')[0];
    var sidenavP3=document.getElementById('side_nav').getElementsByTagName('a')[2].getElementsByTagName('img')[0];
    var sidenavP4=document.getElementById('side_nav').getElementsByTagName('a')[3].getElementsByTagName('img')[0];
    var sidenavP5=document.getElementById('side_nav').getElementsByTagName('a')[4].getElementsByTagName('img')[0];
    document.onmousewheel=function(){
        var scrollT =document.documentElement.scrollTop;
        var mainBigone=document.getElementById('main_bigone').offsetTop;
        var mainBigtwo=document.getElementById('main_bigtwo').offsetTop;
        var mainBigthree=document.getElementById('main_bigthree').offsetTop;
        var mainBigfour=document.getElementById('main_bigfour').offsetTop;
        var mainBigfive=document.getElementById('main_bigfive').offsetTop;
        var footer=document.getElementById('footer').offsetTop;
        if(scrollT<mainBigone){
            sidenavP1.src="image/side_nav/one_out.png";
        }else if(scrollT>=mainBigone && scrollT<mainBigtwo){
            sidenavP1.src="image/side_nav/one_over.png";
            sidenavP2.src="image/side_nav/two_out.png";
        }else if(scrollT>=mainBigtwo && scrollT<mainBigthree){
            sidenavP1.src="image/side_nav/one_out.png";
            sidenavP2.src="image/side_nav/two_over.png";
            sidenavP3.src="image/side_nav/three_out.png";
        }else if(scrollT>=mainBigthree && scrollT<mainBigfour){
            sidenavP2.src="image/side_nav/two_out.png";
            sidenavP3.src="image/side_nav/three_over.png";
            sidenavP4.src="image/side_nav/four_out.png";
        }else if(scrollT>=mainBigfour && scrollT<mainBigfive){
            sidenavP3.src="image/side_nav/three_out.png";
            sidenavP4.src="image/side_nav/four_over.png";
            sidenavP5.src="image/side_nav/five_out.png";
        }else if(scrollT>=mainBigfive && scrollT<footer){
            sidenavP4.src="image/side_nav/four_out.png";
            sidenavP5.src="image/side_nav/five_over.png";    
        }
    };
})