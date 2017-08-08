<?php
// https://mattstauffer.co/blog/sublime-text-3-for-php-developers
$ini_array  = parse_ini_file('misc.ini', true);
$skin = $ini_array['application']['skin'];;
$title = $ini_array['application']['title'];
$source_path = $ini_array['application']['source_path'];
$smart_ver = $ini_array['application']['smartclient_version'];
$client_path = $ini_array['application']['client_path'];
$server_path = $ini_array['application']['server_path'];
$shared_path = $ini_array['application']['shared_path'];
echo "<html>
<head>
<script>var isc = null;</script>
<script>var serverPath = '$server_path';</script>
<script>var isomorphicDir = '{$source_path}{$smart_ver}/smartclientRuntime/isomorphic/';</script>
<script src='{$source_path}{$smart_ver}/smartclientRuntime/isomorphic/system/modules/ISC_Core.js'></script>
<script src='{$source_path}{$smart_ver}/smartclientRuntime/isomorphic/system/modules/ISC_Foundation.js'></script>
<script src='{$source_path}{$smart_ver}/smartclientRuntime/isomorphic/system/modules/ISC_Containers.js'></script>
<script src='{$source_path}{$smart_ver}/smartclientRuntime/isomorphic/system/modules/ISC_Grids.js'></script>
<script src='{$source_path}{$smart_ver}/smartclientRuntime/isomorphic/system/modules/ISC_Forms.js'></script>
<script src='{$source_path}{$smart_ver}/smartclientRuntime/isomorphic/system/modules/ISC_DataBinding.js'></script>
<script src='{$source_path}{$smart_ver}/smartclientRuntime/isomorphic/skins/{$skin}/load_skin.js'></script>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
<title>$title</title>
</head>
<body>
<script>
";
// Shared files.
//
$classes = array();
$classes[] = "ClassDefaults.js";
$classes[] = "library.js";
$classes[] = "Shared.js";
$classes[] = "ShowInfo.js";
foreach($classes as $class) {
	if(file_exists($shared_path . $class)){
		echo "// $shared_path$class\n";
		$content .= file_get_contents($shared_path . $class);
	}
}
echo $content;
// Application files.
$classes = array();
$classes[] = "Desktop.js";
$classes[] = "Navigation.js";
$classes[] = "ContextMenu.js";
$classes[] = "Items.js";
$classes[] = "UserStories.js";
$content = '';
foreach($classes as $class) {
	if(file_exists($client_path . $class)){
		$content .= file_get_contents($client_path . $class);
	}
}
echo $content;
$cmdret = '';
exec("git status --short --branch", $cmdret);
$str='';
foreach ($cmdret as $key) {
	$str .= $key . '<br/>';
}
echo 'isc.Desktop.create({gitInfo: "'. $str .'"});
</script>';
echo '
</body>
</html>';
?>
