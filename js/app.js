function getKeyPressValue() {
  
  const cardnumber = document.getElementById('card-number').value;
  const cardname = document.getElementById('card-holder-name').value;
  const cardmonth = document.getElementById('month').value;
  const cardyear = document.getElementById('year').value;
  const cardcvc = document.getElementById('ccv').value;

  console.log(cardnumber);

  if(cardname == '') {
    document.getElementById('card-front-name').innerHTML = 'Jane Appleseed';  
  } else {
    document.getElementById('card-front-name').innerHTML = cardname; 
  }

  if(cardnumber == '') {
    document.getElementById('card-front-number').innerHTML = '0000 0000 0000 0000';  
  } else {
    document.getElementById('card-front-number').innerHTML = cardnumber; 
  }

  if(cardmonth == '' && cardyear == '') {
    document.getElementById('card-front-data').innerHTML = '00/00';  
  } else {
    document.getElementById('card-front-data').innerHTML = cardmonth + '/' + cardyear; 
  }

  if(cardcvc == '') {
    document.getElementById('card-back-ccv').innerHTML = '000';
  } else {
    document.getElementById('card-back-ccv').innerHTML = cardcvc;
  }
}

