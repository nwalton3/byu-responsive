<?php

 $pageName = "frontpage";
 include('_header.php');
 
?>
      <div class="flex-container">
  			<div id="slider" class="flexslider">
				  <?php
  				  if($w > 300) {
  				    include('inc/feature.php');
  				  } else { ?>
  				    <ul id="slides" class="slides">
    				  <?php include('inc/feature-mobile.php'); ?>
  				    </ul>
    				  <a class="more" href="feature.php">More featured stories</a>
    			<?php	} ?>
  				
  			</div>
      </div>
			
		  <?php include ('inc/calendar.php'); ?>

		  <?php include('inc/news.php'); ?>

<?php include('_footer.php'); ?>