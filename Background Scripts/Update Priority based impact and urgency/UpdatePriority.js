 var condition = "impact=1^urgency=1";

    var gr = new GlideRecord('incident');
    gr.addEncodedQuery(condition);
    gr.query();
    while (gr.next()) {

        gr.priority = 1;
        gr.update();
        gs.log("Updated incident: " + gr.number + " - New Priority: High");
    }
