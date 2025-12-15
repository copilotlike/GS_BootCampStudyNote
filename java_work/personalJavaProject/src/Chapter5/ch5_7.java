package Chapter5;

import java.util.Arrays;

public class ch5_7 {
  public static void main(String[] args) {
    int [] array = { 1, 5, 3, 8, 2};
    
    // 전체 배열 크기 만큼 반복
    for (int i = 0; i < array.length-1; i++) {
      // 남은 요소들을 반복
      for (int j = 0; j < array.length-1-i; j++) {
        // 현재 요소가 다음 요소보다 크면
        if (array[j] > array[j+1]) {
          // 현재 요소와 다음 요소를 교환
          int temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
    System.out.println("최대값은 : " + array[4]);
    System.out.println("최소값은 : " + array[0]);

    int [] sortArray = new int [array.length];
    System.arraycopy(array, 0, sortArray, 0, array.length);

    System.out.println(Arrays.toString(sortArray));

    int max= 0;
    for (int i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    System.out.println("간단최대값은 : " + max);    
  }
}
