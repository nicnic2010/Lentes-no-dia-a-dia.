const rpgClientes = [
  {
    cliente: "João, 15 anos", icone: "🤓",
    fala: "Não enxergo a lousa de longe, só de perto!",
    pergunta: "João tem MIOPIA. Olho comprido, imagem forma ANTES da retina. Qual lente corrige?",
    opcoes: [
      { nome: "Convergente (centro grosso)", desenho: "🔍 )(" },
      { nome: "Divergente (centro fino)", desenho: "👓 ()" },
      { nome: "Lente colorida sem grau", desenho: "😎" }
    ],
    correta: 1,
    explicacao: "Miopia = vê perto, não vê longe. Correção: DIVERGENTE. Ela espalha a luz antes, fazendo focar na retina. No dia a dia: olho mágico de porta usa divergente!"
  },
  {
    cliente: "Dona Maria, 48 anos", icone: "📚",
    fala: "Meu braço ficou curto pra ler!",
    pergunta: "Dona Maria tem HIPERMETROPIA. Olho curto, imagem forma DEPOIS da retina. Qual lente?",
    opcoes: [
      { nome: "Divergente", desenho: "↗️ ↖️" },
      { nome: "Convergente - tipo lupa", desenho: "🔍 ↘️ ↙️" },
      { nome: "Lente de sol", desenho: "🕶️" }
    ],
    correta: 1,
    explicacao: "Hipermetropia = vê longe, não vê perto. Correção: CONVERGENTE (igual lupa). Junta os raios para focar na retina."
  },
  {
    cliente: "Carlos, motorista", icone: "🚗",
    fala: "À noite as luzes viram riscos, tudo embaçado.",
    pergunta: "O que causa ASTIGMATISMO?",
    opcoes: [
      { nome: "Córnea oval, tipo bola de futebol americano", desenho: "🏈" },
      { nome: "Usar muito celular", desenho: "📱" },
      { nome: "Falta de cenoura", desenho: "🥕" }
    ],
    correta: 0,
    explicacao: "Astigmatismo = córnea irregular. Precisa de lente cilíndrica. No dia a dia: farol de carro usa lente projetora parecida!"
  },
  {
    cliente: "Seu José, 62 anos", icone: "👴",
    fala: "Uso óculos pra longe, mas tiro pra ler o cardápio!",
    pergunta: "Presbiopia: precisa longe E perto. Qual solução?",
    opcoes: [
      { nome: "Bifocal / Multifocal", desenho: "👓✨" },
      { nome: "Fechar um olho", desenho: "😉" },
      { nome: "Só operar", desenho: "🏥" }
    ],
    correta: 0,
    explicacao: "Presbiopia = cristalino perde elasticidade após 40 anos. Solução: MULTIFOCAL. Invenção de Benjamin Franklin!"
  },
  {
    cliente: "Ana, fotógrafa", icone: "📷",
    fala: "Por que minha câmera funciona igual ao olho?",
    pergunta: "Complete: Objetiva da câmera = ____ do olho. Sensor = ____ do olho.",
    opcoes: [
      { nome: "Cristalino / Retina", desenho: "👁️" },
      { nome: "Pálpebra / Cílio", desenho: "😌" },
      { nome: "Flash / Bateria", desenho: "🔋" }
    ],
    correta: 0,
    explicacao: "PERFEITO! Olho = câmera! Objetiva (lentes convergentes) = Cristalino. Sensor = Retina. Diafragma = Íris. TUDO usa lentes no dia a dia!"
  }
];

let rpgAtual = 0;
let rpgXp = 0;
let rpgRespondeu = false;

function rpgRenderMap(){
  const map = document.getElementById('rpg-map');
  if(!map) return;
  map.innerHTML = '';
  rpgClientes.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'rpg-dot';
    d.textContent = i+1;
    if(i === rpgAtual) d.classList.add('active');
    if(i < rpgAtual) d.classList.add('done');
    d.onclick = () => { if(i <= rpgAtual) rpgLoad(i); };
    map.appendChild(d);
  });
}

function rpgStart(){
  rpgAtual = 0;
  rpgXp = 0;
  rpgLoad(0);
}

