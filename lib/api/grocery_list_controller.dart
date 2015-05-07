library api;

import 'package:grocery_totes/repository/repository.dart';
import 'package:grocery_totes/domain/grocery_list.dart';

class GroceryListController{

  final GroceryListRepository _repository;

  GroceryListController(this._repository);
  
  GroceryList getGroceryList() {
    return _repository.getGroceryList();
  }
}