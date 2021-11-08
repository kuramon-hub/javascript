 (function(){
   var start =document.getElementById('start');
   var stop =document.getElementById('stop');
   var reset=document.getElementById('reset');
   var stopWatch = document.getElementById('stopWatch');
   
   
    //クリック時の時間を保持するための変数定義
    var stopTime=0;
    
    //ストップflag
    var stopFlag=0;
    
    //経過時間
    var elapsedTime=0;
    
    var intervalId=0;
 
 //setIntervalを使って１０００msごとに時間を取得する
 //60分以上になるかストップボタン押下で止まる
  let count = 0;


  const countUp = () =>{
    count=count+1000;
    elapsedTime=count;
    changeMsec();

  }
    function getMsec(){
   intervalId = setInterval(() =>{
    if(stopFlag==0){ 
    countUp();
    }
    }, 1000);
    }

//2時間１５分１１秒を２：１５：１１と表示する
//2時間=7200000,15分=900000   11秒=11000  8111000
    function changeMsec(){
      
      //h(時間)＝8111000 / 3600000ミリ秒で割った数の商　-> 2時間
      var h = Math.floor(elapsedTime / 3600000);   
      //m(分) = 8111000 / 3600000ミリ秒で割った数の余りを60000で割った商　-> 15分
      var m = Math.floor(elapsedTime % 3600000 / 60000);   
      //s(秒) = 8111000 / 3600000ミリ秒で割った数の余りを60000で割った余り / 1000 (ミリ秒なので1000で割ってやる) -> 11秒
      var s = Math.floor(elapsedTime % 3600000 % 60000 / 1000);
      var s1= Math.floor(s/10);
      var s2=s%10;
   


        //HTMLのid　timer部分に表示させる　
        stopWatch.textContent = h + ':' + m + ':' +s1+ ':' + s2;      
      
      
      
    }
   
   //スタートボタン押下時
    start.addEventListener('click',function(){
        start.disabled=true;
        stop.disabled=false;
        reset.disabled=false;
        stopFlag=0;
        //ストップ時に保存した時間を取得
        getMsec();
});
    
    //ストップボタン押下時
     stop.addEventListener('click',function(){
      stop.disabled=true;
      start.disabled=false;
      reset.disabled=false;
        //カウント止める
        clearInterval(intervalId);　//intervalIdをclearIntervalで指定している
        stopFlag=1;

    });
    
    reset.addEventListener('click',function(){
      reset.disabled=true;
      stop.disabled=true;
      start.disabled=false;
        stopFlag=1;
        clearInterval(intervalId);　//intervalIdをclearIntervalで指定している
        
        stopWatch.textContent ='0:0:0:0';      
        count=0;

    });
 })();
    
    
    
  
    
 
 