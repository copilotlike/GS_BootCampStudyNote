package Chapter5;

public class ch5_8 {
  public static void main(String[] args) {
    int[][] array = { 
      { 95, 86 }, 
      { 83, 92, 96 },
      { 78, 83, 93, 87, 88 }
    };

    int sum = 0;
    float average = 0.0f;
    for (int i = 0; i < array.length; i++) {
      for (int j = 0; j < array[i].length; j++) {
        sum += array[i][j];
      }
    }
    int count = 0;
    for (int i = 0; i < array.length; i++) {
      count += array[i].length;
    }

    average = (float) sum / count;
    System.out.println("sum = " + sum);
    System.out.println("average = " + average);
  }
}
