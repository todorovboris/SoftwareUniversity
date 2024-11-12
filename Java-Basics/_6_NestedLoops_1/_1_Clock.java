package _6_NestedLoops_1;

public class _1_Clock {
    public static void main(String[] args) {

        for (int hours = 0; hours <= 23 ; hours++) {
            for (int minutes = 0; minutes <= 59 ; minutes++) {


                if (hours < 10){
                    if (minutes < 10){
                        System.out.println("0" + hours + ":0" + minutes);
                    } else {
                        System.out.println("0" + hours + ":" + minutes);
                    }
                } else {
                    if (minutes < 10) {
                        System.out.println(hours + ":0" + minutes);
                    } else {
                        System.out.println(hours + ":" + minutes);
                    }
                }
            }
        }


    }
}
