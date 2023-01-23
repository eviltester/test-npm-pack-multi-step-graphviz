var GraphvizSteps = require('multi-step-graphviz');

var stepDot=`
digraph G {
    a -> b
    # STEP add c
    a -> c
    c -> b
    # STEP add d
    a -> d
    d -> b
    # END
    b -> end
}`;

var stepParser = new GraphvizSteps.GraphvizStepParser();
stepParser.parse(stepDot);
var dots = stepParser.dotVersions;

console.log(dots.length);
console.log(dots[0]);
console.log(dots[1]);
console.log(dots[2]);