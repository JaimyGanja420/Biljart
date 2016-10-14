/**
 * Created by Frank Keuning on 11-10-2016.
 */


function newCollide(ball1, ball2)
{
    a = ball1.position.x - ball2.position.x;
    b = ball1.position.z - ball2.position.z;
    ab = Math.sqrt(((a * a) + (b * b)));

    if(ab < 1)
    {
        console.log("collision");
        ball2.directionX = ball1.directionX;
        ball2.directionZ = ball1.directionZ;
        ball2.speed = ball1.speed;
        ball1.speed *= -0.4;

        ball1.position.x += ball1.directionX * ball1.speed;
        ball1.position.z += ball1.directionZ * ball1.speed;
        ball2.position.x += ball2.directionX * ball2.speed;
        ball2.position.z += ball2.directionZ * ball2.speed;
    }
}

function collideWall (Ball1){
    if(Ball1.position.x >= 6.5 || Ball1.position.x <= -6.5){
        Ball1.directionX *= -1;
    }

    else if(Ball1.position.z >= 11.75 || Ball1.position.z <= -11.75){
        Ball1.directionZ *= -1;
    }
}

function slowDown (Ball){
    if(Ball.speed > 0 || Ball.speed < 0){
        Ball.speed *= 0.97;
    }
    if(Ball.speed >= -0.00005 && Ball.speed <= 0.00005){
        Ball.speed = 0;
    }
}