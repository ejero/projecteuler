var myNum = 0;
for ( var i = 1 ; i < 1000 ; i++ ) {
  if(i % 3 === 0 || i % 5 === 0 ) {
    myNum += i;
  }
} document.write(myNum);
