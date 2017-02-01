/*
   class Node
       int data;
       Node left;
       Node right;
*/
void top_view(Node root)
{
    String rootStr = Integer.toString(root.data);
    String leftStr = collectVisible(root, 'l');
    String rightStr = collectVisible(root, 'r');
    String result = leftStr + " " + rootStr + " " + rightStr;
    System.out.println(result.trim());
}

String collectVisible(Node node, char side)
{
    if (side == 'l' && node.left != null) {
        return collectVisible(node.left, side) + " " + Integer.toString(node.left.data);
    } else if (side == 'r' && node.right != null) {
        return Integer.toString(node.right.data) + " " + collectVisible(node.right, side);
    }
    return "";
}
