# Mimic Me OxfordHacks 
### Inspiration
We always find oursleves running into situatons which could easliy be resolved by a dance battle alas there has been no easy, portable solution...UNITL NOW!!!

No seriously, our team member Ed found the paper written on Densepose by Facebook and thought this would be a cool implementation. 

### What it does
Mimic Me takes short, 10 second video of Player A doing a dance then, when ready Player B tries their best to mimic the dance. We then analyse the differences using our pipeline which contains various machine learning and image processing algorithms which are utilised by our A.I.

## How we built it
We created the frontend using ReactJS. For our backend we used a Flask REST API to connect the data sent from our front end to our pipeline. Then we pass our data through OpenCV, some custom functions utilising NumPy and of course Densepose.

## Challenges we ran into
Getting an unknown, new pipeline up and running can always be a challenge.

## Accomplishments that we're proud of
We are proud that we managed to get a product up and running using a new pipeline and hopefully making a few people smile along the way. 

## What we learned
We learned a lot about working with images on both the front and back end. We also learnt that version control is not always out to **git** you.

## What's next for Mimic Me
We hope to speed up the response time by optimising our pipeline. 
We also hope to improve the overall user experience  
Sometime between now and when our AI Overlords enslave us, we hope to implement the ability for non-local play.  
