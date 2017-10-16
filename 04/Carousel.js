var todayPhoto = [
    {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;�߸� ����&quot; �ְ� ������� ������ ����","id":"20120516082207657"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;���ø�&#39; �ʸ��� ���� 5������ ���� ��ģ��","id":"20120516091011626"}
    ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[���� ��ȥ�� ǳ��] �Ŷ����ź� &quot;�ູ�մϴ�&quot;","id":"20120516092605081"}
    ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;���� �� ����&#39; �ĺ�GK ��� ������ ����","id":"20120516100608409"}
    ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"�絿���� ����ű�� Ÿ�ٷ��� &#39;����&#39;","id":"20120516093313331"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"�̽�ö �Ƴ��� �� ���� ���� &quot;���ֿ�. .&quot;","id":"20120516093918544"}
    ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"���� 6������ �������� �Ծ�ƴ� ���̰�..","id":"20120516030614331"}
    ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;����&#39; �迬��, �����ǳ����� �α�����","id":"20120516092003892"}
];

//Carousel.html���κ��� ��Ҹ� �������� ���� <div>�� id�� ������
var wrap = document.getElementById('wrap');
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var status =  document.getElementById('btn');

//Carousel.javascript���� Carousel.html�� �Ѱ��� ��Ҹ� �̾���� ����
var str = '';
var drawLeftBtn = '';
var drawRightBtn = '';

var cnt = 0;        //������ ������ �����Դ��� ���� ����
var pageNum = 1;    //���� ����ڰ� �����ִ� ������
var cntPage = 0;    //��ü ������ ��

//���� ��� �Լ�
function showPicture(n) {
    for(var i = -3; i<=0; i++) {
        if (cnt === 3 || (3*n) + i >= todayPhoto.length) {
            cnt = 0;
            break;
        }
        str += '<img src="'+todayPhoto[(3*n) + i].img+'"> ';
        cnt++;

    }
    wrap.innerHTML = str;
    cnt = 0;
    str = '';
}

showPicture(pageNum);

//��ü ������ ���ϴ� �Լ�
function getPageNum() {
    cntPage = todayPhoto.length / 3;
}

//��ư�� ������ �������� ���� ��� �Լ�
function showpageStatus() {
    pageStatus = ' ' + pageNum + ' / ' + Math.round(cntPage) + ' ';
    drawLeftBtn = '<input type="button" value="<"/>' + '<a id="page">'+ pageStatus + '</a>';
    drawRightBtn = '<input type="button" value=">"/>';


    btnLeft.innerHTML += drawLeftBtn;
    btnRight.innerHTML += drawRightBtn;

}

btnLeft.onclick = function clickLeft() {
    if (pageNum <= Math.round(cntPage) && pageNum > 1){
        pageNum -= 1;
        pageStatus = ' ' + pageNum + ' / ' + Math.round(cntPage) + ' ';
        document.getElementById("page").innerHTML = pageStatus;
        showPicture(pageNum);
    }
};

btnRight.onclick = function clickRight() {
    if (pageNum < Math.round(cntPage)){
        pageNum += 1;
        pageStatus = ' ' + pageNum + ' / ' + Math.round(cntPage) + ' ';
        document.getElementById("page").innerHTML = pageStatus;
        showPicture(pageNum);
    }
};

/*showPicture();*/
getPageNum();
showpageStatus();