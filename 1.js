var fs = require('fs');
var mk=function(str){
    var index=true;
    var str1='';
    var reg=/(\w+)(\/)*/g;
    var res=reg.exec(str);
    function fn(){
        if(res)
            if(index){
                index=false;
                console.log(res[1]);
                fs.mkdir(res[1], fn);
                str1+=res[0];
            }else{

                console.log(res);
                str1+=res[1];
                console.log("n",str1);
                fs.mkdir(str1,fn);
                str1+=res[2];
                console.log("n",str1);
            }
        res=reg.exec(str);
    }
    fn();
};
mk('a/b/c/d/s');