/**
 * Created by JaimyBeima on 11-10-2016.
 */

function collide (Ball1, Ball2) {
    if (Ball1.bbox.box.isIntersectionBox(Ball2.bbox.box)){
        //Speed transfer
        tempx = Ball1.SpeedX;
        Ball1.SpeedX = Ball2.SpeedX;
        Ball2.SpeedX = tempx;

        tempz = Ball1.SpeedZ;
        Ball1.SpeedZ = Ball2.SpeedZ;
        Ball2.SpeedZ = tempz;
    }
}

function collideWall (Ball1, Ball2){
    if(Ball1.position.x >= 6.5 || Ball1.position.x <= -6.5){
        whiteBall.speedX *= -1;
    }

    if(Ball1.position.z >= 11.75 || Ball1.position.z <= -11.75){
        whiteBall.speedZ *= -1;
    }

    if(Ball2.position.x >= 6.5 || Ball2.position.x <= -6.5){
        redBall1.speedX *= -1;
    }

    if(Ball2.position.z >= 11.75 ||Ball2.position.z <= -11.75){
        redBall1.speedZ *= -1;
    }
}

function slowDown (Ball){
    if(Ball.speedX > 0 || Ball.speedZ > 0){
        Ball.speedX *= 0.980;
        Ball.speedZ *= 0.980;
    }
}