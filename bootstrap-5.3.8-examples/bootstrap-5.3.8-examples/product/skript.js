
      let x=123 
      //alert (x)
      let y="Hello cat"
      //alert (y)
      let name= prompt ("what is your name?")

    if(name=="" || name==null )  {
        name="user"
    }
     alert ("Hello " + name)
     let result = confirm("Ви хочете перейти на головну сторінку?");

     

if (result==true) {
    window.location.href="../album/index.html"
}


function checkadekvat () {
   let name= prompt ("What is your name")
   if (name=="" || name==null) {
    name="user"
   }
    alert ("Welcome to the club " + name)
    alert ("You have been added to the site.")
   test2()
}
function test2 () {
    alert ("Hello, I`m a function test 2")
}
