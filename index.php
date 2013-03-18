<?
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////Includ's
require_once("db.php");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////Objects

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////Globals variables

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Ajax Test</title>
<link rel="stylesheet" href="css/style.css"  type="text/css" charset="utf-8" >
<script src="js/jquery-1.8.2.min.js" type="text/javascript" language="javascript"></script>
<script src="js/script.js" type="text/javascript" language="javascript"></script>

</head>

<body>

	<form action="" onSubmit="return false;" method="" enctype="multipart/form-data" name="multiplication-form">
    
        <input name="factor-one" type="text" size="15" value="Input factors"
        				onkeyUp="validate();"
                        onblur="if(this.value=='') this.value='Input factors';"
                        onfocus="if(this.value=='Input factors') this.value='';"
                        />
        
        <label for="factor-two"><strong>&times;</strong></label>
        <input name="factor-two" type="text" size="15" value="Input factors"
        				onkeyUp="validate();"
                        onblur="if(this.value=='') this.value='Input factors';"
                        onfocus="if(this.value=='Input factors') this.value='';"
        				>
        
        <input name="equal-button" type="button" value="Equal">
        <span id="equal"></span>
        
        <input name="random" type="button" value="Random" onClick="">
        <input name="clean" type="reset" value="Clean" onClick="$('div.wrap').text('');">
    </form>
    
    <br>
    
    <div class="wrap"></div>
	<div id="y"></div>
</body>
</html>
