const createXMLWithJobId = (jobId) => {
	let xmlData = "<?xml version = '1.0' encoding='UTF-8' standalone='yes'?>\n"+
		"<CmplInstance version='1.0'>\n"+
		"<general>\n"+
		"<name>diet.cmpl</name>\n"+
		"<jobId>"+jobId+"</jobId>\n"+
		"</general>\n"+
		"<problemFiles>\n"+
		"<file name='diet.cmpl' type='cmplMain'>\n"+
		"%data cmplData—diet.cdat\n"+
		"#%data : NUTR set, FOOD set, costs[FOOD], vitamin[NUTR,FOOD], vitMin[NUTR]\n"+
		"variables:\n"+
			"x[FOOD]: integer[2..10];\n"+
		"objectives:"+
			"cost: costs[]T * x[]-&gt;min;\n"+
		"constraints:\n"+
			"vit: vitamin[,] * x[] &gt;= vitMin[]  ;\n"+
		"</file>\n"+
		"<file name='cmplData—diet.cdat' type='cmplData'>\n"+
		"%NUTR set &lt;\n"+
		"'A'\n"+
		"'B1'\n"+ 
		"'B2'\n"+
		"'C'\n"+
		"&gt;\n"+
		"%FOOD set &lt;\n"+
		"'BEEF'\n"+
		"'CHK'\n"+
		"'FISH'\n"+ 
		"'HAM'\n"+
		"'MCH'\n"+
		"'MTL'\n"+
		"'SPG'\n"+
		"'TUR'\n"+
		"&gt;\n"+
		"%costs[FOOD]  &lt;\n"+
		"3.19\n"+
		"2.59\n"+
		"2.29\n"+
		"2.89\n"+
		"1.89\n"+
		"1.99\n"+
		"1.99\n"+
		"2.49\n"+
		"&gt;\n"+
		"%vitMin[NUTR]  &lt;\n"+
		"700\n"+
		"700\n"+
		"700\n"+
		"700\n"+
		"&gt;\n"+
		"%vitamin[NUTR,FOOD]  &lt;\n"+
		"60 8 8 40 15 70 25 60\n"+
		"20 0 10 40 35 30 50 20\n"+ 
		"10 20 15 35 15 15 25 15\n"+ 
		"15 20 10 10 15 15 15 10\n"+
		"&gt;\n"+
		"</file>\n"+
		"</problemFiles>\n"+
		"</CmplInstance>\n";

		return xmlData;
}

exports.createXMLWithJobId = createXMLWithJobId;