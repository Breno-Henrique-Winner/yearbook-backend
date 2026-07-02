// Middleware de log — registra cada requisição no terminal
export default function logger(req, res, next) {
  const inicio = Date.now();                   // marca o início da requisição
  const agora = new Date().toISOString();      // timestamp
  const metodo = req.method;                   // GET, POST, PUT, DELETE
  const url = req.originalUrl;                 // URL da requisição

  res.on("finish", () => {
    const duracao = Date.now() - inicio;
    const status = res.statusCode;

    console.log(
      `[${agora}] ${metodo} ${url} - ${status} (${duracao}ms)`
    );
  });

  next();
}