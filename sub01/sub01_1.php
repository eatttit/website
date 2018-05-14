<?php require_once ($_SERVER["DOCUMENT_ROOT"]. "/include/head_sub.php"); ?>
<body>
<div id="wrap">
	<div id="header_wrap">
<?php
	$current_gnb = 'gnb01';
	require_once ($_SERVER["DOCUMENT_ROOT"]. "/include/gnb.php");
?>
	</div><!-- // header_wrap -->

	<div id="container_wrap">
		<!-- <div id="visual"></div> -->
		<div id="container" class="clearfix">

<?php
	$current_lnb = 'lnb01';
	require_once ($_SERVER["DOCUMENT_ROOT"]. "/include/lnb_sub01.php");
?>

			<div id="content">
				<ul class="path clearfix">
					<li><a href="/index.php">HOME</a></li>
					<li>서브</li>
					<li><span>페이지</span></li>
				</ul>
				<p class="title_cont">페이지타이틀</p>
				<div id="inner_content">

					<p>서브 1 - 1</p>

				</div><!-- // inner_content -->

			</div><!-- // content -->
		</div><!-- // container -->
	</div><!-- // container_wrap -->

	<div id="footer_wrap">
<?php require_once ($_SERVER["DOCUMENT_ROOT"]. "/include/footer.php"); ?>
	</div><!-- // footer_wrap -->
</div><!-- // wrap -->
</body>
</html>
