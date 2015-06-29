
		<!--слайдер контент-->
		<section class="row">
			<h2>Mail Us</h2>
			<form role="form" action="formdata.php" method="POST">
		        <fieldset>
		          <legend>...If you want to <b>order</b> or ask a question  </legend>

		          <div class="form-group"><!--Name-->
		          	<label for="name" class="col-sm-2">Name</label>
			        <div class="col-sm-10">
			          	<input type="text" name="name" class="form-control">
			        </div>
		          </div><!--Name-->

		          <div class="form-group"><!--Phone-->
		          	<label for="name" class="col-sm-2">phone number</label>
			        <div class="col-sm-10">
			          	<input type="text" name="number" class="form-control">
			        </div>
		          </div><!--Phone-->

				 <div class="form-group">
		          	<label class="control-label">your size</label>
		          	<div class="radio">
			            <label>
			              <input type="radio" name="roomtype" value="XS">
			              XS</label>
			        </div>      

		            <div class="radio">
		            	<label>
		            	  <input type="radio" name="roomtype" value="S">
		            	  S</label>
		            </div>

		            <div class="radio">
		            	<label>
		            	  <input type="radio" name="roomtype" value="M">
		            	  M</label>
		            </div>

		            <div class="radio">
		            	<label>
		            	  <input type="radio" name="size" value="L">
		            	  L</label>
		            </div>

					<div class="radio">
		            	<label>
		            	  <input type="radio" name="size" value="XL">
		            	  XL</label>
		            </div>
					
					<div class="radio">
		            	<label>
		            	  <input type="radio" name="size" value="XXL">
		            	  XXL</label>
		            </div>


		           </div>
		           <div class="form-group">
			          <label class="control-label">your color</label>
			          <div class="radio">
			          	<label>
			          	  <input type="radio" name="color" value="White">
			          	  White</label>
			          </div>
			          
			          <div class="radio">
			          	<label>
			          	  <input type="radio" name="color" value="Grey">
			          	  Grey</label>
			          </div>

			          <div class="radio">
			          	<label>
			          	  <input type="radio" name="color" value="Black">
			          	  Black</label>
			          </div>
			       </div>
			       <div class="form-group">
			          <label for="continent" class="control-label">your drawing:</label>
			          <select name="drawing" size="1" class="form-control">
			            <option selected>Select one...</option>
			            <option value="Deadly Forest">Deadly Forest</option>
			            <option value="Jet Cat">Jet Cat</option>
			            <option value="Mask">Mask</option>
			            <option value="Awe">Awe</option>
			            <option value="Crows">Crows</option>
			            <option value="Cyclo-Eagle">Cyclo-Eagle</option>
			            <option value="match spirit">match spirit</option>
			            <option value="Piggy">Piggy</option>
			            <option value="Red Siluet">Red Siluet</option>
			            <option value="Shark">Shark</option>
			            <option value="Weird Love">Weird Love</option>
			            <option value="Crows">Crows</option>
			            <option value="Whale">Whale</option>
			           
			          </select>
		      		</div>
		      		<div class="form-group">
			          <label for="comments" class="control-label">Message:</label>
			          <textarea name="message" class="form-control" rows="3" data-toggle="tooltip" title="We welcome your feedback" data-placement="bottom"></textarea>
			        </div>
			       

			        <div class="form-group" id="email">
			          <label for="email" class="col-sm-2">your email</label>
			          <div class="col-sm-10">
			            <input type="text" name="email" class="form-control">
			           </div> 
			        </div>
			        <div class="form-group">
		          		<button type="submit" class="btn btn-primary">Submit</button>
					</div>
		        </fieldset>
		    </form>

		
		</section><!--section-->
		<!--слайдер контент-->

