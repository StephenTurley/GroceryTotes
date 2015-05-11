import '../packages/grinder/grinder.dart';

main(args) => grind(args);



@Task('Test')
test() {
  new PubApp.local('test').run([]);
}

@Task('Run')
run() {
  new PubApp.local('server').run([]);
}
