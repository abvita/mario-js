
printPyramid(10);

function printPyramid(height) {

    var brick = "#";
    var space = " ";

    var brick_count = 2;

    var space_count = height - 2;

    var line = "";
    // TODO
    // print that pyramid!

    for (var i = 0; i < height; i++) {
      line = "";
      for (var k = 0; k <= space_count; k++) {
        line += space;
      }
      space_count -= 1;
      for (var j = 0; j < brick_count; j++) {
        line += brick;
      }
      brick_count += 1;
      console.log(line);
    }
}
