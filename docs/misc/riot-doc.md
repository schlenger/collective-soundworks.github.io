# R-IoT / Smartphone compatibility specifications

The aim here is to specify smartphone's axes and units from the accelerometer and gyroscope data, and to normalize R-IoT data to the same conventions.

## Smartphone's motion formats

> Smartphone's precise specifications can be found here : [https://www.w3.org/TR/orientation-event/#introduction](https://www.w3.org/TR/orientation-event/#introduction).

From the *deviceMotionEvent* , we can get the **accelerationIncludingGravity** and **rotationRate**.
The axes are set such as, with the phone held on the vertical, screen side up, x and y axis are both in the same plane, the fist going towards the right, and the latter going up, and the z axis perpendicular to the screen.

![alt text][smartphone-axes]

The **accelerationIncludingGravity** return 3 floats, one for each axis, and is expressed in m/s2, bewteen -9.81 and 9.81.
For example, if the phone is sitting flat on a table, screen side up, the acceleration would be [0, 0, 9.81].

As for the **rotationRate**, it also returns 3 floats for each angular velocity, in °/sec, ranging from ??? to ???.
The variable **alpha** represents the rotation angle around the the z axis, **beta** around the x axis, and **gamma** around the y axis.

TODO : IMAGE : les rotations autour des axes
![alt text][alpha-rotation]
![alt text][beta-rotation]
![alt text][gamma-rotation]

## R-IoT

> See the R-IoT manual : [https://bitalino.com/docs/MANUAL_RIOT_V1.2.pdf](https://bitalino.com/docs/MANUAL_RIOT_V1.2.pdf).

By default, the acceleration and rotation data from the R-IoT ranges between -1 and 1, expressed in m/s2 and °/sec, respectively.

As for the axes, by default they are as follows :

TODO : IMAGE : R-IoT dans son sens par défaut similaire au smartphone
![alt text][riot-default]

However, we decided that we would change the axes so that the R-IoT indication on the sensor is legible.

TODO : IMAGE : R-IoT avec le signe R-IoT à l'endroit : entouré R-IoT
![alt text][riot-normalized]

Taking into account the changing of the axes, and the normalization into the same format as smartphones, the R-IoT's acceleration data thus must be changed as follows :

``` js
var tmp_x = x;

x = 9.81 * y;
y = -9.81 * tmp_x;
z = 9.81 * z;
```

![alt text][logo]


[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

[smartphone-axes]:
[alpha-rotation]:
[beta-rotation]:
[gamma-rotation]:
[riot-default]:
[riot-normalized]:

