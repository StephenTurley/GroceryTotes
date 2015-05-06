import 'package:redstone/server.dart' as server;

@server.Route('/')
helloWorld() => 'Hello, World!';

main() {
  server.setupConsoleLog();
  server.start();
}

