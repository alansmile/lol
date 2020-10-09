//(一)
var mainOne=document.getElementById('main_bigone');
var mainOnes=document.getElementById('main_bigone').getElementsByClassName('main_one')[0];
var mainOne_newshow1=document.getElementById('main_bigone').getElementsByClassName('main_one')[0].getElementsByClassName('newshow')[0].getElementsByClassName('newshow_one')[0];
var mainOne_newshow1o=mainOne_newshow1.getElementsByClassName('newshow_one3')[0];
var mainOne_newshow1t=mainOne_newshow1.getElementsByClassName('newshow_one1')[0];
var mainOne_newshow2=document.getElementById('main_bigone').getElementsByClassName('main_one')[0].getElementsByClassName('newshow')[0].getElementsByClassName('newshow_two')[0];
var newshowIframe=document.getElementById('main_bigone').getElementsByClassName('main_one')[0].getElementsByClassName('newshow')[0].getElementsByClassName('newshowiframe')[0];
var newshowIframe2=newshowIframe.getElementsByClassName('newshowiframe2')[0];
var skinShow=document.getElementById('main_bigone').getElementsByClassName('main_one')[0].getElementsByClassName('skin_show')[0];
var skinShowp=skinShow.getElementsByClassName('skin1')[0].getElementsByTagName('p')[0];
ready(function(){
    //鼠标移入移出[新英雄，新皮肤(一)]
    mainOne_newshow1o.addEventListener('mouseover',function(){
        mainOne_newshow1t.style.visibility="visible";
        mainOne_newshow1t.style.opacity="0.8";
    });
    mainOne_newshow1t.addEventListener('mouseover',function(){
        mainOne_newshow1t.style.visibility="visible";
        mainOne_newshow1t.style.opacity="0.8";
    });
    mainOne_newshow1t.addEventListener('mouseleave',function(){
        mainOne_newshow1t.style.visibility="hidden";
        mainOne_newshow1t.style.opacity="0";
    });

    //鼠标移入[新英雄，新皮肤(二)]
    function mainOne_newshow2over(){
        newshowIframe.style.visibility="visible";
        newshowIframe.style.opacity="1";
        skinShow.style.visibility="visible";
        skinShow.style.top="17px";  
        skinShow.style.height="118px";
        mainOne.style.height="1278px";
        mainOnes.style.height="1238px";   
    };
    //鼠标移出[新英雄，新皮肤(二)]
    function mainOne_newshow2out(){
        newshowIframe.style.visibility="hidden";
        newshowIframe.style.opacity="0";
        skinShow.style.visibility="hidden";
        skinShow.style.top="0px";  
        skinShow.style.height="0px";
        mainOne.style.height="1160px";
        mainOnes.style.height="1120px"; 
    };
    mainOne_newshow2.addEventListener('mouseover',mainOne_newshow2over);
    newshowIframe2.addEventListener('mouseover',mainOne_newshow2over);
    skinShow.addEventListener('mouseover',mainOne_newshow2over);
    skinShow.addEventListener('mouseleave',mainOne_newshow2out);
    newshowIframe.addEventListener('mouseleave',mainOne_newshow2out); 
    return false;
})
//轮播图
ready(function(){
    var items=mainOnes.getElementsByClassName('promo')[0].getElementsByClassName('list')[0].getElementsByClassName('item');
    var points=mainOnes.getElementsByClassName('promo')[0].getElementsByClassName('pointList')[0].getElementsByClassName('point');
    var time = 0;
	var index = 0;
    var clearActive = function() {
        for(var i = 0; i < items.length; i++) {
            items[i].className = 'item';
        }
        for(var i = 0; i < points.length; i++) {
            points[i].className = 'point';
        }
    }
    var goIndex = function() {
        clearActive();
        points[index].className = 'point active';
        items[index].className = 'item active';
    }
    var goNext = function() {
        if(index < 4) {
            index++;
        } else {
            index = 0;
        }
        goIndex();
    }
    for(var i = 0; i < points.length; i++) {
        points[i].addEventListener('mouseover', function() {
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
            time = 0;
        })
    }
    //2000ms 跳转一次
    setInterval(function() {
        time++;
        if(time == 20){
            goNext();
            time = 0;
        }
    }, 100)
})
//新闻公告
ready(function(){
    var title=mainOnes.getElementsByClassName('news')[0].getElementsByClassName('news_title')[0].getElementsByClassName('news_title_list');
    var content=mainOnes.getElementsByClassName('news')[0].getElementsByClassName('news_content');
    var index = 0;
    var clearActive = function() {
        for(var i = 0; i < title.length; i++) {
            title[i].className = 'news_title_list';
        }
        for(var i = 0; i < content.length; i++) {
            content[i].className = 'news_content';
        }
    }
    for(var i = 0; i < title.length; i++){
        title[i].addEventListener('mouseover',function(){
            var titleIndex=this.getAttribute('data-index');
            index=titleIndex;
            clearActive();
            title[index].className='news_title_list active';
            content[index].className='news_content active';
        })
    }
})
//热门活动
ready(function(){
    var title=mainOnes.getElementsByClassName('act')[0].getElementsByClassName('act_tab')[0].getElementsByClassName('act_tab_title')[0].getElementsByClassName('act_tab_title_list');
    var content=mainOnes.getElementsByClassName('act')[0].getElementsByClassName('act_content')[0].getElementsByClassName('act_content_ul');
    var index=0;
    var clearActive=function() {
        for(var i = 0; i < title.length; i++) {
            title[i].className = 'act_tab_title_list';
        }
        for(var i = 0; i < content.length; i++) {
            content[i].className = 'act_content_ul';
        }
    }
    for(var i = 0; i < title.length; i++){
        title[i].addEventListener('mouseover',function(){
            var titleIndex=this.getAttribute('data-index');
            index=titleIndex;
            clearActive();
            title[index].className='act_tab_title_list active';
            content[index].className='act_content_ul active';
        })
    }   
})
//游戏功能导航
ready(function(){
    var player=mainOnes.getElementsByClassName('gamefun')[0].getElementsByClassName('gamefun_ul')[0].getElementsByClassName('gamefun_li')[0].getElementsByClassName('gamefun_li5')[3];
    var radius=mainOnes.getElementsByClassName('gamefun')[0].getElementsByClassName('gamefun_ul')[0].getElementsByClassName('gamefun_radius')[0];
    player.addEventListener('mouseover',function(){
        radius.classList.add('active');
    });
    radius.addEventListener('mouseleave',function(){
        radius.classList.remove('active');
    });
})
//版本导航
ready(function(){
    var version=mainOnes.getElementsByClassName('version')[0];
    var version1=version.getElementsByClassName('version1')[0];
    var versionIframe=version1.getElementsByClassName('versioniframe')[0];
    var version2=version.getElementsByClassName('version2')[0];
    var version3=version.getElementsByClassName('version3')[0];
    var version4=version.getElementsByClassName('version4')[0];
    var i=version.getElementsByClassName('i')[0];
    var versionShow=version.getElementsByClassName('version_show')[0];
    version1.addEventListener('mouseover',function(){
        versionIframe.style.opacity='1';
    })
    versionIframe.addEventListener('mouseleave',function(){
        versionIframe.style.opacity='0';
    })
    version3.addEventListener('mouseover',function(){
        version3.getElementsByTagName('img')[0].src="image/main_one/version4.jpg";
    });
    version3.addEventListener('mouseout',function(){
        version3.getElementsByTagName('img')[0].src="image/main_one/version3.jpg";
    });
    version4.addEventListener('mouseover',show);
    i.addEventListener('mouseover',show);
    versionShow.addEventListener('mouseover',show);
    version4.addEventListener('mouseleave',hidden);
    i.addEventListener('mouseleave',hidden);
    versionShow.addEventListener('mouseleave',hidden);
    function show(){
        i.style.opacity="1";
        i.style.visibility="visible";
        versionShow.style.opacity="1";
        versionShow.style.visibility="visible";
    };
    function hidden(){
        i.style.opacity="0";
        i.style.visibility="hidden";
        versionShow.style.opacity="0";
        versionShow.style.visibility="hidden";
    };
})

