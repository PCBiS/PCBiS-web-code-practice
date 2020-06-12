function Rectangle(w, h) {
    var width = w;
    var height = h;

    this.getArea = function() {
        return width * height;
    }

    this.getWidth = function() {
        return width;
    }

    this.getHeight = function() {
        return height;
    }

    this.setWidth = function(w) {
        width = w;
    }

    this.setHeight = function(h) {
        height = h;
    }

}

var result1 = new Rectangle(10, 3);
alert(result1.getArea());
result1.setWidth(7);
alert(result1.getArea());