function rpgLoad(i){
  rpgAtual = i;
  rpgRespondeu = false;
  const cli = rpgClientes[i];
  const area = document.getElementById('rpg-gameArea');
  const bench = document.getElementById('rpg-bench');
  if(bench) bench.textContent = cli.icone;

  area.innerHTML = `
    <div class="conteudo-card">
      <span class="numero">CLIENTE ${i+1}/5</span>
      <h3>${cli.icone} ${cli.cliente}</h3>
      <p style="margin:8px 0"><em>"${cli.fala}"</em></p>
      <h3 style="margin-top:15px;font-size:19px">${cli.pergunta}</h3>
      <div id="rpg-opcoes" style="display:grid;gap:12px;margin-top:15px"></div>
      <div id="rpg-resultado" style="min-height:30px;margin:15px 0;font-weight:bold"></div>
      <button id="rpg-proxima" class="botao" style="display:none;background:#8e44ad;color:white" onclick="rpgNext()">Próximo cliente →</button>
    </div>
  `;

  const opcoesDiv = document.getElementById('rpg-opcoes');
  cli.opcoes.forEach((op, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opcao';
    btn.innerHTML = `<div style="font-size:28px;margin-bottom:6px">${op.desenho}</div><strong>${op.nome}</strong>`;
    btn.onclick = () => rpgVerificar(idx, btn);
    opcoesDiv.appendChild(btn);
  });

  rpgRenderMap();
  document.getElementById('rpg-xp').textContent = rpgXp + ' XP';
}

function rpgVerificar(resposta, botao){
  if(rpgRespondeu) return;
  rpgRespondeu = true;
  const correta = rpgClientes[rpgAtual].correta;
  const botoes = document.querySelectorAll('#rpg-opcoes .opcao');
  botoes.forEach(b => b.disabled = true);

  const resultado = document.getElementById('rpg-resultado');
  const proxima = document.getElementById('rpg-proxima');

  if(resposta === correta){
    botao.classList.add('certa');
    rpgXp += 20;
    resultado.textContent = "🎉 Acertou!";
    document.getElementById('rpg-progress').children[rpgAtual].innerHTML = "✅ " + document.getElementById('rpg-progress').children[rpgAtual].innerText.slice(2);
    proxima.style.display = "inline-block";
    setTimeout(()=>{
      resultado.innerHTML = `✅ ${rpgClientes[rpgAtual].explicacao}<br><br><strong>+20 XP</strong>`;
    }, 300);
  } else {
    botao.classList.add('errada');
    botoes[correta].classList.add('certa');
    resultado.innerHTML = `💡 Quase! ${rpgClientes[rpgAtual].explicacao}`;
    proxima.textContent = "Tentar de novo";
    proxima.style.display = "inline-block";
    proxima.onclick = () => rpgLoad(rpgAtual);
    return;
  }

  let cargo = "ESTAGIÁRIO";
  if(rpgXp >= 20) cargo = "ATENDENTE";
  if(rpgXp >= 40) cargo = "ÓPTICO";
  if(rpgXp >= 60) cargo = "ESPECIALISTA";
  if(rpgXp >= 100) cargo = "MESTRE 🔬";
  document.getElementById('rpg-cargo').textContent = cargo;
  document.getElementById('rpg-xp').textContent = rpgXp + " XP";
  proxima.onclick = () => rpgNext();
}

function rpgNext(){
  rpgAtual++;
  if(rpgAtual >= rpgClientes.length){
    rpgFim();
    return;
  }
  rpgLoad(rpgAtual);
}

function rpgFim(){
  const area = document.getElementById('rpg-gameArea');
  area.innerHTML = `
    <div class="conteudo-card" style="text-align:center">
      <div style="font-size:60px">🏆</div>
      <h3>Você virou ESPECIALISTA!</h3>
      <p style="margin:10px 0">Atendeu 5 clientes e ganhou ${rpgXp} XP.<br>Agora pode explicar lentes no dia a dia!</p>
      <div style="background:#fefce8;border-left:5px solid #facc15;padding:12px;border-radius:12px;text-align:left;margin:15px 0;font-size:14px">
        <strong>O que você aprendeu:</strong><br>
        - Miopia = divergente / Hipermetropia = convergente<br>
        - Astigmatismo = cilíndrica / Presbiopia = multifocal<br>
        - Olho humano = câmera fotográfica!
      </div>
      <button class="botao" style="background:#8e44ad;color:white" onclick="rpgStart()">🔄 Jogar de novo</button>
    </div>
  `;
  document.getElementById('rpg-cargo').textContent = "MESTRE 🔬";
}
