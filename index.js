let volno = dayjs('2024-04-03');
let volno = dayjs('2024-04-04');
const dnes = dayjs();

document.body.innerHTML += `<h1 style="color: #880e4f;">Mám dnes volno?`;

if (dnes.isAfter(volno)) {
    document.body.innerHTML += 'ANO!Běž se učit!';
  } else {
    document.body.innerHTML += 'Ještě ne :(';
  }


  
