function Battleship(type, affiliation, weapon) {
    this.matherial = "steel";
    this.type = type;
    this.enviroment = "air";
    this.pilot = "humanoides";
    this.ammo = null;
    this.volume = 100;
    this.speed = 3000;
    this.affiliation = affiliation;
    this.weapon = weapon;
    this.quolityControllGood = 85;
    this.health = 100;
    this.design = "img/constructor.png";
    this.shipDirection = "down";
    this.currentAngle = 0;

    var point = 0;
    function quolityControll (needPoint) {
        if (this.speed > 3000) point += 30;
        if (this.ammo > 500) point += 30;
        if (this.pilot == null) point -= 1000;
        if (this.health > 90) point += 10;
        return needPoint > point;
    }

    this.getQuolityPoint = quolityControll (this.quolityControllGood);

    this.baseLocation = {
        "dom":document.getElementById('base')
    };

    if (this.baseLocation.dom != undefined) {
        var ship = this.baseLocation.dom.firstChild;
        if (ship != undefined) {
            if (ship.nodeType != 1) {
                ship = ship.nextSibling;
            }
            if (ship.tagName.toLowerCase() == "img") {
                this.ship = ship;
                ship.src=this.design;
                console.log("Your ship is on the base");
            } else {
                console.log("Could not find place in base");
            }
        }
    }

    var that = this;
    var keyPress;

    var keyPresHandler = function (e) {
        if (e.keyCode == 37) {
            keyPress = "left"
        } else if (e.keyCode == 38) {
            keyPress = "up"
        } else if (e.keyCode == 39) {
            keyPress = "right"
        } else if (e.keyCode == 40) {
            keyPress = "down"
        } else {
            keyPress = null;
        }
        if (keyPress != null) {
            that.changeDirection(keyPress);
        }
    };

    if (ship != undefined) {
        window.addEventListener("keydown", keyPresHandler);
    }

}

Battleship.prototype.aim = function (target) {
    return targetConfirm(target);
};

Battleship.prototype.fire = function (target) {
    return this.ammo != null;
};

var XWingFighter = new Battleship(
    "military", "Rebel Alliance",
    ["Laser cannons", "Proton torpedo launchers"]
);

XWingFighter.volume = 20;
XWingFighter.ammo = 1800;
XWingFighter.speed= 346366753;

XWingFighter.color= 346366753;
XWingFighter.engineer= "Zabrak";
XWingFighter.droid= null;
XWingFighter.quolityControllGood = 50;

XWingFighter.weapon.push("Twin laser cannons");

XWingFighter.droidReparing = function (droid) {
    if (arguments.length > 1) {
        // "this is group of droids";
    } else {
        // "this is 1 droid";
    }
};

console.log(XWingFighter);

var lukeShip555 = Object.create(XWingFighter);