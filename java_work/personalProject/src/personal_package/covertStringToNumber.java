package personal_package;

public class covertStringToNumber {
	public static void main(String[] args) {
		String str = "10";
		byte value = Byte.parseByte(str);

		String str1 = "100";
		short value1 = Short.parseShort(str1);

		String str2 = "100000";
		int value2 = Integer.parseInt(str2);
		
		String str3 = "1000000000";
		long value3 = Long.parseLong(str3);
		
		String str4 = "12.345";
		float value4 = Float.parseFloat(str4);
		
		String str5 = "12.345";
		double value5 = Double.parseDouble(str5);
		
		String str6 = "true";
		boolean value6 = Boolean.parseBoolean(str6);

		System.out.println("value :" + value);
		System.out.println("value1 :" + value1);
		System.out.println("value2 :" + value2);
		System.out.println("value3 :" + value3);
		System.out.println("value4 :" + value4);
		System.out.println("value5 :" + value5);
		System.out.println("value6 :" + value6);
	}

}
