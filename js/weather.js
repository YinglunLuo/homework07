function gettingJSON(){
    let location;
    location = document.querySelector("#location").value;
    if(location == ""){
        location = "Ann Arbor";
    };
    console.log("Location is : " + location);

    let fomat;
    try{
        format = document.querySelector('input[name="temp"]:checked').value;
    }
    catch(error){
        format='imperial'
    }
    console.log("Format is " + format);
 
    let query;
    var reg=/\d/;
    if(reg.test(location)){
        query = "https://api.openweathermap.org/data/2.5/weather?zip="+location+"&units="+format+"&appid=3853677ac38108f0804f63500d4a698e"
    }
    else{
        query = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units="+format+"&appid=3853677ac38108f0804f63500d4a698e"
    }  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    let description;

    // Your code here.


    $.getJSON(query,function(json){
        loc = json['name'];
        temp = json['main']['temp'];
        tempImg = json['weather'][0]['icon'];
        description = json['weather'][0]['description']

        console.log(loc,temp,tempImg,description)

        document.querySelector("#tempImg").src="https://openweathermap.org/img/wn/"+tempImg+".png";
        document.querySelector("#loc").innerHTML=loc;
        document.querySelector("#tempImg").alt=description;
        document.querySelector("#temp").innerHTML=temp+" with "+description;

        document.querySelector("#forecast").style.display="block";

        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}
