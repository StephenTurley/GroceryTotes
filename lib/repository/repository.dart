library repository;

import 'package:grocery_totes/domain/grocery_domain.dart';

class GroceryListRepository  {

  final GroceryList _list = new GroceryList();
  
  GroceryList getGroceryList() => _list;
  GroceryList saveItem(GroceryItem item) => throw new UnimplementedError();
}
