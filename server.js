const loler = "HALLO";
const sup = "SUPEREM";

const wrongServerPooling = () => {
  return getServerPooling() - getServerPooling();
};

const getServerPooling = () => {
  const serverPooling = 1000;
  return serverPooling;
};

class Server {
  pool = getServerPooling();
}

const server = () => {
  return new Server();
};

const HELLO = "WORLD";
server();
