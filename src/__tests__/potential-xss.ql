/**
 * @name Potential XSS in JavaScript
 * @description Detects potential Cross-Site Scripting (XSS) vulnerabilities in JavaScript code.
 * @kind path-problem
 * @problem.severity error
 */

import javascript

class PotentialXSS extends Issue {
  construct(node: Node, message: string) {
    this.node = node;
    this.message = message;
  }

  // Define a node property for the issue
  node: Node;

  // Define a message property for the issue
  message: string;
}

// Find potential XSS sources
from SourceNode source, DataFlow::PathNode target
where
  source.asExpr().isCall() and
  source.asExpr().getType().toString() = "string" and
  target = source.asExpr().getArgument(0).getAParameter() and
  target.asExpr().getType().toString() = "string"
select new PotentialXSS(target, "Potential XSS vulnerability")

// Find potential XSS sinks
from DataFlow::PathNode source, SinkNode sink
where
  sink.asExpr().isCall() and
  sink.asExpr().getName() = "innerHTML" and
  source = sink.asExpr().getArgument(0) and
  source.asExpr().getType().toString() = "string"
select new PotentialXSS(source, "Potential XSS vulnerability")
