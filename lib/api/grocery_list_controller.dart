library api;

import 'package:grocery_totes/repository/repository.dart';
import 'package:grocery_totes/domain/grocery_domain.dart';
import 'package:rpc/rpc.dart';

@ApiClass(version: 'v1', name: 'grocerylist')
class GroceryListController{

  final GroceryListRepository _repository;

  GroceryListController(this._repository);

  @ApiMethod(method: 'GET', path: 'items')
  GroceryList getGroceryList() {
    return _repository.getGroceryList();
  }

  @ApiMethod(method: 'POST', path: 'item')
  GroceryList saveItem(GroceryItem item) {
    return _repository.saveItem(item);
  }
}