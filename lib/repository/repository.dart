library repository;

import 'package:grocery_totes/domain/grocery_domain.dart';

class GroceryListRepository  {

  GroceryList _list;

  GroceryListRepository({GroceryList list}) : _list = list {
    if(_list == null) {
      _list = new GroceryList();
    }
  }

  GroceryList getGroceryList() => _list;
  GroceryList saveItem(GroceryItem item){
    _list.add(item);

    return _list;
  }
}
