/**
 * Created by JaimyBeima on 11-10-2016.
 */

function collide (Ball1, Ball2, box1, box2) {
    if (box1.box.intersectsBox(box2.box)){
        console.log("collision");
        //Speed transfer
       // Ball1.speedX *= -1;
       // Ball1.speedZ *= -1;
        tempx = Ball1.speedX;
        Ball1.speedX = Ball2.speedX;
        Ball2.SpeedX = tempx;

        tempz = Ball1.speedZ;
        Ball1.speedZ = Ball2.speedZ;
        Ball2.speedZ = tempz;
    }
}

function collideWall (Ball1){
    if(Ball1.position.x >= 6.5 || Ball1.position.x <= -6.5){
        Ball1.speedX *= -1;
    }

    else if(Ball1.position.z >= 11.75 || Ball1.position.z <= -11.75){
        Ball1.speedZ *= -1;
    }
}

function slowDown (Ball){
    if(Ball.speedX > 0 || Ball.speedZ > 0 || Ball.speedX < 0 || Ball.speedZ < 0){
        Ball.speedX *= 0.980;
        Ball.speedZ *= 0.980;
    }
    if(Ball.speedX >= -0.00005 && Ball.speedX <= 0.00005){
        Ball.speedX = 0;
    }
    if(Ball.speedZ >= -0.0005 && Ball.speedZ <= 0.00005){
        Ball.speedZ = 0;
    }
}