//(二)
//最新视频
var mainTwo=document.getElementById('main_bigtwo').getElementsByClassName('main_two')[0];
ready(function(){
    var freshVideo=mainTwo.getElementsByClassName('fresh_video')[0];
    var freshVideo_topItem=freshVideo.getElementsByClassName('top')[0].getElementsByClassName('top2')[0].getElementsByClassName('top2_item');
    var freshVideo_content=freshVideo.getElementsByClassName('content');
    var index=0;
    function goImg(a,b,c){    //第a个列表(array),第b个图片列表(array),第c张图片
        var maskImg=freshVideo_content[a].getElementsByClassName('content_item')[b].getElementsByClassName('mask')[0].getElementsByClassName('mask_img')[0];
        maskImg.addEventListener('mouseover',function(){
            this.src='image/main_two/fresh_video'+c+'s.jpg';   
        })
        maskImg.addEventListener('mouseleave',function(){
            this.src='image/main_two/fresh_video'+c+'.jpg';
        })
        return false;
    } 
    //遗留问题(for遍历多种不同条件的class失败，于是写了下面这个蠢B方法!还有就是一张张的去抠图太浪费时间了，所以第三个c值都是调换了一下位置。)
    goImg(0,0,1);goImg(0,1,2);goImg(0,2,3);goImg(0,3,4);goImg(0,4,5);goImg(0,5,6);goImg(0,6,7);goImg(0,7,8);
    goImg(1,0,5);goImg(1,1,6);goImg(1,2,7);goImg(1,3,8);goImg(1,4,1);goImg(1,5,2);goImg(1,6,3);goImg(1,7,4);
    goImg(2,0,3);goImg(2,1,1);goImg(2,2,2);goImg(2,3,4);goImg(2,4,5);goImg(2,5,6);goImg(2,6,7);goImg(2,7,8);
    goImg(3,0,6);goImg(3,1,7);goImg(3,2,3);goImg(3,3,4);goImg(3,4,5);goImg(3,5,1);goImg(3,6,2);goImg(3,7,8);
    goImg(4,0,1);goImg(4,1,5);goImg(4,2,6);goImg(4,3,4);goImg(4,4,2);goImg(4,5,3);goImg(4,6,7);goImg(4,7,8);
    goImg(5,0,5);goImg(5,1,2);goImg(5,2,7);goImg(5,3,8);goImg(5,4,1);goImg(5,5,6);goImg(5,6,3);goImg(5,7,4);
    var clearActive=function(){
        for(var i=0;i<freshVideo_topItem.length;i++){
            freshVideo_topItem[i].className='top2_item';
        }
        for(var i=0;i<freshVideo_content.length;i++){
            freshVideo_content[i].className='content';
        }
    }
    for(var i=0;i<freshVideo_topItem.length;i++){
        freshVideo_topItem[i].addEventListener('mouseover',function(){
            var topitemIndex=this.getAttribute('data-index');
            index=topitemIndex;
            clearActive();
            freshVideo_topItem[index].className='top2_item active';
            freshVideo_content[index].className='content active';
        })
    }
})
//热门专辑(点击top动)
ready(function(){
    var hotprogram=mainTwo.getElementsByClassName('hotprogram')[0];
    var hotprogram_topItem=hotprogram.getElementsByClassName('top')[0].getElementsByClassName('top2')[0].getElementsByClassName('top2_item');
    var hotprogram_content=hotprogram.getElementsByClassName('content')[0].getElementsByClassName('weekcontent');
    var index=0;
    var clearActive=function(){
        for(var i=0;i<hotprogram_topItem.length;i++){
            hotprogram_topItem[i].className='top2_item';
        }
        for(var i=0;i<hotprogram_content.length;i++){
            hotprogram_content[i].className='weekcontent';
        }
    }
    for(var i=0;i<hotprogram_topItem.length;i++){
        hotprogram_topItem[i].addEventListener('mouseover',function(){
            var topitemIndex=this.getAttribute('data-index');
            index=topitemIndex;
            clearActive();
            hotprogram_topItem[index].className='top2_item active';
            hotprogram_content[index].className='weekcontent active';
        })
    }
    
})
//热门专辑(点击左右按钮动&&自动轮播)
ready(function(){
    var hotprogram=mainTwo.getElementsByClassName('hotprogram')[0];
    var hotprogramContent=mainTwo.getElementsByClassName('hotprogram')[0].getElementsByClassName('content')[0];
    var hotprogram_content1=hotprogramContent.getElementsByClassName('weekcontent')[0];
    var hotprogram_content2=hotprogramContent.getElementsByClassName('weekcontent')[1];
    var hotprogram_content3=hotprogramContent.getElementsByClassName('weekcontent')[2];
    var hotprogram_content4=hotprogramContent.getElementsByClassName('weekcontent')[3];
    var hotprogram_content5=hotprogramContent.getElementsByClassName('weekcontent')[4];
    var hotprogram_content6=hotprogramContent.getElementsByClassName('weekcontent')[5];
    var hotprogram_content7=hotprogramContent.getElementsByClassName('weekcontent')[6];
    var goleft=hotprogram.getElementsByClassName('goleft')[0];
    var goright=hotprogram.getElementsByClassName('goright')[0];
    var go=new go(hotprogram_content1);
    var go=new go(hotprogram_content2);
    var go=new go(hotprogram_content3);
    var go=new go(hotprogram_content4);
    var go=new go(hotprogram_content5);
    var go=new go(hotprogram_content6);
    var go=new go(hotprogram_content7);
        function go(hotprogram_content){
            var weekcontent_item=hotprogram_content.getElementsByClassName('weekcontent_item');
            var index=0;
            var time=0;
            var clearActive=function(){
                time=0;
                for(var i=0;i<weekcontent_item.length;i++){
                    weekcontent_item[i].className='weekcontent_item';
                }
            };
            for(var i=0;i<weekcontent_item[index].length;i++){
                var weekcontent_itemIndex=weekcontent_item[i].getAttribute('data-index');
                index=weekcontent_itemIndex;
            }
            var goIndex=function(){
                clearActive();
                weekcontent_item[index].className='weekcontent_item active';
            }   
            var goRight=function(){
                if(index<1){
                    index++;
                }else{
                    index=0;
                }
                goIndex();
            }
            var goLeft=function(){
                if(index==0){
                    index=1;
                }else{
                    index--;
                }
                goIndex();
            }
            goleft.addEventListener('click',function(){
                goLeft();
            })
            goright.addEventListener('click',function(){
                goRight();
            })
                var gonext=setInterval(function(){
                    time++;
                    if(time==30){
                        goRight();
                        time=0;
                    }
                },100)
            for(var i=0;i<weekcontent_item.length;i++){
                weekcontent_item[i].addEventListener('mouseover',function(){
                    clearInterval(gonext);  
                    time=0; 
                });
                weekcontent_item[i].addEventListener('mouseleave',function(){
                gonext=setInterval(function(){
                        time++;
                        if(time==30){
                            goRight();
                            time=0;
                        }
                    },100)
                })
            }
            return go;
        }  
})

