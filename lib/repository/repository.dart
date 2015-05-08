library repository;

import 'package:grocery_totes/domain/grocery_domain.dart';

class GroceryListRepository implements Repository {
  GroceryList getGroceryList() => throw new UnimplementedError();
  GroceryList saveItem(GroceryItem item) => throw new UnimplementedError();
}

class Repository {
  Repository(){}
}

