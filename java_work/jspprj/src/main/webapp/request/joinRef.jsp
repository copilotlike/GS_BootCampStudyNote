<%@page import="java.util.Map"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <% String [] hoArr = request.getParameterValues("hobby"); %>
    <% Map<String, String> gender = Map.of(
    		"m","남자",
    		"f","여자");
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>joinIndexReg</title>
</head>
<body>
	<h1>joinIndexReg</h1>
	<form action="">
		<table>
			<tr>
				<td>id</td>
				<td><%= request.getParameter("pid") %></td>
				
			</tr>
			<tr>
				<td>이름</td>
				<td><%= request.getParameter("name") %></td>
			</tr>
			<tr>
				<td>이메일</td>
				<td><%= request.getParameter("emal1") %>
					@
					<%= request.getParameter("email2") %>
				</td>
			</tr>
			<tr>
				<td>성별</td>
				<td><%= request.getParameter("gender") %></td>
				
			</tr>
			<tr>
				<td>취미</td>
				<%-- <% String [] hoArr = request.getParameterValues("hobby"); %>
 --%>				<td><%= request.getParameter("hobby") %></td>
			</tr>
			
		</table>
	</form>
</body>
</html>