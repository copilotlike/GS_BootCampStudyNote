package basic_p;

public class VarMain {

    public static void main(String[] args) {
	var a1 = 10; // 가변자료형 java16부터
//		let a2 = 20; 이거 안됨.
//		a3 =30; 이것도 안됨.
//		const int a4 = 40; 이것도 안됨
	final int a5 = 50; // 상수화 js의 const와 같음.
	System.out.println(a1);
	System.out.println(a5);

// 다만 전부는 다 쓸수 없고 var와 const(=final) 정도로만 사용할 수 있는 듯.

//		a1 = 123.456; // a1이 선언된 자료형이 int라서 실수xx
	a1 = 123;
//		a5 = 60; 수정못함
	System.out.println(a1);

	byte bb = 123;
//		System.out.println(``); backtick x
	System.out.println("bb : " + bb);
	// bb =128; byte : -128~127;

	short sh = 128;
	System.out.println("sh : " + sh);
	sh = 32767;
	System.out.println("sh : " + sh);
//		sh = 32767;  short : -32768 ~ 32768

	int ii = 32768;
	System.out.println("ii : " + ii);
	ii = 2147483647;
	System.out.println("ii : " + ii);
//		ii = 2147483648; 범위를 넘음 
//		System.out.println("ii : " + ii);
	System.out.println(2147483648L);
	// 정수형 기본 자료형 : int -> int의 범주를 넘어갈 경우 long으로 처리 정수L
	// 명시적 형변환으로 보임.

	long lo = 2147483648L;
	System.out.println(lo);
	lo = 9223372036854775807L;
	System.out.println(lo);
//		lo = 9223372036854775808L;
	// 넘는 숫자는 넘는 숫자는 클래스로 만들어야 함.

//		li = 123.456; int : 실수 대입불가
//		
//		float ff = 123.456;
//		// 위 코드 미스매치뜨는 이유는 기본적으로 실수는 double.
//		double ff = 123.456; 원래 형에 맞도록 바꾸던가,
//		float ff = (float) 123.456; 이것처럼 casting 해야함.

	float ff = 123.456f;
	System.out.println(ff);
	ff = 678;
	System.out.println(ff);

	float dd = 123.456f;
	System.out.println(dd);
	dd = 678;
	System.out.println(dd);

	char ch = 'a';
	System.out.println(ch);
	// ch ='a'; 문자열
	// ch = '';
	// ch = 'ab';
	ch = '가';
	System.out.println(ch);

	boolean bo = true;
	System.out.println(bo);
	bo = false;
	System.out.println(bo);

	String tt = "아기상어";
	System.out.println(tt);
	String tt2 = new String("엄마상어");
	System.out.println(tt2);

//		커피숍을 구현해 주세요.
//		CoffeeMain.java
//		커피이름: ex) 아프리카노
//		포장유무: ex) true
//		크기: ex) L (S,M,L 중 택 1)
//		단가: ex) 2100;
//		수량: ex) 3;
//		금액: ex) 6300;
	CoffeeMain();
    }

    public static void CoffeeMain() {
//		String coffeeName = "아프리카노";
//		boolean packaging = true;
//		char size= 'L','M','S';
//		switch (size) {
//		case L : System.out.println("L"); break;
//		case M : System.out.println("M"); break;
////		case S : System.out.println("S"); break;
//		default : 
//		}
//		int price = 2100;
//		byte amount = 3;
//		int tot = 6300;
//		System.out.println(coffeeName);
//		System.out.println(packaging);
//		System.out.println(price);
//		System.out.println(amount);
//		System.out.println(tot);		
		
	}

}
