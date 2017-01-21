/* Hidden stub code will pass a root argument to the function below. Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.

The Node class is defined as follows:
class Node {
int data;
Node left;
Node right;
}
*/
boolean checkBST(Node root) {
  if (root == null) {
    return true;
  }
  return checkWithLimitsBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

boolean checkWithLimitsBST(Node node, int lowest, int highest) {
  if (node.data <= lowest || node.data >= highest) {
    return false;
  }

  boolean leftValid = (node.left == null) || checkWithLimitsBST(node.left, lowest, node.data);
  boolean rightValid = (node.right == null) || checkWithLimitsBST(node.right, node.data, highest);
  return leftValid && rightValid;
}
