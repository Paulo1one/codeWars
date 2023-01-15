package fourthKiu.rectangleRotation

import java.lang.Math.*
import kotlin.math.abs

fun rectangleRotation(h: Int, b: Int): Int {
    var counter = 0
    val angle = 45.00
    val point1: List<Double> = rotate(-b / 2, h / 2, angle)
    val point2: List<Double> = rotate(b / 2, h / 2, angle)
    val point3: List<Double> = rotate(b / 2, -h / 2, angle)
    val point4: List<Double> = rotate(-b / 2, -h / 2, angle)
    counter = pointSelector(point1, point2, point3, point4, b, h)
    return counter
}

fun pointSelector(
    point1: List<Double>, point2: List<Double>, point3: List<Double>, point4: List<Double>, b: Int, h: Int
): Int {
    val minX = min(min(point1[0], point2[0]), min(point3[0], point4[0]))
    val minY = min(min(point1[1], point2[1]), min(point3[1], point4[1]))
    val maxX = max(max(point1[0], point2[0]), max(point3[0], point4[0]))
    val maxY = max(max(point1[1], point2[1]), max(point3[1], point4[1]))
    var limitCounter = 0
    val indexX = minX.toString().indexOf(".")
    var initialX = minX.toString().substring(0, indexX).toInt()
    var counter = 0
    checkUpOrDown(initialX, minY, maxX, maxY, point1, point2, point3, point4, b, h)
    /*var initialY = 0
    while (initialX < maxX) {
        while (limitCounter < 2) {
            //location y up
            initialY = 0
            while (initialY.toDouble() <= maxY) {
                if (checkLocation(
                        initialX, initialY, point1, point2, point3, point4, b, h
                    )
                ) {

                    counter++
                }
                initialY++
            }
            limitCounter++
            initialY = -1
            //location y down
            while (initialY.toDouble() >= minY) {
                if (checkLocation(
                        initialX, initialY, point1, point2, point3, point4, b, h
                    )
                ) {
                    counter++
                }
                initialY--
            }
            limitCounter++
        }
        limitCounter = 0
        initialX++
    }*/
    println("$counter")
    return counter
}

fun checkUpOrDown(
    initialX: Int,
    minY: Double,
    maxX: Double,
    maxY: Double,
    point1: List<Double>,
    point2: List<Double>,
    point3: List<Double>,
    point4: List<Double>,
    b: Int,
    h: Int
) {
    val indexY = minY.toString().indexOf(".")
    var initialY = minY.toString().substring(0, indexY).toInt()
    if(checkLocation(b,h,point1,point2,point3,point4,initialX,initialY)){

    }
}

fun checkLocation(
    b: Int,
    h: Int,
    point1: List<Double>,
    point2: List<Double>,
    point3: List<Double>,
    point4: List<Double>,
    sideX: Int,
    sideY: Int
): Boolean {
    val areaTotal: Double = ((sideX).toDouble() * (sideY).toDouble())
    val area1 = area(b.toDouble(), h.toDouble(), point1[0], point1[1], point2[0], point2[1])
    val area2 = area(b.toDouble(), h.toDouble(), point2[0], point2[1], point3[0], point3[1])
    val area3 = area(b.toDouble(), h.toDouble(), point3[0], point3[1], point4[0], point4[1])
    val area4 = area(b.toDouble(), h.toDouble(), point1[0], point1[1], point4[0], point4[1])
    return when (areaTotal == "%.3f".format(area1 + area2 + area3 + area4).toDouble()) {
        true -> true
        false -> false
    }
}

fun area(x1: Double, y1: Double, x2: Double, y2: Double, x3: Double, y3: Double): Double {
    return abs(
        (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0
    );
}

fun rotate(b: Int, h: Int, deg: Double): List<Double> {
    val degree = toRadians(deg)
    val b1 = cos(degree) * b.toDouble() - sin(degree) * h.toDouble()
    val h1 = sin(degree) * b.toDouble() + cos(degree) * h.toDouble()
    return listOf(b1, h1)
}