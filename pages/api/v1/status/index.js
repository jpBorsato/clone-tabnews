function status(request, response) {
  response.status(200).json({ chave: "valor" });
  // response.status(200).send("valor");
}

export default status;
