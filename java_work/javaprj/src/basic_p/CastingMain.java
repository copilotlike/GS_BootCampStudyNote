package basic_p;

public class CastingMain {

    public static void main(String[] args) {
	// TODO 자동 생성된 메소드 스텁
	byte bb = 123;
	int a = bb; //자동형 변화(upcasting, 묵시적 형변환)
	long lo = a;
	
	System.out.println(bb);
	System.out.println(a);
	System.out.println(lo);
	lo = 9223372036854775807L;
	System.out.println(lo);
	
	Float ff = (float) bb;
	System.out.println(ff);
	ff = (float) a;
	System.out.println(ff);
	ff = (float) lo;
	System.out.println(ff);
	
	char ch = 'c';
	System.out.println(ch);
	a = ch;
	System.out.println(a);
	
	
	
	System.out.println("강제 형 변환 (downcasting, 명시적 형변환)");
	a = 100;
	//bb= a;
	bb= (byte)a;
	System.out.println(bb);
	a = 254; //11111110
	bb = (byte)a; 
/**	byte 값일 때 앞자리 음수가 되면서 2의 보수 값을 구하게됨.
*	1.비트를 반전: 00000001
*	2.1을 더함: 00000010 (즉, 2)
*/
	System.out.println("a임"+a);
	System.out.println("bb인데 byte로 형변환 당함 : "+bb);
	
	double dd = 123.456;
	a = (int)dd;
	System.out.println(dd);
	System.out.println(a);
	a = 100;
	ch = (char)a;
	System.out.println(a);
	System.out.println(ch);
	
//	boolean bo =true;
//	a = (int)bo; boolean 형 변환 불가임.
//	a=1;
//	bo=(boolean)a  Cannot cast from int to boolean
//	
//	클래스 이름 ExmaMain
//	번호, 성명, 국어, 영어, 수학, 총점, 평균(소수점 2자리)을  선언하고 출력하세요.
//	번호, 성명, 국어 ,영어 , 수학 정보 입력 후 처리
//	
//	출력형태 
//	반 :2;
//	성명 : 홍길동;
//	영어 : 89;
//	수학 : 78;
//	국어 : 67
//	총점 : ?
//	평균 : ?
//	
    }

}