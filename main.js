function createMatch(team1, stage, pool, hour, team2) {
  return `
    <li class="jogo">
      <img src="./assets/icons/icon=${team1}.svg" alt="catar">
      <div>
        <p class="grupo">${stage}${pool}</p>
        <p class="horario">${hour}</p>
      </div>      
      <img src="./assets/icons/icon=${team2}.svg" alt="equador">
    </li>
  `
}

function createCard(date, day, matches) {
  return `
    <div class="card">
      <h2>${date}<span>${day}</span> 
      </h2>
      <ul class="jogos">
        ${matches}
      </ul>
    </div>
  `
}

function filtraPais() {
  let pais_selecionado = document.getElementById('select_team').value
  let lista_jogos = document.getElementsByClassName('card');
  let jogos_do_dia = document.getElementsByClassName('jogo')
      
  for (i = 0; i < lista_jogos.length; i++) { 
      if (!lista_jogos[i].innerHTML.toLowerCase().includes(pais_selecionado)) {
        lista_jogos[i].style.display="none";
      }
      else {
        lista_jogos[i].style.display="card";
      }
  }

  for (i = 0; i < jogos_do_dia.length; i++) { 
    if (!jogos_do_dia[i].innerHTML.toLowerCase().includes(pais_selecionado)) {
      jogos_do_dia[i].style.display="none";
    }
    else {
      jogos_do_dia[i].style.display="jogos";    
    }
  }
}

function filtraGrupo() {
  let grupo_selecionado = document.getElementById('select_pool').value
  let lista_jogos = document.getElementsByClassName('card');
  let jogos_grupo = document.getElementsByClassName('jogo')
      
  for (i = 0; i < lista_jogos.length; i++) { 
    if (!lista_jogos[i].innerHTML.toLowerCase().includes(grupo_selecionado)) {
      lista_jogos[i].style.display="none";
    }
    else {
      lista_jogos[i].style.display="card";
    }
   }

  for (i = 0; i < jogos_grupo.length; i++) { 
    if (!jogos_grupo[i].innerHTML.toLowerCase().includes(grupo_selecionado)) {
      jogos_grupo[i].style.display="none";
    }
    else {
      jogos_grupo[i].style.display="jogo";    
    }
  }
 }

document.querySelector("#cards").innerHTML = 
  createCard('20/11', 'domingo', 
    createMatch('qatar', '', 'grupo a', '13:00', 'ecuador')
  ) +
  createCard('21/11', 'segunda', 
    createMatch('england', '', 'grupo b','10:00', 'iran') +
    createMatch('senegal', '', 'grupo a','13:00', 'netherlands') +
    createMatch('united states', '', 'grupo b','16:00', 'wales')
  ) +
  createCard('22/11', 'terça', 
    createMatch('argentina', '', 'grupo c','07:00', 'saudi arabia') +
    createMatch('denmark', '', 'grupo d','10:00', 'tunisia') +
    createMatch('mexico', '', 'grupo c','13:00', 'poland') +
    createMatch('france', '', 'grupo d','16:00', 'australia')
  ) +
  createCard('23/11', 'quarta', 
    createMatch('morocco', '', 'grupo f','07:00', 'croatia') +
    createMatch('germany', '', 'grupo e','10:00', 'japan') +
    createMatch('spain', '', 'grupo e','13:00', 'costa rica') +
    createMatch('belgium', '', 'grupo f','16:00', 'canada')
  ) +
  createCard('24/11', 'quinta', 
    createMatch('switzerland', '', 'grupo g','07:00', 'cameroon') +
    createMatch('uruguay', '', 'grupo h','10:00', 'south korea') +
    createMatch('portugal', '', 'grupo h','13:00', 'ghana') +
    createMatch('brazil', '', 'grupo g','16:00', 'serbia')
  ) +
  createCard('25/11', 'sexta', 
    createMatch('wales', '', 'grupo b','07:00', 'iran') +
    createMatch('qatar', '', 'grupo a','10:00', 'senegal') +
    createMatch('netherlands', '', 'grupo a','13:00', 'ecuador') +
    createMatch('england', '', 'grupo b','16:00', 'united states')
  ) +
  createCard('26/11', 'sábado', 
    createMatch('tunisia', '', 'grupo d','07:00', 'australia') +
    createMatch('poland', '', 'grupo c','10:00', 'saudi arabia') +
    createMatch('france', '', 'grupo d','13:00', 'denmark') +
    createMatch('argentina', '', 'grupo c','16:00', 'mexico')
  ) +
  createCard('27/11', 'domingo', 
    createMatch('japan', '', 'grupo e','07:00', 'costa rica') +
    createMatch('belgium', '', 'grupo f','10:00', 'morocco') +
    createMatch('croatia', '', 'grupo f','13:00', 'canada') +
    createMatch('spain', '', 'grupo e','16:00', 'germany')
  ) +
  createCard('28/11', 'segunda', 
    createMatch('cameroon', '', 'grupo g','07:00', 'serbia') +
    createMatch('south korea', '', 'grupo h','10:00', 'ghana') +
    createMatch('brazil', '', 'grupo g','13:00', 'switzerland') +
    createMatch('portugal', '', 'grupo h','16:00', 'uruguay')
  ) +
  createCard('29/11', 'terça', 
    createMatch('ecuador', '', 'grupo a','12:00', 'senegal') +
    createMatch('netherlands', '', 'grupo a','12:00', 'qatar') +
    createMatch('iran', '', 'grupo b','16:00', 'united states') +
    createMatch('wales', '', 'grupo b','16:00', 'england')
  ) +
  createCard('30/11', 'quarta', 
    createMatch('tunisia', '', 'grupo d','12:00', 'france') +
    createMatch('australia', '', 'grupo d','12:00', 'denmark') +
    createMatch('poland', '', 'grupo c','16:00', 'argentina') +
    createMatch('saudi arabia', '', 'grupo c','16:00', 'mexico')
  ) +
  createCard('01/12', 'quinta', 
    createMatch('croatia', '', 'grupo f','12:00', 'belgium') +
    createMatch('canada', '', 'grupo f','12:00', 'morocco') +
    createMatch('japan', '', 'grupo e','16:00', 'spain') +
    createMatch('costa rica', '', 'grupo e','16:00', 'germany')
  ) +
  createCard('02/12', 'sexta', 
    createMatch('south korea', '', 'grupo h','12:00', 'portugal') +
    createMatch('ghana', '', 'grupo h','12:00', 'uruguay') +
    createMatch('serbia', '', 'grupo g','16:00', 'switzerland') +
    createMatch('cameroon', '', 'grupo g','16:00', 'brazil')
  )

function exibeOculta() {
  let div = document.querySelector(".filtro");
  
  if(div.style.display === "flex") {
      div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
}

