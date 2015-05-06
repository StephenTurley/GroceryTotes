import 'package:grinder/grinder.dart';

main(args) => grind(args);

@Task('Test')
test() {
  new PubApp.local('test').run([]);
}
