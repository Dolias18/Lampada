const lamp      = document.querySelector('#lamp');
const turnOnOff = document.querySelector('#turnOnOff');

function lampOn() {
  if(!isLampBroken () ){
    lamp.src = './img/ligada.jpg';
  }
}

function lampOff() {
  if(!isLampBroken () ) {
    lamp.src = './img/desligada.jpg';
  }
}

function lampBroken() {
  if(!isLampBroken () ) {
    lamp.src = './img/quebrada.jpg';
  }
}

function lampOnOff() {
  if(turnOnOff.textContent == 'Ligar'){
    lampOn();
    turnOnOff.textContent = 'Desligar';
  }else{
    lampOff();
    turnOnOff.textContent = 'Ligar';
  }
}

function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1;
}

turnOnOff.addEventListener('click', lampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
