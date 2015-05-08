import 'package:grocery_totes/repository/repository.dart';
import 'package:grocery_totes/domain/grocery_domain.dart';
import 'package:test/test.dart';
import 'package:mockito/mockito.dart';

main() {

  GroceryListRepository undertest;

  setUp((){
    undertest = new GroceryListRepository();
  });

  test("Should return the grocery list", () {
    GroceryList result = undertest.getGroceryList();

    expect(result, isNotNull);
  });

  test("Should add Item to list", () {
    undertest = new GroceryListRepository(list: groceryList);

    GroceryList result = undertest.saveItem(item);

    verify(result.add(item));
  });
}

class MockGroceryList extends Mock implements GroceryList {}
class MockItem extends Mock implements GroceryItem {}

var groceryList = new MockGroceryList();
var item = new MockItem();