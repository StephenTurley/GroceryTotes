import 'package:grocery_totes/domain/grocery_domain.dart';
import 'package:grocery_totes/api/grocery_list_controller.dart';
import 'package:grocery_totes/repository/repository.dart';
import 'package:test/test.dart';
import 'package:mockito/mockito.dart';

main() {

  test("Should return grocery list when getGroceryList is called", () {
    GroceryListController undertest = new GroceryListController(repository);
    when(repository.getGroceryList()).thenReturn(groceryList);

    var result = undertest.getGroceryList();

    expect(result, same(groceryList));
  });

  test("Should save item to grocery list when addItem is called", () {
    GroceryListController undertest = new GroceryListController(repository);

    undertest.saveItem(item);

    verify(repository.saveItem(item));
  });

}

class MockGroceryList extends Mock implements GroceryList {}
class MockGroceryListRepository extends Mock implements GroceryListRepository {}
class MockItem extends Mock implements GroceryItem {}

var repository = new MockGroceryListRepository();
var groceryList = new MockGroceryList();
var item = new MockItem();



