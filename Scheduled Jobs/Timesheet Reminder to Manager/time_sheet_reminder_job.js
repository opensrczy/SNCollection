var ga = new GlideAggregate('time_sheet_exception');
ga.addEncodedQuery('stateINPending,Submitted,Rejected,Not_Submitted^week_starts_onONLast week@javascript:gs.beginningOfLastWeek()@javascript:gs.endOfLastWeek()');
ga.addAggregate('count','user.manager'); 
ga.query();
while(ga.next())
{
gs.eventQueue('timesheet.manager',current,ga.getValue('user.manager'),ga.getValue('user.manager'));
}
