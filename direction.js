Battleship.prototype.changeDirection = function (key) {

    // Set Data attribute
    this.ship.dataset.direction = key;

    // Rotate Function
    var shipRotate = function (element, angle) {
        element.currentAngle = angle + (element.currentAngle);
        element.ship.style.webkitTransform = "rotate("+element.currentAngle+"deg)"
    };

    // From different init position rotate on different angle
    if (this.shipDirection == "down") {
        if (key == "up") {shipRotate(this, 180);}
        else if (key == "left") {shipRotate(this, 90);}
        else if (key == "right") {shipRotate(this, -90);}
    } else if (this.shipDirection == "up") {
        if (key == "down") {shipRotate(this, -180);}
        else if (key == "left") {shipRotate(this, -90);}
        else if (key == "right") {shipRotate(this, 90);}
    } else if (this.shipDirection == "left") {
        if (key == "down") {shipRotate(this, -90);}
        else if (key == "up") {shipRotate(this, 90);}
        else if (key == "right") {shipRotate(this, 180);}
    } else if (this.shipDirection == "right") {
        if (key == "down") {shipRotate(this, 90);}
        else if (key == "up") {shipRotate(this, -90);}
        else if (key == "left") {shipRotate(this, -180);}
    }

    // Change init ship direction
    this.shipDirection = key;
    // window.getComputedStyle(this.ship, null)["width"]
    // window.getComputedStyle(this.ship, null)["height"]
    // this.ship.offsetLeft+"-"+this.ship.offsetTop
    // this.ship.offsetLeft+"-"+this.ship.offsetLeft

    console.log(parseInt(window.getComputedStyle(this.ship, null)["width"])/2);

//    var getRight = this.ship.style.right;
//    if (getRight == "") {
//        getRight = "0";
//    }
//    -webkit-transform: translate(0, 200px);
//    this.baseLocation.ship.dataset.position = key

    var timeout = 3000;
    var timer = setTimeout(function () {

    }, timeout);

//    var getRightMatch = getRight.match(/\d\d*/);
//    this.baseLocation.ship.style.right = (-getRightMatch[0] - 10)+"px";

};