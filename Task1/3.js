for (var i = 2;	 i < 10; i++) {
	(i % 2 == 0) ? alert(i): alert('no');
	//i+=2;
}

vichet:
 for (i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue vichet;
    }

    alert( i ); //prostoe
  }