/**
 * Created by JaimyBeima on 11-10-2016.
 */

function colllide (Box1, Box2) {
    if (Box1.box.isIntersectionBox(Box2.box)){
        tempx = Box1;
        Box1 = Box2;
        Box2 = tempx;

        tempz = wBSZ;
        wBSZ = r1BSZ;
        r1BSZ = tempz;
    }

}