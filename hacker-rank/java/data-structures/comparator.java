// Write your Checker class here

class Checker implements Comparator {

    public int compare(Object o1, Object o2) {
        return this.compare((Player) o1, (Player) o2);
    }

    public int compare(Player p1, Player p2) {
        if (p1.score == p2.score) {
            return p1.name.compareTo(p2.name);
        }
        return p2.score - p1.score;
    }
}
