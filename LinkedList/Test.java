public class Test {
    public static void main(String[] args) {
        SLL sll = new SLL();
        ListNode head= new ListNode();
        sll.addToList(19, head );
        sll.addToList(5, head);
        sll.addToList(25, head);
        sll.addToList(35, head);
        sll.addToList(23, head);
        sll.addToList(47, head);
        sll.addToList(99, head);

        sll.reverseList(head);
        sll.displayList(head);

    }
}
