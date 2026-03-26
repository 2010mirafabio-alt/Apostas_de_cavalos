const fs = require("fs");

const ficheiro = "corrida.json";

function inicializarFicheiro() {
  if (!fs.existsSync(ficheiro)) {
    fs.writeFileSync(ficheiro, JSON.stringify([], null, 2));
    console.log("📁 Ficheiro criado!");
  } else {
    try {
      const data = fs.readFileSync(ficheiro, "utf8");
      if (!data) throw new Error();
      JSON.parse(data);
    } catch {
      console.log("⚠️ Ficheiro inválido. A reiniciar...");
      fs.writeFileSync(ficheiro, JSON.stringify([], null, 2));
    }
  }
}

function lerApostas() {
  try {
    const data = fs.readFileSync(ficheiro, "utf8");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function guardarApostas(apostas) {
  fs.writeFileSync(ficheiro, JSON.stringify(apostas, null, 2));
}

module.exports = {
  inicializarFicheiro,
  lerApostas,
  guardarApostas
};