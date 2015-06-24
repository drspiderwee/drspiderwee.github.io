<?php
$arr = array('contact' => 'Oldridge: Contact', 'aboutus' => 'Oldridge: About Us',
 'catalog' => 'Oldridge: Catalog', 'blog' => 'Oldridge: Blog',);

$title = isset($arr[$_GET['view']]) ? $arr[$_GET['view']] : 'Oldridge: obscurity series';
?>




<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php echo $title; ?></title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="custom.css" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/fotorama.css" />

</head>
<body>
	
	<div class="container">
		<!--bg-->
		<!--bg-->

		<!--шапка-->
		<?php include 'header.php'; ?>
		<!--шапка-->

		<!--навигация-->
		<div class="row">
			<!--/NAV-->
			<?php include 'nav.php'; ?>
			<!--/NAV-->
		</div>
		<!--навигация-->
<div class="bord center-block">
	<br>
</div>
				<!--content-->
			
			<?php $view = empty($_GET['view']) ? 'start_page' : $_GET['view'];
			include $view.'.php'; ?>
			
				<!--content-->	

		<!--footer-->
		<?php include 'footer.php'; ?>
		<!--footer-->
		<asside>
			<div class="row">
				<div class="col-sm-12 center-block">
					<br>
					<b> Oldridge	</b>
					<p>obscurity series</p>
					<p>&copy;2015</p>
				</div>
			</div>
		</asside>

	</div><!-- container -->
<!--Modal-->
<?php include 'modal.php'; ?>
<!--Modal-->
	


	<!-- javascript -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/fotorama.js"></script>
	<script src="js/my.js"></script>


</body>
</html>