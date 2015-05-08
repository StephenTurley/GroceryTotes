import 'package:grocery_totes/repository/repository.dart';
import 'package:grocery_totes/domain/grocery_domain.dart';
import 'package:test/test.dart';
import 'package:mockito/mockito.dart';

main() {
  test("Should return the grocery list", () {
    GroceryListRepository undertest = new GroceryListRepository();

    GroceryList result = undertest.getGroceryList();

    expect(result, isNotNull);
  });
}