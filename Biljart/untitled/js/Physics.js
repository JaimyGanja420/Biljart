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
        var collisionPointX = (ball1.position.x + ball2.position.x)/2;
        var collisionPointZ = (ball1.position.z + ball2.position.z)/2;

        ball1.directionX = (collisionPointX - ball1.position.x)*-1;
        ball2.directionX = (collisionPointX - ball2.position.x)*-1;

        ball1.directionZ = (collisionPointZ - ball1.position.z)*-1;
        ball2.directionZ = (collisionPointZ - ball2.position.z)*-1;

        ball2.speed = ball1.speed;
        ball1.speed *= 0.8;

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
        Ball.speed *= 0.98;
    }
    if(Ball.speed >= -0.00005 && Ball.speed <= 0.00005){
        Ball.speed = 0;
    }
}