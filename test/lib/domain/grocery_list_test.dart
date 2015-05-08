import 'package:grocery_totes/domain/grocery_domain.dart';
import 'package:test/test.dart';


main(){

  test('Should be able to contruct a GroceryList', () {
    var underTest = new GroceryList();

    expect(underTest, new isInstanceOf<GroceryList>() );
  });

}