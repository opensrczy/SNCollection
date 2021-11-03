//NOTE: Please make sure to disable your stack trace Business rule after investigation as it generate large number of log statements.

//The script include "StackTrace" must have the "Accessible From" option set to "From all scopes":

var StackTrace = Class.create();
StackTrace.get = function() {
   return GlideLog.getStackTrace(new Packages.java.lang.Throwable());
};


// The business rule is then modified as follows, note the change to use gs.info, which can be used from all scopes, from gs.log which is also global only:

(function executeRule(current, previous /*null when async*/) {
// Add your code here
gs.info('***** DEBUG - op:'+ current.operation() + ", sess:" + gs.getSessionID() + ", time:" + new Date().getTime() + ', sys_id:' + current.sys_id + ' - \n' + global.StackTrace.get(), 'Stacktrace Debug');
})(current, previous);