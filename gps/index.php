<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>采集系统</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/demo.css">
<style>
	a,input,button{ outline:none; }
</style>
</head>
<body>
<div class="demo" style="padding: 20px 0;">
	<div class="container">
		<div class="row">
			<div class="col-md-offset-3 col-md-6">
				<form class="form-horizontal" method="post" action="log.php">
					<span class="heading">用户登录</span>
					<div class="form-group">
						<input type="text" class="form-control" id="username" placeholder="请输入用户名" name="username">
						<i class="fa fa-user"></i>
					</div>
					<div class="form-group help">
						<input type="password" class="form-control" id="password" placeholder="请输入密码" name="password">
						<i class="fa fa-lock"></i>
						<a href="#" class="fa fa-question-circle"></a>
					</div>
					<div class="form-group">
						<button type="submit" class="btn" style="width:100%;">登录</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</body>
</html>
<script type="text/javascript">
document.getElementsByTagName('form')[0].onsubmit = function(){
	if( "" == document.getElementById('username').value ){
		document.getElementById('username').placeholder = "用户名不能为空";
		return false;
	}
	if( "" == document.getElementById('password').value ){
		document.getElementById('password').placeholder = "密码不能为空";
		return false;
	}
};
</script>
