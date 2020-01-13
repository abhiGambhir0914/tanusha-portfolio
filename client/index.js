document.getElementById('file').onchange = function() {

  var file = this.files[0];

  //Reading a File
  var reader = new FileReader();
  reader.onload = function(progressEvent) {

    var lines = this.result.split('\n');  //Splitting by new line
    var list = [];                       //Array for storing the words present at different lines
    var accept = [];                    //Array for storing the acceptance/rejection of words present in list array


    //Pushing the words to the list Array
    for (var line = 0; line < lines.length - 1; line++) {
      list.push(lines[line]);
    }

    console.log(list);

    //Checking the condtions using RegxExp and storing the acceptance/rejection in accept array
    for (var i = 0; i < list.length; i++) {

      if (!(/[aeiou]{3}/.test(list[i])) &&                  //cannot contain 3 consecutive vowels
        !(/[bcdfghjklmnpqrstvwxyz]{3}/.test(list[i])) &&   //cannot contain 3 consecutive consonants
        !(/([^eo])\1/.test(list[i])) &&                   //cannot contain 2 consecutive letters except ee oo
        (/[aeiou]/.test(list[i]))                        //atleast one vowel
      ) {
        accept.push('is acceptable' + ' ' + '<img src="tick.png" />');
        // console.log(accept + "  "+data)
      } else {
        accept.push('is not acceptable' + ' ' + '<img src="cross.png" />');
      }
      $("#demo ul").append(`<li>< ${list[i]} > ${accept[i]}</li>`);

      //  var patt = new RegExp("a");
      //  var res = patt.test(list[i]);
      //  console.log(res);

      //  for(var j=0; j<list.length; j++)
      //  document.getElementById("res").innerHTML = res;
      //  document.getElementById("demo").innerHTML = res;
      //  console.log(list[5]);
    }
    console.log(accept);
  };
  reader.readAsText(file);
};
