library repository;

import 'package:grocery_totes/domain/grocery_domain.dart';

class GroceryListRepository  {

  final GroceryList _list;

  GroceryListRepository({GroceryList list}) : _list = _initializeGroceryList(list);

  static GroceryList _initializeGroceryList(GroceryList list) {
    if(list == null) {
      return new GroceryList();
    }
    return list;
  }

  GroceryList getGroceryList() => _list;
  GroceryList saveItem(GroceryItem item){
    _list.add(item);

    return _list;
  }
}
