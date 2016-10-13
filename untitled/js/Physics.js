/**
 * Created by JaimyBeima on 11-10-2016.
 */

function collide (Box1, Box2, Ball1, Ball2) {
    if (Box1.box.isIntersectionBox(Box2.box)){
        //Speed transfer
        tempx = Ball1.SpeedX;
        Ball1.SpeedX = Ball2.SpeedX;
        Ball2.SpeedX = tempx;

        tempz = Ball1.SpeedZ;
        Ball1.SpeedZ = Ball2.SpeedZ;
        Ball2.SpeedZ = tempz;
    }
}

function collideWall (Ball){
    if(Ball.position.x >= 6.5 || Ball.position.x <= -6.5){
        Ball1.speedX *= -1;
    }

    if(Ball.position.z >= 11.75 || Ball.position.z <= -11.75){
        Ball.speedZ *= -1;
    }
}

function slowDown (Ball){
    if(Ball.speedX > 0 || Ball.speedZ > 0 || Ball.speedX < 0 || Ball.speedZ < 0){
        Ball.speedX *= 0.980;
        Ball.speedZ *= 0.980;
    }
    if(Ball.speedX >= -0.0005 && Ball.speedX <= 0.0005){
        Ball.speedX = 0;
    }
    if(Ball.speedZ >= -0.0005 && Ball.speedZ <= 0.0005){
        Ball.speedZ = 0;
    }
}