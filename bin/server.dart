import 'package:rpc/rpc.dart';
import 'package:grocery_totes/api/grocery_list_controller.dart';
import 'package:grocery_totes/repository/repository.dart';
import 'dart:io';

final ApiServer _apiServer = new ApiServer();

main() async {
  GroceryListRepository repository = new GroceryListRepository();

  _apiServer.addApi(new GroceryListController(repository));

  HttpServer httpServer = await HttpServer.bind(InternetAddress.ANY_IP_V4, 8080);
  httpServer.listen(_apiServer.httpRequestHandler);

  print('Server listening on http://${httpServer.address.host}:'
  '${httpServer.port}');
}

