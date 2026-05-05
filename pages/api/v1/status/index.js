function status(request, response) {
  response
    .status(200)
    .json({ chave: "Eu sou acima da média segundo o Michel Teló" });
}

export default status;
