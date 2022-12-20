<!DOCTYPE html>
<html>
<head>
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="stylee.css">
</head>
<body>
     <form action="login.php" method="post">
	 <a href="index.html"><img class="toggle" src="https://cdn-images-1.medium.com/max/280/1*sW40iPA71NdEdbfp2zDVbA@2x.png"></a>
     	<h2>LOGIN</h2>
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<label>username</label>
     	<input type="text" name="uname" placeholder="username"><br>

     	<label>password</label>
     	<input type="password" name="password" placeholder="password"><br>

     	<button type="submit">Login</button>
          <a href="signup.php" class="ca">Create an account</a>
     </form>
</body>
</html>