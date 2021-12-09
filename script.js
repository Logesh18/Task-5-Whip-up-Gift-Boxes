
function create()
{
    var n=document.getElementById("gifts").value;
    const card = document.querySelector('#card-content');
    console.log(document.getElementById("card-content").childElementCount)
    if(document.getElementById("card-content").childElementCount){
        document.getElementById("card-content").innerHTML='';
    }
    for(var i=0;i<n;i++)
    {   
        j=i+1;
        let div = document.createElement('div');
        div.id = 'card-element';
        div.innerHTML = '<img src="images.jpg" width="80px" height="60px"><p style="color:white; position:absolute;top: 8%;left: 10%;">'+j+'</p>';
        card.appendChild(div);
    }
    document.getElementById('gifts').value = '';
    
    
}
