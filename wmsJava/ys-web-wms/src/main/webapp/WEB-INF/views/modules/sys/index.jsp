<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
<title>仓库管理系统平台</title>
<script type="text/javascript">
if(window.top !== window.self){window.top.location = window.location;}
</script>
<link rel="shortcut icon" href="${pageContext.request.contextPath}/RES/images/bitbug_favicon.ico" />
<!-- BEGIN GLOBAL MANDATORY STYLES -->
<!-- link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css"/ -->
<link href="${ctxStatic}/bootstrap/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
<link href="${ctxStatic}/bootstrap/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
<link href="${ctxStatic}/bootstrap/assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="${ctxStatic}/bootstrap/assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
<link href="${ctxStatic}/bootstrap/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css"/>
<!-- END GLOBAL MANDATORY STYLES -->
<!-- BEGIN THEME STYLES -->
<link href="${ctxStatic}/bootstrap/assets/global/css/components.css" id="style_components" rel="stylesheet" type="text/css"/>
<link href="${ctxStatic}/bootstrap/assets/global/css/plugins.css" rel="stylesheet" type="text/css"/>
<link href="${ctxStatic}/bootstrap/assets/admin/layout3/css/layout.css" rel="stylesheet" type="text/css"/>
<link href="${ctxStatic}/bootstrap/assets/admin/layout3/css/themes/darkblue.css" rel="stylesheet" type="text/css" id="style_color"/>
<link href="${ctxStatic}/bootstrap/assets/admin/layout3/css/custom.css" rel="stylesheet" type="text/css"/>
<!-- END THEME STYLES -->
<link href="${ctxStatic}/common/ysframe.css" rel="stylesheet" type="text/css">
</head>
<body>
<%@include file="/WEB-INF/views/include/header.jsp" %>
<div class="ys_centerBox">
    <div id="rightMain" class="ys_rightBox">
		    <div id="pageContainer" class="pageContainer">
		    	<div id="page_tab_0" class="page" data-src="${pageContext.request.contextPath}/wms/index#/myTask">

		    	</div>
		    </div>
    </div>
</div>
<!--底部-->
<!-- BEGIN FOOTER -->
<%@include file="/WEB-INF/views/include/footer.jsp" %>
<!-- END FOOTER -->



<script src="${ctxStatic}/bootstrap/assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="${ctxStatic}/bootstrap/2.3.1/js/bootstrap.min.js" type="text/javascript"></script>

<script src="${ctxStatic}/common/ys-frame.js" type="text/javascript"></script>
<script src="${ctxStatic}/common/spin.min.js" type="text/javascript"></script>
<script src="${ctxStatic}/bootstrap/assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="${ctxStatic}/bootstrap/assets/admin/layout3/scripts/layout.js" type="text/javascript"></script>
<script src="${ctxStatic}/bootstrap/assets/admin/layout3/scripts/quick-sidebar.js" type="text/javascript"></script>
<script src="${ctxStatic}/bootstrap/assets/admin/layout3/scripts/demo.js" type="text/javascript"></script>
<script type="text/javascript">

//框架初始化
$(document).ready(function(){
		
	YSFrame.init();
	YSFrame.resizeWindow();
	$(window).resize(function(){
	YSFrame.resizeWindow();
	});
	
	
	$.get("/ys-web-wms/a/sys/menu/treeapprootmenu", function(data){
		if (data.indexOf("id=\"loginForm\"") != -1){
			alert('未登录或登录超时。请重新登录，谢谢！');
			top.location = "${ctx}";
			return false;
		}
		$("#navul").empty();
		$("#navul").append(data);
		Layout.init();
	});
});
</script>
</body>
</html>
