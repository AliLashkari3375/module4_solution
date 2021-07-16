var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jack";
names[3]="jason";
names[4]="Bobe";
names[5]="Frank";
names[6]="larry";
names[7]="paula";
names[8]="Ali";
names[9]="jimy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}