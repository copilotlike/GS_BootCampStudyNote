<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>delete1</title>
</head>
<body>
<% 
	session.removeAttribute("ss_marriage");
	session.removeAttribute("ss_age");
%>
</body>
</html>