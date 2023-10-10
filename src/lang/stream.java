///usr/bin/env jbang "$0" "$@" ; exit $?

import java.util.ArrayList;
import java.util.List;
import java.util.OptionalInt;
import java.util.stream.IntStream;

public class stream {

  public static void main(String... args) {
    List<Integer> history = new ArrayList<>();
    OptionalInt result = IntStream.range(0, 10)
        .map(x -> {
          history.add(x);
          return x;
        })
        .filter(x -> x == 1)
        .findFirst();
    System.out.println(result.getAsInt());
    System.out.println(history);
  }
}
