class SLL {
    public void reverseList(ListNode head) {
        if (head == null) {
            System.out.println("list is empty");
        }
        ListNode current = head;
        ListNode next;
        ListNode prev = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
        return current;
    }
    public void addToList(int val, ListNode head) {
        ListNode newNode = new ListNode(val);
        if (head ==null) {
            head = newNode;
        }
        else {
            ListNode runner = head;
            while(runner.next != null) {
                runner = runner.next;

            }
            runner.next = newNode;
        }
    }
    public ListNode displayList(ListNode head) {
        if (head == null) {
            System.out.println("list is empty");
        }
        ListNode runner = head;
        int counter = 0;
        while(runner != null) {
            if (counter <1) {
                System.out.println("root" + runner);
                counter++;
                runner = runner.next;
            }
            else {
                System.out.println("Node:" + counter + ":" + runner.val);
                runner = runner.next;
                counter++;
            }
        }
        return runner;
    }
}
