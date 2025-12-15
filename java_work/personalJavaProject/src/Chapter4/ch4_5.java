package Chapter4;

public class ch4_5 {
  public static void main(String[] args) {
	  
    for (int x = 1; x < 15; x++) {
    		for (int y = 1; y <15; y++) {
    				if(4*x+5*y==60)	System.out.printf("(%d , %d) \n", x,y);
			}
    }

  }
}
