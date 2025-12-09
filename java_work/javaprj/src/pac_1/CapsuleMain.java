package pac_1;

class CapAAA{
	int abc;
	private int efg;
	private boolean hij;
	/**
	 * @return efg
	 */
	public int getEfg() {
		return efg;
	}
	/**
	 * @param efg 설정할 efg
	 */
	public void setEfg(int efg) {
		this.efg = efg;
	}
	/**
	 * @return hij
	 */
	public boolean isHij() {
		return hij;
	}
	/**
	 * @param hij 설정할 hij
	 */
	public void setHij(boolean hij) {
		this.hij = hij;
	}
	
//	public int getEfg() {
//		return efg;
//	}
	
//	public void setEfg() {
//		this.efg =efg;
//	}

//	public boolean isHij() {
//		return hij;
//	}

	
}

public class CapsuleMain {
	public static void main(String[] args) {
		CapAAA ca = new CapAAA();
		System.out.println(ca.abc);
//		System.out.println(ca.efg); //private 값이라서 값이 invisible;
//		System.out.println(ca.hij); //private 값이라서 값이 invisible;
		ca.setEfg(123); //The method setEfg() in the type CapAAA is not applicable for the arguments (int)
		System.out.println(ca.getEfg());
		ca.setHij(true);
		System.out.println(ca.isHij());
		
	}

}

// 외부에서 패키지를 생성하고 사용하세요.
//외국(대만제) 핸드폰 부품;
//-카메라, 마이크, 배터리
//국내(삼성) 핸드폰 생성
//만드는 회사 - 삼성;
//핸드폰 -갤럭시
//사진찍기, 전화하기, 타자기
