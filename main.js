names_of_people=[];
function submit(){
    var GuestName= document.getElementById("name_of_guest").value;
    names_of_people.push(GuestName);
    console.log(names_of_people);
    document.getElementById("display_name").innerHTML= names_of_people;
    document.getElementById("name_of_guest").innerHTML= "";
}

function show(){
    var ShowName= names_of_people.join('<br>');
    console.log(names_of_people);
    document.getElementById("show_names").innerHTML= ShowName.toString();

    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    names_of_people.sort();
    console.log(names_of_people);
    document.getElementById("sorted_names").innerHTML= names_of_people;
}

function searching(){
    var s= document.getElementById("search_name").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++){

        if(s==names_of_people[j]){
            found=found+1
        }
    }    
    document.getElementById("searched").innerHTML="name found "+found+"time/s";
    console.log("found name "+found+" time/s");
}