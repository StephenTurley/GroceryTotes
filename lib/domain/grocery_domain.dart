library domain;

class GroceryList {

  final List<GroceryItem> items;

  GroceryList() : items = new List();


  void add(GroceryItem item){
    items.add(item);
  }

  GroceryItem get(num index){
    return items[index];
  }
}

class GroceryItem {
  String name;
}