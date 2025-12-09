package oops_p;

class Rectangle {
	public static String name []= {"사각형","원"};
	int recArea, recPerimeter;
	float circumference, circleArea;

	public Rectangle(int w, int h) {
		// TODO 자동 생성된 생성자 스텁
		this.recArea = w*h;
		this.recPerimeter = (w+h)*2;
	}
	void ppp () {
		System.out.println(name[0] +"넓이 :"+ recArea+"둘레 :"+ recPerimeter);
	}
}

class Triangle {
	int radius, diameter;
	double circumference, circleArea;
	
	public Triangle(int r, int d) {
		// TODO 자동 생성된 생성자 스텁
		this.circleArea = Math.PI *Math.pow(r, 2);
		this.circumference = Math.PI * d; 
	}
	
	void ppp() {
		System.out.println(Rectangle.name[1] + "넓이 :" +String.format("%.1f", circleArea) + "둘레"+ String.format("%.1f", circumference) );
	}
	
}

public class CapShapeMain {

	public static void main(String[] args) {
		// TODO 자동 생성된 메소드 스텁
		Rectangle r = new Rectangle(10, 10);
		Triangle t = new Triangle(5, 10);
		
		r.ppp();
		t.ppp();
		
		
		
	}

}
