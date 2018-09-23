#!/bin/bash

for i in {1..59}
do  
	fswebcam -r 1280x720 --no-banner /home/pi/etu/input.jpg
	sleep 1
done