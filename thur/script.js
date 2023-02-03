//priests database
class Priests {
    constructor(priestName, PriestRole, priestParish) {
        this.priestName = priestName;
        this.PriestRole = PriestRole;
        this.priestParish = priestParish;
    }

    //low level functions
    displaypriestName() {
        console.log(this.priestName);
    }

    addPriestbyName(newPriest) {
        this.priestName = newPriest;
    }

    //

    displaypriestRole() {
        console.log(this.PriestRole);
    }

    addPriestRole(newRole) {
        this.PriestRole = newRole;
    }

    //
    displaypriestParish() {
        console.log(this.priestParish);
    }

    assignParish(parishName) {
        this.priestParish = parishName;
    }
}


