library domain;

class GroceryList {

  final List<GroceryItem> _items;

  GroceryList() : _items = new List();


  void add(GroceryItem item){
    _items.add(item);
  }

  GroceryItem get(num index){
    return _items[index];
  }
}

class GroceryItem {
  GroceryItem();
}