package net_p;

import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class TCPServerMain {

	public static void main(String[] args) {
		// TODO 자동 생성된 메소드 스텁
		ServerSocket server = null;
		
		try {
			//1. 서버 생성
			server = new ServerSocket(7777);
			
			while (true) {
				
			System.out.println("클라이언트 접속대기");
			
			//3. 클라이언트 접속;
			Socket client = server.accept();

			System.out.println(client.getInetAddress()+"접속");

			OutputStream os = client.getOutputStream();
			
			DataOutputStream dos = new DataOutputStream(os);

			dos.writeUTF("127이다.");

			// 7. stream닫기
			dos.close();
			os.close();
			}

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally {
			try {
				// 8.서버닫기
				server.close();
			} catch (IOException e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		}
		
	}

}
