<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>MovieDB</title>
	<script src="js/jquery.js"></script>
	<link type="text/css" rel="stylesheet" href="css/stylesheet.css" />
</head>
<body>
	<!--Header starts here-->
	<nav class="navbar navbar-default top-nav" role="navigation">
	    <div class="container container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		    </button>
		    <a class="navbar-brand" href="#"><font color="#CCCCCC">MovieDB</font></a>
		</div>
		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		    <div class="navbar-form navbar-left" role="search">
			<div class="form-group">
			    <input type="text" class="form-control" id="search" size="50" placeholder="Search for a movie">
			</div>
			<button type="submit" id="searchButton" class="btn btn-default" >Search</button>
		    </div>
		</div><!-- /.navbar-collapse -->
	    </div><!-- /.container-fluid -->
	</nav>
	<!--Header ends here-->
	<!--Content starts here-->
	<div class= "container" style="min-height:500px;">
		<div class ="row">
			<div class="col-md-12 col-md-offset-1" id="results"></div>
			<br/>
		</div>
		<div class="row col-md-12 col-md-offset-1" id="recommendations"></div>	
	</div>
	
	<!--Content ends here-->
	<!--Footer starts here-->
	<br/>
	<br/>
	<div class="panel panel-default footer">
	    <div class="panel-body">
		<br/>
		<center>
		    <br/><br/>
		    2016 &copy; MovieDB
		</center>
	    </div>
	</div>
	<script src="js/bootstrap.js"></script>
	<script src="js/loadMovies.js">	</script>
</body>
</html>