//(三)
ready(function(){
var bigThree=document.getElementById('main_bigthree');
var mainThree=bigThree.getElementsByClassName('main_three')[0];
var topItem=mainThree.getElementsByClassName('top')[0].getElementsByClassName('top2')[0].getElementsByClassName('top2_item');
var gamecontent=mainThree.getElementsByClassName('gamecontent')[0];
var gamecontentItem=gamecontent.getElementsByClassName('gamecontent_item');
var gamecontentFirst=gamecontentItem[0].getElementsByClassName('first')[0];

//积分榜
var rank=gamecontentFirst.getElementsByClassName('rank')[0];
var rankTitle=rank.getElementsByClassName('tops')[0].getElementsByClassName('top_title')[0].getElementsByClassName('title_item');
var rankList=rank.getElementsByClassName('rank_content')[0].getElementsByClassName('rank_list');
var indexs=0;
var clearActives=function(){
    for(var i=0;i<rankTitle.length;i++){
        rankTitle[i].className='title_item';
    }
    for(var i=0;i<rankList.length;i++){
        rankList[i].className='rank_list';
    }
}
var letgo=function(){
    clearActives();
    rankTitle[indexs].className='title_item active';
    rankList[indexs].className='rank_list active';
}
for(var i=0;i<rankTitle.length;i++){
    rankTitle[i].addEventListener('mouseover',function(){
        var ranktitleIndexs=this.getAttribute('data-index');
        indexs=ranktitleIndexs;
        letgo();
    })
}

//第一轮(BO1)的左右滑动
var swiper=gamecontentFirst.getElementsByClassName('recent')[0].getElementsByClassName('swiper')[0];    //ul节点
var goleft=gamecontentFirst.getElementsByClassName('goleft')[0];    //向左的按钮
var goright=gamecontentFirst.getElementsByClassName('goright')[0];  //向右的按钮
var n=0;    //利用n的递加和递减实现对left的像素值操作!(向左时每次+534px，向右时每次-534px)
goleft.addEventListener('click',goL);
goright.addEventListener('click',goR);
function goL(){
    goright.style.opacity='1';
    n++; 
    swiper.style.left=n*534+'px';  
    if(n==1){
    swiper.style.left='0px'; 
    n=0;
    }else if(n==0){
    goleft.style.opacity='0';
    }
}
function goR(){
    goleft.style.opacity='1';
    n--;
    swiper.style.left=n*534+'px';
    if(n==-4){
    swiper.style.left='-1602px'; 
    n=-3;
    }else if(n==-3){
    goright.style.opacity='0';
    }
}

//鼠标滑入列表改变div及其大小
var index=0;
    var clearActive=function(){
        for(var i=0;i<topItem.length;i++){
            topItem[i].className='top2_item';
        }
        for(var i=0;i<gamecontentItem.length;i++){
            gamecontentItem[i].className='gamecontent_item';
        }
    }
    var goIndex=function(){
        clearActive();
        topItem[index].className='top2_item active';
        gamecontentItem[index].className='gamecontent_item active';
    }
    for(var i=0;i<topItem.length;i++){
        topItem[i].addEventListener('mouseover',function(){
            var topitemIndex=this.getAttribute('data-index');
            index=topitemIndex;
            goIndex();
            go();  
        })
    }
    function go(){
        if(index==0){goBig(0);}
        else if(index==1){goSmall(1);}
        else{goSmall(2);}
    }
    function goBig(i){
        bigThree.style.cssText='height: 752px;';
        mainThree.style.cssText='height: 752px;';
        gamecontent.style.cssText='height: 572px;';
        gamecontentItem[i].style.cssText='height: 572px;';
    }
    function goSmall(i){
        bigThree.style.cssText='height: 620px;';
        mainThree.style.cssText='height: 620px;';
        gamecontent.style.cssText='height: 440px;';
        gamecontentItem[i].style.cssText='height: 440px;';
    }  
})

