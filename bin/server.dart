import 'package:rpc/rpc.dart';
import 'dart:io';


class Message {
  String message = "Hello Shoppers!";
  Message();
}

@ApiClass(version: 'v1')
class Hello {
  @ApiMethod(method: 'GET', path: 'hello')
  Message hello() {
    return new Message();
  }
}

final ApiServer _apiServer = new ApiServer();

main() async {
  _apiServer.addApi(new Hello());
  HttpServer httpServer = await HttpServer.bind(InternetAddress.ANY_IP_V4, 8080);
  httpServer.listen(_apiServer.httpRequestHandler);

  print('Server listening on http://${httpServer.address.host}:'
  '${httpServer.port}');
}

