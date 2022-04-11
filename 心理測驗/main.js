$(function(){
    var currentQuiz=null;//儲存做到第幾題
    //按下按鈕要做的事
    $("#startButton").on("click",function(){
        if(currentQuiz==null){
            currentQuiz=0;//設定從第0題開始
            $("#question").text(questions[0].question);
            $("#options").empty();
            //將選項逐個加入
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(`<input name='options' type='radio' 
                value='${index}'><label>${element[0]}</label><br><br>`);
            });
            //按鈕文字改成next
            $("#startButton").attr("value","Next");
        }else{
            //已經開始作答
            //看哪個有被選到
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    //是否走到最後要產生新結果
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        //通往最終結果
                        var finalResult=questions[currentQuiz].answers[i][1];
                        //顯示最終結果標題
                        $("#question").text(finalAnswers[finalResult][0]);
                        //選項清空
                        $("#options").empty();
                        //顯示最終結果內容
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }
                    else{
                        //指定下一題 原始資料-1
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        //顯示新的題目
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value=
                            '${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            });
        }
    });
});