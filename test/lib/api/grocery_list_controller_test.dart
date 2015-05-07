import 'package:grocery_totes/domain/grocery_list.dart';
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

}

class MockGroceryList extends Mock implements GroceryList {}
class MockGroceryListRepository extends Mock implements GroceryListRepository {}

var repository = new MockGroceryListRepository();
var groceryList = new MockGroceryList();



