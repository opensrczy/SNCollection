// NOTE : Disable this BR after your investigation as it generate large number of log statements

//Create Business Rule on table with specific condition on which you need to print stackTrace.

(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	gs.log(" >>> STACKTRACE: Accessing table: " + current.getTableName() + " - StackTrace to follow! <<<"+_dumpStackTrace(),current.sys_id);
 
function _dumpStackTrace(){ 
try { 
throw new Packages.java.lang.Throwable();
} catch (e) { 
return e + ":\n" + GlideLog.getStackTrace(e);
} 
}

})(current, previous);
