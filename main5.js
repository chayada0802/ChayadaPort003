let count=0;
function postFunction()
{
    count=count+1;
    var text1= document.getElementById("text1").value;
    if(count==1)
    {
        var topic1=document.getElementById("topic1");
        topic1.innerHTML=text1;
    }
    if(count==2)
    {
        var comment1=document.getElementById("comment1");
        comment1.innerHTML=text1;
    }
    if(count==3)
    {
        var comment2=document.getElementById("comment2");
        comment2.innerHTML=text1;
    }
}
function clearFunction(){
    var topic1=document.getElementById("topic1");
    topic1.innerHTML=null;
    var comment1=document.getElementById("comment1");
        comment1.innerHTML=null;
        var comment2=document.getElementById("comment2");
        comment2.innerHTML=null;

}