//(四)
ready(function(){
    var mainFour=document.getElementById('main_bigfour').getElementsByClassName('main_four')[0];
    var topItem=mainFour.getElementsByClassName('top')[0].getElementsByClassName('top2')[0].getElementsByClassName('top2_item');
    var herocontentItem=mainFour.getElementsByClassName('herocontent')[0].getElementsByClassName('herocontent_item');
    var index=0;
    var clearActive=function(){
        for(var i=0;i<topItem.length;i++){
            topItem[i].className='top2_item';
        }
        for(var i=0;i<herocontentItem.length;i++){
            herocontentItem[i].className='herocontent_item';
        }
    }
    var goIndex=function(){
        clearActive();
        topItem[index].className='top2_item active';
        herocontentItem[index].className='herocontent_item active';
    }
    for(var i=0;i<topItem.length;i++){
        topItem[i].addEventListener('click',function(){
            var topitemIndex=this.getAttribute('data-index');
            index=topitemIndex;
            goIndex();
        })
    }
})

//(五)
ready(function(){
    var mainFive=document.getElementById('main_bigfive').getElementsByClassName('main_five')[0];
    var right=mainFive.getElementsByClassName('fanart_right')[0];
    var rightItem=right.getElementsByClassName('right2')[0].getElementsByClassName('right2_item4')[0];
    var rightContainer=right.getElementsByClassName('container')[0];
    var leftContent=mainFive.getElementsByClassName('fanart_left')[0].getElementsByClassName('content')[0].getElementsByClassName('content_item');
    rightItem.addEventListener('mouseover',function(){one();})
    rightItem.addEventListener('mouseleave',function(){zero();})
    rightContainer.addEventListener('mouseover',function(){one();})
    rightContainer.addEventListener('mouseleave',function(){zero();})
    function one(){
        rightContainer.style.cssText='opacity:1;';
    }
    function zero(){
        rightContainer.style.cssText='opacity:0;';
    }
    for(let i=0;i<leftContent.length;i++){
        go(i);
    }
    function go(i){
        function show(){
            leftContent[i].getElementsByClassName('hidden')[0].style.cssText='bottom:0px;opacity: 0.8;';
        }
        function hidden(){
            leftContent[i].getElementsByClassName('hidden')[0].style.cssText='bottom:-66px;opacity: 0;';
        }
        leftContent[i].getElementsByClassName('img')[0].addEventListener('mouseover',function(){
            show();
        })
        leftContent[i].getElementsByClassName('img')[0].addEventListener('mouseleave',function(){
            hidden();
        })
        leftContent[i].getElementsByClassName('hidden')[0].addEventListener('mouseover',function(){
            show();
        })
        leftContent[i].getElementsByClassName('hidden')[0].addEventListener('mouseleave',function(){
            hidden();
        })
    }
})