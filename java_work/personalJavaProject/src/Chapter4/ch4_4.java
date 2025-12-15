package Chapter4;

public class ch4_4 {
  public static void main(String[] args) {
    int sum =0;
    
    while (sum!=5) {
      int num1 = (int) (Math.random()*4+1);
      int num2 = (int) (Math.random()*4+1);
      sum = (num1+num2);

      System.out.println("num1: "+num1);
      System.out.println("num2: "+num2);
      System.out.println("sum: "+sum);
    }
  }
}
