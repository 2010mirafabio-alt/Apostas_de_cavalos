const { adicionarAposta, sorteio } = require("./apostas");

function menu(rl) {
  console.log("\n=== MENU ===");
  console.log("1 - Apostar");
  console.log("2 - Sortear");
  console.log("0 - Sair");

  rl.question("Escolha: ", (op) => {
    switch (op) {
      case "1":
        adicionarAposta(rl, () => menu(rl));
        break;
      case "2":
        sorteio(() => menu(rl));
        break;
      case "0":
        console.log("👋 Adeus!");
        rl.close();
        break;
      default:
        console.log("❌ Opção inválida!");
        menu(rl);
    }
  });
}

module.exports = menu;