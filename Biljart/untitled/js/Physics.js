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

function newCollide(ball1, ball2)
{
    a = ball1.position.x - ball2.position.x;
    b = ball1.position.z - ball2.position.z;
    ab = Math.sqrt((a * a) + (b * b));

    if(ab < 1)
    {
        //sphere en sphere2 collide
        /*ball1.speedX = ((ball1.speedX * (1-1)+(2*1*ball2.speedX))/(1+1));
        ball1.speedZ = ((ball1.speedZ * (1-1)+(2*1*ball2.speedZ))/(1+1));
        ball2.speedX = ((ball2.speedX * (1-1)+(2*1*ball1.speedX))/(1+1));
        ball2.speedZ = ((ball2.speedZ * (1-1)+(2*1*ball1.speedZ))/(1+1));*/
        tempx = ball1.speedX;
        ball1.speedX = ball2.speedX;
        ball2.SpeedX = tempx;

        tempz = ball1.speedZ;
        ball1.speedZ = ball2.speedZ;
        ball2.speedZ = tempz;
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