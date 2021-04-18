
    function validateForm() {
        var x = document.forms["myform"]["message"].value;
        if (countWords(x) <= 50) {
          alert("Input must have a minimum of 50 words. You have " + (countWords(x)));
          return false;
        }
        alert("Thank you!");
      }
      function countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        return str.split(' ').length;
        document.write(countWords("   Tutorix is one of the best E-learning   platforms"));
     }

