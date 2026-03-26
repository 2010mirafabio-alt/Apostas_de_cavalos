const { lerApostas, guardarApostas } = require("./ficheiro");

function adicionarAposta(rl, menu) {
  rl.question("Nome do jogador: ", (nome) => {
    nome = nome.trim();

    if (!nome) {
      console.log("❌ Nome inválido!");
      return menu();
    }

    let apostas = lerApostas();

    if (apostas.some(a => a.nome.toLowerCase() === nome.toLowerCase())) {
      console.log("❌ Este jogador já apostou!");
      return menu();
    }

    function perguntarCavalo() {
      rl.question("Escolha um cavalo (1 a 5): ", (cavalo) => {
        cavalo = parseInt(cavalo);

        if (isNaN(cavalo) || cavalo < 1 || cavalo > 5) {
          console.log("❌ Entrada inválida!");
          return perguntarCavalo();
        }

        apostas.unshift({
          nome,
          cavalo,
          data: new Date().toLocaleString()
        });

        guardarApostas(apostas);
        console.log("✅ Aposta registada!");
        menu();
      });
    }

    perguntarCavalo();
  });
}

function sorteio(menu) {
  let apostas = lerApostas();

  if (apostas.length === 0) {
    console.log("⚠️ Nenhuma aposta encontrada!");
    return menu();
  }

  console.log("\n📜 Histórico:");
  apostas.forEach(a =>
    console.log(`- ${a.nome} → Cavalo ${a.cavalo} (${a.data})`)
  );

  const vencedor = Math.floor(Math.random() * 5) + 1;
  console.log(`\n🏆 Cavalo vencedor: ${vencedor}`);

  let vencedores = apostas.filter(a => a.cavalo === vencedor);

  if (vencedores.length === 0) {
    console.log("😢 Ninguém ganhou!");
  } else {
    console.log("🎉 Vencedores:");
    vencedores.forEach(v => console.log(`- ${v.nome}`));
  }

  menu();
}

module.exports = {
  adicionarAposta,
  sorteio
};