import 'package:grocery_totes/domain/grocery_domain.dart';
import 'package:test/test.dart';
import 'package:mockito/mockito.dart';


main(){

  GroceryList undertest;

  setUp((){
    undertest = new GroceryList();
  });

  test('Should add a GroceryItem', (){
    undertest.add(item);

    expect(undertest.get(0), same(item));
  });
}

class MockItem extends Mock implements GroceryItem {}

var item = new MockItem();